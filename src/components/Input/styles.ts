import styled from 'styled-components';

import { ILabel } from './index';

export const Label = styled.label<ILabel>`
  display: flex;
  position: relative;
  margin-bottom: 2rem;

  > input {
    background-color: '#f2f2f2';
    border: 2px solid #040c12;
    border-radius: 4px;

    padding: 16px;
    padding-left: ${(props) => (props.icon ? '40px' : '16px')};

    color: '#000';
    font-size: 16px;

    transition: 180ms ease-in-out;

    &::placeholder {
      color: 'grey';
    }

    ~ svg {
      fill: 'grey';
      position: absolute;
      left: 12px;
      top: 16px;
      width: 24px;
      height: 24px;
      transition: 180ms ease-in-out;
    }

    &:focus {
      border: 2px solid ${(props) => props.color};

      ~ svg {
        fill: ${(props) => props.color};
      }
    }
  }
`;
