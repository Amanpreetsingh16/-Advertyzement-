import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Skeleton from '@mui/material/Skeleton'
import "../App.css";


const User = ({ users, loader }) => {
  const [data, setData] = useState();

  useEffect(() => {
    setData(users);
  }, [users]);

  return (
    <div>
      <div className="wrapper">
       
        {loader  
          ?  <Box sx={{ width: 300 }}>
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
        </Box>
          : data &&
            data.data &&
            data.data.map((dataobj) => (
              <Card className="card-cont" variant="outlined">
                <Box sx={{ p: 3, display: "flex" }}>
                  <Avatar
                    className="avatar"
                    variant="rounded"
                    src={dataobj.avatar}
                  />
                  <Stack spacing={0.5}>
                    <Typography variant="body2" color="text.secondary">
                      ID: {dataobj.id}
                    </Typography>
                    <Typography fontWeight={700}>
                      {dataobj.first_name + dataobj.last_name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {dataobj.email}
                    </Typography>
                  </Stack>
                </Box>
              </Card>
            ))}
      </div>
    </div>
  );
};

export default User;
