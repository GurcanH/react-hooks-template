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

---

## useRef

    const refContainer = useRef(initialValue);

> `useRef` returns a mutable ref object whose `.current` property is initialized to the passed argument (`initialValue`). The returned object will persist for the full lifetime of the component.

> A common use case is to access a child imperatively:

    function TextInputWithFocusButton() {
        const inputEl = useRef(null);
        const onButtonClick = () => {
            // `current` points to the mounted text input element
            inputEl.current.focus();
        };
        return (
            <>
            <input ref={inputEl} type="text" />
            <button onClick={onButtonClick}>Focus the input</button>
            </>
        );
    }

> Essentially, `useRef` is like a “box” that can hold a mutable value in its `.current` property.

> You might be familiar with refs primarily as a way to `access the DOM`. If you pass a ref object to React with `<div ref={myRef} />`, React will set its `.current` property to the corresponding DOM node whenever that node changes.

> However, `useRef()` is useful for more than the `ref` attribute. It’s handy for keeping any mutable value around similar to how you’d use instance fields in classes.

> This works because `useRef()` creates a plain JavaScript object. The only difference between `useRef()` and creating a `{current: ...}` object yourself is that `useRef` will give you the same ref object on every render.

> Keep in mind that `useRef` doesn’t notify you when its content changes. Mutating the `.current` property doesn’t cause a re-render. If you want to run some code when React attaches or detaches a ref to a DOM node, you may want to use a `callback ref` instead.
