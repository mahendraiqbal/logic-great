function isPalindrome(str) {
  // Menghapus karakter non huruf dan mengubah semua karakter menjadi huruf kecil
  str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  
  // Membalikkan string
  var reverseStr = str.split("").reverse().join("");
  
  // Memeriksa apakah string asli sama dengan string yang dibalik
  return str === reverseStr;
}

function countPalindromes(words) {
  var count = 0;
  
  // Menggunakan nested loop untuk menggabungkan setiap pasangan kata
  for (var i = 0; i < words.length; i++) {
    for (var j = i+1; j < words.length; j++) {
      var combined = words[i] + words[j];
      if (isPalindrome(combined)) {
        count++;
      }
    }
  }
  
  return count;
}

// Contoh penggunaan
var words = "katak";
console.log(countPalindromes(words)); // Output: 3
