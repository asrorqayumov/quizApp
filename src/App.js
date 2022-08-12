import { Route, Routes } from "react-router";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Quiz from './pages/quiz/index';


function App() {
  return (
    <>
       <Navbar />
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
       </Routes>
    </>
  );
}

export default App;
