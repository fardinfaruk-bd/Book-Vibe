import React, {  useState } from 'react';
import { BookContext } from '../../Context/BookContext';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedWishlist from '../../Components/ListedBooks/ListedWishlist';
import ListedReadList from '../../Components/ListedBooks/ListedReadlist';

const Books = () => {

    const [sortingType, setSortingType] = useState("");

    console.log(sortingType, "SortingType");
    return (
        <div className="container mx-auto my-3">

            <div className='bg-gray-200 p-6 mb-9 rounded-lg'>
                <h2 className='font-bold text-3xl text-center'>Books</h2>
            </div>

            <div className="flex justify-center my-9">
                <div className="dropdown dropdown-start">
                    <div tabIndex={0} role="button" className="btn m-1">Sort By: {sortingType} ⬇️</div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={() => setSortingType('pages')}><a>Pages</a></li>
                        <li onClick={() => setSortingType('rating')}><a>Rating</a></li>
                    </ul>
                </div>
            </div>

            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                    <ListedReadList sortingType = {sortingType}/>
                </TabPanel>
                <TabPanel>
                    <ListedWishlist sortingType = {sortingType} />
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Books;