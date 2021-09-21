const sentence = "hello there from lighthouse labs";

let time = 0;

for (const char of sentence) {

  setTimeout(() => {
    process.stdout.write(char);
  }, time) // <= 1s delay to make it noticeable. Can dial it down later.

  time = time + 50;
}

setTimeout(() => {
  console.log();
}, time)
