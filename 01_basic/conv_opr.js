let score = "33abc"

console.log(typeof(score));

let x = Number(score);
console.log(typeof(x));
console.log(x);    //NaN


score = null;

console.log(typeof(score));

x = Number(score);
console.log(typeof(x));
console.log(x);    //0

score = true

console.log(typeof(score));

x= Number(score);
console.log(typeof(x));
console.log(x);    //1


// "33"=> 33
// "33abc" => NaN
// true => 1; false => 0

let is = "tanu";

let booleanis = Boolean(is);
console.log(booleanis);

is = "";

booleanis = Boolean(is);
console.log(booleanis);

is = 0;

booleanis = Boolean(is);
console.log(booleanis);

is = "0";

booleanis = Boolean(is);
console.log(booleanis);

is = null;

booleanis = Boolean(is);
console.log(booleanis);

is = "5";

booleanis = Boolean(is);
console.log(booleanis);

is = "-3";

booleanis = Boolean(is);
console.log(booleanis);

// 1 - true ; 0 - false ; "0 "- true
// "" - false ; null -> false


