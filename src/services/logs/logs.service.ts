import { Feeling, Env } from './logs.context'
import { API_URL } from '../../../env';
import { fetchWithBearer } from '../auth/auth.service';

export const getFeelings = async (): Promise<Feeling[]> => {
  const res = await fetch(`${API_URL}/feelings`);
  return res.json();
};

export const getEnvs = async (): Promise<Env[]> => {
  const res = await fetch(`${API_URL}/environments`);
  return res.json();
};

export const addLog = async (log: { feeling: number, environment: number }) => {
  const res = await fetchWithBearer(`${API_URL}/logs`, {
    method: 'POST',
    body: JSON.stringify(log),
    headers: {'Content-Type': 'application/json'}
  });

  return res.json();
};