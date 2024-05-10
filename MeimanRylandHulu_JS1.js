//tugas membuat piramida/segitia 
//menggunakan looping

for (let i = 1; i <= 5; i++) {
    let p1 = "";
    for (let x = 1; x <= i; x++) {
      p1 = p1 + " * ";
    }
    console.log(p1);
  }
  
  for (let i = 5; i >= 1; i--) {
    let p2 = "";
    for (let x = 1; x <= i; x++) {
      p2 = p2 + " * ";
    }
    console.log(p2);
  }