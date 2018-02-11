import React, {Component} from 'react';
import {
  LineChart,
  Line,
  Legend,
  Brush,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';


export default class Linechart extends Component{

  render(){
    return(
      <ResponsiveContainer width='100%' minHeight={400}>
        <LineChart data={this.props.data} syncId="anyId" margin={{top: 10,right: 50,left: 0,bottom: 10}}>
          <XAxis dataKey="time.$date"/>
          <YAxis/>
          <CartesianGrid vertical={false}/>
          <Legend verticalAlign="top" height={40} iconType='circle' onMouseOver={(data)=>console.log(data)}/>
          <Tooltip animationEasing='ease' wrapperStyle={{background:'#393e44'}} labelStyle={{color: '#ff9801'}}/>
          <Line name="People moved in" type='monotone' dataKey='in' stroke='#6781a2' fill='#6781a2' activeDot={{ stroke: '#1ebea5', strokeWidth: 2, r: 5 }}/>
          <Line name="People moved out" type='monotone' dataKey='out' stroke='#1ebea5' fill='#1ebea5' activeDot={{ stroke: '#6781a2', strokeWidth: 2, r: 5 }}/>
          <Brush startIndex={0} travellerWidth={10} endIndex={10}/>
        </LineChart>
      </ResponsiveContainer>

    )
  }
}
