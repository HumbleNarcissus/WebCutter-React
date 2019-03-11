import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, WithStyles, createStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = () => createStyles({
  root: {
    width: '80%',
    marginTop: 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

interface Props extends WithStyles<typeof styles> {
    data: any,
}

function SitesTable(props: Props) {
  const { classes } = props;
  const { sites } = props.data;
  
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat (g)</TableCell>
            <TableCell align="right">Carbs (g)</TableCell>
            <TableCell align="right">Protein (g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sites.map(() => (
            console.log('x')
            // <TableRow key={row.id}>
            //   <TableCell component="th" scope="row">
            //     {row.name}
            //   </TableCell>
            //   <TableCell align="right">{row.calories}</TableCell>
            //   <TableCell align="right">{row.fat}</TableCell>
            //   <TableCell align="right">{row.carbs}</TableCell>
            //   <TableCell align="right">{row.protein}</TableCell>
            // </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default withStyles(styles)(SitesTable);