function Hero({ count, round }) {
  const timer = 1;
  return (
    <div className="flex justify-between px-16">
      <div className="flex items-center gap-4">
        <p className="text-2xl">Timer:</p>{" "}
        <div className="timer border content-center text-xl">
          <strong>{timer}</strong>
        </div>
      </div>
      <div className="border rounded-2xl py-4 px-8">
        <p className="text-2xl">Round {round}</p>
      </div>
      <div className="flex items-center gap-4">
        <p className="text-2xl">Player Count:</p>{" "}
        <div className="player-count border content-center text-xl">
          <strong>{count}</strong>
        </div>
      </div>
    </div>
  );
}

export default Hero;
