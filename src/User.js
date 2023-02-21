function Person(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <hr />
    </div>
  );
}

export const Person1 = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <hr />
    </div>
  );
};
export default Person;
