import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import React, { useState } from "react";
import { Layout } from "../components/layout";
import styles from "../styles/Home.module.scss";

const Home: React.FC = () => {
  const [roomNumber, setRoomNumber] = useState(0);
  const [isStudyHall, setIsStudyHall] = useState(false);
  const [classDay, setClassDay] = useState("mon");

  const onRoomNumberChange = (evt:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setRoomNumber(parseInt(evt.target.value) ?? 0);
  };

  const onIsStudyHallChange = (evt:React.ChangeEvent<HTMLInputElement>) => {
    setIsStudyHall(evt.target.checked);
  };

  const onClassDayChange = (evt:SelectChangeEvent) => {
    setClassDay(evt.target.value);
  };

  const lunchTimesNormal:Array<string|undefined> = [
    undefined,
    "11:40",
    "12:00",
    "12:25"
  ];

  const lunchTimesBlock:Array<string|undefined> = [
    undefined,
    "11:20",
    "12:00",
    "12:40"
  ];
  
  let lunch: 0|1|2|3 = 0;
  let lunchTime:string = "";
  let lunchText:string = "";

  if (isStudyHall) {
    lunch = 2;
    lunchText = "middle";
  } else {
    if (roomNumber >= 200) {
      lunch = 1;
      lunchText = "first";
    } else if (roomNumber >= 100) {
      lunch = 3;
      lunchText = "last";
    }
  }

  return (
    <Layout>
      <div className={styles.main}>
        {lunch === 0 ? "" : (
          <React.Fragment>
            <h1>You have {lunchText} lunch!</h1>
            <h4>(which is at {"12:00"})</h4>
          </React.Fragment>
        )}
        <br />
        <br />
        <FormGroup style={{alignItems:"center"}}>
          <FormControl variant="filled">
            <InputLabel id="class-day">Class Day</InputLabel>
            <Select labelId="class-day" value={classDay} onChange={onClassDayChange} label="Class Day">
              <MenuItem value="mon">Monday</MenuItem>
              <MenuItem value="tues">Tuesday</MenuItem>
              <MenuItem value="wed">Wednesday</MenuItem>
              <MenuItem value="thurs">Thursday</MenuItem>
              <MenuItem value="fri">Friday</MenuItem>
            </Select>
          </FormControl>
          <br />
          <p>Answer the following questions based on your {"5th"} period class.</p>
          <TextField label="Room Number" type="number" variant="filled" value={roomNumber} onChange={onRoomNumberChange} InputProps={{ inputProps: { min: 100, max: 299 } }} fullWidth />
          <FormControlLabel control={
            <Checkbox value={isStudyHall} onChange={onIsStudyHallChange} />
          } label="Is Study Hall" />
        </FormGroup>
      </div>
    </Layout>
  );
};

export default Home;
