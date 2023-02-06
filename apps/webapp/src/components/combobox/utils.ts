export interface Option {
  id: number;
  label: string;
}

export const isOption = <T extends Option>(value: string | T): value is T =>
  typeof value !== 'string';

export const getLabel = <T extends Option>(value: string | T) =>
  isOption(value) ? value.label : value;

export const getId = <T extends Option>(value: string | T) =>
  isOption(value) ? value.id : value;
