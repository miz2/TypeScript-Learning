function App() {
  return (
    <>
      <Todo title="Hello bhai" description="Kaise ho" done={false} />
      <Todo title="React Project" description="Complete the tasks" done={true} />
    </>
  );
}

interface TodoProp {
  title: string;
  description: string;
  done: boolean;
}

function Todo(props: TodoProp) {
  return (
    <>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
      <h3>{props.done ? "Completed" : "Not Completed"}</h3>
    </>
  );
}

export default App;
