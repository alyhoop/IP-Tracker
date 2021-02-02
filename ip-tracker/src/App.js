import './App.css';
import IPLocation from './components/IPLocation'

function App() {
  return (
    <div className="App">


      IP Address Tracker
      <IPLocation />

      Search for any IP address or domain

      IP Address
      Location
      Timezone
        UTC /* add offset value dynamically using the API*/
      ISP

    </div>
  );
}

export default App;
