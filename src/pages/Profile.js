import React, { useContext } from 'react';
import { Avatar, Button, Grid, Typography } from '@mui/material';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

import UserContext from '../context/user';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
);

export default function Profile() {
  const { user } = useContext(UserContext);
  const { skills = {} } = user;
  return (
    <Grid container>
      <Grid item xs={4} display="flex" justifyContent="center">
        <Grid
          container
          spacing={3}
          margin="auto"
          display="flex"
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
        >
          <Grid item>
            <Avatar
              src={user?.avatarUrl}
              alt="avatar"
              sx={{ width: 150, height: 150 }}
            />
          </Grid>
          <Grid item>
            <Typography variant="h5">{user?.name}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6">{user?.position}</Typography>
          </Grid>
          <Grid item>
            <Button href="/logout">Log out</Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={8} paddingX={10} paddingY={5}>
        <Radar
          height={'500 px'}
          options={{
            maintainAspectRatio: false,
            scales: {
              r: {
                suggestedMin: 0,
                suggestedMax: 10,
              },
            },
          }}
          data={{
            labels: Object.keys(skills),
            datasets: [
              {
                label: 'Skills',
                data: Object.values(skills),
                borderColor: '#1976d2',
              },
            ],
          }}
        />
      </Grid>
    </Grid>
  );
}
