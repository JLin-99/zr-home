export function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    (txt) => txt[0].toUpperCase() + txt.substring(1).toLowerCase()
  );
}
