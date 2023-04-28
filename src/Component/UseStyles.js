import { createStyles, makeStyles } from "@mui/styles";

const UseStyles = makeStyles((theme) =>
  createStyles({
    label: {
      // padding: 10,
      "& span": {
        color: "red"
      }
    },
    BoxInline: {
      flexDirection: "row",
      display: "flex"
    },
    BoxText: {
      display: 'flex',
      // alignItems: 'center !important',
      marginTop: '8px',
      "& span": {
        color: "red",
        paddingLeft: 5
      }
    }
  })
);
export default UseStyles;
