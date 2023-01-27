const entries: Record<string, string> = {};

export function getEntries() {
  return entries;
}

export function setEntrie(key: string, value: string) {
  entries[key] = value;
}
