import ErrorPage from "../errorPage/ErrorPage";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <ErrorPage></ErrorPage>
            <Footer></Footer>
        </div>
    );
};

export default Root;