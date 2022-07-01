import Dashboard from "./Components/Sidebar/Dashboard/Dashboard";
import Sidebar from "./Components/Sidebar/Sidebar/Sidebar";

function App() {
  return (
    <>
     <div className="flex justify-between">
      <Sidebar />
      <Dashboard />
     </div>
    </>
  );
}

export default App;
