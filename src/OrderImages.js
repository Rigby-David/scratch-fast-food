export default function Food({ chickenId }) {
  return (
    <div>
      <img src={`/chicken-${chickenId}.jpg`} />
    </div>
  );
}