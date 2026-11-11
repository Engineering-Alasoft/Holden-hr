export function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value).trim());
}

export function focusFirst(errors, order) {
  const first = order.find((key) => errors[key]);
  if (first) document.getElementById(first)?.focus();
}
