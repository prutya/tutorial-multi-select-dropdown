import MultiSelectDropdown from "../components/MultiSelectDropdown";

const COUNTRIES = [
  "Austria",
  "Belgium",
  "Croatia",
  "Bulgaria",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Estonia",
  "Finland",
  "France",
  "Germany",
  "Greece",
  "Hungary",
  "Ireland",
  "Italy",
  "Latvia",
  "Lithuania",
  "Luxembourg",
  "Malta",
  "Netherlands",
  "Poland",
  "Portugal",
  "Romania",
  "Slovakia",
  "Slovenia",
  "Spain",
  "Sweden",
  "Ukraine",
];

export default function Page() {
  return (
    <>
      <h1>{"Multi-Select Dropdown"}</h1>
      <form action="/api" method="post">
        <MultiSelectDropdown formFieldName={"countries"} options={COUNTRIES} />
        <input type="submit" />
      </form>
    </>
  );
}
