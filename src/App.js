import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import { useAuth } from "./components/context/authContext";
import { getRoutes } from "./components/navigateion/routes";
import './app.scss'
import { Header } from "./components/navigateion/header/header";
import { Register } from "./pages/register/register";
import { Main } from "./pages/main/main";


function App() {
  const { isAuth } = useAuth()

  return (

    <div className="body__container">
      <div className="router__container">
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Main />} />
          </Routes>
        </BrowserRouter>

      </div>
    </div>

  );
}

export default App;
