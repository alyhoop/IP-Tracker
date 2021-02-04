import './App.css';
import IPLocation from './components/IPLocation'
import Map from './components/Map'
import IpInformation from './components/IpInformation'
import SearchBar from './components/SearchBar'

function App() {
  return (
    <div className="App">
      <h2>IP Address Tracker</h2>
      <IPLocation />
      <SearchBar />
      <IpInformation />
      <Map />
    </div>
  );
}

export default App;
