import React, {useState} from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: 'auto',
      },
    },
  }));

const defaultProps = {
    bgcolor: 'background.paper',
    borderColor: 'text.primary',
    m: 1,
    border: 1,
    style: { width: "75%", height: 'auto', textAlign:'left' },
  };
  
  
  
  function Search() {


    const [bookSearch, setBookSearch] = useState("")
    const classes = useStyles();



    return (
        <Box display="flex" justifyContent="center">
          <Box borderRadius={16} {...defaultProps}>
            <Typography>
                <h5>Search Books</h5>
            <form className={classes.root} noValidate autoComplete="off">
            <TextField id="outlined-basic" label="Book Title" variant="outlined" value={bookSearch} onChange={(e) => setBookSearch(e.target.value)} />
            </form>
  
            </Typography>
          </Box>
        </Box>
      );
    }

export default Search