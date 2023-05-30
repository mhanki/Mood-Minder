export const formatDate = (
  date: string, 
  options?: Intl.DateTimeFormatOptions | undefined
) => new Date(date).toLocaleString('en-us', options);