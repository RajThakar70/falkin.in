import React, {Component} from 'react';
import moment from 'moment';
import {
  RadialBarChart,
  AreaChart,
  CartesianAxis,
  LineChart,
  ResponsiveContainer,
  Area,
  Line,
  Brush,
  RadialBar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';

import Linechart from './Linechart';
import Barchart from './Barchart';
import Areachart from './Areachart';
import Piechart from './Piechart';
import data from './data.json'

const style = {
  top: 0,
  left: 350,
  lineHeight: '24px'
};

export default class Graph extends Component {

  constructor(props) {
    super(props);
  };

  handelGraph = (type,data) => {
    switch (type) {
      case 'Linechart':
        return <Linechart data={data}/>
      case 'Barchart':
        return <Barchart data={data}/>
      case 'Areachart':
        return <Areachart data={data}/>
      case 'Piechart':
        return <Piechart data={data}/>
      default:
      return <Linechart data={data}/>
        break;
    }
  }

  render() {
    return (
      <div className="ui segment" style={{background:'#292d31',height:500}}>
        {this.handelGraph('Piechart',data)}
      </div>
    )
  }
}
