import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Book from '../book/Book';
import { getStoredReadList } from '../../utility/addToDb';
import { useLoaderData } from 'react-router-dom';

const ListedBooks = () => {
    const [readList, setReadList] = useState([]);
    const allBooks = useLoaderData();
    // ideally we will directly get the read book list from the database

    useEffect(() => {
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id));
        
        // console.log(storedReadList, storedReadListInt, allBooks);

        // 
        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));

        setReadList(readBookList);

    }, []);


    return (
        <div className='font-sans my-20'>
            <h3 className="text-3xl my-8">Listed Books</h3>

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