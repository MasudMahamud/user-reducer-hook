import './App.css';
import PatientManagement from './Components/PatientManagement/PatientManagement';
import ReducerCount from './Components/ReducerCount/ReducerCount'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
      <ReducerCount></ReducerCount>
      <PatientManagement></PatientManagement>
      </header>
    </div>
  );
}

export default App;
