// https://reactjs.org/docs/introducing-jsx.html

// This funny tag syntax is neither a string nor HTML.
const element = <h1>Hello, world!</h1>;
console.log(element)

// Embedding Expressions in JSX
const name = 'Josh Perez';
const element2 = <h1>Hello, {name}</h1>;
console.log(element2)

// You can put any valid JavaScript expression inside the curly braces in JSX.
function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}
const user = {
    firstName: 'Harper',
    lastName: 'Perez'
};
const element3 = (
    <h1>
        Hello, {formatName(user)}!
    </h1>
);
console.log(element3)

// https://reactjs.org/docs/components-and-props.html
// elements can also represent user-defined components
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}
const element4 = <Welcome name="Sara" />;
console.log(element4)
