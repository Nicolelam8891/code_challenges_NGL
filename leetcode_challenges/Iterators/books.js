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

const getBookGenresAndTitles = (booksArray) => {
  const bookGenresAndTitles = booksArray.reduce((acc, book) => {
    if(!acc[book.genre]) {
      acc[book.genre] = []
    }
    acc[book.genre].push(book.title)
    return acc
  }, {})
  return bookGenresAndTitles
}
console.log(getBookGenresAndTitles(books))

/* Sort by ratings, high to low */

const sortBooksByRating = (booksArray) => {
  const booksByRating = booksArray.sort((a,b) => {
    return b.rating - a.rating
  })
  return booksByRating
}
console.log(sortBooksByRating(books))