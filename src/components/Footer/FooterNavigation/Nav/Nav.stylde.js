import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Link = styled(NavLink)`
  &.active {
    color: ${props => props.theme.colors.footerLink};
  }
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    color: ${props => props.theme.colors.footerLink};
  }
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 32px;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.02em;
  > :not(:last-child) {
    margin-bottom: 14px;
  }
  @media screen and (min-width: 768px) {
    & > :not(:last-child) {
      margin-bottom: 24px;
    }
  }
`;

export { Link, NavContainer };
