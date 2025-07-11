export type ModifyTextFieldVariant = 'subGoal' | 'todo';

export interface ModifyTextFieldProps {
  variant?: ModifyTextFieldVariant;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  onBlur?: () => void;
  onFocus?: () => void;
}
