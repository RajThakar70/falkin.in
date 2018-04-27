import React, {Component} from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,Brush,Legend,
  ResponsiveContainer
} from 'recharts';


export default class Areachart extends Component{

  render(){
    return(
      <ResponsiveContainer width='100%' minHeight={400}>
        <AreaChart width={600} height={200} data={this.props.data}
          margin={{top: 10, right: 30, left: 0, bottom: 0}}>
          <XAxis dataKey="time"/>
          <YAxis/>
          <CartesianGrid vertical={false}/>
          <Legend verticalAlign="top" height={40} iconType='circle' onMouseOver={(data)=>console.log(data)}/>
          <Tooltip animationEasing='ease' wrapperStyle={{background:'#393e44'}} labelStyle={{color: '#ff9801'}}/>
          <Area name="People moved in" connectNulls={true} type='monotone' dataKey='in' stroke='#1ebea5' fill='#1ebea5' />
          <Area name="People moved out" connectNulls={true} type='monotone' dataKey='out' stroke='#c04dd8' fill='#c04dd8' />
          <Brush travellerWidth={10}/>
        </AreaChart>
      </ResponsiveContainer>

    )
  }
}
