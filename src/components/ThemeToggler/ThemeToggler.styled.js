import styled from 'styled-components';

const SwitchBody = styled.label`
  display: block;

  width: 61px;
  height: 27px;

  padding: 3px 3.05px;

  box-shadow: inset 0px 6px 8px 3px rgba(0, 0, 0, 0.1);
  border-radius: 50px;

  cursor: pointer;

  input {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;

    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }

  ${({ status }) => {
    return status ? 'background-color: #8BAA36;' : 'background-color: #EFEFEF;';
  }}
`;

const Switch = styled.span`
  display: block;
  width: 21.35px;
  height: 21px;
  margin: 0;

  background: linear-gradient(180deg, #ffffff 0%, #e8eaea 100%);
  border-radius: 50%;

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  ${({ status }) => {
    return status
      ? 'transform: translateX(160%);'
      : 'transform: translateX(0);';
  }};
`;

export { SwitchBody, Switch };
