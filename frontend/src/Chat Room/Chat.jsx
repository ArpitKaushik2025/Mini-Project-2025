import "./Chat.css"; // Write the vanilla CSS for chat in Chat.css if needed.

function Chat() {
  return (
    <div class="bg-green-300 col-span-1">
      Chat
      <div class="mb-4">
        <input
          type="text"
          id="message"
          placeholder="Start typing to send a message"
          class="w-full p-2 border border-white-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sticky bottom-full"
        />
      </div>
    </div>
  );
}

export default Chat;
