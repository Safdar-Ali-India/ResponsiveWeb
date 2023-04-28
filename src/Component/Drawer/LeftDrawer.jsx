// import * as React from 'react';
// import Box from '@mui/material/Box';
// import SwipeableDrawer from '@mui/material/SwipeableDrawer';
// import Button from '@mui/material/Button';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
// import DroupDown from '../DroupDown';

// export default function SwipeableTemporaryDrawer(props) {

//     console.log("props.pages", props.page);
//   const [state, setState] = React.useState({
//     top: false,
//     left: false,
//     bottom: false,
//     right: false,
//   });

//   // const toggleDrawer = (anchor, open) =>  {
    

//   //   setState({ ...state, [anchor]: open });
//   // };
//   const toggleDrawer = (anchor, open) => (event) => {
//     if (
//       event &&
//       event.type === 'keydown' &&
//       (event.key === 'Tab' || event.key === 'Shift')
//     ) {
//       return;
//     }

//     setState({ ...state, [anchor]: open });
//   };

// React.useEffect(() => {
//   if(props.side){
//     toggleDrawer(props.side, true)
//   }
// }, [props])



//   const list = (props) => (
//     <Box
//       sx={{ width: props.side === 'top' || props.side === 'bottom' ? 'auto' : 250 }}
//       role="presentation"
//       onClick={toggleDrawer(props.side, false)}
//       onKeyDown={toggleDrawer(props.side, false)}
//     >

//       <List>
//         {Object.entries(props.page).map(([key,value], index) => (
//            <DroupDown page={value} />
//         ))}
//       </List>
//     </Box>
//   );

//   return (
//     <div>
//       {
//         props.side && <SwipeableDrawer
//         anchor={props.side}
//         open={state[props.side]}
//         onClose={toggleDrawer(props.side, false)}
//         onOpen={toggleDrawer(props.side, true)}
//       >
//         {list(props.side)}
//       </SwipeableDrawer>
//       }
//       {/* {['left', 'right', 'top', 'bottom'].map((anchor) => (
//         <React.Fragment key={anchor}>
//           <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
//           <SwipeableDrawer
//             anchor={anchor}
//             open={state[anchor]}
//             onClose={toggleDrawer(anchor, false)}
//             onOpen={toggleDrawer(anchor, true)}
//           >
//             {list(anchor)}
//           </SwipeableDrawer>
//         </React.Fragment>
//       ))} */}
//     </div>
//   );
// }










import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <React.Fragment key={"left"}>
    <Button onClick={toggleDrawer("left", true)}>{"left"}</Button>
    <SwipeableDrawer
      anchor={"left"}
      open={state["left"]}
      onClose={toggleDrawer("left", false)}
      onOpen={toggleDrawer("left", true)}
    >
      {list("left")}
    </SwipeableDrawer>
  </React.Fragment>
  );
}