import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList, addToStoredWishList } from "../../utility/addToDb";


const BookDetail = () => {
    const { bookId } = useParams();
    const id = parseInt(bookId);
    const data = useLoaderData();
    const book = data.find(book => book.bookId === id);

    const { bookId: currentBookId, image, bookName, author, tags, category, rating, totalPages, review, publisher, yearOfPublishing } = book;

    const handleMarkAsRead = (id) => {
        addToStoredReadList(id);
    }

    const handleAddToWishList = (id) => {
        addToStoredWishList(id);
    }

    return (
        <div>

            <div className="rounded-xl p-4 border font-sans grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
                <div className='bg-[#F3F3F3] py-4 rounded-xl'>

                    <img className="mx-auto rounded-xl max-h-[85vh]" src={image} alt="" />
                </div>
                <div className="flex flex-col gap-3 mt-3 ">

                    <div className="flex justify-between items-center ">
                        <h5 className="text-5xl font-bold title-font w-2/3">{bookName}</h5>
                    </div>
                    <div>
                        <h5 className="text-xl my-4">by: {author}</h5>
                    </div>
                    <div className="border my-2"></div>
                    <h5 className="text-lg">{category}</h5>
                    <div className="border my-2"></div>
                    <div>
                        <p><span className="font-bold">Review :</span>{review}</p>
                    </div>
                    <div className="border my-2"></div>

                    <div className="flex gap-4">
                        <span className="font-bold">tags: </span>
                        {
                            tags.map((tag, index) => <p
                                key={index}
                                className="badge text-[#23BE0A] text-base bg-[#22be0a11]">
                                #{tag}
                            </p>)
                        }

                    </div>

                    <div className="border my-2"></div>

                    <div className="grid grid-cols-3 gap-10">
                        <h5 className="text-lg">Number of Pages: </h5>
                        <p className="font-bold">{totalPages}</p>
                    </div>
                    <div className="grid grid-cols-3 gap-10">
                        <h5 className="text-lg">Publisher: </h5>
                        <p className="font-bold">{publisher}</p>
                    </div>
                    <div className="grid grid-cols-3 gap-10 ">
                        <h5 className="text-lg">Year of Publishing: </h5>
                        <p className="font-bold">{yearOfPublishing}</p>
                    </div>
                    <div className="grid grid-cols-3 gap-10">
                        <h5 className="text-lg">Rating: </h5>
                        <p className="font-bold">{rating} ⭐</p>
                    </div>

                    <div className="flex gap-6 mt-5">
                        <button
                            onClick={() => handleMarkAsRead(bookId)}
                            className="btn px-6 text-lg">Read</button>
                        <button
                            onClick={() => handleAddToWishList(bookId)}
                            className="btn px-6 text-white text-lg bg-sky-400 rounded-lg hover:bg-sky-600">
                            Wishlist</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BookDetail;