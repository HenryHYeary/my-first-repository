
function shortLongShort (str1, str2) {
  if (str1.length > str2.length) {
    return str2 + str1 + str2;
  } else if (str2.length > str1.length) {
    return str1 + str2 + str1;
  }
}


