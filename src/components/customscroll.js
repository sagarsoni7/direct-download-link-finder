import React,{Component} from "react";
import { Scrollbars } from 'react-custom-scrollbars';

class CustomScrollbars extends Component {
  render() {
    return (
      <Scrollbars
        renderTrackHorizontal={({ style, ...props }) =>
            <div {...props} style={{ ...style, backgroundColor: 'blue' }}/>
        }>
        {this.props.children}
      </Scrollbars>
    );
  }
}

export default CustomScrollbars;