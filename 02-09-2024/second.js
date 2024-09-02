let array = [1,2,3,4,5];

function findIndex(array, num){
    return array.findIndex(element=>element === num);
};

console.log(findIndex(array,4));

function addNumbers(num1, num2){
    return num1+num2;
};

console.log(addNumbers(1,2));

const addNumbersArrowFn=(num1,num2)=>{
    return num1+num2;
};

console.log(addNumbersArrowFn(1,2));

// =>{} (peab lisama return)
// =>() ei pea lisama return (automaatne)

const addNumbersArrowFnShort =(num1,num2)=>num1+num2;

console.log(addNumbersArrowFnShort(1,5));

console.log(addNumbersNested(3)(4));

function addNumbersNested(num1){
    return function (num2){
        return num1+num2;
    };
}

console.log(addNumbersNested(1)(2))

const addNumbersNestedAF=(num1)=>(num2)=>num1+num2;
console.log(addNumbersNestedAF(1)(2));