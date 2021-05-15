import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import IconButton from "@material-ui/core/IconButton";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { Box } from "@material-ui/core";
import { products_data } from "../Products/Data";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "150%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.default,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const CustomizeList = observer(({ productIndex }) => {
  const classes = useStyles();
  // const [open, setOpen] = useState("");
  const [open, setOpen] = useState(false);
  // const [secondary, setSecondary] = useState(true);

  const handleClick = (index) => {
    if (open === index) {
      setOpen("");
    } else {
      setOpen(index);
    }
    // setOpen(!open);
  };
  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Customize Your Pizza
        </ListSubheader>
      }
      className={classes.root}
    >
      {products_data.productsData[productIndex].details.dataset.map(
        (value, index) => {
          return (
            <List>
              <ListItem key={index} button onClick={() => handleClick(index)}>
                <ListItemIcon>{/* <InboxIcon /> */}</ListItemIcon>
                <ListItemText primary={value.type} />
                {index === open ? <ExpandLess /> : <ExpandMore />}
                {/* {open ? <ExpandLess /> : <ExpandMore />} */}
              </ListItem>
              <Collapse in={index === open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem>
                    <ListItemIcon />

                    <ul>
                      {value.details.map((subVal, index) => {
                        return (
                          <li>
                            <ListItem>
                              <ListItemText
                                key={index}
                                primary={subVal.name}
                                secondary={`$ ${subVal.price.toFixed(2)}`}
                              />
                              <Box
                                display="flex"
                                flexDirection="row"
                                bgcolor="transparent"
                                justifyContent="flex-end"
                                alignContent="center"
                                marginLeft="40px"
                                paddingLeft="20px"
                              >
                                <IconButton
                                  disabled={subVal.quantity === 0}
                                  onClick={() =>
                                    (subVal.quantity = subVal.quantity - 1)
                                  }
                                >
                                  <RemoveIcon color="primary" />
                                </IconButton>
                                <h3
                                  style={{
                                    textAlign: "center",
                                    display: "flex",
                                    alignSelf: "flex-end",
                                    paddingBottom: "5px",
                                  }}
                                >
                                  {subVal.quantity}
                                </h3>
                                <IconButton
                                  onClick={() =>
                                    (subVal.quantity = subVal.quantity + 1)
                                  }
                                >
                                  <AddIcon color="primary" />
                                </IconButton>
                              </Box>
                            </ListItem>
                          </li>
                        );
                      })}
                    </ul>
                  </ListItem>
                </List>
              </Collapse>
            </List>
          );
        }
      )}
    </List>
  );
});

export default CustomizeList;
