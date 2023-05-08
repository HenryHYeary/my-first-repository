/*
input: a target word a long string of text
output: the number of times that word occurs in the text

Examples: Must filter the word as a standalone word, so be careful
with the regex you use.

Data Structure: use the match method along with a regex to filter out
the specific word you are looking for from the string. Return the length
of the match array as the result of the function.
*/

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

searchWord('sed', text);

function searchWord(target = '', text = '') {
  let regex = new RegExp(`\\b${target}\\b`, 'gi');
  let matches = text.match(regex);
  return matches ? matches.length : 0;
}

console.log(searchWord('sed', text));
console.log(searchWord());