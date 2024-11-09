interface IResponse {
  error: boolean,
  value: number
}

export function parseToNumber(text: string): IResponse {
  const number = Number(text);
  return {
    error: isNaN(number),
    value: number
  };
}