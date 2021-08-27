import './App.css';
import SearchBox from './Components/SearchBox';
import LocationInfo from './Components/LocationInfo';
import LocationContainer from './Components/LocationContainer';

function App() {





  return ( <div>
    <div className="topHeader">
      {imaUrl}
    </div>
    <SearchBox />
    <LocationInfo />
    <LocationContainer  imaUrl={imaUrl} />
    </div>
  );
}

export default App;
