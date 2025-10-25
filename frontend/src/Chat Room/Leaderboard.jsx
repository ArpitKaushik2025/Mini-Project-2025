import "./Leaderboard.css"; // Optional scrollbar CSS

function Leaderboard() {
  const players = [
    { name: "Alice", score: 120 },
    { name: "Bob", score: 95 },
    { name: "Charlie", score: 80 },
    { name: "Diana", score: 70 },
    { name: "Eve", score: 65 },
    { name: "Eve", score: 65 },
    { name: "Eve", score: 65 },
    { name: "Eve", score: 65 },
    { name: "Eve", score: 65 },
    { name: "Eve", score: 65 },
  ];

  const medals = ["🥇", "🥈", "🥉"];

  return (
    <div class="bg-gradient-to-b from-purple-300 via-purple-400 to-purple-500 col-span-1 p-4 rounded-xl shadow-lg flex flex-col">
      <h2 class="text-2xl font-extrabold mb-4 text-purple-900 text-center">
        Leaderboard
      </h2>
      <div class="flex-1 overflow-y-auto space-y-2 leaderboard-scroll">
        {players.map((player, index) => (
          <div
            key={index}
            class={`flex items-center justify-between p-3 rounded-lg transition-all ${
              index < 3
                ? "bg-purple-200 shadow-md"
                : "bg-purple-100 hover:bg-purple-200"
            }`}
          >
            <div class="flex items-center space-x-3">
              {/* Medal icon for top 3 */}
              {index < 3 && <span class="text-xl">{medals[index]}</span>}

              {/* Avatar circle */}
              <div class="w-8 h-8 bg-purple-400 rounded-full flex items-center justify-center text-white font-bold">
                {player.name.charAt(0)}
              </div>

              <span class="font-semibold text-purple-800">{player.name}</span>
            </div>
            <span class="font-bold text-purple-900">{player.score}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Leaderboard;
