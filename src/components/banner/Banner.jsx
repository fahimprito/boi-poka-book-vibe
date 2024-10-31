import bannerImage from "../../assets/books.jpg"

const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-[85vh] rounded-xl">
                <div className="hero-content flex-col lg:flex-row-reverse p-4 py-10">
                    <img
                        src={bannerImage}
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div className="flex flex-col lg:items-start gap-6 lg:w-1/2 max-sm:px-6">
                        <h1 className="text-5xl font-bold max-lg:text-center leading-relaxed">
                            Books to freshen up your bookshelf</h1>
                        <button className="btn px-6 text-white text-lg bg-[#23BE0A] rounded-lg hover:bg-green-700">
                            View The List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;