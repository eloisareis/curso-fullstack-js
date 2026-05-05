let A = 'A';  // B
let B = 'B';  // C
let C = 'C';  // A

// const temp = A;
//A = B;
//B = C;
//C = temp;

[A, B, C] = [B, C, A];

console.log(A, B, C);