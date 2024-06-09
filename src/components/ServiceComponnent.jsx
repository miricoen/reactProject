import React, { useState, useEffect } from "react";
import ServiceStore from "../services/ServiceStore"; // ייבוא של חנות השירותים
import MeetingStore from "../services/MeetingStore"; // ייבוא של חנות הפגישות
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
  Grid,
  Box,
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
      <Card sx={{ maxWidth: 345, m: 2 }}>
        <CardMedia
          component="img"
          alt="img"
          height="140"
          image="https://www.gov.il/BlobFolder/guide/guidelines_citizen/he/bigstock-Business.jpg"
          title="businessImage"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {serve.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <span>{serve.description}</span>
            <br />
            <span>מחיר: {serve.price}</span>
            <br />
            <span>משך זמן: {serve.duration}</span>
            <br />
          </Typography>
          <Button
            onClick={() => handleClickOpen(serve.name)}
            variant="contained"
            sx={{
              mt: 2,
              backgroundColor: "orange",
              "&:hover": { backgroundColor: "darkorange" },
            }}
          >
            קביעת פגישה
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Box sx={{ p: 4 }}>
      {isLoading && <div>טוען...</div>}

      {!isLoading && (
        <Grid container spacing={2}>
          {services.map((serve, key) => (
            <Grid item key={key} xs={12} sm={6} md={4}>
              {printService(serve)}
            </Grid>
          ))}
        </Grid>
      )}

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
              label="שם"
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
                renderInput={(params) => (
                  <TextField {...params} margin="dense" fullWidth />
                )}
              />
            </LocalizationProvider>
            <TextField
              margin="dense"
              id="phone"
              label="מס' טלפון"
              type="tel"
              fullWidth
              onBlur={(e) =>
                setMeeting({ ...meeting, clientPhone: e.target.value })
              }
            />
            <TextField
              margin="dense"
              id="email"
              label="אימייל"
              type="email"
              fullWidth
              onBlur={(e) =>
                setMeeting({ ...meeting, clientEmail: e.target.value })
              }
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
    </Box>
  );
}
