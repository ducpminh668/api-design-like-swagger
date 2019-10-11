import React from "react";
import { Drawer } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import './TemporaryDrawer.css';

export default function TemporaryDrawer(props) {
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  return (
    <div>
      <IconButton
        aria-label="menu"
        className="iconButton"
        onClick={toggleDrawer("left", true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
        <div className="Drawer">
          <ul>
            <li>Tài liệu mô tả API</li>
          </ul>
        </div>
      </Drawer>
    </div>
  );
}
