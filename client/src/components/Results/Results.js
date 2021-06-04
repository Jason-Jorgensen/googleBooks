import React from 'react'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';





const defaultProps = {
    bgcolor: 'background.paper',
    borderColor: 'text.primary',
    m: 1,
    border: 1,
    style: { width: "75%", height: 'auto', textAlign: 'left' },
};


function Results({ results }) {
    return (
        <div>
            {results.map((book) =>
                <Box borderRadius={16} {...defaultProps}>
                    <Typography>

                        <img src={book.volumeInfo.imageLinks.thumbnail} />
   
                    </Typography>
                </Box>
            )}
        </div>
    )

}

export default Results
