# React Hooks Tutorial

## UseState

    const [state, setState] = useState(initialState);

> Returns a stateful value, and a function to update it.

> During the initial render, the returned state (state) is the same as the value passed as the first argument (initialState).

> The setState function is used to update the state. It accepts a new state value and enqueues a re-render of the component.

> React Hook "useState" cannot call conditionally!

> React Hooks must be called in the exact same order in every component render

    setState(newState);

> **Note**
> Unlike the `setState` method found in class components, `useState` does not automatically merge update objects. You can replicate this behavior by combining the function updater form with object spread syntax:

    setState(prevState => {
    // Object.assign would also work
    return {...prevState, ...updatedValues};
    });

> Another option is `useReducer`, which is more suited for managing state objects that contain multiple sub-values.

---

## UseEffect

    useEffect(didUpdate);

> Accepts a function that contains imperative, possibly effectful code.

> Mutations, subscriptions, timers, logging, and other side effects are not allowed inside the main body of a function component (referred to as React’s render phase). Doing so will lead to confusing bugs and inconsistencies in the UI.

> Instead, use `useEffect`. The function passed to `useEffect` will run after the render is committed to the screen. Think of effects as an escape hatch from React’s purely functional world into the imperative world.

> By default, effects run after every completed render, but you can choose to fire them only when certain values have changed.
