import React, {useState, useEffect } from 'react'; 
import _ from 'lodash';

const Forest = () => {
  const [numTrees, setNumTrees] = useState(5);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect( () => {
    const fetchTrees = async () => {
      try {
        const randomNumberUrl =
          "https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new";

        const response = await fetch(randomNumberUrl); 
        const numTrees = await response.text();
        setNumTrees(numTrees);
        setHasLoaded(true);

      } catch (e) {
        console.error("Error fetching number of trees", e)
      }
    };

    fetchTrees();
  }, [])

  return (
    <article style={{fontSize: '4em'}}>
      { _.times(numTrees, () => ('🌳'))}
    </article>);
}

export default Forest;