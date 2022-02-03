import React from 'react';
import './Toggle.css';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button className={'toggle__btn'} onClick={this.handleClick}>
        {this.state.isToggleOn ? 'Включено' : 'Выключено'}
      </button>
    );
  }
}
export default Toggle;