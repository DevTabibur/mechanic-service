import { Route, Routes } from "react-router-dom";
import Header from "./pages/shared/Header/Header";
import { publicRoute } from "./routes/publicRoute";




function App() {
  return (
    <>
      <Header>
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> */}
          {
            publicRoute.map( ({path, name, Component}, index) => (<Route key={index} path={path} element={<Component />} />) )
          }
        </Routes>
      </Header>
    </>
  );
}

export default App;
