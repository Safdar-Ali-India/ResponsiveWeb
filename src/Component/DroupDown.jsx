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
    <div style={{backgroundColor:'#1B2330'}} >
        {page.type === 'DropDown' && (
            <>
            
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{fontFamily: 'Open Sans',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '14px',
            lineHeight: '20px',
            color: '#FFFFFF', backgroundColor:'#1B2330'}}
        // style={{color:'white', backgroundColor: '#1B2330'}}
      >
        {page.name} 
        <ExpandMoreIcon style={{backgroundColor:'#1B2330'}} />
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
        style={{backgroundColor:'#1B2330'}}
        >
          {page.city.map((val,id)=>(

            <MenuItem onClick={()=>handlenavigate(val)}  
            sx={{fontFamily: 'Open Sans',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '14px',
            lineHeight: '20px',
            color: '#FFFFFF'}}
            style={{backgroundColor:'#1B2330'}}
             >{val}</MenuItem>
          ))}
        
      </Menu>
            </>
        )}
        {page.type === 'Button' && (
            <>
             <Button variant="outlined" onClick={gotoTeams} sx={{fontFamily: 'Open Sans',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '14px',
            lineHeight: '20px',
            color: '#FFFFFF',
            backgroundColor:'#1B2330',
            border: '1px solid #FFFFFF',
            borderRadius: '8px'
           }}
            >{page.name}</Button>
            
            </>
        )}
    </div>
  );
}