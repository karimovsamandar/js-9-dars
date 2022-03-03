function normolizeNumbers(array) {
    var result = 0

    for (let i = 0; i < array.length; i++) {
       var number = Math.abs(Math.round(array[i]))
    //    console.log(array[i]); 
     result = result + number
    }
    return result
}

var arrayOfNumbers = [3.02, -3.65, 5, -9]
console.log(normolizeNumbers(arrayOfNumbers));