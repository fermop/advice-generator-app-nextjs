export interface AdviceData {
  id: number;
  advice: string;
}

export const getAdvice = async (): Promise<AdviceData> => {
  const response = await fetch(`https://api.adviceslip.com/advice?timestamp=${Date.now()}`);
  const data = await response.json();
  return data.slip;
};