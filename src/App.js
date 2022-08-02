import UserInput from './components/UserInput/UserInput';
import UserLocationInfo from './components/UserLocationInfo/UserLocationInfo';
import UserLocationMap from './components/UserLocationMap/UserLocationMap';
import LastSearchInfo from './components/LastSearchInfo/LastSearchInfo';
import LastSearchMap from './components/LastSearchMap/LastSearchMap';
import AllSearches from './components/AllSearches/AllSearches';

import './App.css';

function App() {
  return (
    <div className="App">
      <UserInput />
      <UserLocationInfo />
      <UserLocationMap />
      <LastSearchInfo />
      <LastSearchMap />
      <AllSearches />
    </div>
  );
}

export default App;
