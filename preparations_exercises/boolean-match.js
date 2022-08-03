function has_a_or_e (string) {
    let results = string.match(/[ae]/g);
    if (results) {
        console.log(`We have a match! ${results}`)
    } else {
        console.log('We do not have a match.')
    }
}

console.log(has_a_or_e('basketball'));
console.log(has_a_or_e('football'));