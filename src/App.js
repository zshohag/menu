import './App.css';
import ResponsiveAppBar from './components/Responsive/Responsive';
import CenteredTabs from './components/Option/Option';
import Foods from './components/Foods/Foods';

function App() {
  return (
    <div className="App">
       <ResponsiveAppBar/>
       <CenteredTabs/>
       <Foods/> 
     {/* <Items/> */}
    
    
    </div>
  );
}

export default App;
