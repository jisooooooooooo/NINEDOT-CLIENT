export type TextFieldVariant = 'bigGoal' | 'subGoal' | 'todo';

export interface TextFieldProps {
  variant?: TextFieldVariant;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  maxLength?: number;
  disabled?: boolean;
}
