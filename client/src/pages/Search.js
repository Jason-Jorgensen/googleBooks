import React, {useState} from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Results from '../components/Results/Results';
import API from '../utils/API';

import axios from 'axios';

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
    const [bookSearch, setBookSearch] = useState("");
    const [results, setResults] = useState([])
    const [book, setBook] = useState({});
    const classes = useStyles();


    const googleSearch = (title) => {
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}&key=AIzaSyBExeRpbUubG-CTrMWOgop8_DZx_VBJrNE`)
      .then(res => {
        const bookInfo = res.data.items;
        setResults(bookInfo);
        setBookSearch("")

      })
    }
  
    const saveBook = (book) => {
      const bookData = {
        title: book.title,
        authors: [book.authors],
        description: book.description,
        image: book.imageLinks.thumbnail,
        link: book.infoLink
      };
      console.log(bookData)
      API.saveBook(bookData)
    }
    
  
    return (
        <Box  align="center">
          <Box borderRadius={16} {...defaultProps}>
            <Typography>
                <h5>Search Books</h5>
            <form className={classes.root} noValidate autoComplete="off">
            <TextField id="outlined-basic" style={{width:"95%"}} label="Book Title" variant="outlined" value={bookSearch} onChange={(e) => setBookSearch(e.target.value)} />
            </form>
            <Button variant="contained" style={{display:'flex', alignContent:'flex-end'}} onClick={() => googleSearch(bookSearch)}>Default</Button>
            </Typography>
          </Box>

        <Box borderRadius={16} {...defaultProps}>
          <Typography>
              <h5>Results</h5>
          </Typography>
          <Results results={results} saveBook={saveBook}/>
        </Box>
      </Box>

        
      );
    }

export default Search