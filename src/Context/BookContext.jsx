import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';
import { addReadListToLocalDB, addWishlistToLocalDB, getAllReadListFromLocalDB, getAllWishlistFromLocalDB } from '../Utils/LocalDB';

export const BookContext = createContext();

const BookProvider = ({ children }) => {
    const [readList, setReadList] = useState(() => getAllReadListFromLocalDB())
    const [wishlist, setWishlist] = useState(() => getAllWishlistFromLocalDB()) 
    
    
    
    const HandleRead = (currentBook) => { 
        //Step 1: store book id or store book object 
        //Step 2: where to store 
        //step 3: Array or collection 
        //Step 4: if the book is already exist then show a alert or toast 
        ///Step 5: if the book is not exist then add the book addReadListToLocalDB(currentBook); 

        addReadListToLocalDB(currentBook);

        const isExist = readList.find(book => book.bookId == currentBook.bookId);
        if (isExist) 
            { toast.error('Book Already exist') 
        } else { 
            toast.success(` ${currentBook.bookName} added to your Read List`) 
            setReadList([...readList, currentBook]) } 
        }

        const HandleWishlist = (currentBook) => {
            //Step 1: store book id or store book object
            //Step 2: where to store
            //step 3: Array or collection
            //Step 4: if the book is already exist then show a alert or toast
            //Step 5: if the book is not exist then add the book

            addWishlistToLocalDB(currentBook);

            const isExistInReadList = readList.find(book => book.bookId == currentBook.bookId);
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
            readList, setReadList, HandleRead, wishlist, setWishlist, HandleWishlist
        }

        return (
            <BookContext.Provider value={data}>
                {children}
            </BookContext.Provider>
        )
    };

    export default BookProvider;