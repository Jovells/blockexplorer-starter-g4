import * as React from 'react';
import { styled } from '@mui/material/styles';
//import { useParams } from 'react-router-dom'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TxnTab from './Tab'
import { CardItem } from './Card';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));



export default function AddressDetails({ address }) {
    //const { id } = useParams();
    //const address = addresses.find((address) => address.name === id)
    return (
        <Grid container spacing={1}>
            Address: {address || ''}

            <Grid item xs={5}>
                <CardItem />
            </Grid>
            <Grid item xs={5}>
                <CardItem />
            </Grid>
            <Grid item xs={12}>
                <TxnTab />
            </Grid>

        </Grid>
    )
}