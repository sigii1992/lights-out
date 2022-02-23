import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    background: "linear-gradient(to left,#130f40, #000000)",
    zIndex: 100,
    boxShadow: "0px 1px 10px black",
  },
});

export default function Navbar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction 
        label="Trending" 
        icon={<WhatshotIcon />}
        style={{ color: "#fc5296"}} />
      <BottomNavigationAction 
        label="Movies" 
        icon={<DesktopWindowsIcon />}
        style={{ color: "#fc5296"}} />
      <BottomNavigationAction 
        label="TV series" 
        icon={<LiveTvIcon />}
        style={{ color: "#fc5296"}} />
      <BottomNavigationAction 
        label="Search" 
        icon={<SearchIcon />}
        style={{ color: "#fc5296"}} />
    </BottomNavigation>
  );
}