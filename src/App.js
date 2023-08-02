import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import RegiList from './components/RegiList';
import RegiModify from './components/RegiModify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <BrowserRouter>
    <div>
        <h1 className="pretty-font fw-bold">React Simple Application📃</h1>
        <hr/>
        <div className='container mt-3'>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/regi' element={<RegiList />}/>
            <Route path='/regi/modify/:id' element={<RegiModify />} />
          </Routes>
        </div>
    </div>
    </BrowserRouter>
    <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
    </>
  );
}

export default App;
