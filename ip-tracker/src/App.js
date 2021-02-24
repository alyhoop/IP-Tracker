import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
// import IPLocation from './components/IPLocation'
import Map from './components/Map'
import IpInformation from './components/IpInformation'
// import SearchBar from './components/SearchBar'

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://vpn-proxy-detection.ipify.org/api/v1?apiKey=at_hyVlu8fTCFs7utA721MugqjzgxgqH&ipAddress=8.8.8.8&")
      .then(response => setData(response.data))
  }, []);
        // {data.map(item => <li>{item.name}</li>)}
  return (
    <div className="App">
      <h2>IP Address Tracker</h2>
        {JSON.stringify(data)}
      <IpInformation />
      <Map />
    </div>
  );
}

export default App;
