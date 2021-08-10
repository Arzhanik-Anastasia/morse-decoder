const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let arr = [];
  let arrAll = expr.split("");
  for (let i = 0; i < expr.length; i++) {
    let symbol = arrAll.slice(0, 10).join("");
    arr.push(symbol);
    arrAll.splice(0, 10);
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "**********") {
      arr[i] = " ";
    } else {
      arr[i] = arr[i]
        .replace(/00/g, "")
        .replace(/10/g, ".")
        .replace(/11/g, "-");
      arrAll.push(arr[i]);
    }
  }
  for (const [key, value] of Object.entries(MORSE_TABLE)) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == key) {
        arr[i] = value;
      }
    }
  }
  return arr.join("");
}

module.exports = {
  decode,
};
