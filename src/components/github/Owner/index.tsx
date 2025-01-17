import React from "react";

import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

interface GithubOwner {
  owner: string
  size?: number | string
}

const Owner = ({owner, size = '1em'}: GithubOwner) => {
  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{alignItems: 'center'}}
      component='a'
      href={`https://github.com/${owner}`}
      target='_blank'
    >
      <Avatar
        alt={owner}
        src={`https://github.com/${owner}.png`}
        sx={{width: size, height: size}}
      />
      <Typography>
        {owner}
      </Typography>
    </Stack>
  )
}

Owner.displayName = 'GithubOwner'

export default Owner
