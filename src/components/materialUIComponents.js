import React , { useState }from 'react';
import { Box , Button , Checkbox} from '@material-ui/core';


function MaterialUI() {

    const [color , setColor] = useState("#fff");

    let getNewColor = () => {
        setColor(() => {
            var letters = '0123456789ABCDEF';
            var hash = '#';
            for (var i = 0; i < 6; i++) {
                hash = hash + letters[Math.floor(Math.random() * letters.length)];
            };
            return hash;
        })
    }

    return (
        <Box component="div" className="ui-wrapper" m={1}>
            <Button variant="outlined" onClick={getNewColor}>
                Primary
            </Button>

            <Button variant="contained" >
                {color}
            </Button>
        </Box>
    );
  }
  
  export default MaterialUI;