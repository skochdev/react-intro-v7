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
    "format": "prettier --write \"src/**/*.{js,ts,jsx,tsx,css,scss,html}\"",
    "format:check": "prettier --check \"src/**/*.{js,ts,jsx,tsx,css,scss,html}\"",
    "lint": "eslint \"src/**/*.{js,ts,jsx,tsx,css,scss,html}\" --quiet"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com//skochdev/react-intro-v7.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "eslint": "^8.8.0",
    "eslint-config-prettier": "^8.3.0",
    "prettier": "^2.7.1"
  }
}
```

6. To pass a flag to scripts, which you want to run with some extra options ,
   use `npm run lint -- --fix`, the `-- <--flag>` means **apply it to** _lint_