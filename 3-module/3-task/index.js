/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  const cammelizedStr =
    str[0] === "-"
      ? `${str[1].toUpperCase()}${str.substr(2)}`
      : str;

  return cammelizedStr
    .split("-")
    .map((path, i) => i !== 0 ? `${path[0].toUpperCase()}${path.substr(1)}` : path)
    .join("");
}
