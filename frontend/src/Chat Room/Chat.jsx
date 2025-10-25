import "./Chat.css";

function Chat({ categoryColor = "bg-gray-100", currentUser = "Alice" }) {
  // lighter bg
  const messages = [
    { user: "Alice", text: "Hey, anyone ready for this round?" },
    { user: "Bob", text: "Yes! Let's go!" },
    { user: "Charlie", text: "Good luck everyone!" },
    { user: "Alice", text: "Thanks!" },
  ];

  return (
    <div
      class={`col-span-1 flex flex-col ${categoryColor} p-4 rounded-lg shadow-lg`}
    >
      <h2 class="text-xl font-bold mb-4">Chat</h2>

      <div class="flex-1 overflow-y-auto mb-2 chat-scroll space-y-2">
        {messages.map((msg, idx) => {
          const isOwn = msg.user === currentUser;
          return (
            <div
              key={idx}
              class={`flex items-start space-x-2 ${
                isOwn ? "justify-start" : "justify-end"
              }`}
            >
              {!isOwn && (
                <div class="w-6 h-6 bg-purple-400 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  {msg.user.charAt(0)}
                </div>
              )}

              <div
                class={`p-2 rounded-lg shadow-sm max-w-[70%] text-sm ${
                  isOwn
                    ? "bg-white rounded-tl-none"
                    : "bg-purple-200 text-purple-900 rounded-tr-none"
                }`}
              >
                <span class="font-semibold">{isOwn ? "You" : msg.user}: </span>
                <span>{msg.text}</span>
              </div>

              {isOwn && (
                <div class="w-6 h-6 bg-white rounded-full flex items-center justify-center text-black text-xs font-bold">
                  {msg.user.charAt(0)}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div class="mt-auto relative">
        <input
          type="text"
          id="message"
          placeholder="Start typing to send a message"
          class="w-full p-2 pr-12 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
        />
        <button class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 10l9-3 8-2-3 8-2 9-9-3-3-9z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Chat;
