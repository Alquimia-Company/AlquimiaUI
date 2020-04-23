import styled from 'styled-components';

import { ILabel } from './index';

export const Label = styled.label<ILabel>`
  display: flex;
  position: relative;
  margin-bottom: 2rem;

  > input {
    width: 100%;
    background: #f2f2f2;
    border: none;
    border-radius: 4px;
    height: 70px;
    padding: 0 24px;

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
