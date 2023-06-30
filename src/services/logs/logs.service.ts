import { Feeling, Env, Log } from './logs.context'
import { API_URL } from '../../../env';
import { fetchWithBearer } from '../auth/auth.service';
import camelize from 'camelize-ts';

export const getFeelings = async (): Promise<Feeling[]> => {
  const res = await fetch(`${API_URL}/feelings`);
  return res.json();
};

export const getEnvs = async (): Promise<Env[]> => {
  const res = await fetch(`${API_URL}/environments`);
  return res.json();
};

export const createOne = async (log: { feeling: number, environment: number }) => {
  const res = await fetchWithBearer(`${API_URL}/logs`, {
    method: 'POST',
    body: JSON.stringify(log),
    headers: {'Content-Type': 'application/json'}
  });

  return res.json();
};

export const getAll = async () => {
  const res = await fetchWithBearer(`${API_URL}/logs`);
  const logs = await res.json();
  return logs.map((log: Log) => camelize<Log, false>(log));
};