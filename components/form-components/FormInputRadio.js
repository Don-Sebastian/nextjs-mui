import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Controller } from "react-hook-form";
import { FormHelperText } from "@mui/material";

const radioOptions = [
  {
    label: "Female",
    value: "female",
  },
  {
    label: "Male",
    value: "male",
  },
  {
    label: "Others",
    value: "others",
  },
];

export default function FormInputRadio({ name, control, label }) {
    
    const generateRadioOptions = () => {
    return radioOptions.map((singleOption, index) => (
        <>
        <FormControlLabel
            key={index}
            value={singleOption.value}
            label={singleOption.label}
            control={<Radio />}
        />
        </>
    ));
    };


    return (
      <FormControl component="fieldset">
        <FormLabel component="legend">{label}</FormLabel>
        <Controller
          name={name}
          control={control}
          render={({
            field: { onChange, value },
            fieldState: { error },
            formState,
          }) => (
            <>
              <RadioGroup
                value={value}
                defaultValue={radioOptions[0].value}
                onChange={onChange}
              >
                {generateRadioOptions()}
              </RadioGroup>
              {/* <FormHelperText>{error}</FormHelperText> */}
            </>
          )}
        />
      </FormControl>
    );
}