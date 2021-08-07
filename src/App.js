import Nav from "./components/nav";
import Services from "./sections/services";
import Showcase from "./sections/showcase";
import Testimony from "./sections/testimonials";
import Why from "./sections/why";

function App() {
  return (
    <div className="App">
      <Nav />
      <Showcase />
      <Services />
      <Testimony />
      <Why />
    </div>
  );
}

export default App;
