export default function Food({ chickenId, drinkId, sideId }) {
  return (
    <div>
      <img src={`/chicken-${chickenId}.jpg`} />
      <img src={`/drink-${drinkId}.jpg`} />
      <img src={`side-${sideId}.jpg`} />
    </div>
  );
}