import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from "react-router-dom";

export default function DroupDown({page}) {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // ==========navigation to team =================
  const gotoTeams=()=>{
    navigate("/team");
  }
  const handlenavigate=(val)=>{
    if(val==="New York"){

      navigate("/city");
    }
  }


  return (
    <div >
        {page.type === 'DropDown' && (
            <>
            
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        // style={{color:'white', backgroundColor: '#1B2330'}}
      >
        {page.name} 
        <ExpandMoreIcon />
      </Button>
      <Menu 
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        
        >
          {page.city.map((val,id)=>(

            <MenuItem onClick={()=>handlenavigate(val)}  >{val}</MenuItem>
          ))}
        
      </Menu>
            </>
        )}
        {page.type === 'Button' && (
            <>
             <Button variant="outlined" onClick={gotoTeams} >{page.name}</Button>
            
            </>
        )}
    </div>
  );
}