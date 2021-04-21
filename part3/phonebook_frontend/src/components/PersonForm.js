const PersonForm = ({ props }) => {
  return (
    <form>
      <div>
        name: <input value={props.newName} onChange={props.handleNameChange} />
      </div>
      <div>
        number: <input value={props.newNum} onChange={props.handleNumChange} />
      </div>
      <div>
        <button type="submit" onClick={props.addPerson}>
          add
        </button>
      </div>
    </form>
  );
};

export default PersonForm;
