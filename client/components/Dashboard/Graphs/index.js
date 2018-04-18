import React, {Component} from 'react';
import Linechart from './Linechart';
import Barchart from './Barchart';
import Areachart from './Areachart';
import Piechart from './Piechart';
import data from './data.json'


export default class Graph extends Component {


  handleGraph = (type,data) => {
    switch (type) {
      case 'Linechart':
        return <Linechart data={data}/>
      case 'Barchart':
        return <Barchart data={data}/>
      case 'Areachart':
        return <Areachart data={data}/>
      case 'Piechart':
        return <Piechart/>
      default:
      return <Linechart data={data}/>
    }
  }

  render() {
    console.log(this.state)
    return (
      <div className="ui segment" style={{background:'#292d31',height:500}}>
        {this.handleGraph(this.props.graph,data)}
      </div>
    )
  }
}
