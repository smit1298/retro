import Dashboard from "./Components/Sidebar/Dashboard/Dashboard";
import Sidebar from "./Components/Sidebar/Sidebar/Sidebar";

function App() {
  return (
    <>
     <div className="grid grid-cols-4">
      <Sidebar />
      <Dashboard />
     </div>
    </>
  );
}

export default App;
