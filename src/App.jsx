// import { Counter } from './features/counter/Counter';
import Home from "./pages/Home";
import { Routes, Route, Router } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignupPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
