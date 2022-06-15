// export default function InstructionForm({ handleSubmit, formInstruction, setFormInstruction }) {
//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Add instruction
//         <input value={formInstruction} onChange={(e) => setFormInstruction(e.target.value)}>

//         </input>
//       </label>
//       <button>Submit</button>
//     </form>
//   );
// }
import { useState } from 'react';

export default function InstructionForm({ instructions, setInstructions }) {
  const [formInstruction, setFormInstruction] = useState('');
    
  function handleSubmit(e) {
    e.preventDefault();

    setInstructions([...instructions, formInstruction]);
    setFormInstruction('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={formInstruction} onChange={(e) => setFormInstruction(e.target.value)} />
      <button>Submit</button>
    </form>
  );
}