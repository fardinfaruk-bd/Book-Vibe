import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { HiOutlineUsers } from 'react-icons/hi';
import { IoDocumentTextOutline } from 'react-icons/io5';

const ListedReadCard = ({ book }) => {

    return (
        <div className=' flex-col flex md:flex-row items-center gap-10 border border-gray-200 p-10 rounded-lg shadow-md'>
            <div className='bg-gray-200  w-60 h-60 flex items-center justify-center rounded-lg mx-auto'>
                <img src={book.image} alt={book.bookName} className='h-50 rounded-lg'/>
            </div>
            <div className='space-y-5 w-full'>
                <h2 className='font-bold text-2xl text-[#131313]'>{book.bookName}</h2>
                <p className='text-[#131313c4] font-medium'>By: {book.author}</p>
                <div className=' md:grid-cols-3 gap-3'>
                    <h2 className='font-bold'>Tags: </h2>
                    {book.tags.map((tag, index) => <div key={index} className="badge text-green-500 bg-[#22be0a18]">#{tag}</div>)}
                    <div className='flex gap-2 items-center text-[#1313138a]'>
                        <CiLocationOn className='font-bold'/>
                        <p>Year of Publishing: {book.yearOfPublishing}</p>
                    </div>
                </div>

                <div className='md:flex gap-5 border-b-2  border-gray-300 pb-5 '>
                    <div className='flex gap-2 items-center text-[#131313c2]'>
                        <HiOutlineUsers />
                        <p>Publisher: {book.publisher}</p>
                    </div>
                    <div className='flex gap-2 items-center text-[#131313c2]'>
                        <IoDocumentTextOutline />
                        <p>Pages: {book.totalPages}</p>
                    </div>
                </div>
                
                <div className='flex-col gap-5 justify-center items-center flex md:flex-row md:gap-3 md:justify-start'>
                    <div className='badge rounded-4xl p-5 text-[#328EFF] bg-[#328eff2b]'>
                        <p>Category : {book.category}</p>
                    </div>
                    <div className='badge rounded-4xl p-5 text-[#FFAC33] bg-[#ffad3328]'>
                        <p>Rating : {book.rating}</p>
                    </div>
                    <div className='badge rounded-4xl p-5 text-[18px] font-medium text-white bg-[#23BE0A]'>
                        <p>View Details</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ListedReadCard;