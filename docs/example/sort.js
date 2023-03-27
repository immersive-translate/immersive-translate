const arr = [
  {
    id: 1,
    release: true,
    end: true,
  },
  {
    id: 2,
    release: false,
    end: true,
  },
  {
    id: 3,
    release: true,
    end: false,
  },

  {
    id: 4,
    release: false,
    end: false,
  },
];

arr.sort((a, b) => {
  console.log("a,b", JSON.stringify(a), JSON.stringify(b));
  if (a.release) {
    return -1;
  }
  if (b.release) {
    return 1;
  }

  if (a.end) {
    return 1;
  }
  if (b.end) {
    return -1;
  }
  return b.id - a.id;
});

console.log("arr", arr);
