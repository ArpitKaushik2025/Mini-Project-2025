import Footer from "./Footer.jsx";
import Hero from "./Hero.jsx";
import Question from "./Question.jsx";

import "./Quiz.css";

function Quiz() {
  return (
    <div className="bg-yellow-300 col-span-3 row-span-2 flex flex-col justify-between py-12">
      <Hero count={3} round={3} />
      <Question />
      <Footer round={3} />
    </div>
  );
}

export default Quiz;
