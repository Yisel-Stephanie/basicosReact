import React, { useEffect, useState } from "react";
import Hora from "./Hora";
//Logica
const Reloj = () => {
  const [hora, setHora] = useState(new Date().toLocaleString());
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    visible &&
      setInterval(() => {
        setHora(new Date().toLocaleString());
      }, 1000);
  }, [visible]);

  const play = () => {
    setVisible(!visible);
  };

  return (
    <>
      <h1>Mi reloj</h1>
      <button onClick={play}> play /stop </button>
      {visible && <Hora hora={hora} />}
    </>
  );
};

export default Reloj;
