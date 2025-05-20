import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AboutUs from "./pages/AboutUs";
import Academics from "./pages/Academics";
import StudentLife from "./pages/StudentLife";
import Contacts from "./pages/Contacts";
import Admissions from "./pages/Admissions";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
      <Routes>
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      <Routes>
        <Route path="/academics" element={<Academics />} />
      </Routes>
      <Routes>
        <Route path="/admissions" element={<Admissions />} />
      </Routes>
      <Routes>
        <Route path="/student-life" element={<StudentLife />} />
      </Routes>
      <Routes>
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
