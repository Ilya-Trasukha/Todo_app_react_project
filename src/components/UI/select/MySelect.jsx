import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

const MySelect = ({ options, defaultValue, value, onChange }) => {
  return (
    <FormControl variant="standard" sx={{ minWidth: 130 }}>
      <InputLabel id="filter-label">Filter by</InputLabel>
      <Select labelId="filter-label"
              label="Filter by"
              value={value}
              autoWidth
              onChange={(event) => onChange(event.target.value)}>
        <MenuItem disabled
          value="">
          {defaultValue}
        </MenuItem>
          {options.map((option) => (
        <MenuItem key={option.value}
          value={option.value}>
          {option.name}
        </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
export default MySelect;
