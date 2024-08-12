import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { format } from "date-fns";
import { useTodos } from "../store/useTodos";

const BasicDatePicker = () => {
  const [value, setValue] = useState<Dayjs>(dayjs(new Date()));

  const setDayFilter = useTodos((state) => state.setDayFilter);

  const changeHandler = (newValue: dayjs.Dayjs | null) => {
    setValue(newValue as Dayjs);
  };

  const newDate = format(new Date(value["$d"]), "dd/MM");
  setDayFilter(newDate);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <DatePicker
          value={value}
          onChange={changeHandler}
          label="Choose date"
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default BasicDatePicker;
