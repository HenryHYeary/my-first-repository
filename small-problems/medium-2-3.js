/*
input: three integers representing the three angles within a given triangle.
output: a classification of right, acute, obtuse, or invalid for the triangle.

Examples: To be a vaild triangle the total of the angles must be exactly 180 degrees,
and every angle must be greater than 0.
May assume that all angles have integer values and arguments will always be in degrees.

Data Structure: should create an array containing each of the angle lengths in degrees to make it more
easy to iterate over the angles to evaluate them.

Algorithm: should first create a guard clause that returns invalid if one of the values of the array is 0,
and also return invalid if the sum of all of the angles is not equal to 180 degrees. Afterwards should then use
a forEach loop to evaluate the angle values and return acute, obtuse, or right accordingly.
Acute if no angles are greater than or equal to 90.
Obtuse if one angle is greater than 90.
Right if one angle is equal to exactly 90 degrees.
*/

function triangle(angle1, angle2, angle3) {
    let angleArr = [angle1, angle2, angle3];

    if (angleArr.includes(0) || angleArr.reduce((sum, next) => sum + next) != 180) {
        return 'invalid';
    }

    if (angleArr.includes(90)) {
        return 'right';
    } else if (Math.max(...angleArr) > 90) {
        return 'obtuse';
    } else {
        return 'acute';
    }
}

console.log(triangle(30, 90, 60));
console.log(triangle(50, 50, 50));
console.log(triangle(60, 70, 50));
console.log(triangle(120, 50, 10));
console.log(triangle(0, 90, 90));