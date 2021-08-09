import Nav from "./components/nav";
import Footer from "./components/footer";
import Contact from "./sections/contact";
import Services from "./sections/services";
import Showcase from "./sections/showcase";
import Testimony from "./sections/testimonials";
import Why from "./sections/why";
import './App.css'
import { useEffect, useState } from 'react'
import DotLoader from "react-spinners/DotLoader";

function App() {
  const [load, setLoader] = useState(false)

  useEffect(() => {
    setLoader(true)
    setTimeout(() => {
      setLoader(false)
    }, 2000)
  }, [])

  return (
    <div className="App">
      {
        load ?
        <DotLoader
          color={"#5F36D7"}
          loading={load}
          size={30}
        />
          :
        <div className="div">
          <Nav />
          <Showcase />
          <Services />
          <Testimony />
          <Why />
          <Contact />
          <Footer />
        </div>
          
      }
    </div>
  );
}

export default App;
