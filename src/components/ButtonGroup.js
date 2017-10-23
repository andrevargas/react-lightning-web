import React, { PureComponent } from 'react';
import styled from 'styled-components';

const BG_COLOR = '#ffffff';
const FG_COLOR = '#1a85d8';

const Button = styled.button`
  position: relative;
  box-sizing: border-box;
  padding: 0 17px;
  vertical-align: middle;
  background-color: ${BG_COLOR};
  color: ${FG_COLOR};
  border: 1px solid #dddbda;
  font-size: 14px;
  font-family: sans-serif;
  line-height: 34px;
  text-align: center;
  cursor: pointer;
  white-space: normal;
  user-select: none;

  -webkit-transition: all .1s ease;
  -moz-transition: all .1s ease;
  -ms-transition: all .1s ease;
  -o-transition: all .1s ease;
  transition: all .1s ease;

  &:hover,
  &:focus {
    background-color: #f4f6f9;
    outline: none;
  }

  &.selected {
    color: ${BG_COLOR};
    background-color: ${FG_COLOR};
    border-color: ${FG_COLOR};
  }

  &[disabled] {
    cursor: default;
    color: #dddbda;
    background-color: ${BG_COLOR};
  }
`;

const Container = styled.div`
  display: inline-flex;

  & {
    button + button {
      margin-left: -1px;
    }
    button:first-child {
      border-radius: 4px 0 0 4px;
    }
    button:last-child {
      border-radius: 0 4px 4px 0;
    }
  }
`;

class ButtonGroup extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: props.selectedValue
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedValue !== this.state.selectedValue) {
      this.setState({ selectedValue: nextProps.selectedValue });
    }
  }

  onChange = value => {
    if (value !== this.state.selectedValue) {
      this.setState({ selectedValue: value });
      if (typeof this.props.onChange === 'function') {
        this.props.onChange(value);
      }
    }
  }

  render() {
    return (
      <Container>
        {this.props.items.map(item => (
          <Button
            key={item.value}
            disabled={item.disabled}
            className={this.state.selectedValue === item.value ? 'selected' : ''}
            onClick={() => this.onChange(item.value)}>
            {item.label}
          </Button>
        ))}
      </Container>
    );
  }
}

export default ButtonGroup;