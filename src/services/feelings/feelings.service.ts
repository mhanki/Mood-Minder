import { Feeling } from './feelings.context'

export const feelingsRequest = (): Promise<Feeling[]> => {
  return new Promise((resolve, reject) => {
    const mock: Feeling[] = [
      { ID: 1, name: 'absolutely horrible', rank: 1 },
      { ID: 2, name: 'bad', rank: 2 },
      { ID: 3, name: 'okay', rank: 3 },
      { ID: 4, name: 'very good', rank: 4 },
      { ID: 5, name: 'excellent', rank: 5 }
    ];

    if (!mock) {
      reject("not found");
    }

    resolve(mock);
  });
};