function logInBox(message, maxWidth) {
  if (message.length > maxWidth) {
    message = message.substring(0, maxWidth);
  }

  let horizontalRule = `+${'-'.repeat(message.length + 2)}+`;
  let emptyLine = `|${' '.repeat(message.length + 2 )}|`;

  console.log(horizontalRule);
  console.log(emptyLine);
  console.log(`| ${message} |`)
  console.log(emptyLine);
  console.log(horizontalRule);
}

console.log(logInBox('To boldly go where no one has gone before.', 20));

