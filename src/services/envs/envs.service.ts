import { Env } from './envs.context'

export const envsRequest = (): Promise<Env[]> => {
  return new Promise((resolve, reject) => {
    const mock: Env[] = [
      { ID: 1, name: 'at work' },
      { ID: 2, name: 'outdoors' },
      { ID: 3, name: 'exercising' },
      { ID: 4, name: 'downtime' },
      { ID: 5, name: 'with family' }
    ];

    if (!mock) {
      reject("not found");
    }

    resolve(mock);
  });
};