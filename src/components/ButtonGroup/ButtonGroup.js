import React, { Component } from 'react';
import styled from 'styled-components';
import Button from './Button';

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

class ButtonGroup extends Component {
  render() {
    return (
      <Container>
        <Button>Refresh</Button>
        <Button>Save</Button>
        <Button>Edit</Button>
      </Container>
    );
  }
}

export default ButtonGroup;