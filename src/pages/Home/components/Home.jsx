import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Backdrop, Box, Chip, CircularProgress, Divider, IconButton, Paper, Stack, Tooltip, Typography } from "@mui/material";
import { blks } from "./blks";
import { useEffect, useState } from "react";
import { Alchemy, Network } from "alchemy-sdk";
import ExplorerRow from "./ExplorerRow";
import { Link, useLoaderData, useNavigation } from "react-router-dom";

export async function loader(request, params) {
  let newblockNumber = await alchemy.core.getBlockNumber();

  

  const newBlocks = [];

  let lastOf10 = newblockNumber - 10;

  // new Promise.resolve()
  while (newblockNumber > lastOf10) {
    const newBlock = await alchemy.core.getBlockWithTransactions(
      newblockNumber
    );
    newblockNumber--;
    newBlocks.push(newBlock);
  }
  return {last10Blocks: newBlocks, newblockNumber};
}

// import './App.css';

// Refer to the README doc for more information about using API
// keys in client-side code. You should never do this in production
// level code.
const settings = {
    apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
    network: Network.MATIC_MUMBAI,
  };
  
  // In this week's lessons we used ethers.js. Here we are using the
  // Alchemy SDK is an umbrella library with several different packages.
  //
  // You can read more about the packages here:
  //   https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview#api-surface
  const alchemy = new Alchemy(settings);

  const Card = ({title, loading, marginX, children}) =>  <Grid2 marginX={marginX} p={2}  component={Paper}  md={6}>
  <Typography fontWeight={'bold'}> {title}</Typography>
  <Divider />
  {loading ?       
  // <Backdrop 
  //       sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
  //       open >
        <CircularProgress sx={{m:2}} color="inherit" />
      // </Backdrop> 
      :children}
  </Grid2>
  


export default  function Home({}) {
const [blockNumber, setBlockNumber] = useState(1);
const [last10Blocks, setLast10Blocks] = useState(blks);
const [loading, setLoading] = useState(true);

useEffect(() => {
  loader().then(({last10Blocks, newBlockNumber})=>
  { setLast10Blocks(last10Blocks); setBlockNumber(newBlockNumber); setLoading(false)})

  return () => {
    
  }
}, [])


{
  return <Grid2 container  columnGap={5} width={1} mx={3} >
      <Card loading={loading} marginX={-3} title={'Latest Blocks'}>

        {last10Blocks.map((block, i) => 
          <ExplorerRow link={'block/'+block.number} type ='Bk' number ={block.number} time = {block.timestamp}
          mid = {<>
            <Typography maxWidth={'171px'}  noWrap overflow={"hidden"} textOverflow={"ellipsis"}>
            Mined by <Link style={{ textDecoration: 'none' }}> {block.miner} </Link>
          </Typography>
          <Typography>
            {`${block.transactions.length}`} transactions
          </Typography>
          </>

          }
          amount = {`${parseInt(block.gasUsed._hex)}`}
          amountCaption = {'Gas Used'}
          />

            )
          }
      </Card>
     
      <Card loading={loading} title={'Latest Transactions'} marginX={0}>
      {last10Blocks[0]?.transactions.slice(0,10).map((txn, i) => 
        <ExplorerRow type={'Tx'} link={'transaction/'+txn.number} number={txn.hash} time={txn.timestamp} mid={
                      <><Typography maxWidth={'171px'}  noWrap overflow={"hidden"} textOverflow={"ellipsis"}>
                      From <Link style={{ textDecoration: 'none' }} to={'address/'+ txn.from}> {txn.from} </Link>
                    </Typography>
                    <Typography maxWidth={'171px'}  noWrap overflow={"hidden"} textOverflow={"ellipsis"}>
                      To: <Link style={{ textDecoration: 'none' }} to={'address/'+ txn.to}> {txn.to} </Link>
                    </Typography> </>
      }
      amount={parseInt(txn.value._hex)} 
      amountCaption={'Amount'}
      />
)}
      </Card>
      </Grid2>;
}
  }