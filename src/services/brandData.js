import generatedData from './generated_dataset.json';

export const getBrandData = (department) => {
  if (!department) return [];

  // Normalize the department name from the URL to match the JSON keys
  const normalizedDepartment = decodeURIComponent(department)
    .replace(/-/g, ' ')          // Replace hyphens with spaces
    .replace(/%26/g, '&')        // Replace URL encoded & symbol with &
    .replace(/%2C/g, ',')        // Replace URL encoded comma with ,
    .replace(/ and /gi, ' & ')   // Ensure " and " is converted to " & " (case-insensitive)
    .replace(/\b\w/g, (char) => char.toUpperCase());  // Capitalize the first letter of each word

  console.log("Normalized Department Name:", normalizedDepartment);

  if (!generatedData.Departments[normalizedDepartment]) {
    console.error(`Department not found: ${normalizedDepartment}`);
    return [];
  }

  return generatedData.Departments[normalizedDepartment];
};
