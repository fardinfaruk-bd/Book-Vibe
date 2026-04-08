import { a } from 'framer-motion/client';
import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const BookContext = createContext();

const BookProvider = ({ children }) => {
    const [storedBook, setStoredBook] = useState([])
    const [wishlist, setWishlist] = useState([])


    const HandleRead = (currentBook) => {
        //Step 1: store book id or store book object
        //Step 2: where to store
        //step 3: Array or collection
        //Step 4: if the book is already exist then show a alert or toast
        //Step 5: if the book is not exist then add the book
        console.log(currentBook);
        const isExist = storedBook.find(book => book.bookId == currentBook.bookId);
        if (isExist) {
            toast.error('Book Already exist')
        } else {
            toast.success(`${currentBook.bookName} added to your Read list`)
            setStoredBook([...storedBook, currentBook])
        }


    }
    const HandleWishlist = (currentBook) => {
        //Step 1: store book id or store book object
        //Step 2: where to store
        //step 3: Array or collection
        //Step 4: if the book is already exist then show a alert or toast
        //Step 5: if the book is not exist then add the book

        const isExistInReadList = storedBook.find(book => book.bookId == currentBook.bookId);
        if (isExistInReadList) {
            toast.error('Book Already exist in your read list');
            return;
        }
        console.log(currentBook);
        const isExist = wishlist.find(book => book.bookId == currentBook.bookId);
        if (isExist) {
            toast.error('Book Already exist')
        } else {
            toast.success(`${currentBook.bookName} added to your Wishlist`)
            setWishlist([...wishlist, currentBook])
        }


    }

    const data = {
        storedBook, setStoredBook, HandleRead, wishlist, setWishlist, HandleWishlist
    }

    return (
        <BookContext.Provider value={data}>
            {children}
        </BookContext.Provider>
    )
};

export default BookProvider;