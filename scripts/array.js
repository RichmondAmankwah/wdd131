let scores =[100,72,83,94,88,87];
let names = ["Nancy","Blessing","Jorge","svetlana"];

let ascore=scores[0]; // ascoee asigned to the value 100
score[0]=99;//changes the value of the index 

for(let i=0; i<scores.length; i++){
    console.log(scores[i])
}// iterating through arrays classic loop

// iterating through arrays using the for loop
scores.forEach(function(score)){
    console.log(score);
}

//assingning length to arrays to length of scores// 
let numScores= scores.length;


//functions javascript
function fuulName(first,last){
    return `${first} ${last}`;// string concatatenation( first+ ''+ last)
}

//assingning function to variable

const fuulName= function(first,last){
    return '${first} ${last}';
}
//using an arrow sign to assigning the function
const fuulName= (first,last)=> '${first} ${last}';

//Write an expression that calls the fullName function declaration and writes the result to an existing HTML element's text node with the ID of fullName
document.querySelector("fuulName").textContent = fullName(first,last);
