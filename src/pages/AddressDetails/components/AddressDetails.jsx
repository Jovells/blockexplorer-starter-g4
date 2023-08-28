import * as React from 'react';
import { useParams } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import TxnTab from './Tab'
import { MoreInfoCard, OverviewCard } from './Card';
import { getBalance } from '../../../utils/alchemy';
import { useState } from 'react';


export default function AddressDetails() {
    const [initBal, setInitBal] = useState(0);
    const { id } = useParams();
    function financial(x) {
        return Number.parseFloat(x).toFixed(10);
    }
    getBalance(id).then((bal) => setInitBal(financial(Number(bal) / 1000000000000000000)))
    //const address = addresses.find((address) => address.name === id)
    return (
        <Grid container spacing={1}>
            <Grid item xs={12}>
                Address: {id || ''}
            </Grid>

            <Grid item xs={6}>
                <OverviewCard balance={initBal} />
            </Grid>
            <Grid item xs={6}>
                <MoreInfoCard />
            </Grid>
            <Grid item xs={12}>
                <TxnTab address={id} />
            </Grid>

        </Grid>
    )
}