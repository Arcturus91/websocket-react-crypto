import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:8080"); // replace with your own websocket server URL

export const CryptoPriceWS = React.memo(() => {
  const [priceBTC, setPriceBTC] = useState(0);
  const [priceETH, setPriceETH] = useState(0);
  useEffect(() => {
    console.log("btc/eth render");
    // Listen for incoming messages from the server
    socket.on("btcPrice", (socketData) => {
      const { symbol, price } = socketData;
      setPriceBTC(price);
    });

    socket.on("ethPrice", (socketData) => {
      const { symbol, price } = socketData;
      setPriceETH(price);
    });

    // Clean up the event listener when the component unmounts
    return () => {
      socket.off("btcPrice");
      socket.off("ethPrice");
    };
  }, []);

  return (
    <div className="CryptoPrice">
      <p>Bitcoin price ${priceBTC}</p>
      <p>Ethereum price ${priceETH}</p>
    </div>
  );
});
