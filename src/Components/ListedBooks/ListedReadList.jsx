import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../Context/BookContext';
import ListedReadCard from './ListedCard';
import { FaBookReader } from 'react-icons/fa';

const ListedReadList = ({ sortingType}) => {
    const { readList } = useContext(BookContext);
    console.log(readList, "bookContext");
    const [filteredReadList, setFilteredReadList] = useState(readList);

    useEffect(() => {
        if(sortingType){
            if(sortingType == "pages"){
                const sortedData = [...readList].sort((a, b) => a.totalPages - b.totalPages);
                console.log(sortedData);
                setFilteredReadList(sortedData);
            }else if(sortingType == "rating"){
                const sortedData = [...readList].sort((a, b) => b.rating - a.rating);
                console.log(sortedData);
                setFilteredReadList(sortedData);
            }
        }else{
            setFilteredReadList(readList);
        }
    }, [sortingType, readList]);

    if (filteredReadList.length == 0) {
        return <div className='bg-gray-100 h-[60vh] flex items-center justify-center rounded-2xl mt-9'>
            <div className='space-y-5'>
                <FaBookReader className='text-7xl text-gray-300 mx-auto mt-10' />
                <h2 className='font-bold text-2xl text-center'>Read Books List is empty!</h2>
            </div>
        </div>
    }

    return (
        <div className='mt-10 grid gap-5'>
            {
                filteredReadList.map((book, ind) => <ListedReadCard key={ind} book={book} />)
            }
        </div>
    );
};

export default ListedReadList;