import React from "react";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

export default function BtnBackHome() {
  const navigate = useNavigate();

  const handleRedirectHome = () => {
    navigate("/");
  };

  return (
    <IconButton
      onClick={handleRedirectHome}
      sx={{
        position: "fixed",
        bottom: 16,
        left: 16,
        backgroundColor: "orange",
        "&:hover": { backgroundColor: "darkorange" },
        color: "white",
        zIndex: 1000,
        borderRadius: "50%", // מקל להבטיח שהכפתור יהיה עגול
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // הוספת צל קטן לכפתור
      }}
    >
      <HomeIcon />
    </IconButton>
  );
}
