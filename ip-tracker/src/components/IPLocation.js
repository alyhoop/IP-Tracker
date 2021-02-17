import React, { useEffect, useState } from 'react'
import axios from 'axios'

function IPLocation() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://vpn-proxy-detection.ipify.org/api/v1?apiKey=at_hyVlu8fTCFs7utA721MugqjzgxgqH&ipAddress=8.8.8.8&")
      .then(response => setData(response.data));
  }, []);

  return (
    <div className="ip__location">
      {JSON.stringify(data)}
    </div>
  );

}

export default IPLocation
