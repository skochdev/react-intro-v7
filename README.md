# useEffect

* this effect will be called everytime state or props change

```js
useEffect(() => {
    requestPets();
});
```

* this effect will be called everytime breed changes

```js
useEffect(() => {
    requestPets();
}, [breed]); // deps array
```

* this effect will be called once after initial render

```js
useEffect(() => {
    requestPets();
}, []); // deps array
```

* And this is our final result

```js
import {useState, useEffect} from "react";
import Pet from "./Pet";

const ANIMALS = ["dog", "cat", "bird", "horse", "snake"];

const SearchParams = () => {
    const [location, setLocation] = useState("");
    const [animal, setAnimal] = useState("");
    const [breed, setBreed] = useState("");
    const [pets, setPets] = useState([]);

    const breeds = [];

    useEffect(() => {
        requestPets();
    }, []);

    async function requestPets() {
        const res = await fetch(
            `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=&{{location}&breed=${breed}`
        );
        const json = await res.json();

        setPets(json.pets);
    }

    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">Location</label>
                <input
                    id="location"
                    value={location}
                    placeholder="Location"
                    onChange={(e) => setLocation(e.target.value)}
                />
                <label htmlFor="animal">
                    Animal
                    <select
                        name=""
                        id="animal"
                        value={animal}
                        onChange={(e) => {
                            setAnimal(e.target.value);
                            setBreed("");
                        }}
                        onBlur={(e) => {
                            setAnimal(e.target.value);
                            setBreed("");
                        }}
                    >
                        <option value=""/>
                        {ANIMALS.map((animal) => (
                            <option key={animal} value={animal}>
                                {animal}
                            </option>
                        ))}
                    </select>
                </label>
                <label htmlFor="breed">
                    Breed
                    <select
                        name=""
                        id="breed"
                        value={breed}
                        onChange={(e) => {
                            setBreed(e.target.value);
                        }}
                        onBlur={(e) => {
                            setBreed(e.target.value);
                        }}
                    >
                        <option value=""/>
                        {breeds.map((breed) => (
                            <option key={breed} value={breed}>
                                {breed}
                            </option>
                        ))}
                    </select>
                </label>
                <button type="submit">Submit</button>
            </form>
            <ul>
                {pets.map(({name, breed, animal, id}) => (
                    <Pet key={id} name={name} breed={breed} animal={animal}/>
                ))}
            </ul>
        </div>
    );
};

export default SearchParams;

```

