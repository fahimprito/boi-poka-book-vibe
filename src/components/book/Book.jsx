import React from 'react';
import "./book.css"

const Book = ({ book }) => {
    const { bookId, image, bookName, author, tags, category, rating, totalPages } = book;

    return (
        <div>


            <div className="rounded-xl p-4 border font-sans">
                <div className='bg-[#F3F3F3] py-4'>

                    <img className="mx-auto rounded-xl h-[200px]" src={image} alt="" />
                </div>
                <div className="flex flex-col gap-3 mt-3 ">

                    <div className="flex gap-4">
                        {
                            tags.map((tag, index) => <p
                                key={index}
                                className="badge text-[#23BE0A] text-base bg-[#22be0a11]">
                                {tag}
                            </p>)
                        }

                    </div>

                    <div className="flex justify-between items-center ">
                        <h5 className="text-2xl font-bold title-font">{bookName}</h5>
                        <p>{totalPages} page</p>
                    </div>
                    <div>
                        <h5 className="text-xl">by: {author}</h5>
                    </div>
                    <div className="border-dashed"></div>
                    <div className="flex justify-between items-center">
                        <h5 className="text-lg">{category}</h5>
                        <p>{rating} ⭐</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Book;