import { Route, Routes } from "react-router-dom";
import Header from "./pages/shared/Header/Header";
import { publicRoute } from "./routes/publicRoute";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Services from "./pages/Services/Services";
import RequireAuth from "./authentication/RequireAuth";
import About from "./pages/About/About";
import { privateRoute } from "./routes/privateRoute";

function App() {
  // AOS animation
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Header>
        <Routes>

          {publicRoute.map(({ path, name, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
           {/* protected route */}
          <Route element={<RequireAuth></RequireAuth>}>
            {privateRoute.map(({ path, name, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
          </Route>

        </Routes>
      </Header>
    </>
  );
}

export default App;
