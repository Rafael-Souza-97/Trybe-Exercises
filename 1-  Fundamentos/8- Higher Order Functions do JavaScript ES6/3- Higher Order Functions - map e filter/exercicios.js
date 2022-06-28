const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

// const arrayStrings = (books) => books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);

// arrayStrings(books)

// const bookObj = (books) => books.map((book) => book)

// const idade = bookObj(books)

const age = (books) => {
 return books.map((book) => ({
  age: book.releaseYear - book.author.birthYear,
  author: book.author.name,
  }
)).sort((a, b) => a.age - b.age);
}
age(books);


function fantasyOrScienceFiction(books) {
return books.filter((book) => book.genre === 'Fantasia' || book.genre ==='Ficção Científica');
}
fantasyOrScienceFiction(books);


function oldBooksOrdered(books) {
  return books.filter((book) => 2022 - book.releaseYear> 60).sort((a,b) => a.releaseYear - b.releaseYear);
}
oldBooksOrdered(books);


function fantasyOrScienceFictionAuthors(books) {
  return books.filter((book) => book.genre === 'Fantasia' || book.genre ==='Ficção Científica').map((book) => book.author.name).sort();
}
fantasyOrScienceFictionAuthors(books);


function oldBooks(books) {
  const currentYear = new Date().getFullYear();
  return books.filter((book) => currentYear - book.releaseYear > 60).map((book) => book.name);
}
oldBooks(books);


function authorWith3DotsOnName(books) {
  return books.find((book) => book.author.name.split(' ')).filter((book)=> book.author.name.length === 3);
}
console.log(authorWith3DotsOnName(books));