export default function DrinkDropdown({ setDrinkId }) {
  return (
    <div>
      <select onChange={(e) => setDrinkId(e.target.value)}>
        <option value="1">Lemonade</option>
        <option value="2">Coke</option>
        <option value="3">Water</option>
      </select>
    </div>
  );
}