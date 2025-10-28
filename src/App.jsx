import { Fragment } from "react";
import { HeadingHero } from "./utils/HeadingHero";
import Navbar from "./components/navbar";
import Home from "./components/Home";
import About from "./components/about";
import Skills from "./components/skills";
import Expricence from "./components/Expricence";
import Portfolio from "./components/portfolio";
import Contract from "./components/contract";
import Footer from "./components/footer";

const App = () => {
  return (
    <Fragment>
      <div className="min-h-screen bg-[#202020]">
        <Navbar />
        <Home />
        <About/>
        <Skills />
        <Expricence/>
        <Portfolio />
        <Contract />
        <Footer />

      </div>
    </Fragment>
  );
};

export default App;
