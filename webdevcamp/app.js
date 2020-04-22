function callThreeTimes(f) {
  f();
  f();
  f();
}

function cry() {
  console.log("I am making more money then ever!");
}
function money() {
  console.log(
    "с удоволствие изкарвам супер много милиони пари и правя нещо което ми харесва с хора които ми харесват!"
  );
}
function repeatNTimes(action, num) {
  for (let i = 0; i < num; i++) {
    action();
    console.log(num);
  }
}

function multiplyBy(num) {
  return function (x) {
    return x * num;
  };
}
const triple = multiplyBy(3);
function makeBetweenFunk(x, y) {
  return function (num) {
    return num >= x && num <= y;
  };
}
isChild = makeBetweenFunk(0, 18);

const numbers = [21, 32, 22, 53, 63, 44, 77, 48];

const quadruples = numbers.map(function (num) {
  return num * 4;
});

const numDetails = numbers.map(function (n) {
  return {
    value: n,
    isEven: n % 2 === 0,
  };
});

//numbers.forEach((element) => {
//  console.log(element * 2);
//});
//numbers.forEach(function (num) {
//  console.log(num * 2);
//});
function printTriple(n) {
  console.log(n * 3);
}
numbers.forEach(printTriple);

const ooks = [
  {
    title: "Good Omens",
    authors: ["Terry Pratchett", "Neil Gaiman"],
    rating: 4.25,
  },
  {
    title: "Bone: The Complete Edition",
    authors: ["Jeff Smith"],
    rating: 4.42,
  },
  {
    title: "American Gods",
    authors: ["Neil Gaiman"],
    rating: 4.11,
  },
  {
    title: "A Gentleman in Moscow",
    authors: ["Amor Towles"],
    rating: 4.36,
  },
];
function printTitle(tit) {
  console.log();
}
ooks.forEach(function (book) {
  console.log(book.title);
});

const numbertos = [1, 2, 5, 6, 7, 8, 9, 232, 2];
const isEventos = numbertos.map((n) => (n % 2 === 0 ? "even" : "odd"));

const numeros = [1, 2, 5, 6, 7, 8, 9, 232, 2];

const oddz = numeros.filter((n) => n % 2 === 1);

const books = [
  {
    title: "Good Omens",
    authors: ["Terry Pratchett", "Neil Gaiman"],
    rating: 4.25,
    genres: ["fiction", "fantasy"],
  },
  {
    title: "Changing My Mind",
    authors: ["Zadie Smith"],
    rating: 3.83,
    genres: ["nonfiction", "essays"],
  },
  {
    title: "Bone: The Complete Edition",
    authors: ["Jeff Smith"],
    rating: 4.42,
    genres: ["fiction", "graphic novel", "fantasy"],
  },
  {
    title: "American Gods",
    authors: ["Neil Gaiman"],
    rating: 4.11,
    genres: ["fiction", "fantasy"],
  },
  {
    title: "A Gentleman in Moscow",
    authors: ["Amor Towles"],
    rating: 4.36,
    genres: ["fiction", "historical fiction"],
  },
  {
    title: "The Name of the Wind",
    authors: ["Patrick Rothfuss"],
    rating: 4.54,
    genres: ["fiction", "fantasy"],
  },
  {
    title: "The Overstory",
    authors: ["Richard Powers"],
    rating: 4.19,
    genres: ["fiction", "short stories"],
  },
  {
    title: "The Way of Kings",
    authors: ["Brandon Sanderson"],
    rating: 4.65,
    genres: ["fantasy", "epic"],
  },
  {
    title: "Lord of the flies",
    authors: ["William Golding"],
    rating: 3.67,
    genres: ["fiction"],
  },
];
const fantasyBooks = books.filter((book) => book.genres.includes("fantasy"));

const query = "THE";
const results = books.filter((book) => {
  const title = book.title.toLowerCase();
  return title.includes(query.toLowerCase());
});

//const greatestBooks = books.reduce(

const gradondes = [1, 23, 42, 52, 46, 57, 865, 95];
const minGrade = gradondes.reduce((min, curVal) => {
  return Math.min(min, curVal);
});

const summe = [10, 20, 30, 40, 50, 60, 70].reduce((sum, curVal) => {
  return sum + curVal;
}, 1000000);
