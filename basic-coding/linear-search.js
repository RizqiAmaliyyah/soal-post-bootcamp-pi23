// Note: Jawab dengan 2 versi, yaitu menggunakan for dan built-in function (map/filter/find/dll)

/* Linear search
Soal
Mencari data pada array
Buat fungsi yang menerima parameter angka yang ingin dicari dan data array
Kembalikan dalam bentuk angka (number)
Kembalikan undefined jika tidak dikembalikan
*/

// Jawaban menggunakan For:
function linearSearchFor(array, number) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === number) {
      return array[i];
    }
  }
  return undefined;
}

// cari 3 :
// [8 ,3 ,9 ,2 ,5] -> return 3
console.log(linearSearchFor([8, 3, 9, 2, 5], 3));

// cari 4 :
// [2 ,6 ,7 ,4 ,1] -> return 4
console.log(linearSearchFor([2, 6, 7, 4, 1], 4));

// cari 9 :
// [2 ,6 ,7 ,5 ,1] -> return undefined
console.log(linearSearchFor([2, 6, 7, 5, 1], 9));

// Jawaban menggunakan built-in function (Find):
function linearSearchFind(array, targetNumber) {
  return array.find((number) => number === targetNumber);
}

// cari 3 :
// [8 ,3 ,9 ,2 ,5] -> return 3
console.log(linearSearchFind([8, 3, 9, 2, 5], 3));

// cari 4 :
// [2 ,6 ,7 ,4 ,1] -> return 4
console.log(linearSearchFind([2, 6, 7, 4, 1], 4));

// cari 9 :
// [2 ,6 ,7 ,5 ,1] -> return undefined
console.log(linearSearchFind([2, 6, 7, 5, 1], 9));