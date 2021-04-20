function caesarCipherEncryptor(string, key) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  string = string.split("");

  for (let i = 0; i < string.length; i++) {
    let letter = string[i];

    let newIndex = alphabet.indexOf(letter) + key;
    while (newIndex > 25) {
      newIndex = newIndex - 26;
    }
    string[i] = alphabet[newIndex];
  }
  return string.join("");
}
