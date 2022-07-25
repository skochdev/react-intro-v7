# Component composition

* Here we've split our code into more meaningful pieces. Separated our code a little


* Our Pet component now looks like this. Destructuring and using props to acquire image link

```js
const Pet = ({name, animal, breed, location, id, images}) => {
    let heroImg = "http://pet-images.dev-apis.com/pets/none.jpg";

    if (images) {
        heroImg = images[0];
    }
    return (
        <div>
            <a href={`/details/${id}`} className="pet">
                <div className="image-container">
                    <img src={heroImg} alt={name}/>
                </div>
                <div className="info">
                    <h1>{name}</h1>
                    <h2>
                        {animal} - {breed} - {location}
                    </h2>
                </div>
            </a>
        </div>
    );
};

export default Pet;

```

* And Result component ( I'd rather called it ResultsList but who cares)
* This component maps our results onto our Pet component.
* Using ternary operator to render results or showing a placeholder text

```js
import Pet from "./Pet";

const Results = ({pets}) => {
    return (
        <>
            {pets.length > 0 ? (
                <ul>
                    {pets.map(({name, breed, animal, id, images, city, state}) => (
                        <Pet
                            key={id}
                            name={name}
                            breed={breed}
                            animal={animal}
                            images={images}
                            location={`${city}, ${state}`}
                            id={id}
                        />
                    ))}
                </ul>
            ) : (
                <h2>No pets were found</h2>
            )}
        </>
    );
};

export default Results;

```

* We've also wrapped our `<App/>` component with `<StrictMode>`
* It basically signals us if we're doing something in not 'React' way

```js
import {render} from "react-dom";
import {StrictMode} from "react";
import SearchParams from "./SearchParams";

const App = () => {
    return (
        <StrictMode>
            <div>
                <h1>Adopt Me</h1>
                <SearchParams/>
            </div>
        </StrictMode>
    );
};

render(<App/>, document.querySelector("#root"));

```
## [Prev branch](https://github.com/skochdev/react-intro-v7/blob/06-custom-hooks)
## [Next branch](https://github.com/skochdev/react-intro-v7/tree/08-react-capabilities)
