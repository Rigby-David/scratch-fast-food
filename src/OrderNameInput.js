export default function OrderNameInput({ setOrderName }) {
  return (
    <section>
      <input onChange={(e) => setOrderName(e.target.value)} />
    </section>
  );
}