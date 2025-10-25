function Question() {
  const difficulty = "easy";
  const category = "sports";
  const qno = 1;
  const question = "Who holds the record for the most Olympic gold medals?";
  const options = ["Carl Lewis", "Michael Phelps", "Usain Bolt", "Mark Spitz"];

  return (
    <div className="w-full quiz-card flex flex-col items-center space-y-10">
      <div className="category-difficulty w-full flex justify-between items-center px-6">
        <p className="pill text-base md:text-lg">
          <strong>Category:</strong>{" "}
          <span className="font-normal">{category}</span>
        </p>
        <p className="pill text-base md:text-lg">
          <strong>Difficulty:</strong>{" "}
          <span className="font-normal">{difficulty}</span>
        </p>
      </div>

      <div className="w-full px-6 text-center">
        <h2 className="quiz-question text-2xl md:text-4xl font-semibold">
          <strong>Q.{qno}</strong> {question}
        </h2>
      </div>

      <div className="w-full px-6 grid grid-cols-2 gap-x-20 gap-y-8 text-center">
        <div className="options">
          <div className="quiz-option">
            <strong className="mr-2">a.</strong> {options[0]}
          </div>
        </div>

        <div className="options">
          <div className="quiz-option">
            <strong className="mr-2">b.</strong> {options[1]}
          </div>
        </div>

        <div className="options">
          <div className="quiz-option">
            <strong className="mr-2">c.</strong> {options[2]}
          </div>
        </div>

        <div className="options">
          <div className="quiz-option">
            <strong className="mr-2">d.</strong> {options[3]}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question;
