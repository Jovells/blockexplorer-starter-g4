import { Alchemy, Network } from "alchemy-sdk";
import { useEffect, useState } from "react";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { blks } from "./blks";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

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

function Root() {
  const [blockNumber, setBlockNumber] = useState(1);
  const [last10Blocks, setLast10Blocks] = useState(blks);

  useEffect(() => {
    async function getData() {
      let newblockNumber = await alchemy.core.getBlockNumber();
      setBlockNumber(newblockNumber);

      const newBlocks = [];

      let lastOf10 = newblockNumber - 10;
      while (newblockNumber > lastOf10) {
        const newBlock = await alchemy.core.getBlockWithTransactions(
          newblockNumber
        );
        newblockNumber--;
        newBlocks.push(newBlock);
      }
      setLast10Blocks(newBlocks);
    }

    // console.log(data)

    // getData();
  }, [blockNumber]);

  return (
    <>
      <div className="App">Block Number: {blockNumber}</div>
      <Grid2 container>
      <Grid2 xs={6}>
       <Typography> Latest Blocks</Typography>
        {last10Blocks.map((block, i) => (
          
            <Stack flexWrap={"unset"} width={1} key={block.number} alignContent={'space-between'} direction={"row"}>
              <Stack direction={'row'}>
              <IconButton>Bk</IconButton>
              <Stack>
                <Typography>{block.number}</Typography>
                <Typography variant="caption">{block.timestamp}</Typography>
              </Stack>
              </Stack>
              <Stack maxWidth={'200px'}>
                <Typography noWrap overflow={"hidden"} textOverflow={"ellipsis"}>
                  Validated by {block.miner}
                </Typography>
                <Typography>
                  {" "}
                  {`${block.transactions.length} txns in ${
                    last10Blocks[i + 1]?.timestamp - block.timestamp
                  } milliseconds`}
                </Typography>
              </Stack>
              <Typography>Gas Used: {block.gasUsed._hex}</Typography>
            </Stack>
          
        ))}
      </Grid2>
      <Grid2 xs={6}>
      <Typography> Latest Transactions</Typography>
      {last10Blocks[0]?.transactions.map((txn, i) => (
          <Box width={1} key={txn.number}>
            <Stack alignContent={'space-between'} direction={"row"}>
              <Stack direction={'row'}>
              <IconButton>Tx</IconButton>
              <Stack maxWidth={'200px'}>
                <Typography overflow={"hidden"} textOverflow={'ellipsis'}>{txn.hash}</Typography>
                <Typography variant="caption">{txn.timestamp}</Typography>
              </Stack>
              </Stack>
              <Stack width={0.5}>
                <Typography textOverflow={"ellipsis"}>
                  From {txn.from}
                </Typography>
                <Typography>
                  To: {txn.to}
                </Typography>
              </Stack>
              <Typography>Amount: {parseInt(txn.value._hex)}</Typography>
            </Stack>
          </Box>
        ))}
      </Grid2>
      </Grid2>

    </>
  );
}

export default Root;
