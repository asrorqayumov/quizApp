import { createContext, useState } from "react";

const QuestionsContext = createContext();

export function QuestionsProvider({ children }) {
  const [questions, setQuestions] = useState([]);
  return (
    <QuestionsContext.Provider value={{ questions, setQuestions }}>
      {children}
    </QuestionsContext.Provider>
  );
}

export default QuestionsContext;
