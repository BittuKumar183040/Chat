import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChatPage from "./routes/ChatPage";
import Landing from "./routes/Landing";
import "./styles/App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/chat" element={<ChatPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
