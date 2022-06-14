export default function SideDropdown({ setSideId }) {
  return (
    <div>
      Select your side
      <select onChange={(e) => setSideId(e.target.value)}>
        <option value="1">Cornbread</option>
        <option value="2">Corn</option>
        <option value="3">Mac</option>
      </select>
    </div>
  );
}