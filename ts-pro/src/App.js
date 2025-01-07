"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function App() {
    return (<>
      <Todo title="Hello bhai" description="Kaise ho" done={false}/>
      <Todo title="React Project" description="Complete the tasks" done={true}/>
    </>);
}
function Todo(props) {
    return (<>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
      <h3>{props.done ? "Completed" : "Not Completed"}</h3>
    </>);
}
exports.default = App;
