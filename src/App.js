import './App.css';
import { NewHomes, NavBar, MarketingFooter } from './ui-components';

function App() {
  return (
    <div className="App">
      <NavBar width={"100vw"}/>
      <NewHomes isPaginated itemsPerPage={3}/>
      <MarketingFooter width={"100vw"}/>
    </div>
  );
}

export default App;
