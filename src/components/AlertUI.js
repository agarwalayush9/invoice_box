import React, { useEffect, useState } from "react";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";

const AlertUI = (props) => {
  let [openIn, setOpenIn] = React.useState(false);
  useEffect(() => {
    if (props.open !== openIn) {
      setOpenIn(props.open);
    }
  }, [props.open]);
  return (
    <div>
      <Collapse in={openIn}>
        <Alert
          severity={props.alert.val}
          style={{
            width: "fit-content",
            right: "0",
            marginRight: "25px",
            marginTop: "5px",
            position: "fixed",
          }}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpenIn(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {props.alert.msg}
        </Alert>
      </Collapse>
    </div>
  );
};

export default AlertUI;
