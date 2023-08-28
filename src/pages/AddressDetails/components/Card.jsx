import * as React from 'react';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
}));

export const OverviewCard = ({ balance }) => (
    <React.Fragment>
        <Stack spacing={1}>
            <Item>Overview</Item>
            <Item>{`Balance: ${balance}MATIC`}</Item>
            <Item>Token:</Item>
        </Stack>
    </React.Fragment>
);

export const MoreInfoCard = ({ title }) => (
    <React.Fragment>
        <Stack spacing={1}>
            <Item>More Info</Item>
            <Item>MyName Tag: Not available</Item>
            <Item>Null</Item>
        </Stack>
    </React.Fragment>
);