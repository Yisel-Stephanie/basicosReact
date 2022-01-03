import React, { useState, useEffect } from "react";

const Scroll = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const detectar = () => setScrollY(window.pageYOffset);

    window.addEventListener("scroll", detectar);
  }, [scrollY]);

  return <h2>jajaja {scrollY} </h2>;
};

export default Scroll;
