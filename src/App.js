import { Route, Routes } from "react-router-dom";
import Header from "./pages/shared/Header/Header";
import { publicRoute } from "./routes/publicRoute";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";



function App() {

  useEffect(() =>{
    AOS.init();
  }, [])

  return (
    <>
      <Header>
        <Routes>
          {
            publicRoute.map( ({path, name, Component}, index) => (<Route key={index} path={path} element={<Component />} />) )
          }
        </Routes>
      </Header>
    </>
  );
}

export default App;
