import Featured from "../../components/featured/Featured";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Homeloves from "../../components/homeloves/Homeloves";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertylist/PropertyList";
import "./home.css";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <div className="homeTitle">Browse by property type</div>
        <PropertyList />
        <div className="lovesTitle">Homes guests love</div>
        <Homeloves />
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
