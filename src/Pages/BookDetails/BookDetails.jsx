import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { BookContext } from '../../Context/BookContext';



const BookDetails = () => {
    const books = useLoaderData();

    const { bookId } = useParams();

    const expectedBook = books.find(book => book.bookId == bookId);

    const { HandleRead, HandleWishlist } = useContext(BookContext);
    
    


    return (
        <div className="grid grid-cols-2 bg-base-100 shadow-sm container mx-auto my-8">
            <figure className='flex items-center justify-center bg-gray-100'>
                <img
                    src={expectedBook.image}
                    alt={expectedBook.bookName}
                    className='max-h-100 rounded-lg' />
            </figure>
            <div className="card-body space-y-3 ">
                <h2 className="card-title text-[40px] text-[#131313]">{expectedBook.bookName}</h2>
                <h2 className="card-title text-2xl text-[#131313c9]">{expectedBook.author}</h2>
                <p className='py-2 border-y text-[#131313c9]'>{expectedBook.category} </p>
                <p className='text-[#131313c9]'><span className='text-[#131313] font-bold'>Review:</span> {expectedBook.review}</p>
                <div className="flex gap-3 items-center">
                    <h2 className='text-[#131313] font-bold'>Tag: </h2>
                    {expectedBook.tags.map((tag, index) => <div key={index} className="badge text-green-500 bg-[#22be0a18]">#{tag}</div>)}
                </div>

                <div className=" border-t space-y-3 ">
                    <div className='flex items-center gap-30 mt-2'>
                        <div className='space-y-3 '>
                            <p>Number of pages: </p>
                            <p>Publisher: </p>
                            <p>Year of Publishing: </p>
                            <p>Rating: </p>
                        </div>
                        <div className="font-bold space-y-3 ">
                            <p className='text-[#131313]'>{expectedBook.totalPages}</p>
                            <p className='text-[#131313]'>{expectedBook.publisher}</p>
                            <p className='text-[#131313]'>{expectedBook.yearOfPublishing}</p>
                            <p className='text-[#131313]'>{expectedBook.rating}</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-2'>
                        <button className="btn" onClick={() => HandleRead(expectedBook)}>Read</button>
                        <button className="btn text-white bg-[#59C6D2]" onClick={() => HandleWishlist(expectedBook)}>Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;