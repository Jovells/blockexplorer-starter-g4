import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TransactionList from './TransactionList';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function TxnTab({ address }) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Transactions" {...a11yProps(0)} />
                    <Tab label="Internal Txns" {...a11yProps(1)} />
                    <Tab label="ERC-20 Token Txns" {...a11yProps(2)} />
                    <Tab label="ERC-721 Token Txns" {...a11yProps(3)} />
                    <Tab label="ERC-1155 Token Txns" {...a11yProps(4)} />
                    <Tab label="Validated Blocks" {...a11yProps(5)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <TransactionList address={address} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                Internal Txns
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                ERC-20 Token Txns
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
                ERC-721 Token Txns
            </CustomTabPanel>
            <CustomTabPanel value={value} index={4}>
                ERC-1155 Token Txns
            </CustomTabPanel>
            <CustomTabPanel value={value} index={5}>
                Validated Blocks
            </CustomTabPanel>
        </Box>
    );
}