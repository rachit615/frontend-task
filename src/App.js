import "./App.css";
import Exam from "./Exam/index.js";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/header/header.js";
import Main from "./layout/Main/Main.jsx";

function App() {
  return (
    <div className="appHome">
      <Sidebar />
      <Main>
        <Header />
        <div className="contentBody">
          <Exam />
        </div>
      </Main>
    </div>
  );
}

export default App;
