import Banner from "../Components/Banner";
import Faq from "../Components/Faq";
import MobileApp from "../Components/MobileApp";
import Package from "../Components/Package";
import Container from "../Shared/Container";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Container><MobileApp></MobileApp></Container>
            <Container><Package></Package></Container>
            <Container><Faq></Faq></Container>
            <Footer></Footer>
        </div>
    );
};

export default Home;