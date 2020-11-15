import React,{useState} from 'react';
import data from './data';
import SingleQuestion from './Question';

function App() {
  const [questions,setQuestions] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>questions and Answers about login</h3>
        <section className="infp">
          {
            questions.map((question) => {
              return <SingleQuestion key={question.id} {...question}/>
            })
          }
        </section>
      </div>
    </main>
  );
}

export default App;
