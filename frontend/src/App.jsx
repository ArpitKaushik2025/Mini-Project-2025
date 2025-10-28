import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signup from "./Signup/Signup.jsx";
import Login from "./Login/Login.jsx";
import Dashboard from "./Dashboard/Dashboard.jsx";
import ChatRoom from "./Chat Room/ChatRoom.jsx";

import NewQuestion from "./New/NewQuestion";

import NotFound from "./NotFound.jsx";
import Restricted from "./Restricted.jsx";

import Admin from "./Admin/Admin.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/chatroom" element={<ChatRoom />} />
          <Route path="/new/question" element={<NewQuestion />} />
          <Route path="/restricted" element={<Restricted />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/new/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
