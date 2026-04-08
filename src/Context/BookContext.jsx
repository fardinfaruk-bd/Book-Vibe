import { a } from 'framer-motion/client';
import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookProvider = ({ children }) => {
    const [storedBook, setStoredBook] = useState([])


    const HandleRead = (currentBook) => {
        //Step 1: store book id or store book object
        //Step 2: where to store
        //step 3: Array or collection
        //Step 4: if the book is already exist then show a alert or toast
        //Step 5: if the book is not exist then add the book
        console.log(currentBook);
        const isExist = storedBook.find(book => book.bookId == currentBook.bookId);
        if (isExist) {
            alert('Book Already exist')
        } else {
            alert(`${currentBook.bookName} added to your collection`)
            setStoredBook([...storedBook, currentBook])
        }


    }

    const data = {
        storedBook, setStoredBook, HandleRead
    }

    return (
        <BookContext.Provider value={data}>
            {children}
        </BookContext.Provider>
    )
};

export default BookProvider;