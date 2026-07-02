export interface CalcField {
  id: string;
  label: string;
  type: 'number' | 'range' | 'select';
  defaultValue: string | number;
  options?: string[];
  min?: number;
  max?: number;
  step?: number;
}

export interface Tool {
  id: string;
  title: string;
  description: string;
  category: string;
  primaryOutcome: string;
  fields?: CalcField[];
  calcFn?: (values: Record<string, any>) => any;
}

export interface Category {
  id: string;
  name: string;
  description: string;
}
