import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MainList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    gap: 50px;
    margin-bottom: 32px;
  }
  @media screen and (min-width: 1440px) {
    gap: 100px;
    margin-bottom: 14px;
  }
`;

export const TitleList = styled.p`
  font-weight: 600;
  font-size: 28px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: ${props => props.theme.colors.tertiaryDarkText};
  margin-bottom: 32px;
  @media screen and (min-width: 768px) {
    font-size: 44px;
    margin-bottom: 40px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 50px;
  }
`;

export const CategoriesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 28px;
  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 32px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 50px;
    flex-wrap: nowrap;
    gap: 14px;
  }
`;

export const Link = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 94px;
  height: 38px;
  background-color: ${props => props.theme.colors.greenAccent};
  border: none;
  color: ${props => props.theme.colors.primaryLightText};
  font-family: inherit;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  border-radius: 6px;
  margin-left: auto;
  transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)';
  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.quaternaryDarkText};
  }
`;

export const ButtonOtherCategory = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 195px;
  height: 46px;
  background-color: transparent;
  border-radius: 24px 44px;
  border: 2px solid ${props => props.theme.colors.greenAccent};
  color: ${props => props.theme.colors.quaternaryDarkText};
  font-family: inherit;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  margin-left: auto;
  margin-right: auto;
  transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)';
  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.greenAccent};
    color: ${props => props.theme.colors.whiteTex};
  }
  @media screen and (min-width: 768px) {
    width: 239px;
    height: 61px;
    font-size: 16px;
  }
`;

export const ErrorMessage = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: ${props => props.theme.colors.tertiaryDarkText};
  margin-bottom: 100px;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 36px;
    margin-bottom: 140px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 44px;
    margin-bottom: 180px;
  }
`;
