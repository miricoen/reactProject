import ServiceStore from "./ServiceStore";
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
        add service
      </Button>

      <Dialog open={formOpen} onClose={handleClose}>
        <DialogTitle>add service to your services list</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="id"
            label="name"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => (serv.name = e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="description"
            label="description"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => (serv.description = e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="price"
            label="price"
            type="number"
            fullWidth
            variant="standard"
            onChange={(e) => (serv.price = e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="duration"
            label="duration"
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
