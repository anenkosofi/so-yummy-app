import styled from 'styled-components';


const ListTitle = styled.div`

  background-color:${props => props.theme.colors.greenAccent}; ;
  border-radius:8px;
  /* width: 100vh; */
  height: 38px;
  display: flex;
  align-item: center;
  padding: 10px 10px;
  align-items: center;
  

  &>p{
    font-weight: ${props => props.theme.fontWeights.semibold};
    color: ${props => props.theme.colors.primaryLightText};
    /* font-size: ${props => props.theme.fontSizes[3]}px; */
  }


  @media screen and (min-width: 768px) {
    height: 58px;
    padding: 20px 20px;
  }

  @media screen and (min-width: 1440px) {
    height: 60px;
    padding: 20px 40px;
  }
`;

const ProductTitle = styled.p`

  font-size: 12px;
  margin-right: 167px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    margin-right:318px;
  }

 @media screen and (min-width: 1440px) {
    margin-right: 750px;
 }

`

const NumberTitle = styled.p`
  margin-right: 24px;
  font-size: 12px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    margin-right:78px;
  }

 @media screen and (min-width: 1440px) {
    margin-right: 142px;
 }

`

const RemoveTitle = styled.p`
  
  font-size: 12px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }    

`

export { ListTitle, ProductTitle, NumberTitle, RemoveTitle };
