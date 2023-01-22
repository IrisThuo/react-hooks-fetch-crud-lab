import React, { useState , useEffect} from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");

  const [question , setQuestion] = useState([])

  useEffect(() => {
        fetch("http://localhost:4000/questions")
        .then((res) => res.json())
        .then((data) => setQuestion(data))
  },[])

  function addQuestions(newQuestion) {
    setQuestion([...question, newQuestion])
  }

  function deleteQuestion(id) {
    const updatedQuestions = question.filter(oldQuestion => oldQuestion.id !== id)
    setQuestion(updatedQuestions)
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm addQuestions={addQuestions}/> : <QuestionList questions={question} deleteQuestion={deleteQuestion}/>}
    </main>
  );
}

export default App;
