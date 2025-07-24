export const toUpperText = (cleanHeader: string) => {
  const headerText = cleanHeader[0]?.toUpperCase() + cleanHeader.slice(1);
  return headerText;
};
