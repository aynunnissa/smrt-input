export function removeLeadingZeroAndNonDigit(str: string): string {
  return str.replace(/[^\d]+|^0+(?=\d)/g, '');
}