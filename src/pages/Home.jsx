import Hero from "../components/Hero/Hero";
// import Services from "../components/Services/Services.jsx";
// import Banner from "../components/Banner/Banner.jsx";
// import AppStore from "../components/AppStore/AppStore.jsx";
// import PdfReader from "../components/PdfReader/PdfReader.jsx";
// import Testimonial from "../components/Testimonial/Testimonial.jsx";
// import Books from "../components/BooksSlider/Books.jsx";
import { useState } from "react";


const Home = () => {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Hero handleOrderPopup={handleOrderPopup} />
      {/* <Services handleOrderPopup={handleOrderPopup} /> */}
      {/* <Banner /> */}
      {/* <AppStore /> */}
      {/* <PdfReader /> */}
      {/* <Books /> */}
      {/* <Testimonial /> */}
    </div>
  );
};

export default Home;