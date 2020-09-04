import React from 'react';
import {FormControl, FormHelperText, Typography, InputLabel, Select, MenuItem} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import PublicIcon from '@material-ui/icons/Public';



const useStyles = makeStyles((theme) => ({
  
    selectForm: {
    padding: '10px 280px 10px 10px'
  }}))


function Countries(props) {

    const classes = useStyles()
    const country = props.contry
   
    
  return (
    <>
        
        <FormControl className={classes.selectForm} > 
          <Typography>Select a Country <PublicIcon fontSize="small"/> </Typography>                        
            <Select onChange={(e) => props.handleChange(e.target.value)}>              
            <MenuItem value=''> All World </MenuItem>            
            {props.countries.map((country, i) => <MenuItem key={i} value={country}>{country}</MenuItem>)}
            
            </Select>
            <FormHelperText>Select a country to statics</FormHelperText> 
      </FormControl>
    
    </>
  )
}

export default Countries;