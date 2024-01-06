import React, { useState } from "react";
import ServiceStore from "./ServiceStore";
import { useRouteLoaderData } from "react-router-dom";
import UserStore from "./UserData";
import BusinessStore from "./BusinessStore";
import MeetingStore from "./MeetingStore";

import DateTimePicker from "react-datetime-picker";

import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CardMedia from "@mui/material/CardMedia";

// import dayjs from "dayjs";
// import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Button, CardActionArea, CardActions, IconButton } from "@mui/material";

//to castomer
export default function ServicesComponent() {
  const [openForm, setOpenForm] = useState(false);
  const [value, setValue] = React.useState(null);

  var meeting = {
    id: "758",
    serviceType: "11",
    dateTime: "2021-06-20T10:00:00.000Z", //מבנה של תאריך ושעה סטנדרטי בjs
    clientName: "",
    clientPhone: "",
    clientEmail: "m@m.com",
  };

  const handleClose = () => {
    setOpenForm(false);
  };
  const add = () => {
    return new Promise((resolve) => {
      fetch("http://localhost:8787/appointment", {
        method: "POST",
        body: JSON.stringify({
          meeting,
        }),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => {
          if (res.status === 200) {
            MeetingStore.list.push(meeting);
            setOpenForm(false);
            resolve(true);
          } else {
            alert("date is not valid please enter new date.");
            resolve(false);
          }
        })
        .catch((error) => {
          console.log("error" + error);
          resolve(false);
        });
    });
  };
  // function addAppointment() {
  //   setOpen(true);
  // }

  function print(serve) {
    console.log(serve);
    return (
      <div>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="https://success2u.co.il/wp-content/uploads/2021/03/success-image-43-1.png"
            title="businessImage"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {serve.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <span>{serve.description}</span>
              <br />
              <span>price: {serve.price}</span>
              <br />
              <span>duration: {serve.duration}</span>
              <br />
              <Button onClick={setOpenForm}>Make an appointment</Button>
              <Dialog open={openForm} onClose={handleClose}>
                <DialogTitle>{serve.name}</DialogTitle>

                <DialogContent>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="name"
                    type="text"
                    fullWidth
                    variant="standard"
                    onBlur={(e) => {
                      meeting.clientName = e.target.value;
                    }}
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    id="phone"
                    label=" phone"
                    type="tel"
                    fullWidth
                    variant="standard"
                    onBlur={(e) => (meeting.clientPhone = e.target.value)}
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    id="email"
                    label="email"
                    type="email"
                    fullWidth
                    variant="standard"
                    onBlur={(e) => (meeting.clientEmail = e.target.value)}
                  />
{/* 
                  <DateTimePicker
                    onChange={(e) => (meeting.dateTime = e.target.value)}
                    value={value}
                  /> */}

                  <input
                    type="datetime-local"
                    value={meeting.dateTime}
                    onChange={(e) => (meeting.dateTime = e.target.value)}
                  />
                  {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Stack spacing={2} sx={{ minWidth: 305 }}>
                      <DateTimePicker
                        value={value}
                        onChange={setValue}
                        referenceDate={dayjs("2022-04-17T15:30")}
                      />
                      <Typography>
                        Stored value: {value == null ? "null" : value.format()}
                      </Typography>
                    </Stack>
                  </LocalizationProvider> */}
                  {/* <LocalizationProvider >
                    <DatePicker  onClose={(e) => (meeting.dateTime = e.target.value)}/>
                  </LocalizationProvider> */}
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button onClick={add}>Ok</Button>
                </DialogActions>
              </Dialog>
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <>
      <div className="printService">
        {ServiceStore.getServiceList.map((object, key) => (
          <div key={key}> {print(object)}</div>
        ))}
      </div>
    </>
  );
}
