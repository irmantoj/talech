import React from "react"
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
  },
}));

const TabPanel = (props) => {
  
    const classes = useStyles();
    const { children, value, index} = props;

    return (
      <div className={classes.root}
        role="tabpanel"
        hidden={value !== index}
        id={`tabpanel-${index}`}
        aria-labelledby={`tab-${index}`}
      >
          { children }
      </div>
    );
}

export default TabPanel;
