
const getAllReadListFromLocalDB = () => {
    const allReadList = localStorage.getItem('readList')

    if(allReadList) return JSON.parse(allReadList);

    return [];
}
const getAllWishlistFromLocalDB = () => {
    const allWishlist = localStorage.getItem('wishlist')

    if(allWishlist) return JSON.parse(allWishlist);

    return [];
}

const addReadListToLocalDB = (book) => {
  const allBooks = getAllReadListFromLocalDB();
  const isAlreadyExist = allBooks.find((bk) => bk.bookId === book.bookId);
  if (!isAlreadyExist){
    // Ei data ta local db te add korte chai
    allBooks.push(book);
    localStorage.setItem("readList", JSON.stringify(allBooks))
  }
};

const addWishlistToLocalDB = (book) => {
  const allBooks = getAllWishlistFromLocalDB();
  const isAlreadyExist = allBooks.find((bk) => bk.bookId === book.bookId);
  if (!isAlreadyExist){
    allBooks.push(book);
    localStorage.setItem("wishlist", JSON.stringify(allBooks))
  }
};


export {getAllReadListFromLocalDB, addReadListToLocalDB, getAllWishlistFromLocalDB, addWishlistToLocalDB};