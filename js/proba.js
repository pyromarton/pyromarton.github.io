//Összegzés 
let numericArray = [1, 2 , 3, 4, 5];
let sum = 0;
for (let i = 0; i < numericArray.length; i++) {
    sum += numericArray[i];
}
console.log("Sum:", sum);

//Páros számok keresése
let db = 0;
for (let i = 0; i < numericArray.length; i++) {
    if (numericArray[i] % 2 == 0) {
        db++;
    }
}
console.log("Even numbers:  ", db);

//Legnagyobb érték
let biggest = numericArray[0];
for (let i = 0; i < numericArray.length; i++) {
    if  (numericArray[i] > biggest) {
        biggest = numericArray[i]
    }
}
console.log("The biggest element: ", biggest);

//Legkisebb érték
let smallest = numericArray[0];
for (let i = 0; i < numericArray.length; i++) {
    if  (numericArray[i] < smallest) {
        smallest = numericArray[i]
    }
}
console.log("The smallest element: ", smallest);

//Tartalmazza-e a keresett elemet
let contains = false;
for (let i = 0; i < numericArray.length && contains == false; i++ ) {
    if (numericArray[i] == 5) {
        contains = true;
    }
}
console.log("This array contains 5: ", contains);