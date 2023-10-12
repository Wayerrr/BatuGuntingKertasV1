let chance = 3;

while (0 <= chance) {
  //input player's gues
  let computer = Math.floor(Math.random() * 10 + 1);
  let playerGuess = prompt("Kamu harus Pilih angka 1-10");
  //computer number
  

  let result = "";

  //rules
  if (playerGuess < computer) {
    result = "Masih Rendah";
  } else if (playerGuess > computer) {
    result = "Terlalu Tinggi";
  } else {
    result = "Menang";
  }

  alert(`${result}\nKesempatan anda ${chance}`);

  if (chance == 0) {
    alert(`Maaf, kesempatan anda sudah habis\nJawaban Yang benar adalah ${computer}`);
  }

chance--;
}