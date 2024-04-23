/** everyOther: return a string with every other letter. */

function everyOther(str: string): string {
  // return "x";
  if (str.length <= 1) {
    return str;
  }

  return str[0] + everyOther(str.slice(2));
}

export { everyOther };

