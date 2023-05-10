import React, { useState, useEffect } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link, useLocation } from "react-router-dom";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import ListItemIcon from "@mui/material/ListItemIcon";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import { Divider } from "@mui/material";
// import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import useStyleMainDisplay from "./MainDisplayStyle";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";

interface ISidebarDataProps {}

const SidebarData: React.FunctionComponent<ISidebarDataProps> = (props) => {
  const [sublistOpenmaster, setSublistOpenmaster] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  let classes = useStyleMainDisplay(selectedIndex);
  const location = useLocation();

  const hendlesublistmaster = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
    // index: number
  ) => {
    // console.log(index);
    setSublistOpenmaster(!sublistOpenmaster);
    // setSelectedIndex(index);
  };

  const handleOrderClick = () => {
    setSelectedIndex(0);
    setSublistOpenmaster(false);
  };

  const handleListItemClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };
  useEffect(() => {
    if ("/app/home" === location.pathname) {
      setSelectedIndex(1);
    }
  },[location]);

  return (
    <>
      <List className={classes.selectedindex}>
        <div className={classes.setviewforweb}>
          <div className={classes.seticonwithname}>
            <Typography className={classes.setheadertypoweb}>hi</Typography>
          </div>
        </div>
        <div className={classes.setviewforwebdivider}>
          <Divider
            variant="middle"
            style={{ borderColor: "#fff0f045", margin: "5px 5px" }}
          />{" "}
        </div>
        <ListItemButton
          onClick={(e) => hendlesublistmaster(e)}
          className={classes.effectlist}
          selected={selectedIndex === 1}
        >
          <ListItemIcon style={{ minWidth: "45px" }}>
            <LibraryBooksIcon className={classes.setsidebaricon} />
          </ListItemIcon>
          <ListItemText primary="Master" className={classes.setsidebaricon} />
          {sublistOpenmaster ? (
            <ExpandLessIcon className={classes.setsidebaricon} />
          ) : (
            <ExpandMoreIcon className={classes.setsidebaricon} />
          )}
        </ListItemButton>

        <Collapse
          in={Boolean(sublistOpenmaster)}
          timeout="auto"
          unmountOnExit
          sx={{ backgroundColor: "#2c3b41" }}
        >
          <List
            component="div"
            disablePadding
            className={classes.selectedsubindex}
          >
            <ListItemButton
              component={Link}
              to="/app/home"
              selected={"/app/home" === location.pathname}
              onClick={(event) => handleListItemClick(event, 1)}
              className={classes.effectlist}
            >
              <ListItemIcon style={{ minWidth: "45px" }}>
                <PanoramaFishEyeIcon className={classes.setsidebaricon} />
              </ListItemIcon>
              <ListItemText primary="Home" className={classes.setsidebaricon} />
            </ListItemButton>
            <Divider sx={{ paddingTop: 0.1 }} />
            <ListItemButton
              component={Link}
              to="/app/home12"
              selected={"/app/home12" === location.pathname}
              onClick={(event) => handleListItemClick(event, 1)}
              className={classes.effectlist}
            >
              <ListItemIcon style={{ minWidth: "45px" }}>
                <PanoramaFishEyeIcon className={classes.setsidebaricon} />
              </ListItemIcon>
              <ListItemText
                primary="Website"
                className={classes.setsidebaricon}
              />
            </ListItemButton>
            <Divider sx={{ paddingTop: 0.1 }} />
          </List>
        </Collapse>

        <ListItemButton
          component={Link}
          to="/app/home1"
          onClick={handleOrderClick}
          selected={"/app/home1" === location.pathname}
          className={classes.effectlist}
        >
          <ListItemIcon style={{ minWidth: "45px" }}>
            <LibraryBooksIcon className={classes.setsidebaricon} />
          </ListItemIcon>
          <ListItemText
            primary="party master"
            className={classes.setsidebaricon}
          />
        </ListItemButton>

        <ListItemButton
          component={Link}
          to="/app/home2"
          onClick={handleOrderClick}
          selected={"/app/home2" === location.pathname}
          className={classes.effectlist}
        >
          <ListItemIcon style={{ minWidth: "45px" }}>
            <LibraryBooksIcon className={classes.setsidebaricon} />
          </ListItemIcon>
          <ListItemText primary=" master" className={classes.setsidebaricon} />
        </ListItemButton>
      </List>
    </>
  );
};

export default SidebarData;
