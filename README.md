# Portals

* add a new element ot `index.html`

```html

<body>
<div id="modal"></div> <!--add this element here-->
<div id="root">not rendered</div>
<script src="App.js" type="module"></script>
</body>
```

* **useRef** is when you have one value, and want to refer to it across all renders precisely
* Our **elRef** is a mutable ref object, thus it has only one value - **elRef.current**

### More of less, this is how the code for the modal code will look like most of the time

```jsx
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  let elRef = useRef(null);

  if (!elRef.current) {
    elRef.current = document.createElement("div"); // this will be our modal
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);

    return () => {
      /* This return function cleans up the modal on unmount*/
      modalRoot.removeChild(elRef.current);
    };
  }, []);
  return createPortal(<modalRoot>{children}</modalRoot>, elRef.current);
};

export default Modal;

```

* Now in `Details.js` we implement our modal

_Details.js_

```jsx
 <p>{description}</p>
{
  isModalOpen ? (
    <Modal>
      <div>
        <h1>Would you really like to adopt {name}</h1>
        <a href="">Yes</a>
        <button onClick={this.toggleModal}>No</button>
      </div>
    </Modal>
  ) : null
}
```