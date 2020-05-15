import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const renderAlert = ({severity,title,text}) => {
return <Alert severity={severity}>
      <AlertTitle>{title}</AlertTitle>
      {text}
    </Alert>
}

export default function DescriptionAlerts({severity,title,text}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        {renderAlert({severity,title,text})}
    </div>
  );
}