"use client";

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
    <main className="w-full max-w-xl mx-auto">
      <h1 className="text-3xl mt-12">{"Multi-Select Dropdown"}</h1>
      <form action="/api" method="post" className="mt-5">
        <div>
          <MultiSelectDropdown
            formFieldName={"countries"}
            options={COUNTRIES}
            onChange={(selectedCountries) => {
              console.debug("selectedCountries", selectedCountries);
            }}
            prompt="Select one or more countries"
          />
        </div>
        <input
          type="submit"
          className="bg-blue-500 text-white rounded px-5 py-2 mt-5 cursor-pointer"
        />
      </form>
    </main>
  );
}
