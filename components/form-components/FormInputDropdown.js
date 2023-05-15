import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from "@mui/material";
import { Controller } from "react-hook-form";

const options = [
  {
    label: "Jobseeker",
    value: "jobseeker",
  },
  {
    label: "Jobgiver",
    value: "jobgiver",
  },
];

export default function FormInputDropdown({ name, control, label }) {
  const generateSingleOptions = () => {
    return options.map((option) => {
      return (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      );
    });
  };

  return (
    <FormControl size={"small"}>
      <InputLabel>{label}</InputLabel>
      <Controller
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <Select onChange={onChange} value={value}>
              {generateSingleOptions()}
            </Select>
                      {/* {error && <FormHelperText>{ error}</FormHelperText>} */}
          </>
        )}
        control={control}
        name={name}
      />
    </FormControl>
  );
}
