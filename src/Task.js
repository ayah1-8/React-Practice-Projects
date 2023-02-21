export const Task = (props) => {
  return (
    <div key={props.id} onClick={() => props.CompleteTask(props.id)}>
      <h1 style={{ color: props.complete ? "green" : "black" }}>
        ({props.id}) {props.taskName}
      </h1>
      <button onClick={() => props.deleteTask(props.id)}>X</button>
      <button>Complete</button>
    </div>
  );
};
