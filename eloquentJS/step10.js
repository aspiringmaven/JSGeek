/**
 * Javascrip Objects
 */

/*************************************************CURLY BRACES ****************************** */

 let reactangle = {};

 console.log(reactangle);
 
 reactangle.width = 200;
 reactangle.height = 400;

console.log( reactangle);

/**********************************************using factory FUNCTION****************************** */

function createPerson(name, age) {
    let person = {};

    person.name = name;
    person.age = age;

    return person;
}

const rahul = createPerson("Rahul", 27);
const sumit = createPerson("Sumit",27);

console.log(rahul);
console.log(sumit);

/********************************************using Constructor function****************************************************/

function Employee(name, id, skills){
    this.name = name;
    this.id = id;
    this.skills = skills;
}


const devSumit =  new Employee("Sumit", 1235, ["Java", "AWS", "Spring"]);
const devPooja =  new Employee("Pooja", 6789, ["Java", "Struts", "Annotation"]);

console.log(devSumit);
console.log(devPooja);
/***********************************Function vs constructor ****************************************/
// Function way works with new as it is
//constructor method calls without new will return undefine

/*******************************************************************************************/




