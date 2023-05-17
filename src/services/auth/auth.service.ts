function addBearer(options: any) {
  const updatedOptions = { ...options };

  /* if(localStorage.jwt) {
    updatedOptions.headers = {
      ...updatedOptions.headers,
      Authorization: `Bearer ${localStorage.jwt}`,
    };
  } */

  updatedOptions.headers = {
    ...updatedOptions.headers,
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphbmUuZG9lQGdtYWlsLmNvbSIsImlkIjoxNywiaWF0IjoxNjg0MzIzNzkxfQ.WZzNVwRuBp9aMTL3yUU5mQPKhGG78ED1euIqY4nqmvg`,
  };

  return updatedOptions;
};

export function fetchWithBearer(url: string, options = {}) {
  return fetch(url, addBearer(options));
};