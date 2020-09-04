import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {Box, Typography} from '@material-ui/core'
import 'fontsource-roboto';

// import { Container } from './styles';

function Chart(props) {
  
    if (!props.country){ //if there's no country setted, will show worldwide graphic
  
    return (
    <>

    
    <Box ml={6} mt={7}>

                <Typography align="center" variant="h1" component="h2" gutterBottom>
                    Worldwide
                </Typography>
            <Line width={900}
                height={450}
                data={{
                labels: props.dailyDate.map(({ date }) => date),
                datasets: [{
                    data: props.dailyDate.map((data) => data.confirmed),
                    label: 'Infected',
                    borderColor: '#50dcf2',
                    backgroundColor: 'rgba(166, 230, 229, 0.5)',
                    fill: true,
                    
                }, {
                    data: props.dailyDate.map((data) => data.deaths),
                    label: 'Deaths',
                    borderColor: '#ff6666',
                    backgroundColor: 'rgba(255, 0, 0)',
                    fill: true,
                },
                ],
                }}
            /></Box>
    </>

  )}

  else {
      return (<>
      <Box ml={6} mt={7}>
             <Typography align="center" variant="h1" component="h2" gutterBottom>
                    {props.country}
                </Typography>
      <Bar width={900}
           height={450}
        data= {{
          labels: ['Infected', 'Recovered', 'Deaths'],
          datasets: [
            {
              label: 'People',
              backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
              data: [props.confirmed, props.recovered, props.deaths],
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: `Current state in ${props.country}` },
        }}
      /></Box>
     </>)
  }
}

export default Chart;