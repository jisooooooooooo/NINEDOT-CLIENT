export function formatBirthDate(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 8);
  if (digits.length < 5) {
    return digits;
  }
  if (digits.length < 7) {
    return `${digits.slice(0, 4)}-${digits.slice(4)}`;
  }
  return `${digits.slice(0, 4)}-${digits.slice(4, 6)}-${digits.slice(6)}`;
}
