import React, {Component} from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
  ResponsiveContainer
} from 'recharts';

export default class Barchart extends Component{

  render(){
    return(
      <ResponsiveContainer width='100%' minHeight={400}>
        <BarChart width={600} height={300} data={this.props.data}
          margin={{top: 5, right: 30, left: 20, bottom: 5}}>
          <XAxis dataKey="time.$date"/>
          <YAxis/>
          <CartesianGrid vertical={false}/>
          <Tooltip animationEasing='ease' wrapperStyle={{background:'#393e44'}} labelStyle={{color: '#ff9801'}}/>
          <Legend />
          <Bar name="People moved in" dataKey="in" fill="#c04dd8" />
          <Bar name="People moved out" dataKey="out" fill="#4ed8da" />
          <Brush startIndex={0} travellerWidth={10} endIndex={10}/>
        </BarChart>
      </ResponsiveContainer>

    )
  }
}
