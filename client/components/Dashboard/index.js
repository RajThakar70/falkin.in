import React, {Component} from 'react'
import { Dimmer, Loader, Segment } from 'semantic-ui-react'
import CardContainer from './CardContainer'
import axios from 'axios'
import '../../assets/css/index.css'

export default class Dashboard extends Component{

  constructor(props) {
    super(props)
    this.state = {
      graphData: {
        okay: 'lul'
      },
      loader: true
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
              graphData: res.data.data,
              loader: false
            })
          }
        } else {
          console.log('Unauthorized!');
        }
      })
  }

  render() {
    if ('okay' in this.state.graphData) {
      var loader = this.state.loader
      return (
        <div className='dashboard'>
          <div className='dashboard-body'>
            <Dimmer active={loader}>
              <Loader>Loading</Loader>
            </Dimmer>
          </div>
        </div>
      )
    }
    else {
      var loader = this.state.loader
      console.log(loader);
      return (
        <div className='dashboard'>
          <div className='dashboard-body'>
            <Dimmer active={loader}>
              <Loader>Loading</Loader>
            </Dimmer>
            <Segment inverted vertical>
              <CardContainer data={this.state.graphData}/>
            </Segment>
          </div>
        </div>
      )
    }
  }
}
