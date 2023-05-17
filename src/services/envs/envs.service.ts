import { Env } from './envs.context';
import { API_URL } from '../../../env';

export const getEnvs = async (): Promise<Env[]> => {
  const res = await fetch(`${API_URL}/environments`);
  return res.json();
}