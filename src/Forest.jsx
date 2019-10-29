import React, { useState, useEffect } from "react";
import _ from "lodash";
import IncrementDecrementButtons from "./incrementDecrementButtons";
import { useAnimalContext } from "./useAnimalContext";

const Forest = () => {
  const [numTrees, setNumTrees] = useState(5);
  const [treeType, setTreeType] = useState("🌳");

  const [hasLoaded, setHasLoaded] = useState(false);

  const { animal, numAnimals, setNumAnimals } = useAnimalContext();

  useEffect(() => {
    const fetchTrees = async () => {
      try {
        const randomNumberUrl =
          "https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new";

        const response = await fetch(randomNumberUrl);
        const numTrees = await response.text();
        setNumTrees(parseInt(numTrees));
        setHasLoaded(true);
      } catch (e) {
        console.error("Error fetching number of trees", e);
      }
    };

    fetchTrees();
  }, []);

  return (
    <article style={{ fontSize: "4em" }}>
      <section>
        {_.times(numTrees, () => treeType)}
        {_.times(numAnimals, () => animal)}
      </section>
      <section>
        <button
          onClick={() => setTreeType(_.shuffle(["🌳", "🌲", "🌴", "🎄"])[0])}
        >
          Change tree
        </button>
        <IncrementDecrementButtons
          numItems={numTrees}
          setNumItems={setNumTrees}
        >
          {" "}
          Trees{" "}
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
