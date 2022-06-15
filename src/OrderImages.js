export default function Food({ chickenId, drinkId, sideId }) {
  return (
    <div>
      <img src={`/chicken-${chickenId}.jpg`} />
      <img src={`/drink-${drinkId}.jpg`} />
      <img src={`side-${sideId}.jpg`} />
      {/* <div>
        <h3>Special Instructions</h3>
        <ul>
          {
            instructions.map((instruction, i) => <li key={instruction + i}>{instruction}</li>)
          }
        </ul>
      </div> */}
    </div>
  );
}