import Dashboard from "./Components/Sidebar/Dashboard/Dashboard";
import Sidebar from "./Components/Sidebar/Sidebar/Sidebar";

function App() {
  return (
    <div>
     <div className="grid md:grid-flow-row lg:grid-flow-col">
      <Sidebar />
      <Dashboard />
     </div>
    </div>
  );
}

export default App;
