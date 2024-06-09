
import React, { useState, useEffect } from "react";
import ServiceStore from "./ServiceStore"; // ייבוא של חנות השירותים
import MeetingStore from "./MeetingStore"; // ייבוא של חנות הפגישות
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
} from "@mui/material";
import { LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function ServiceComponent() {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [meeting, setMeeting] = useState({
    id: "758",
    serviceType: "11",
    dateTime: "2021-06-20T10:00:00.000Z",
    clientName: "",
    clientPhone: "",
    clientEmail: "m@m.com",
  });

  useEffect(() => {
    ServiceStore.getServiceList
      .then((data) => {
        setServices(data);
        setIsLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
        setIsLoading(false);
      });
  }, []);

  const handleClickOpen = (serviceName) => {
    setMeeting({ ...meeting, serviceType: serviceName });
    setOpen(true);
  };
  

  const handleDialogClose = () => {
    setOpen(false);
  };

  const add = (e) => {
    e.preventDefault();
    return new Promise((resolve) => {
      fetch("http://localhost:8787/appointment", {
        method: "POST",
        body: JSON.stringify(meeting),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => {
          if (res.status === 200) {
            MeetingStore.list.push(meeting); // הוספת הפגישה לחנות הפגישות
            handleDialogClose(); // סגירת הדיאלוג
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

  // רכיב הכרטיס והדיאלוג
  function printService(serve) {
    if (!serve) {
      return null; // או טיפול נוסף בהתאם לצורך
    }

    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="img"
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
          </Typography>
          <Button onClick={() => handleClickOpen(serve.name)}>Click me</Button>
        </CardContent>
      </Card>
    );
  }

  console.log(services);

  return (
    <div className="">
      {isLoading && <div>טוען...</div>}

      {!isLoading && (
        <div>
          {services.map((serve, key) => (
            <div key={key}>{printService(serve)}</div>
          ))}
        </div>
      )}

      {open && (
        <Dialog
          open={open}
          onClose={handleDialogClose}
          sx={{
            "& .MuiDialog-paper": { width: "400px", maxWidth: "none" },
          }} // כאן הגדרת הרוחב
        >
          <DialogTitle>טופס</DialogTitle>
          <DialogContent>
            <form onSubmit={add}>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="name"
                type="text"
                fullWidth
                onBlur={(e) => {
                  setMeeting({ ...meeting, clientName: e.target.value });
                }}
              />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  label="מועד פגישה"
                  required
                  onChange={(e) => {
                    setMeeting({ ...meeting, dateTime: e });
                  }}
                />
              </LocalizationProvider>
              <TextField
                margin="dense"
                id="phone"
                label="phone"
                type="tel"
                fullWidth
                onBlur={(e) => setMeeting({ ...meeting, clientPhone: e.target.value })}
              />
              <TextField
                margin="dense"
                id="email"
                label="email"
                type="email"
                fullWidth
                onBlur={(e) => setMeeting({ ...meeting, clientEmail: e.target.value })}
              />
              <DialogActions>
                <Button onClick={handleDialogClose} color="secondary">
                  ביטול
                </Button>
                <Button type="submit" color="primary">
                  שלח
                </Button>
              </DialogActions>
            </form>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
