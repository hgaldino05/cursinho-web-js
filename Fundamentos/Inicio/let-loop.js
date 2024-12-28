// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// console.log("i = ", i); // ReferenceError: i is not defined

// PARTE 2

const funcs = [];

for (let i = 0; i < 10; i++) {
    funcs.push(function () {
        console.log(i);
    });
    }


funcs[2](); // 2
funcs[6](); // 6
funcs[8](); // 8
