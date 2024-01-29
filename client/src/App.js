import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BrowserView } from "react-device-detect";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import MainPage from "./desktop/MainPage"


export default function App () {
  return (
    <BrowserRouter>
      <BrowserView>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored" />
      </BrowserView>
    </BrowserRouter>
  )
}