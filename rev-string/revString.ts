/** revString: return a copy of a string, but in reverse. */

function revString(str: string): string {
  if (str.length < 1) {
    return "";
  }

  return revString(str.slice(1)) + str[0];
}

export {revString};
