import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  box-sizing: border-box;
  padding: 0 17px;
  line-height: 34px;
  text-align: center;
  vertical-align: middle;
  border: 1px solid #dddbda;
  background-color: #ffffff;
  position: relative;
  color: #0070d2;
  white-space: normal;
  user-select: none;
  font-size: 14px;
  font-family: sans-serif;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #f4f6f9;
  }

  &[disabled] {
    cursor: default;
    color: #dddbda;
    background-color: #ffffff;
  }
`;

export default Button;