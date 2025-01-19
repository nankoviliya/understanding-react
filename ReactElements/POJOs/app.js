// representation of an html tree structure
// using javascript plain object
let markup = {
  type: "article",
  children: [
    {
      type: "h2",
      children: [
        {
          type: "text",
          value: "Counter",
        },
      ],
    },
    {
      type: "span",
      children: [
        {
          type: "text",
          value: "Clicked: ",
        },
        {
          type: "text",
          value: "1 ",
        },
        {
          type: "text",
          value: "times.",
        },
        {
          type: "br",
        },
        {
          type: "br",
        },
      ],
    },
    {
      type: "button",
      children: [
        {
          type: "text",
          value: "Click me",
        },
      ],
    },
  ],
};

const appElement = document.getElementById("app");

// This function recursively iterates over POJO markup object
// and builds DOM tree
function buildTree(plainJSElement, targetElement) {
  debugger;
  let newDOMNode;

  // this case is specifically for handling
  // plain text content inside html.
  // so there are more cases for different types
  if (plainJSElement.type === "text") {
    newDOMNode = document.createTextNode(plainJSElement.value);
  }
  // creates html object by its type
  else {
    newDOMNode = document.createElement(plainJSElement.type);
  }

  // if object has at least one child
  // we should recursively iterate over each one
  if (plainJSElement.children) {
    plainJSElement.children.forEach((child) => {
      buildTree(child, newDOMNode);
    });
  }

  // if object has no children, we append new node to it
  targetElement.appendChild(newDOMNode);
}

buildTree(markup, appElement);
