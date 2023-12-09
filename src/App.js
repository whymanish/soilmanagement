import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './Components/Authentication/SignUp';
import SignIn from './Components/Authentication/SignIn';
import ForgetPassword from './Components/Authentication/ForgetPassword';
function App() {
  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route exact path="/signup" element={<SignUp/>} />
    <Route exact path="/signin" element={<SignIn/>} />
    <Route exact path="/forgot" element={<ForgetPassword/>} />

   </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
