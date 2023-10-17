import MultiSelectDropdown from "../components/MultiSelectDropdown";

export default function Page() {
  return (
    <>
      <h1>{"Multi-Select Dropdown"}</h1>
      <form>
        <MultiSelectDropdown />
        <input type="submit" />
      </form>
    </>
  );
}
