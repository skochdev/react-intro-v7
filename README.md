<<<<<<< HEAD
# Repository for my walkthrough of the [React Intro V7](https://frontendmasters.com/courses/complete-react-v7) on Frontend Masters

1. Vanilla React through CDN. Creating a root 
2. Creating components and rendering them
3. JS tools. npm, prettier, eslint, parcel, git, bundlers overview, browserslist, component module 
=======
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

>>>>>>> 02-components
