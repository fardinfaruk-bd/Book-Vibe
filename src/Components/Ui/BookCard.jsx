import React from 'react';
import { CiStar } from 'react-icons/ci';
const BookCard = ({ book }) => {
    return (
        <div className="card bg-base-100 shadow-sm">
            <figure className='p-6'>
                <img
                    src={book.image}
                    alt={book.bookName}
                    className='rounded-xl h-62.5' />
            </figure>
            <div className="card-body">
                <div className="flex gap-3 items-center">
                    {book.tags.map((tag, index) => <div key={index} className="badge text-green-500 bg-[#22be0a18]">{tag}</div>)}
                </div>
                <h2 className="card-title text-2xl">
                    {book.bookName}
                </h2>
                <p className='font-semibold text-lg'>By : {book.author}</p>
                <div className="card-actions justify-between border-t border-dashed pt-4 border-gray-300 text-xl">
                    <div className="font-semibold ">{book.category}</div>
                    <div className="flex items-center gap-2 ">{book.rating} <CiStar /></div>
                </div>
            </div>
        </div>
    );
};

export default BookCard;