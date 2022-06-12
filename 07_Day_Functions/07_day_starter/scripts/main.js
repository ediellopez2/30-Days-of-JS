console.log(countries)
alert('Open the console and check if the countries has been loaded')

function fullName1(name) {
    console.log(`Hello, ${name}!`);
}

fullName1('Ediel Lopez');

function fullName2(firstname, lastname) {
    console.log(`Hi, ${firstname} ${lastname}`);
}

fullName2('Ediel', 'Lopez');

function addNumbers(num1, num2) {
    return num1 + num2;
}

console.log(addNumbers(13,17));

function areaOfRectangle(len, wid) {
    let area = len * wid;
    return area;
}

console.log(areaOfRectangle(5,6));
console.log(areaOfRectangle(7,7));


function perimeterOfRectangle(len, wid) {
    let per = 2 * (len + wid);
    return per;
}

console.log(perimeterOfRectangle(5, 6));
console.log(perimeterOfRectangle(7, 7));


function volumeOfRectPrism(len, wid, height) {
    let vol = len * wid * height;
    return vol;
}

console.log(volumeOfRectPrism(3,4,5));