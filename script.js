var s = 0

for (let i = 1; i < 1000; i++) {
  if (i % 3 == 0) {
    s += i;
  }
  else if(i % 5 == 0)
  {
    s += i;
  }
}

console.log(s)