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

  const climateData = Papa.parse(climateRes, { header: true, skipEmptyLines: true }).data as any[];
  const peopleData = Papa.parse(peopleRes, { header: true, skipEmptyLines: true }).data as any[];
  const finesData = Papa.parse(finesRes, { header: true, skipEmptyLines: true }).data as any[];

  const getVal = (data: any[], metric: string, year: string) => {
    const row = data.find(r => r.Metric && r.Metric.trim().includes(metric));
    if (!row) return 0;
    const val = row[year];
    if (!val || val.trim() === '-' || val.trim() === 'N/A') return 0;
    // Remove quotes, spaces, commas, and percentage signs
    return parseFloat(val.replace(/[%"\s,]/g, '')) || 0;
  };

  return years.map(year => {
    const s1 = getVal(climateData, 'Scope 1', year);
    const s2 = getVal(climateData, 'Scope 2', year);
    
    return {
      year,
      scope1: s1,
      scope2: s2,
      // Scope 3 was not found in the provided actual data dump, 
      // using a placeholder 0 or we could omit it. 
      // For the chart to still show the "rebound risk" concept if needed, 
      // we'll keep it at 0 for now unless provided.
      scope3: 0, 
      womenPercentage: getVal(peopleData, 'Total workforce', year),
      fines: getVal(finesData, 'Environmental prosecutions', year),
    };
  });
};
