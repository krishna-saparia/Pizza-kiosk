import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

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

const CustomizeList = ({
  DataS,
  DataSauceCheese,
  DataVegTs,
  DataMeatTs,
  DataExtraF,
}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  // const [secondary, setSecondary] = useState(true);

  const handleClick = () => {
    setOpen(!open);
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
      {/* {DataType.map((type, index) => {
          return(
            <ListItemText primary="Size" />
            
          );
      })} */}
      <ListItem button onClick={handleClick}>
        <ListItemIcon>{/* <InboxIcon /> */}</ListItemIcon>
        <ListItemText primary="Size" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem>
            <ListItemIcon />
            {/* <StarBorder /> */}
            {/* </ListItemIcon> */}
            <ul>
              {DataS.map((size, index) => {
                return (
                  <li>
                    <ListItem button className={classes.nested}>
                      <ListItemText
                        key={index}
                        primary={size.name}
                        secondary={`$ ${size.price}`}
                      />
                    </ListItem>
                  </li>
                );
              })}
            </ul>
          </ListItem>
        </List>
      </Collapse>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>{/* <InboxIcon /> */}</ListItemIcon>
        <ListItemText primary="Sauce and Cheese" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem>
            <ListItemIcon>{/* <StarBorder /> */}</ListItemIcon>
            <ul>
              {DataSauceCheese.map((sauceAndCheese, index) => {
                return (
                  <li>
                    <ListItem button className={classes.nested}>
                      <ListItemText
                        key={index}
                        primary={sauceAndCheese.name}
                        secondary={`$ ${sauceAndCheese.price}`}
                      />
                    </ListItem>
                  </li>
                );
              })}
            </ul>
          </ListItem>
        </List>
      </Collapse>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>{/* <InboxIcon /> */}</ListItemIcon>
        <ListItemText primary="Veg Toppings" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem>
            <ListItemIcon>{/* <StarBorder /> */}</ListItemIcon>
            <ul>
              {DataVegTs.map((vegT, index) => {
                return (
                  <li>
                    <ListItem button className={classes.nested}>
                      <ListItemText
                        key={index}
                        primary={vegT.name}
                        secondary={`$ ${vegT.price}`}
                      />
                    </ListItem>
                  </li>
                );
              })}
            </ul>
          </ListItem>
        </List>
      </Collapse>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>{/* <InboxIcon /> */}</ListItemIcon>
        <ListItemText primary="Meat Toppings" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem>
            <ListItemIcon>{/* <StarBorder /> */}</ListItemIcon>
            <ul>
              {DataMeatTs.map((meatTs, index) => {
                return (
                  <li>
                    <ListItem button className={classes.nested}>
                      <ListItemText
                        key={index}
                        primary={meatTs.name}
                        secondary={`$ ${meatTs.price}`}
                      />
                    </ListItem>
                  </li>
                );
              })}
            </ul>
          </ListItem>
        </List>
      </Collapse>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>{/* <InboxIcon /> */}</ListItemIcon>
        <ListItemText primary="Extra Flavour" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem>
            <ListItemIcon>{/* <StarBorder /> */}</ListItemIcon>
            <ul>
              {DataExtraF.map((extraF, index) => {
                return (
                  <li>
                    <ListItem button className={classes.nested}>
                      <ListItemText
                        key={index}
                        primary={extraF.name}
                        secondary={`$ ${extraF.price}`}
                      />
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
};

export default CustomizeList;
