import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signup from "./Signup/Signup";
import Login from "./Login/Login";
import Dashboard from "./Dashboard/Dashboard";
import ChatRoom from "./Chat Room/ChatRoom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/chatroom" element={<ChatRoom />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
