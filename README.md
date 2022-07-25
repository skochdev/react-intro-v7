# Cutsom hooks

* If you see that you make several hooks in a row, and that it is also applicable to other components
  , that is a sign that you should organize those calls in a custom hook
* Works well when you have repeated functionality, fetching and parsing, writing to local storage etc

## Our custom hook that helps fetching and parsing data from an api

```js
import {useState, useEffect} from "react";

const localCache = {}; // or better to use local storage

export default function useBreedList(animal) {
    const [breedList, setBreedList] = useState([]);
    const [status, setStatus] = useState("unloaded");

    useEffect(() => {
        if (!animal) {
            setBreedList([]);
        } else if (localCache[animal]) {
            setBreedList(localCache[animal]);
        } else {
            requestBreedList();
        }

        async function requestBreedList() {
            setBreedList([]);
            setStatus("loading");

            const res = await fetch(
                `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
            );

            const json = await res.json();
            localCache[animal] = json.breeds || [];
            setBreedList(localCache[animal]);
            setStatus("loaded");
        }
    }, [animal]);

    return [breedList, status];
}

```
## [Prev branch](https://github.com/skochdev/react-intro-v7/blob/05-effects)
## [Next branch](https://github.com/skochdev/react-intro-v7/tree/07-component-composition)
