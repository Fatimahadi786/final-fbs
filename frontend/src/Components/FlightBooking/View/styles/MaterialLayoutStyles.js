import { makeStyles } from '@mui/styles';  // Example for MUI v5
//import makeStyles from @mui/styles
const useStyle = makeStyles(() => ({
  root: {
    width: "auto",
   marginLeft: 16, // Replace with your preferred value
    marginRight: 16, // Replace with your preferred value
    backgroundColor: "blue", // Replace with your preferred color
    color: "black", // Replace with your preferred color
  },
  paper: {
    marginTop: 24, // Replace with your preferred value
   marginBottom: 24, // Replace with your preferred value
    padding: 16, // Replace with your preferred value
  },
}));

export  {useStyle} ;
