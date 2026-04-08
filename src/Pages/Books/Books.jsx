import React, { useContext } from 'react';
import { BookContext } from '../../Context/BookContext';

const Books = () => {

    const { storedBook } = useContext(BookContext);
    console.log(storedBook, "bookContext");
    return (
        <div>
            Books
        </div>
    );
};

export default Books;