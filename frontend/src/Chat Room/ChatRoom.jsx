import "./ChatRoom.css";

import Quiz from "./Quiz";
import Leaderboard from "./Leaderboard";
import Chat from "./Chat";

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
