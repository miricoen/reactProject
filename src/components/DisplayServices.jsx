import ServiceStore from "../services/ServiceStore";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React, { useState, useEffect } from "react";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
//for admin

export default function DisplayServices() {
  const [formOpen, setFormOpen] = useState(false);
  const [services, setServices] = useState([]);

  useEffect(() => {
    ServiceStore.getServiceList.then((data) => {
      setServices(data);
    });
  }, []);

  let serv = {
    id: "11",
    name: "",
    description: "",
    price: 0,
    duration: 0,
  };

  function printService(serve) {
    return (
      <div>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="businessImage"
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
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }

  function addserv() {
    ServiceStore.addService(serv);
    handleClose();
    window.location.reload(); // Refresh the page
  }

  function handleClose() {
    setFormOpen(false);
  }

  return (
    <div>
      <div className="printService">
        {services.map((service, key) => (
          <div key={key}>{printService(service)}</div>
        ))}
      </div>
      <Button onClick={() => setFormOpen(true)} id="admin" size="small">
        הוסף שירות
      </Button>

      <Dialog open={formOpen} onClose={handleClose}>
        <DialogTitle>הוסף שירות לרשימת השירותים שלך</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="id"
            label="שם"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => (serv.name = e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="description"
            label="תיאור"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => (serv.description = e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="price"
            label="מחיר"
            type="number"
            fullWidth
            variant="standard"
            onChange={(e) => (serv.price = e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="duration"
            label="משך זמן"
            type="number"
            fullWidth
            variant="standard"
            onChange={(e) => (serv.duration = e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={addserv}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
