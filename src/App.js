import Dashboard from "./Components/Sidebar/Dashboard/Dashboard";
import Sidebar from "./Components/Sidebar/Sidebar/Sidebar";

function App() {
  return (
    <>
     <div className="md:flex lg:grid lg:grid-cols-4">
      <Sidebar />
      {/* <Dashboard /> */}
     </div>
    </>
  );
}

export default App;
