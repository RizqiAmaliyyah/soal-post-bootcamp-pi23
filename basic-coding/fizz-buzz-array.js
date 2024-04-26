// Note: Jawab dengan 2 versi, yaitu menggunakan for dan built-in function (map/filter/find/dll)

/* Fizz buzz array
Soal
Mencari mengubah data fizz buzz
Buat fungsi yang menerima parameter data array
Kembalikan dalam bentuk boolean
*/

//Jawaban menggunakan For:
function linearSearchFor(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      array[i] = "fizzbuzz";
    } else if (array[i] % 3 === 0) {
      array[i] = "fizz";
    } else if (array[i] % 5 === 0) {
      array[i] = "buzz";
    }
  }
  return array;
}

// ubah menjadi [8 ,"fizz" ,"fizz" ,2 ,"buzz"]
// [8 ,3 ,9 ,2 ,5] -> return [8 ,"fizz" ,"fizz" ,2 ,"buzz"]
console.log(linearSearchFor([8, 3, 9, 2, 5])); 

// ubah menjadi ["fizz" ,4 ,"fizz" ,7 ,"fizz"]
// [3 ,4 ,6 ,7 ,9] -> return ["fizz" ,4 ,"fizz" ,7 ,"fizz"]
console.log(linearSearchFor([3 ,4 ,6 ,7 ,9])); 

// ubah menjadi [4 ,"buzz" ,"fizz" ,"fizzbuzz" , 19]
// [4 ,5 ,9 ,15 ,19] -> return [4 ,"buzz" ,"fizz" ,"fizz buzz" , 19]
console.log(linearSearchFor([4 ,5 ,9 ,15 ,19])); 

// kembalikan [2 ,4 ,7 ,8 ,1]
// [2 ,4 ,7 ,8 ,1] -> return [2 ,4 ,7 ,8 ,1]
console.log(linearSearchFor([2 ,4 ,7 ,8 ,1])); 


// Jawaban menggunakan built-in function (Find):
function linearSearchFind(array) {
  return array.map(number => {
    if (number % 3 === 0 && number % 5 === 0) {
      return "fizzbuzz";
    } else if (number % 3 === 0) {
      return "fizz";
    } else if (number % 5 === 0) {
      return "buzz";
    } else {
      return number;
    }
  });
}

// ubah menjadi [8 ,"fizz" ,"fizz" ,2 ,"buzz"]
// [8 ,3 ,9 ,2 ,5] -> return [8 ,"fizz" ,"fizz" ,2 ,"buzz"]
console.log(linearSearchFind([8, 3, 9, 2, 5])); 

// ubah menjadi ["fizz" ,4 ,"fizz" ,7 ,"fizz"]
// [3 ,4 ,6 ,7 ,9] -> return ["fizz" ,4 ,"fizz" ,7 ,"fizz"]
console.log(linearSearchFind([3 ,4 ,6 ,7 ,9])); 

// ubah menjadi [4 ,"buzz" ,"fizz" ,"fizzbuzz" , 19]
// [4 ,5 ,9 ,15 ,19] -> return [4 ,"buzz" ,"fizz" ,"fizz buzz" , 19]
console.log(linearSearchFind([4 ,5 ,9 ,15 ,19])); 

// kembalikan [2 ,4 ,7 ,8 ,1]
// [2 ,4 ,7 ,8 ,1] -> return [2 ,4 ,7 ,8 ,1]
console.log(linearSearchFind([2 ,4 ,7 ,8 ,1])); 