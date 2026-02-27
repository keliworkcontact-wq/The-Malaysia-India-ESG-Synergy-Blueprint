import Papa from 'papaparse';

export interface ESGDataPoint {
  year: string;
  scope1: number | null;
  scope2: number | null;
  scope3: number | null;
  womenPercentage: number | null;
  fines: number;
  isForecast?: boolean;
}

const parseValue = (val: string | undefined): number | null => {
  if (!val || val.trim() === '' || val.toLowerCase().includes('not in source')) return null;
  
  const parts = val.split('|').map(p => p.trim());
  const numbers = parts.map(p => {
    // Extract base number
    const match = p.match(/[-+]?[0-9]*\.?[0-9]+/);
    if (!match) return NaN;
    
    let num = parseFloat(match[0]);
    if (p.toLowerCase().includes('million')) {
      num *= 1000000;
    }
    return num;
  }).filter(n => !isNaN(n));
  
  if (numbers.length === 0) return null;
  return Math.min(...numbers);
};

export const fetchESGData = async (): Promise<ESGDataPoint[]> => {
  // Chronological order for the chart
  const yearHeaders = ['FY_2020', 'FY_2021', 'FY_2022', 'FY_2023', 'FY_2024', 'FY_2024-25'];
  const displayLabels: { [key: string]: string } = {
    'FY_2020': 'FY 2019-20',
    'FY_2021': 'FY 2020-21',
    'FY_2022': 'FY 2021-22',
    'FY_2023': 'FY 2022-23',
    'FY_2024': 'FY 2023-24',
    'FY_2024-25': 'FY 2024-25'
  };
  
  const [table1Res, finesRes] = await Promise.all([
    fetch('/data/Table_1.csv').then(r => r.text()),
    fetch('/data/environmental-fines-and-prosecution.csv').then(r => r.text())
  ]);

  const table1Data = Papa.parse(table1Res, { header: true, skipEmptyLines: true }).data as any[];
  const finesData = Papa.parse(finesRes, { header: true, skipEmptyLines: true }).data as any[];

  const getRow = (data: any[], param: string) => {
    return data.find(r => r['ESG Parameter'] && r['ESG Parameter'].trim() === param);
  };

  const scope1Row = getRow(table1Data, 'GHG Emissions (Scope 1)');
  const scope2Row = getRow(table1Data, 'GHG Emissions (Scope 2)');
  const scope3Row = getRow(table1Data, 'GHG Emissions (Scope 3)');
  const genderRow = getRow(table1Data, 'Gender diversity in management');

  return yearHeaders.map(header => {
    // Fines data uses slightly different year format, mapping it
    const finesYearMap: { [key: string]: string } = {
      'FY_2020': 'FY 2019-20',
      'FY_2021': 'FY 2020-21',
      'FY_2021-22': 'FY 2021-22',
      'FY_2022': 'FY 2021-22',
      'FY_2023': 'FY 2022-23',
      'FY_2024': 'FY 2023-24',
      'FY_2024-25': 'FY 2024-25'
    };
    
    const finesRow = finesData.find(r => r.Metric && r.Metric.includes('Environmental prosecutions'));
    const finesVal = finesRow ? (parseFloat(finesRow[finesYearMap[header]] || '0') || 0) : 0;

    return {
      year: displayLabels[header],
      scope1: parseValue(scope1Row?.[header]),
      scope2: parseValue(scope2Row?.[header]),
      scope3: parseValue(scope3Row?.[header]),
      womenPercentage: parseValue(genderRow?.[header]),
      fines: finesVal,
    };
  });
};
