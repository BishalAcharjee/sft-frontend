import "./App.css";
import Header from "./Components/Header/Header";
import Admin from "./pages/Admin/Admin";
import Blog from "./pages/Blog/Blog";
import Booth from "./pages/Booth/Booth";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Form from "./pages/Form/Form.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BoothForm from "./pages/Booth/BoothForm";
import BoothFormTwo from "./pages/Booth/BoothFormTwo";
import MedicineListOne from "./pages/Admin/MedicineListOne";
import MedicineListTwo from "./pages/Admin/MedicineListTwo";
import AdminMedicineOne from "./pages/Admin/AdminMedicineOne";
import AdminMedicineTwo from "./pages/Admin/AdminMedicineTwo";

function App() {
  return (
    <div className="bg-light">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/booth" element={<Booth />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/form" element={<Form />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/boothform" element={<BoothForm />}></Route>
          <Route path="/boothformtwo" element={<BoothFormTwo />}></Route>
          <Route path="/boothoneinfo" element={<MedicineListOne />}></Route>
          <Route path="/boothtwoinfo" element={<MedicineListTwo />}></Route>
          <Route
            path="/adminboothoneinfo"
            element={<AdminMedicineOne />}
          ></Route>
          <Route
            path="/adminboothtwoinfo"
            element={<AdminMedicineTwo />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
