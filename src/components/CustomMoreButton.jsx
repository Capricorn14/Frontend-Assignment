import React from "react";
import {ReactComponent as IconButton} from "../assets/3 dot menu.svg";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const CustomMoreButton = () => {
  const handleIconClick = () => {
    alert("More Button: Implementation not included!");
  };

  return (
    <IconButton onClick={handleIconClick}>
      <MoreHorizIcon style={{ fontSize: 30 }} />
    </IconButton>
  );
};

export default CustomMoreButton;
