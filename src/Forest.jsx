import React, { useState } from "react";
import _ from "lodash";
import IncrementDecrementButtons from "./incrementDecrementButtons";
import { useAnimalContext } from "./useAnimalContext";

const Forest = () => {
  const [numTrees, setNumTrees] = useState(5);
  const [treeType, setTreeType] = useState("🌳");

  const setNumTreesBizzarely = (num) => setNumTrees(num * 5)

  const { animal, numAnimals, setNumAnimals } = useAnimalContext();

  return (
    <article style={{ fontSize: "4em" }}>
      <section>
        <span aria-label="trees">{_.times(numTrees, () => treeType)}</span>
        <span aria-label="animals">{_.times(numAnimals, () => animal)}</span>
      </section>
      <section>
        <button
          onClick={() => setTreeType(_.shuffle(["🌳", "🌲", "🌴", "🎄"])[0])}
        >
          Change tree
        </button>
        <IncrementDecrementButtons
          numItems={numTrees}
          setNumItems={setNumTreesBizzarely}
        >
          Trees
        </IncrementDecrementButtons>
        <IncrementDecrementButtons
          numItems={numAnimals}
          setNumItems={setNumAnimals}
        >
          animal
        </IncrementDecrementButtons>
      </section>
    </article>
  );
};

export default Forest;
