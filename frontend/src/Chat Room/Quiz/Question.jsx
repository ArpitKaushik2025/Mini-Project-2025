function Question() {
  const difficulty = "easy";
  const category = "sports";
  const qno = 1;
  const question = "Who holds the record for the most Olympic gold medals?";
  const options = ["Carl Lewis", "Michael Phelps", "Usain Bolt", "Mark Spitz"];
  return (
    <div className="flex flex-col items-center">
      <div className="category-difficulty flex justify-between text-xl px-20">
        <p className="rounded-2xl border p-4">
          <strong>Category:</strong> {category}
        </p>
        <p className="rounded-2xl border p-4">
          <strong>Difficulty:</strong> {difficulty}
        </p>
      </div>

      <br />
      <br />
      <br />

      <div className="text-4xl question content-center text-wrap px-20">
        <p>
          <strong>Q.{qno}</strong> {question}
        </p>
      </div>

      <br />
      <br />

      <div className="grid grid-cols-2 grid-rows-2 text-center gap-x-60 gap-y-8 text-2xl">
        <div className="options">
          <p className="rounded-2xl border p-4">
            <strong>a.</strong> {options[0]}
          </p>
        </div>
        <div className="options">
          <p className="rounded-2xl border p-4">
            <strong>b.</strong> {options[1]}
          </p>
        </div>
        <div className="options">
          <p className="rounded-2xl border p-4">
            <strong>c.</strong> {options[2]}
          </p>
        </div>
        <div className="options">
          <p className="rounded-2xl border p-4">
            <strong>d.</strong> {options[3]}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Question;
