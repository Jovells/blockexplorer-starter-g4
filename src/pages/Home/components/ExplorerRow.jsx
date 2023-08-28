import { Chip, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function ExplorerRow({type, number, link, time, mid, amount, amountCaption})
{return <Stack alignItems={'center'} py={1} key={number} width={1} justifyContent={'space-between'} direction={"row"}>
<Stack direction={'row'}>
<IconButton>{type}</IconButton>
<Stack alignItems={'center'} justifyContent={'center'}>
  <Link to={link}><Typography  maxWidth={'171px'}  noWrap overflow={"hidden"} textOverflow={"ellipsis"}>{number}</Typography></Link>
  {time&&<Typography variant="caption">{time}</Typography>}
</Stack>
</Stack>
<Stack >
  {mid}
</Stack>

<Tooltip title={amountCaption} placement="top">
<Chip sx={{width: '100px'}}   label={amount} />
</Tooltip>
</Stack>}