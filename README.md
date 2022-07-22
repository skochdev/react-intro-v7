# Core React Concepts

* JSX. Install a plugin for eslint
  `npm install -D eslint-plugin-import@2.25.4 eslint-plugin-jsx-a11y@6.5.1 eslint-plugin-react@7.28.0
  `
* Now we must edit our `package.json` :

```
{
  "extends": [
    "eslint:recommended",
    "plugin: import/errors", // +
    "plugin: react/recommended", // +
    "plugin: jsx-a11y/recommended", // +
    // prettier must come last in this array
    "prettier"
  ],
  "plugins": [
    "react", // +
    "import", // +
    "jsx-a11y" // +
  ],
  "rules": {
    //
    "react/prop-types": 0, // +
    // now eslint won't beg us to import React. to disable it only in one file " eslint-disable react/prop-types "
    "react/react-in-jsx-scope": 0 // +
  },
  "parserOptions": {
    "ecmaVersion": 2022,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  },
  "settings": { // +
    "react": { // +
      "version": "detect" // +
    }
  }
}
```

## useState hook

```js
import {useState} from "react";

const SearchParams = () => {

    const [location, setLocation] = useState("");

    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">Location: {location}</label>
                <input
                    id="location"
                    value={location}
                    placeholder="Location"
                    onChange={(e) => setLocation(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default SearchParams;
```

1. The rule of thumb : never put hooks in conditionals or loops
2. Performance is better when you don't use anonymous functions,
   but in this case is simple enough to leave it as is.

* install another eslint plugin for hooks, it'll signal when you call your hooks imrpoperly :
  ` npm i eslint-plugin-react-hooks@4.3.0 `

* update eslintrc

```
{
  "extends": [
    "eslint:recommended",
    "plugin: import/errors",
    "plugin: react/recommended",
    "plugin: jsx-a11y/recommended",
    "plugin: react-hooks/recommended", // +
    // prettier must come last in this array
    "prettier"
  ],
  "plugins": [
    "react",
    "import",
    "jsx-a11y",
    "react-hooks" // +
  ],
```