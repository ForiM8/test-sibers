import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import { useAuth } from "./components/context/authContext";
import './app.scss'
import { Header } from "./components/navigation/header/header";
import { Register } from "./pages/register/register";
import { Main } from "./pages/main/main";
import { UseUserContext } from "./components/context/userContext";
import { UseModalRegisterContext } from "./components/context/modalContext";


function App() {
  const { isAuth } = useAuth()

  return (

    <div className="body__container">
      <div className="router__container">

        <Header />

        <BrowserRouter>
          <UseUserContext>
            <UseModalRegisterContext>
              <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/" element={<Main />} />
              </Routes>
            </UseModalRegisterContext>
          </UseUserContext>
        </BrowserRouter>

      </div>
    </div>

  );
}

export default App;
