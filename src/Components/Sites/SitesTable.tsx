import React from 'react';
import { withStyles, WithStyles, createStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeletePopup from '../Common/DeletePopup';

const styles = () => createStyles({
  root: {
    width: '80%',
    marginTop: 20,
    marginBottom: 20,
    overflowX: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto'
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
            <TableCell>Site</TableCell>
            <TableCell>Shortcut</TableCell>
            <TableCell>Working</TableCell>
            <TableCell>Expiry Date</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sites.map((item: any) => (
            <TableRow key={item.id}>
              <TableCell component="th" scope="row">
                {item.full_link}
              </TableCell>
              <TableCell>{item.short_link}</TableCell>
              <TableCell>{String(item.working)}</TableCell>
              <TableCell>{item.expiry_date}</TableCell>
              <TableCell>
                <DeletePopup
                  site={item.full_link}
                  buttonTitle={"Delete"}
                  title={"Delete site from database"}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default withStyles(styles)(SitesTable);