import * as React from 'react';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export const CardItem = ({ title }) => (
    <React.Fragment>
        <Stack spacing={2}>
            <Item>{title}</Item>
            <Item>Contract:</Item>
            <Item>Decimals</Item>
        </Stack>
    </React.Fragment>
);