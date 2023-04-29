import React from 'react'

import TeamsforMobile from '../Component/PageComponent/Teams/TeamsforMobile';
import Teamspc from '../Component/PageComponent/Teams/Teamspc';
import { Box } from '@mui/material';
import { useMediaQuery } from "@mui/material";

const Teams = () => {
    const isMobile = useMediaQuery("(max-width: 600px)");
  return (
    <Box>
    {isMobile ? (
      <TeamsforMobile />
    ) :  <Teamspc />
    }
  </Box>
  )
}

export default Teams