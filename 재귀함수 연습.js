function unpackGiftbox(giftBox, wish) {
  for (i = 0; i < giftBox.length; i++) {
    if (giftBox[i] === wish) return true;
    else if (Array.isArray(giftBox[i])) {
      const result = unpackGiftbox(giftBox[i], wish);
      if (result === true) return true;
    }
  }
  return false;
}

function unpackGiftbox(giftBox, wish) {
  // recursive case
  for (let i = 0; i < giftBox.length; i++) {
    if (giftBox[i] === wish) {
      return true;
    } else if (Array.isArray(giftBox[i])) {
      const result = unpackGiftbox(giftBox[i], wish);
      if (result === true) {
        return true;
      }
    }
  }

  // base case
  return false;
}
let giftBox = ["macbook", "mugcup", ["eyephone", "postcard"], "money"];

let output = unpackGiftbox(giftBox, "iphone");
console.log(output); // --> false

output = unpackGiftbox(giftBox, "postcard");
console.log(output); // --> true

giftBox = ["macbook", "mugcup", ["eyephone", "postcard"], "money"];

output = unpackGiftbox(giftBox, "iphone");
console.log(output); // --> false

output = unpackGiftbox(giftBox, "postcard");
console.log(output); // --> true
