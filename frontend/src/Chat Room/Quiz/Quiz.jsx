import Footer from "./Footer.jsx";
import Hero from "./Hero.jsx";
import Question from "./Question.jsx";

import "./Quiz.css";

function Quiz() {
  return (
    <div className="bg-gradient-to-br from-[#ede9fe] via-[#f5d0fe] to-[#f0abfc] quiz-bg col-span-3 row-span-2 flex flex-col justify-between py-10 px-8">
      <div className="space-y-10 flex flex-col flex-1">
        <Hero count={3} round={3} />
        <Question />
      </div>
      <Footer round={3} />
    </div>
  );
}

export default Quiz;
