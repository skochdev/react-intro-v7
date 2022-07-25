# Components in React

```js
const Pet = props => {
    return React.createElement('div', {}, [
        React.createElement('h1', {}, props.name),
        React.createElement('h2', {}, props.animal),
        React.createElement('h2', {}, props.breed),
    ]);
};

const App = () => {
    return React.createElement('div', {}, [
        [
            React.createElement('h1', {}, 'Adopt me!'),
            React.createElement(Pet, {
                name: 'Luna',
                animal: 'Dog',
                breed: 'Havanese',
            }),
            React.createElement(Pet, {
                name: 'Pepper',
                animal: 'Bird',
                breed: 'Cockatiel',
            }),
            React.createElement(Pet, {
                name: 'Doink',
                animal: 'Cat',
                breed: 'Mixed',
            }),
        ],
    ]);
};

ReactDOM.render(React.createElement(App), document.querySelector('#root'));

```
* Data flow one way, from the parent to children via props.This way bugs are localized to the component where they appeared.

## [Prev branch](https://github.com/skochdev/react-intro-v7/blob/01-vanilla-react)
## [Next branch](https://github.com/skochdev/react-intro-v7/tree/03-js-tools)
