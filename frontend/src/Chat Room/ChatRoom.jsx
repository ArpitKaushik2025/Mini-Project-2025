import Quiz from "./Quiz/Quiz.jsx";
import Leaderboard from "./Leaderboard.jsx";
import Chat from "./Chat.jsx";

function ChatRoom() {
  return (
    <>
      <div class="grid grid-cols-4 grid-rows-2 gap-1 h-screen text-center">
        <Leaderboard />
        <Quiz />
        <Chat />
      </div>
    </>
  );
}

export default ChatRoom;
