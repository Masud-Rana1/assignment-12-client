import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
const Orders = () => {
    const {user} = useAuth();
    const [orders, setOrders] = useState([]);
    useEffect(()=> {
        const url = `https://ancient-coast-36281.herokuapp.com/orders?email=${user.email}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setOrders(data));
    },[user.email]);

    const handleDelete = id => {
      const url = `https://ancient-coast-36281.herokuapp.com/orders/${id}`;
      fetch(url, {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
        if(data.deletedCount){
          alert('deleted');
          const remaining = orders.filter(row => row._id !== id);
          setOrders(remaining);
        }
      })
    }

    return (
        <div>
            <h2>Orders: {orders.length}</h2>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="Orders table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Cancel</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right"><Button onClick={() => handleDelete(row._id)}>Delete</Button></TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default Orders;