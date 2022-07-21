# JS tools

1. Installed prettier

```
npm install -D prettier
```

2. Add "format" to scripts, so we can use it through cli (for some reason, idk)

```
"scripts": {
    "format": "prettier --write \"src/**/*.{js,ts,jsx,tsx,css,scss,html}\""
  },
```

3. `package-lock.json` file is used on production to lock the versions of all packages to the specific ones.If you
   somehow damaged `package-lock.json` file, just `rm package-lock.json` it and run `npm i` again


4. Installed **eslint** and **eslint prettier config**
   `npm install eslint@8.8.0 eslint-config-prettier@8.3.0 -D`


5. Create `.eslintrc.json` config file with some bare-boned settings:

```
{
  "name": "react-intro-v7",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "parcel src/index.html",
    "format": "prettier --write \"src/**/*.{js,ts,jsx,tsx,css,scss,html}\"",
    "format:check": "prettier --check \"src/**/*.{js,ts,jsx,tsx,css,scss,html}\"",
    "lint": "eslint \"src/**/*.{js,ts,jsx,tsx,css,scss,html}\" --quiet"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com//skochdev/react-intro-v7.git"
  },
  "browserslist": [
    "last 2 Chrome versions"
  ],
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "eslint": "^8.8.0",
    "eslint-config-prettier": "^8.3.0",
    "parcel": "^2.3.2",
    "prettier": "^2.7.1",
    "process": "^0.11.10"
  },
  "dependencies": {
    "react": "^17.0.2",
    "react-dom": "^17.0.2"
  }
}
```

6. To pass a flag to scripts, which you want to run with some extra options ,
   use `npm run lint -- --fix`, the `-- <--flag>` means **apply it to** _lint_

## ======== Parcel bundler =========

* install parcel itself
  `npm i -D parcel`

* add `dev` script to your npm scripts:
  ```
  "scripts": {
    "dev": "parcel src/index.html",
  },
  
  ```

* Now you can `npm run dev` and visit  _http://localhost:1234/_
* In cases when something is not bundled well, or went wrong for some reason, `rm -rf` *dist/* and *.parcel-cache/*
  folders
* Don't forget to set scripts to type "module"

```html

<script src="..." type="module" ...>
```