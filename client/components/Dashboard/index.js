import React, {Component} from 'react'
import { Segment } from 'semantic-ui-react'
import CardContainer from './CardContainer'
import axios from 'axios'

export default class Dashboard extends Component{

  constructor(props) {
    super(props)
    this.state = {
      graphData: {}
    }
    const username = this.props.location.state.username
        , device = this.props.location.state.device
    axios
      .get('/api/data?username='+username+'&device='+device)
      .then(res => {
        console.log(res.status);
        if(res.data.err)
          console.log(res.data.err);
        this.setState({
          graphData: res.data.data
        })
        // console.log('typeof graphData', typeof this.state.graphData);
      })
  }

  render() {
    console.log('graphData in dash index', this.state.graphData);
    return (
        <Segment inverted vertical>
          <CardContainer data={this.state.graphData}/>
        </Segment>
    )
  }
}
