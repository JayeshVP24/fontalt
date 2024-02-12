import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function selectRandomItems(arr, numberOfItems) {
  if (arr.length <= numberOfItems) {
    return arr;
  } else {
    let result = [];
    let indicesSelected = /* @__PURE__ */ new Set();
    while (result.length < numberOfItems) {
      let randomIndex = Math.floor(Math.random() * arr.length);
      if (!indicesSelected.has(randomIndex)) {
        indicesSelected.add(randomIndex);
        result.push(arr[randomIndex]);
      }
    }
    return result;
  }
}
async function createMapFromJson(jsonData) {
  console.log("start start");
  return new Map(Object.entries(jsonData));
}
export {
  cn as a,
  createMapFromJson as c,
  selectRandomItems as s
};
