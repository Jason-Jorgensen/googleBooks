import React from 'react'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));


const defaultProps = {
    bgcolor: 'background.paper',
    borderColor: 'text.primary',
    m: 1,
    border: 1,
    style: { width: "75%", height: 'auto', textAlign: 'left' },
};


function Results({ results, saveBook }) {
    const classes = useStyles();
    const saveButton = (results) => {
        // console.log(results)
        saveBook(results)
        
    }

    return (
        <div className={classes.root}>
            {results.map((book) =>
                <Box borderRadius={16} {...defaultProps} style={{width:"auto"}}>
                    <Typography>
                        <Grid container spacing={1} style={{marginBottom:"5%"}}>
                            <Grid item xs={6}>
                                <div style={{marginLeft:"15px"}}>
                                <h3 >{book.volumeInfo.title}</h3>
                                <h4 style={{marginTop:"-10px"}}>Written By {book.volumeInfo.authors}</h4>
                                </div>
                            </Grid>
                            <Grid item xs={6}>
                                {}
                                <Link ><Button variant="contained" style={{float:"right", marginRight:"15px", marginTop:"15px"}} onClick={() => saveButton(book.volumeInfo)}>Save</Button></Link>
                                <Link to={{ pathname: book.volumeInfo.infoLink}} target="_blank"><Button variant="contained" style={{float:"right", marginRight:"15px", marginTop:"15px"}}>View</Button></Link>
                            </Grid>
                            <Grid item xs={3}>
                                <img src={book.volumeInfo.imageLinks.thumbnail} style={{height:"auto", width:"auto", marginTop:"5%", marginLeft:"15px", display:'flex', justifyContent:"center", alignItems:"center"}} />
                            </Grid>
                            <Grid item xs={9}>
                                <p>{book.volumeInfo.description}</p>
                            </Grid>
                        </Grid>

   
                    </Typography>
                </Box>
            )}
        </div>
    )

}

export default Results
