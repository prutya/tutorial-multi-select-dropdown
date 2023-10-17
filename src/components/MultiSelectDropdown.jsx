export default function MultiSelectDropdown() {
  return (
    <label className="relative">
      <input type="checkbox" className="hidden peer" />

      <div className="cursor-pointer after:content-['▼'] after:text-xs after:ml-1">
        {"Show the dropdown"}
      </div>

      <div className="hidden peer-checked:flex absolute bg-white border">
        {"Welcome to the dropdown"}
      </div>
    </label>
  );
}
