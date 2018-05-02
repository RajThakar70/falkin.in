import React, {Component} from 'react'
import { Segment } from 'semantic-ui-react'
import CardContainer from './CardContainer'
import axios from 'axios'

export default class Dashboard extends Component{

  constructor(props) {
    super(props)
    this.state = {
      graphData: {
        okay: 'lul'
      }
    }
  }

  componentDidMount() {
    axios
      .get('/api/data?username='+this.props.location.state.username+'&device='+this.props.location.state.device)
      .then(res => {
        if (res.status != 401) {
          if(res.err)
            console.log('Error while retrieving: ', res.err)
          else {
            this.setState({
              graphData: res.data.data
            })
          }
        } else {
          console.log('Unauthorized!');
        }
      })
  }

  render() {
    if ('okay' in this.state.graphData)
      return null
    else {
      return (
          <Segment inverted vertical>
            <CardContainer data={this.state.graphData}/>
          </Segment>
      )
    }
  }
}
