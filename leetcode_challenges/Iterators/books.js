const books = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
    rating: 4.5
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Classic",
    rating: 5.0
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    rating: 4.0
  },
  {
    title: "Twilight",
    author: "Stephenie Meyer",
    genre: "Fantasy",
    rating: 2.5
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Classic",
    rating: 3.5
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    rating: 4.8
  },
  {
    title: "The Da Vinci Code",
    author: "Dan Brown",
    genre: "Mystery",
    rating: 2.0
  }
];

/* Return an array of book titles that have a rating greater than 2
[
  'The Great Gatsby',
  'To Kill a Mockingbird',
  '1984',
  'Twilight',
  'The Catcher in the Rye',
  'The Hobbit'
] 
*/

  const getBookTitles = (booksArray) => {
    const bookTitles = booksArray
      .filter(book => book.rating > 2)
      .map(book => book.title)
    return bookTitles
  }
    console.log(getBookTitles(books))
  
/* Return an object where the properties are book genres and the values are an array of books that match the genre
{
 "Mystery": ["the Da Vinci Code"].
"Classic": ["The Great Gatsby", "To Kill a Mockingbird", "The Catcher in the Rye"]
}
*/

//output: object 
//key -> genres
//value -> titles 
//create an empty object
/* 
const object = {
book.genres: book.titles
}
*/