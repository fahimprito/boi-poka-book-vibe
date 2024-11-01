import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Book from '../book/Book';
import { getStoredReadList } from '../../utility/addToDb';
import { useLoaderData } from 'react-router-dom';

const ListedBooks = () => {
    const [readList, setReadList] = useState([]);
    const allBooks = useLoaderData();
    const [sort, setSort] = useState('');
    // ideally we will directly get the read book list from the database

    useEffect(() => {
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id));

        // console.log(storedReadList, storedReadListInt, allBooks);

        // 
        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));

        setReadList(readBookList);

    }, []);

    const handleSort = sortType => {
        setSort(sortType);

        // 
        if (sortType === 'No of pages') {
            const sortedReadList = [...readList].sort((a, b) => a.totalPages - b.totalPages);
            setReadList(sortedReadList);
        }

        if (sortType === 'Ratings') {
            const sortedReadList = [...readList].sort((a, b) => a.rating - b.rating);
            setReadList(sortedReadList);
        }

    }


    return (
        <div className='font-sans mb-20'>

            <div className='flex justify-center my-8'>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn px-6 text-white text-lg bg-[#23BE0A] rounded-lg hover:bg-green-700 m-1">
                        {
                            sort ? `Sort by: ${sort}` : 'Sort by'
                        }
                    </div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li onClick={() => handleSort('Ratings')}><a>Ratings</a></li>
                        <li onClick={() => handleSort('No of pages')}><a>No of pages</a></li>
                    </ul>
                </div>

            </div>


            <h3 className="text-3xl">Listed Books</h3>
            <div>
                <Tabs>
                    <TabList>
                        <Tab>Read Books</Tab>
                        <Tab>Wishlist Books</Tab>
                    </TabList>

                    <TabPanel>
                        <h2 className='text-2xl'>Books I read: {readList.length}</h2>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-10'>
                            {
                                readList.map(book => <Book key={book.bookId} book={book}></Book>)
                            }

                        </div>
                    </TabPanel>
                    <TabPanel>
                        <h2 className='text-2xl'>My wish list</h2>
                    </TabPanel>
                </Tabs>

            </div>
        </div>
    );
};

export default ListedBooks;