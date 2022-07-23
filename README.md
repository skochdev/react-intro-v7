# React capabilities

## React Router

* Created new file `Details.js`
* install router itself `npm i react-router-dom@6.2.1`
* `import {BrowserRouter, Routes, Route} from 'react-router-dom';` into App component

Adjust our `<App/>` component:

```js
import {render} from "react-dom";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {StrictMode} from "react";
import SearchParams from "./SearchParams";
import Details from "./Details";

const App = () => {
    return (
        <StrictMode>
            <BrowserRouter>
                <div>
                    <h1>Adopt Me</h1>
                    <Routes>
                        <Route path="/details/:id" element={<Details/>}/>
                        <Route path="/" element={<SearchParams/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </StrictMode>
    );
};

render(<App/>, document.querySelector("#root"));

```

* Now we have to change our Pet component to comply with Router
* `<a>` changed to `<Link>` and `href` change to `to`
* `<Link/>` is used to mark our internal relative paths, not the all anchor tags

```js
import {Link} from "react-router-dom";

const Pet = ({name, animal, breed, location, id, images}) => {
    let heroImg = "http://pet-images.dev-apis.com/pets/none.jpg";

    if (images) {
        heroImg = images[0];
    }
    return (
        <div>
            <Link to={`/details/${id}`} className="pet">/*

                <div className="image-container">
                    <img src={heroImg} alt={name}/>
                </div>
                <div className="info">
                    <h1>{name}</h1>
                    <h2>
                        {animal} - {breed} - {location}
                    </h2>
                </div>
            </Link>
        </div>
    );
};

export default Pet;

```

* And also lets add a `<Link/>` to our logo

```js
import {render} from "react-dom";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import {StrictMode} from "react";
import SearchParams from "./SearchParams";
import Details from "./Details";

const App = () => {
    return (
        <StrictMode>
            <BrowserRouter>
                <div>
                    <header>
                        <Link to="/">
                            <h1>Adopt Me</h1>
                        </Link>
                    </header>
                    <Routes>
                        <Route path="/details/:id" element={<Details/>}/>
                        <Route path="/" element={<SearchParams/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </StrictMode>
    );
};

render(<App/>, document.querySelector("#root"));

```

## Some Class components

* I didn't note anything that I wasn't aware of, so nothing special here. Although the code is changed, so I left the
  retrospective parts above