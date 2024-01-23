import { createContext, useState, useEffect } from "react";

export const ConfettiContext = createContext();

export const ConfettiProvider = ({ children }) => {
  const [confetti, setConfetti] = useState(false);

  function onClickOnSwitch() {
    setConfetti(!confetti);
  }

  return (
    <ConfettiContext.Provider
      value={{
        confetti,
        onClickOnSwitch,
      }}
    >
      {children}
    </ConfettiContext.Provider>
  );
};
