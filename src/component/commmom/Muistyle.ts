import { makeStyles ,createStyles} from "@material-ui/styles";
import { Theme } from "@material-ui/core";

const useMuiStyle = makeStyles((theme:Theme) => createStyles({

setProductpaper: {
  textAlign: "left",
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(3),
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  margin: "auto",
  maxWidth: "100%",
  borderRadius: "10px",
  marginTop: "30px",
},
tabletdicon:{
  justifyContent: 'center',
  padding:'8px !important',
  color:'#202223 !important'
},
setmodeldisplayerr: {
  position: "absolute",
  height: "auto",
  top: "45%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  backgroundColor: "white !important",
  boxShadow: `${theme.shadows[8]}`,
  borderRadius: "9px !important",
  padding: 10,
},
setmodeldisplay: {
  position: "absolute",
  height: "auto",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  backgroundColor: "white !important",
  boxShadow: `${theme.shadows[8]}`,
  borderRadius: "9px !important",
  padding: 10,
},
}))

export default useMuiStyle;