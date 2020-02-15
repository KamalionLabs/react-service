export const formatDate = (data: string) =>
  data.replace(new RegExp("/", "g"), ".");
