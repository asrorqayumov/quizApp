import { Route, Routes } from "react-router";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Quiz from "./pages/quiz/index";
import { QuestionsProvider } from "./context/questions";

function App() {
  return (
    <>
      <QuestionsProvider>
        <Navbar />
        <Routes>
          <Route path="/quizApp" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </QuestionsProvider>
    </>
  );
}

export default App;
