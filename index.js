console.log("I am coding at SIR Centre");
var moneyreceived = 25000;
console.log(typeof moneyreceived);
var moneyreceived = 35000;
console.log(moneyreceived);
let money = 25070;
console.log(money)


 // Exercise 1
 // Answer 1
 const loggeduser = "Charles";
 console.log(loggeduser);

// Answer 2
const age = 10;
console.log(age);
// Answer 3
if (age < 13){
    alert("You are not eligibe for this service");
} 
else{
    alert("Welcome" + loggeduser);
}

const mark = 50;
    if (mark > 75) {
        console.log("The grade is A");
    }
    else if(mark > 60){
        console.log("The grade is B");
    }
    else if (mark >40){
        console.log("The grade is C");
    }
    else if (mark >20){
        console.log("The grade is D");
    }
    else if (mark >10){
        console.log("The grade is F");
    }

    // Arrays
    const myNames = ["Charles", "Pascal", "Dave", "Lwebz", "Elvis"];
    console.log([myNames]);
// Object 1
 const person ={
    name: "Wycliff " ,
    work: "Twitter " ,
    married: "married.  " ,
    location: "Kakuma. ",
    age: 30,
};
    console.log(person.name +"works at " +  person.work +"and is " +  person.married +"He also lives in " + person.location + "He is " + person.age + "years")
// object 2
var school = {
    name: "St Henry's School Kyengera ",
    location: "Kyengera ",
    head: "Mr Irumba ",
    total: 25000  ,
};
    console.log(school.name + "is located in "+ school.location + "and is headed by  " + school.head + "and the school has a total of " + school.total +  "students")
// Object 3
var muntu ={
    name: "David",
    age: 40,
    ismarried: true,
    city: "New York",
    job: "Graphic Designer",
    company: "Microsoft"
};