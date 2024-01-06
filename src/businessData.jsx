import React, { useState } from "react";
import BusinessStore from "./BusinessStore";
import UserStore from "./UserData";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, IconButton } from "@mui/material";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function ButtonBusinesDate() {
  const [open, setOpen] = useState(false);

  // const [id, setId] = useState(123);
  // const [name, setName] = useState("My business");
  // const [address, setAddress] = useState("Shivtey Ysrael 10");
  // const [phone, setPhone] = useState("0556744853");
  // const [owner, setOwner] = useState("MIRI");
  // const [logo, setLogo] = useState(
  //   "https://www.google.com/imgres?imgurl=https%3A%2F%2Fsuccess2u.co.il%2Fwp-content%2Fuploads%2F2021%2F03%2Fsuccess-image-43-1.png&tbnid=XEVBjKdzgDw7hM&vet=12ahUKEwjok6a2-sSDAxVEQKQEHVzHBYAQMygtegUIARCsAQ..i&imgrefurl=https%3A%2F%2Fsuccess2u.co.il%2F%25D7%25A4%25D7%25AA%25D7%2599%25D7%2597%25D7%25AA-%25D7%25A2%25D7%25A1%25D7%25A7%2F%25D7%25A4%25D7%25AA%25D7%2599%25D7%2597%25D7%25AA-%25D7%25A2%25D7%25A1%25D7%25A7-%25D7%25A7%25D7%2598%25D7%259F%2F&docid=ZmcnjOK--vFYpM&w=580&h=400&q=%D7%A2%D7%A1%D7%A7&hl=iw&safe=active&ved=2ahUKEwjok6a2-sSDAxVEQKQEHVzHBYAQMygtegUIARCsAQ"
  // );
  // const [description, setDescription] = useState(
  //   "עסק שלי מייצר אתרים כושלים בריאקט אתרים שלא אמורים לעבוד"
  // );

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar  position="static">
        <Container className="AppBar" maxWidth="xl">
          <Toolbar disableGutters className="toolBar">
            {/* <IconButton id="logo"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            > */}
              <img src={BusinessStore.logo} alt="logo" id="logo"/>
            {/* </IconButton> */}
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea className="CardContent">
                <CardContent >
                  <Typography gutterBottom variant="h5" component="div">
                    {BusinessStore.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {BusinessStore.address}
                    <br />
                    {BusinessStore.phone}
                    <br />
                    by {BusinessStore.owner}
                    <br />
                    {BusinessStore.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                {UserStore?.admin && (
                  <React.Fragment>
                    <Button variant="outlined" onClick={handleClickOpen}>
                      edit
                    </Button>
                  </React.Fragment>
                )}
              </CardActions>
            </Card>
          </Toolbar>
        </Container>
      </AppBar>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>change your business details</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="name"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => BusinessStore.setName(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="address"
            label=" address"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => BusinessStore.setAddress(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="phone"
            label="phone"
            type="tel"
            fullWidth
            variant="standard"
            onChange={(e) => BusinessStore.setPhone(e.target.value)}
          />

          <TextField
            autoFocus
            margin="dense"
            id="owner"
            label="owner"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => BusinessStore.setOwner(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="logo"
            label="logo"
            type="url"
            fullWidth
            variant="standard"
            onChange={(e) => BusinessStore.setLogo(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="description"
            label="description"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => BusinessStore.setDescription(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
