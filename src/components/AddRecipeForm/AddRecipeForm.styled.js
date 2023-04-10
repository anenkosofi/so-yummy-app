import styled from 'styled-components';
// import { IoCloseOutline } from 'react-icons/io5';

export const Wrap = styled.div`
  padding-top: 50px;
  padding-bottom: 72px;
`;

export const Title = styled.h2`
  margin-bottom: 72px;
 
  line-height: 1;
  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Description = styled.div`
@media screen and (min-width: 768px) {
 
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  @media screen and (min-width: 1440px) {
    
    display: flex;
    justify-content: space-between;
    width: 100%;
  } 
`;

export const ImgUploadWrap = styled.div`
  margin-bottom: 32px;
   display:flex;
   justify-content: center;

  
`;

export const InputUpload = styled.input`
  visibility: hidden;
  width: 0;
  height: 0;
`;

export const InputDescriptionWrap = styled.div`
  position: relative;
  margin-top: 24px;
`;

export const InputDescription = styled.input`
  padding-bottom: 18px;
  width: 343px;
  height: 43px;
  border: none;
  border-bottom: 1px solid grey;
  background: transparent;
  }
`;

export const UnderLane = styled.div`
padding-bottom: 18px;
  width: 343px;
  border: none;
  border-bottom: 1px solid grey;
  background: transparent;
  }
`;


export const SelectOption = styled.option`
cursor: pointer;
border: none;
background-color: transparent;
box-shadow: none; 
border-color:transparent;
`;

export const MainWrapIngredients = styled.div`
  margin-top: 44px;

  width: 100%;

`;

export const WrapIngredients = styled.div`
 
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;



export const InputIngredientsWrap = styled.div`
  margin-top: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InputIngredients = styled.input`
  margin-right: 14px;
  max-width: 194px;
  height: 53px;
  padding-left: 16px;
  border: none;
  border-radius: 6px;
background-color:#D9D9D9;
`;

export const SelectIngredients = styled.select`
  height: 53px;
  border: none;
  background-color:#D9D9D9;
  border-radius: 6px;
  min-width:84px;

`;

export const SelectOptionIngredients = styled.option`
  height: 53px;
  border: none;
  min-width:84px;
  display:flex;
  background-color:#fff;
`;

export const WrapPreparation = styled.div`
  margin-top: 44px;
  width: 100%;

`;

export const TitlePreparation = styled.h2`
  margin-bottom: 24px;

`;

export const TextAreaPreparation = styled.textarea`
  padding-top: 10px;
  padding-left: 16px;
  width: 100%;
  background-color:#D9D9D9;
  border:none;
`;

export const WrapButtonAdd = styled.div`
  margin-right: auto;
`;

