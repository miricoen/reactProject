import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import MeetingStore from "../services/MeetingStore";
const AppointmentsComponent = () => {

  let now = new Date();
  function sortByDateTime(array) {
    return array.sort( (a, b) =>  {
      return new Date(b.dateTime) - new Date(a.dateTime);
    });
  }

  const meetings = sortByDateTime(MeetingStore.list);
  return (
    <div className="printMeet">
      {meetings.map((meet, index, color) => (
        <div key={index}>
          {printMeet(
            meet,
            new Date(meet.dateTime).toDateString() === now.toDateString()
              ? "red"
              : new Date(meet.dateTime).toDateString() === now.toDateString()
              ? "orange"
              : "green"
          )}
        </div>
      ))}
    </div>
  );
};

function printMeet(meet, color) {
  return (
    <Card sx={{ maxWidth: 345, color: color }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {meet.serviceType}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <span>{meet.serviceType}</span>
          <br />
          <span>{meet.dateTime}</span> <br />
          <span>{meet.clientName}</span> <br />
          <span>{meet.clientPhone}</span> <br />
          <span>{meet.clientEmail}</span> <br />
        </Typography>
      </CardContent>
    </Card>

  );
}
export default AppointmentsComponent;
