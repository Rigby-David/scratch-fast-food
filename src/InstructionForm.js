

export default function InstructionForm({ handleSubmit, formInstruction, setFormInstruction }) {
  // const [formInstruction, setFormInstruction] = useState('');
    
  // function handleSubmit(e) {
  //   e.preventDefault();

  //   setInstructions([...instructions, formInstruction]);
  //   setFormInstruction('');
  // }

  return (
    <form onSubmit={handleSubmit}>
      <input value={formInstruction} onChange={(e) => setFormInstruction(e.target.value)} />
      <button>Submit</button>
    </form>
  );
}