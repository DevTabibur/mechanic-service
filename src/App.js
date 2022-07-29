import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import Header from "./pages/shared/Header/Header";

function App() {
  return (
    <>
      <Header>
        <Home></Home>
        <About></About>
        <Services></Services>

        <Contact></Contact>
      </Header>
    </>
  );
}

export default App;
