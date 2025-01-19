// It's the basic node of our application DOM
const rootNode = document.getElementById("app");

// Here we create React virtual DOM inside our basic node
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(App));

// This function represents how React components work
// under the hood, so React basically calls createElement
// function and passes required parameters.
function App() {
  const [count, setCount] = React.useState(0);

  const onButtonClick = () => {
    setCount((prev) => {
      return prev + 1;
    });
  };

  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Counter"),
    React.createElement("p", null, `You clicked ${count} time/s`),
    React.createElement("button", { onClick: onButtonClick }, "Click")
  );
}

// React code runs after all JavaScript code
// asynchronously to avoid blocking the page
// These two console logs show that the collection
// is empty before the JavaScript code is executed
// We can verify this by running the same code inside a timeout
// and we will see that the console will show the collection
// and the first element

let divElements = document.getElementsByTagName("div");
let divElement = divElements.item(0);

console.log(divElements);
console.log(divElement);

setTimeout(() => {
  let divElements = document.getElementsByTagName("div");
  let divElement = divElements.item(0);

  console.log(divElements);
  console.log(divElement);
}, [1000]);
