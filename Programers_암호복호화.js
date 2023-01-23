function decryptCaesarCipher(str, secret) {
  // indexOf 함수는, 문자열(string)에서 특정 문자열(searchvalue)을 찾고, 검색된 문자열이 '첫번째'로 나타나는 위치 index를 리턴합니다.

  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  return [...str]
    .map((el) => {
      if (el === undefined) return "";
      else if (alphabet.indexOf(el) >= 0)
        return alphabet[alphabet.indexOf(el) - secret];
      else return alphabet[alphabet[el] - secret];
    })
    .join("");
}

let output = decryptCaesarCipher("khoor", 3);
console.log(output); // --> hello
