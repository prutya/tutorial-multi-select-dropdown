export default function MultiSelectDropdown({ formFieldName, options }) {
  return (
    <label className="relative">
      <input type="checkbox" className="hidden peer" />

      <div className="cursor-pointer after:content-['▼'] after:text-xs after:ml-1 after:inline-flex after:items-center peer-checked:after:-rotate-180 after:transition-transform">
        {"Show the dropdown"}
      </div>

      <div className="absolute bg-white border transition-opacity opacity-0 pointer-events-none peer-checked:opacity-100 peer-checked:pointer-events-auto">
        <ul>
          {options.map((option, i) => {
            const labelVerticalPaddingClass =
              i === options.length - 1 ? "py-1" : "pt-1";

            return (
              <li key={option}>
                <label
                  className={`flex whitespace-nowrap cursor-pointer px-2 ${labelVerticalPaddingClass} transition-colors hover:bg-blue-100 [&:has(input:checked)]:bg-blue-200`}
                >
                  <input
                    type="checkbox"
                    name={formFieldName}
                    value={option}
                    className="cursor-pointer"
                  />
                  <span className="ml-1">{option}</span>
                </label>
              </li>
            );
          })}
        </ul>
      </div>
    </label>
  );
}
