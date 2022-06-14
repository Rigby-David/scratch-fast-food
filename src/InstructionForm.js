export default function InstructionForm({ handleSubmit, formInstruction, setFormInstruction }) {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Add instruction
        <input value={formInstruction} onChange={(e) => setFormInstruction(e.target.value)}>

        </input>
      </label>
      <button>Submit</button>
    </form>
  );
}