export type SignupTextFieldType = 'name' | 'email' | 'birth';

export interface SignupTextFieldProps {
  type: SignupTextFieldType;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  onBlur?: () => void;
  onFocus?: () => void;
  maxLength?: number;
}
