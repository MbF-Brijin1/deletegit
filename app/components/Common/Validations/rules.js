const extract = (str, pattern) => (str.match(pattern) || []).pop() || '';

// Alpha only
export function alphaOnly(str) {
  return extract(str, '[a-zA-Z][\\sa-zA-Z]{0,50}');
}

// Nospace at the begining
export function noSpaceBegining(str) {
  return extract(str, '[a-zA-Z0-9][\\sa-zA-Z0-9_@./#&+,-]{0,}');
}
