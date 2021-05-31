import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';


const defaultProps = {
    bgcolor: 'background.paper',
    borderColor: 'text.primary',
    m: 1,
    border: 1,
    style: { width: "75%", height: '10rem' },
  };

function Header() {
    return (
        <Box display="flex" justifyContent="center">
          <Box borderRadius={16} {...defaultProps}>
            <Typography>
            <div className="center">
            <p>hi</p>
            </div>     
            </Typography>
          </Box>
        </Box>
      );
    }
export default Header
