import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useLocation, useNavigate } from "react-router-dom";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

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
  // const handlenavigate=(val)=>{
  //   if(val==="New York"){
  //     navigate("/city");
  //   }
  //   if(val==="Explor"){
  //     navigate("/explore");
  //   }
  // }

  const loaction = useLocation().pathname
  console.log("loaction",loaction)


  return (
    <div style={{backgroundColor:'#1B2330'}} >
        {page.name === 'New York' && (
            <>
            
            <Button variant="text" onClick={()=>navigate("/city")} sx={{fontFamily: 'Open Sans',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '14px',
            lineHeight: '20px',
            color: '#FFFFFF',
            backgroundColor:'#1B2330',
            ml:4,
           
           }}
            >New York {loaction === '/city' ? <ExpandLessIcon /> : <ExpandMoreIcon/> }</Button>
            </>
        )}
        {page.name === 'Explor' && (
            <>
            
            <Button variant="text" onClick={()=>navigate("/explore")} sx={{fontFamily: 'Open Sans',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '14px',
            lineHeight: '20px',
            color: '#FFFFFF',
            backgroundColor:'#1B2330',
           
           }}
            >Explor {loaction === '/explore' ? <ExpandLessIcon />  : <ExpandMoreIcon/> }</Button>
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
            > {page.name}</Button>
            
            </>
        )}
    </div>
  );
}