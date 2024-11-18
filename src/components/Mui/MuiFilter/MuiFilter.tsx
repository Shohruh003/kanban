import { Box, Grid, Slider, Stack, Typography } from "@mui/material";
import { FC, useState } from "react";
import MuiInput from "/components/Mui/MuiInput/MuiInput";
import useStores from "/hooks/useStores";

interface IValue {
  key: string;
  label?: string;
  defaultValue: number;
}

interface IMuiFilterProps {
  title?: string;
  from: IValue;
  to: IValue;
  disabled?: boolean;
}
const MuiFilter: FC<IMuiFilterProps> = ({ title, from, to, disabled }) => {
  const [fromValue, setFromValue] = useState(from.defaultValue);
  const [toValue, setToValue] = useState(to.defaultValue);

  // const onChangeSlider = (event: any, values: any) => {
  //   const arr = values as Array<number>;
  //   console.log(arr[0]);

  //   setFromValue(arr[0] || from.defaultValue);
  //   setToValue(arr[1] || to.defaultValue);
  // }

  const onChangeStartValue = (value: string) => {
    setFromValue(Number(value) || from.defaultValue)
  }

  const onChangeEndValue = (value: string) => {
    setToValue(Number(value) || to.defaultValue)
  }

  return (
    <Box>
      <Typography variant="body1" sx={{ mt: 2 }}>{title}</Typography>
      {/* <Slider
        value={[fromValue, toValue]}
        onChange={onChangeSlider}
        valueLabelDisplay="auto"
        min={from.defaultValue}
        max={to.defaultValue}
      /> */}
      <Grid container spacing={2}>
        <Grid item xs={6} display="flex" flexDirection="row" alignItems="center">
          <Typography variant="body1">{from.label}</Typography>
          <MuiInput
            id={from.key}
            name={from.key}
            onChangeProp={onChangeStartValue}
            sx={{ mx: 2 }}
            defaultValue={fromValue.toString()}
            disabled={disabled}
          />
        </Grid>
        <Grid item xs={6} display="flex" flexDirection="row" alignItems="center">
          <Typography variant="body1">{to.label}</Typography>
          <MuiInput
            id={to.key}
            name={to.key}
            onChangeProp={onChangeEndValue}
            sx={{ mx: 2 }}
            defaultValue={toValue.toString()}
            disabled={disabled}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MuiFilter;
