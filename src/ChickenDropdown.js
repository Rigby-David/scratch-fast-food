export default function ChickenDropdown({ setChickenId }) {
  return (
    <div>
    Select your chicken
      <select onChange={(e) => setChickenId(e.target.value)}>
        <option value="1">Chicken</option>
        <option value="2">Saucy Chicken</option>
        <option value="3">HOT Chicken</option>
      </select>
    </div>
  );
}