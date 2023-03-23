const element = React.createElement('h1',{
    "id":"heading",
    "className":"headunng"
},'Hello world from react')

const parent = React.createElement('div',{
    "id":"parent"
},
[
    React.createElement('div', {}, 
[
    React.createElement("h1",{}, 'Hello from parent'),
    React.createElement("h2",{}, 'Hello from parent h2')

]),
React.createElement('div', {}, 
[
    React.createElement("h1",{}, 'Hello from parent1'),
    React.createElement("h2",{}, 'Hello from parent h21')

])

])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent)