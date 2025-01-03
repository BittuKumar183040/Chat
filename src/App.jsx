import './styles/App.css';
import NavBar from './components/NavBar';
import Sidebar from './section/Sidebar';
import ChatBox from './section/ChatBox';
import socket from './socket/socket';

function App() {
  return (
    <div className=" container h-svh mx-auto w-full flex flex-col">
      <NavBar />
      <div className=" flex " style={{ height: 'calc(100% - 56px )' }}>
        <Sidebar />
        <ChatBox />
      </div>
    </div>
  );
}

export default App;
