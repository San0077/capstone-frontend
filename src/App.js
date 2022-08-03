import './App.css';
import {DataProvider} from './context/context';
import Router from './router';
import Query from './query';
import Chart from './chart';
function App() {

  return (
    <div className="App">     
      <DataProvider>  
        <Router/> 
        <Query/> 
        <Chart/> 
      </DataProvider>     
     </div>
  );
}

export default App;