import React, {Component} from 'react';
import {
  PieChart,
  Pie,
  Legend,
  Tooltip,
  Cell,
  Label,
  ResponsiveContainer
} from 'recharts';
import axios from 'axios';


const data01 = [
                  {name: 'January', value: 400}, {name: 'February', value: 300},
                  {name: 'March', value: 300}, {name: 'April', value: 200},
                  {name: 'May', value: 278}, {name: 'June', value: 189},
                  {name: 'July', value: 400}, {name: 'August', value: 300},
                  {name: 'Septmber', value: 300}, {name: 'October', value: 200},
                  {name: 'November', value: 278}, {name: 'December', value: 189}]

const COLORS = [
    "#d31b5b",
    "#6b1d60",
    "#25314c",
    "#244f54",
    "#079187",
    "#62b3b7",
    "#fed641",
    "#f0704c",
    "#e4b1ac",
    "#b0b2b2",
    "#343636",
    "#2a0b26"];

export default class Piechart extends Component{
  constructor(){
    super()
    this.state={
      pieData:[]
    }
    // axios.get(window.location.origin+'/sessions').then((data)=>{
    //   console.log(window.location.href)
    //   if(data) return this.setState({pieData:[...data.data]});
    // }).catch((error)=> {
    //   console.log(error);
    // });
  }


  render(){
    const {pieData} = this.state;
    return(
      <ResponsiveContainer width='100%' minHeight={400}>
        <PieChart>
          <Pie data={pieData} dataKey="value" innerRadius={20} outerRadius={100} fill="#ffffff" label labelLine={false}>
            {pieData.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]}/>)}
            <Label value="SOME DATA" position="outside" />
          </Pie>
          <Legend verticalAlign="top" height={40} iconType='circle'/>
          <Tooltip animationEasing='ease' wrapperStyle={{background:'#393e44'}} labelStyle={{color: '#ff9801'}}/>
        </PieChart>
      </ResponsiveContainer>

    )
  }
}
