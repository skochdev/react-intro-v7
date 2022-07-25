# Vanilla react through CDN, basic App setup (React v.17)

* This is just a basic raw React "Hello World". No one writes like this anymore.
```
 <body>
    <div id="root">not rendered</div>
    <script src="https://unpkg.com/react@17.0.2/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.development.js"></script>
    <script>
      const App = () => {
        return React.createElement(
          'div',
          {},
          React.createElement('h1', {}, 'Adopt me!')
        );
      };

      ReactDOM.render(
        React.createElement(App),
        document.querySelector('#root')
      );
    </script>
  </body>
```
* You should call `ReactDOM.render()` exactly once

##[Next branch](https://github.com/skochdev/react-intro-v7/tree/02-components)
