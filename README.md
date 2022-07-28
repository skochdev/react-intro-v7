# useEffect()

```jsx
import { useState, useEffect } from "react";

const EffectComponent = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setTimeout(() => setTime(new Date()), 1000);
    return () => clearTimeout(timer);
  });

  return <h1>useEffect Example: {time.toLocaleTimeString()}</h1>;
};

export default EffectComponent;
```

* without deps array it re-renders every time any state changes
* [] empty deps array will allow useEffect to run once, on initial render

```jsx
import { useState, useEffect } from "react";

const EffectComponent = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setTimeout(() => setTime(new Date()), 1000);
    return () => clearTimeout(timer);
  }, []);

  return <h1>useEffect Example: {time.toLocaleTimeString()}</h1>;
};

export default EffectComponent;
```

* If we add some dependencies to the deps array, useEffect will run each time
  those dependencies are updated

```jsx
import { useState, useEffect } from "react";

const EffectComponent = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setTimeout(() => setTime(new Date()), 1000);

    return () => clearTimeout(timer);
  }, [time]);

  return <h1>useEffect Example: {time.toLocaleTimeString()}</h1>;
};

export default EffectComponent;
```

* the `return () => clearTimeout(timer);` removes the scheduled timer execution,
  so when we unmount our component it won't pollute our call stack.
* Use it to clean up if you know that component will unmount