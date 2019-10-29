import React, { useState } from "react";

const Context = React.createContext();

export const useAnimalContext = () => {
  const AnimalContext = React.useContext(Context);
  if (!AnimalContext) {
    throw new Error("Cannot use `useAnimalContext` outside of a Provider");
  }
  return AnimalContext;
};

export const AnimalProvider = ({ children }) => {
  const [numAnimals, setNumAnimals] = useState(1);

  return (
    <Context.Provider value={{ animal: "🐿",  numAnimals, setNumAnimals}}>{children}</Context.Provider>
  );
};
