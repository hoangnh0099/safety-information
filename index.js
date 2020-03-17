/**
 * @flow
 * @format
 */

const english = require('./english');

/**
 * Bài 1: Hệ mã dịch vòng (Shift Cipher)
 *
 * Đầu vào: Hello
 * Đầu ra: RPUUX
 */

const shiftCipherEncrypt = (text, k, english) => {
  const textSplited = text.toUpperCase().split('');

  let result = [];
  let resultEncrypted = [];

  textSplited.forEach(text => {
    result.push((english.indexOf(text) + k) % 26);
  });

  result.forEach(text => {
    resultEncrypted.push(english[text]);
  });

  return resultEncrypted;
};

const a = shiftCipherEncrypt('Nguyen Huy Hoang', 10, english);
console.log(`Bản rõ: Nguyen Huy Hoang \nKết quả: ${a}`);

//Bài 2: Hệ mã hóa thay thế (Substitution Cipher)
const substitutionCipher = text => {
  return '';
};

// Bài 3: Hệ mã Affine
const affineEncrypt = text => {
  return '';
};
