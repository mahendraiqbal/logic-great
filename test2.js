function findFirstPalindrome(str) {
  // Menggunakan nested loop untuk menggabungkan setiap pasangan karakter
  for (var i = 0; i < str.length; i++) {
    for (var j = i + 1; j < str.length; j++) {
      var substr = str.substring(i, j + 1);
      if (isPalindrome(substr)) {
        return substr;
      }
    }
  }
  
  // Jika tidak ada palindrom ditemukan, mengembalikan string kosong
  return "";
}

function isPalindrome(str) {
  // Menghapus karakter non huruf dan mengubah semua karakter menjadi huruf kecil
  str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  
  // Membalikkan string
  var reverseStr = str.split("").reverse().join("");
  
  // Memeriksa apakah string asli sama dengan string yang dibalik
  return str === reverseStr;
}

// Contoh penggunaan
var str = "kasur ini rusak";
console.log(findFirstPalindrome(str)); // Output: "kasur"
