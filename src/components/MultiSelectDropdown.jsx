export default function MultiSelectDropdown() {
  return (
    <label className="relative">
      <input type="checkbox" className="hidden peer" />

      <div className="cursor-pointer after:content-['▼'] after:text-xs after:ml-1 after:inline-flex after:items-center peer-checked:after:-rotate-180 after:transition-transform">
        {"Show the dropdown"}
      </div>

      <div className="absolute bg-white border p-2 transition-opacity opacity-0 pointer-events-none peer-checked:opacity-100 peer-checked:pointer-events-auto">
        {"Welcome to the dropdown"}
      </div>
    </label>
  );
}
