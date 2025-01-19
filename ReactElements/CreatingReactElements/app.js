// It's the basic node of our application DOM
const rootNode = document.getElementById("app");

// Here we create React virtual DOM inside our basic node
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(App));

// This function represents how React components work
// under the hood, so React basically calls createElement
// function and passes required parameters.
function App() {
  return React.createElement("button", { onClick: onButtonClick }, "Click me");
}

let count = 0;

function onButtonClick() {
  ++count;
  alert(`Button clicked - ${count} time/s`);
}
