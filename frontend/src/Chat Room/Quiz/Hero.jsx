function Hero({ count, round }) {
  const timer = 1;
  return (
    <div className="flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <p className="text-lg md:text-2xl font-medium">Timer:</p>{" "}
        <div className="timer">
          <span className="text-lg md:text-xl">{timer}</span>
        </div>
      </div>

      <div className="pill">
        <p className="text-lg md:text-2xl font-medium">Round {round}</p>
      </div>

      <div className="flex items-center gap-4">
        <p className="text-lg md:text-2xl font-medium">Player Count:</p>{" "}
        <div className="player-count">
          <span className="text-lg md:text-xl">{count}</span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
