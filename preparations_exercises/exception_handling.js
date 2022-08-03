let names = ['bob', 'joe', 'steve', undefined, 'frank'];

names.forEach(name => {
    try {
        console.log(`${name}'s name has ${name.length} letters in it.`);
    } catch (exception) {
        console.log('Something went wrong');
    }
});

function foo(number) {
    if (typeof number !== "number") {
        throw new TypeError("expected a number");
    }
}