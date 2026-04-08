import React, { useContext } from 'react';
import { BookContext } from '../../Context/BookContext';

const Books = () => {

    const { storedBook, wishlist } = useContext(BookContext);
    console.log(storedBook, wishlist, "bookContext");
    return (
        <div className="container mx-auto">
            read list : {storedBook.length}
            wishlist : {wishlist.length}
        </div>
    );
};

export default Books;