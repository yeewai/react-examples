import React from "react";

import Forest from "./Forest";
import { AnimalProvider } from "./useAnimalContext";

function App() {
  return (
    <AnimalProvider>
      <Forest />
    </AnimalProvider>
  );
}

export default App;
