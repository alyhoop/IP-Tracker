import './App.css';
import IPLocation from './components/IPLocation'
import Map from './components/Map'

function App() {
  return (
    <div className="App">
      <h2>IP Address Tracker</h2>
      <IPLocation />

      placeholder=Search for any IP address or domain

      <h6>IP Address</h6>
      <h6>Location</h6>
      <h6>Timezone</h6>
        UTC /* add offset value dynamically using the API*/
      <h6>ISP</h6>
      <Map />
    </div>
  );
}

export default App;
