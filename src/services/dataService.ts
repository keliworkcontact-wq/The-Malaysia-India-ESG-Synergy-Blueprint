import Papa from 'papaparse';

export interface ESGDataPoint {
  year: string;
  scope1: number;
  scope2: number;
  scope3: number;
  womenPercentage: number;
  fines: number;
}

export const fetchESGData = async (): Promise<ESGDataPoint[]> => {
  const years = ['FY 2020-21', 'FY 2021-22', 'FY 2022-23', 'FY 2023-24', 'FY 2024-25'];
  
  const [climateRes, peopleRes, finesRes] = await Promise.all([
    fetch('/data/hul-sustainability-performance-data-climate.csv').then(r => r.text()),
    fetch('/data/people-performance-metrics.csv').then(r => r.text()),
    fetch('/data/environmental-fines-and-prosecution.csv').then(r => r.text())
  ]);

  const climateData = Papa.parse(climateRes, { header: true }).data as any[];
  const peopleData = Papa.parse(peopleRes, { header: true }).data as any[];
  const finesData = Papa.parse(finesRes, { header: true }).data as any[];

  const getVal = (data: any[], metric: string, year: string) => {
    const row = data.find(r => r.Metric?.includes(metric) || r.Category?.includes(metric));
    if (!row) return 0;
    const val = row[year];
    return typeof val === 'string' ? parseFloat(val.replace(/,/g, '')) || 0 : val || 0;
  };

  return years.map(year => ({
    year,
    scope1: getVal(climateData, 'Scope 1', year),
    scope2: getVal(climateData, 'Scope 2', year),
    scope3: getVal(climateData, 'Scope 3', year),
    womenPercentage: getVal(peopleData, 'Total workforce', year),
    fines: getVal(finesData, 'Environmental prosecutions', year),
  }));
};
