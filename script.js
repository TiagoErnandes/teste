let n = [10, 2,45,13,17,4, 9,3,0,1,5];
let aux;

for (let j = 0; j < n.length - 1; j++) {
  for (let i = 0; i < (n.length - 1); i++) {
    if (n[i] > n[i + 1]) {
      aux = n[i];
      n[i] = n[i + 1];
      n[i + 1] = aux;
    }
  }
}


n.forEach((e) => {
  console.log(e)
})