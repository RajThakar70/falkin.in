import React , { Component } from 'react';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react';
import DesktopContainer from './DesktopContainer';
import MobileContainer from './MobileContainer';
import './index.css'


export default class Appbar extends Component{

  render(){
    return(
      <div>
        <DesktopContainer>{this.props.children}</DesktopContainer>
        <MobileContainer>{this.props.children}</MobileContainer>
      </div>
    )
  }
}
