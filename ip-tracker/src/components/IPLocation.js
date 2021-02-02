import React, { useEffect, useState } from 'react'
import axios from 'axios'

function IPLocation() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://vpn-proxy-detection.ipify.org/api/v1?apiKey=at_hyVlu8fTCFs7utA721MugqjzgxgqH&ipAddress=8.8.8.8&")
      .then(res =>
        console.log(res))
      .then(
        (res) => {
          setData(res);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {data.map((data) => data.data.ip)}
      </ul>
    );
  }
}

export default IPLocation
