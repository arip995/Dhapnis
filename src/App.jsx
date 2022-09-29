import Content from "./Components/Content";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";

const App = () => {
  return (
    <div className="min-w-full min-h-[100vh] bg-[#f6f6f6]">
      <Navbar className=""/>
      <Header className=""/>
      <div className="w-full flex mx-3">
        <div className="w-1/5">
        <Sidebar className=""/>
        </div>
        <div className="w-full mx-3">
          <Content/>
        </div>
      </div>
    </div>
  );
}

export default App;
