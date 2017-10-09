// var person = {
//     firstName:"John",
//     lastName: "Doe",
//     fullName: function() {
//         console.log(this);
//         return this.firstName + " " + this.lastName;
//     }
// };
//
// var myObject = {
//     firstName:"Mary",
//     lastName: "Doe"
// };
//
// x = person.fullName();
// console.log("x: ", x);
//
//
// y = person.fullName.call(myObject);
// console.log("y: ", y);


/*

function Person() {
    // The Person() constructor defines `this` as an instance of itself.
    this.age = 0;
    console.log('outer this in person obj: ',this);

    setTimeout(function growUp() {
        // In non-strict mode, the growUp() function defines `this`
        // as the global object, which is different from the `this`
        // defined by the Person() constructor.
        this.age++;
        console.log('this.age inside setTimeout: ',this.age);
        console.log('this inside setTimeout: ',this);
    }, 1000);
}

var p = new Person();
console.log('person.age outside object: ',person.age);
console.log("p: ",p);
*/

/*

function Person() {
    var that = this;
    that.age = 0;
    console.log('that', that);

    setTimeout(function growUp() {
        // The callback refers to the `that` variable of which
        // the value is the expected object.
        that.age++;
        console.log('age: ', that.age)
    }, 1000);
}

var p = new Person();
*/


function Person(){
    this.age = 0;
    console.log('outer this: ', this);

    setTimeout(() => {
        this.age++; // |this| properly refers to the person object
    console.log('inner this: ', this);
}, 1000);
}

var p = new Person();