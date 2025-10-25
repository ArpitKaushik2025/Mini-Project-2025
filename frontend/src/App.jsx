import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signup from "./Signup/Signup.jsx";
import Login from "./Login/Login.jsx";
import Dashboard from "./Dashboard/Dashboard.jsx";
import ChatRoom from "./Chat Room/ChatRoom.jsx";

import NewQuestion from "./New/NewQuestion";
import NewCategory from "./New/NewCategory.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/chatroom" element={<ChatRoom />} />
          <Route path="/new/question" element={<NewQuestion />} />
          <Route path="/new/category" element={<NewCategory />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
