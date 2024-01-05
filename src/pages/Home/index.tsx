import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MainContainer from "../../components/MainContainer";
import Hero from "../../components/Hero";

const Home = () => {
  return (
    <>
      <Navbar />
      <section>
        <Hero />
        <MainContainer />
        <Footer />
      </section>
    </>
  );
};

export default Home;