let arrlength = prompt('How many numbers are in the data set? ');
arrlength = Number(arrlength);

let numbers=[];

for (let i = 0; i<arrlength; i++){
    let input = prompt('Please enter a number: ');
    let number = Number(input);
    
    numbers.push(number);
    
}

numbers = numbers.sort();

console.log('Largest number: ' + numbers[numbers.length -1]);
console.log('Smallest number:'  + numbers[0]);

