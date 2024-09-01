import Carousel from "./components/Carousel/Carousel";
import Dashboard from "./components/Dashboard/Dashboard";
import Footer from "./components/Footer/Footer";
import Funds from "./components/Funds/Funds";
import GoTop from "./components/GoTop/GoTop";
import Hero from "./components/Hero/Hero";
import Markets from "./components/Markets/Markets";
import NavBar from "./components/NavBar/NavBar";
import Processes from "./components/Processes/Processes";
import Subscribe from "./components/Subscribe/Subscribe";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <GoTop />
      <Carousel />
      <Processes />
      <Markets />
      <Dashboard />
      <Funds />
      <Subscribe />
       <Footer />
    </>
  );
}

export default App;
