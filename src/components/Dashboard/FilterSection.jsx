import { Box, Grid, MenuItem, TextField } from "@mui/material";
import { ENERGY_FORMS, SYSTEM_TYPES } from "../../constants/dashboardConstants";

/**
 * FilterSection component for handling user filters.
 * @param {Object} props - Component props.
 * @param {Object} props.filters - Current filter values.
 * @param {Function} props.onFilterChange - Callback function to update filters.
 */
const FilterSection = ({ filters, onFilterChange }) => {
  const handleChange = (field, value) => {
    onFilterChange({
      ...filters,
      [field]: value === "all" ? "" : value, // Convert "all" to empty string
    });
  };

  return (
    <Box>
      <Grid container spacing={2}>
        <FilterField
          gridProps={{ xs: 12, sm: 6, md: 3 }}
          textFieldProps={{
            select: true,
            SelectProps: { native: false },
            label: "Energy Form",
            value: filters.energyForm,
            onChange: (e) => handleChange("energyForm", e.target.value),
          }}
        >
          {Object.entries(ENERGY_FORMS).map(([key, value]) => (
            <MenuItem key={key} value={value}>
              {value === "all"
                ? "all"
                : value.charAt(0).toUpperCase() + value.slice(1)}
            </MenuItem>
          ))}
        </FilterField>

        <FilterField
          gridProps={{ xs: 12, sm: 6, md: 3 }}
          textFieldProps={{
            select: true,
            SelectProps: { native: false },
            label: "System Type",
            value: filters.systemType,
            onChange: (e) => handleChange("systemType", e.target.value),
          }}
        >
          {Object.entries(SYSTEM_TYPES).map(([key, value]) => (
            <MenuItem key={key} value={value}>
              {value === "all"
                ? "all"
                : value.charAt(0).toUpperCase() + value.slice(1)}
            </MenuItem>
          ))}
        </FilterField>

        <FilterField
          gridProps={{ xs: 12, sm: 6, md: 3 }}
          textFieldProps={{
            type: "date",
            label: "Start Date",
            InputLabelProps: { shrink: true },
            value: filters.dateRange[0] || "",
            onChange: (e) =>
              handleChange("dateRange", [e.target.value, filters.dateRange[1]]),
          }}
        />

        <FilterField
          gridProps={{ xs: 12, sm: 6, md: 3 }}
          textFieldProps={{
            type: "date",
            label: "End Date",
            InputLabelProps: { shrink: true },
            value: filters.dateRange[1] || "",
            onChange: (e) =>
              handleChange("dateRange", [filters.dateRange[0], e.target.value]),
          }}
        />
      </Grid>
    </Box>
  );
};

/**
 * Reusable FilterField component for rendering filter fields.
 * @param {Object} props - Component props.
 * @param {Object} props.gridProps - Props for the Grid item.
 * @param {Object} props.textFieldProps - Props for the TextField.
 * @param {ReactNode} props.children - Child components.
 */
const FilterField = ({ children, gridProps, textFieldProps }) => (
  <Grid item {...gridProps}>
    <TextField fullWidth {...textFieldProps}>
      {children}
    </TextField>
  </Grid>
);

export default FilterSection;
