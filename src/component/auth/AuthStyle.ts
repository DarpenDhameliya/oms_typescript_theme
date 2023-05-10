import { makeStyles ,createStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";

const useStyleAuth = makeStyles((theme:Theme) => createStyles({
  setloginbackpaper: {
    textAlign: "center",
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(3),
    display: "flex !important",
    justifyContent: "center",
    flexDirection: "column",
    margin: "auto",
    maxWidth: "510px",
    borderRadius: "10px",
  },
  setcontainer: {
    maxWidth: "100% !important",
    minHeight: "100vh",
    position: "relative",
    zIndex: 1,
    backgroundColor: "aliceblue",
    paddingTop: "70px",
    // backgroundImage:`url(${image})`
  },
  setpageheading: {
    maxWidth: "100% !important",
    margin: "auto",
    display: "flex",
    justifyContent: "center",
  },
  setheading: {
    display:'flex',
    padding: "5px",
    margin: "0 !important",
    color: "#495057",
    alignItems: 'center',
    fontSize: "30px !important",
    lineHeight: "32px",
    [theme.breakpoints.down("xs")]: {
      fontSize:'25px !important'
    },  },
  setloginheadset:{
    fontSize:'15px !important',
    color:'#524c4c',
  },
  setinput:{
    display:'grid',
  },
  setlabel: {
    display:'flex',
    fontSize: "15px !important",
    lineHeight: "21px !important",
    marginRight: "10px !important",
    marginBottom: "2px !important",
   },
  setloginbutton: {
    marginTop: "20px !important",
    backgroundColor: "#367fa9 !important",
  },
  setbottomtypography:{
    display:'flex',
    justifyContent:'flex-end'
  },
  setcheck:{
    display:"flex",
    alignItems:"center"
  }
}));

export default useStyleAuth;
