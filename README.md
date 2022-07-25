# Vanilla react through CDN, basic App setup (React v.17)

* This is just a basic raw React "Hello World". No one writes like this anymore.


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

* You should call `ReacDOM.render()` exactly once
