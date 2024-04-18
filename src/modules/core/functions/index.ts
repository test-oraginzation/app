export function checkEmptyStrings(...args: string[]): boolean {
  for (const str of args) {
    if (str === '') {
      return true;
    }
  }
  return false;
}
