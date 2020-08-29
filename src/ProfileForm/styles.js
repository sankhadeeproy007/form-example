import { makeStyles, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) =>
  createStyles({
    grid: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    button: {
      marginRight: theme.spacing(1),
    },
  })
);
