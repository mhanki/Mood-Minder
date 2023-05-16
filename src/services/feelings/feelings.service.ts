import { Feeling } from './feelings.context'
import { API_URL } from '../../../env';

export const getFeelings = async (): Promise<Feeling[]> => {
  const res = await fetch(`${API_URL}/feelings`);
  return res.json();
}