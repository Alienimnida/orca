import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import OnBoarding from "./pages/OnBoarding";
import GenrePage from "./pages/GenrePage";
import { BrowserRouter, Routes, Route } from "react-router-dom"
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/dashboard"} element={<Dashboard />} />
        <Route path={"/onboarding"} element={<OnBoarding />} />
        <Route path={"/explore"} element={<GenrePage />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App
