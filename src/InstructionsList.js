import Instruction from './Instruction';

export default function InstructionsList({ instructions }) {
  return (
    <section>
      <h3>Special Instructions</h3>
      <ul>
        {
        //   instructions.map((instruction, i) => <li key={instruction + i}>{instruction}</li>)
          instructions.map((instruction, i) => <Instruction key={`${instruction}-${i}`}
            instruction={instruction} />)
        }
      </ul>
    </section>
  );
}