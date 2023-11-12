export function toTitleCase(string) {
  const titleCaseString = string.replace(/(^|\s)\S/g, function (t) {
    return t.toUpperCase();
  });

  return titleCaseString;
}
