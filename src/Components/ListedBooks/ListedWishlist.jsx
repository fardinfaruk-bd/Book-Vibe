import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../Context/BookContext';
import ListedCard from './ListedCard';
import { IoHeartCircleOutline } from 'react-icons/io5';

const ListedWishlist = ({ sortingType}) => {

    const { wishlist } = useContext(BookContext);
    console.log(wishlist, "bookContext");
    const [filteredWishList, setFilteredWishList] = useState(wishlist);
    
        useEffect(() => {
            if(sortingType){
                if(sortingType == "pages"){
                    const sortedData = [...wishlist].sort((a, b) => a.totalPages - b.totalPages);
                    console.log(sortedData);
                    setFilteredWishList(sortedData);
                }else if(sortingType == "rating"){
                    const sortedData = [...wishlist].sort((a, b) => b.rating - a.rating);
                    console.log(sortedData);
                    setFilteredWishList(sortedData);
                }
            }else{
                setFilteredWishList(wishlist);
            }
        }, [sortingType, wishlist]);

    if (filteredWishList.length == 0) {
        return <div className='bg-gray-100 h-[60vh] flex items-center justify-center rounded-2xl mt-9'>
            <div className='space-y-5'>
                <IoHeartCircleOutline className='text-7xl text-gray-300 mx-auto mt-10' />
                <h2 className='font-bold text-2xl text-center'>Wishlist is empty!</h2>
            </div>
        </div>
    }


    return (
        <div className='mt-10 grid gap-5'>
            {
                filteredWishList.map((book, ind) => <ListedCard key={ind} book={book} />)
            }
        </div>
    );
};

export default ListedWishlist;