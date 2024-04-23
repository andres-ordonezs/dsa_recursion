/** gatherStrings: given an object, return array of all the string values. */

function gatherStrings(obj: Record<string, any>): string[] {
  const strs: string[] = [];

  function _gather(obj: Record<string, any>): void {
    for (let key in obj) {
      if (typeof obj[key] === "string") {
        strs.push(obj[key]);
      } else if (typeof obj[key] === "object") {
        _gather(obj[key]);
      }
    }
  }
  _gather(obj)
  return strs;
}

export { gatherStrings };

