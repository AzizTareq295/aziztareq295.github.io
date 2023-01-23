import styled from 'styled-components'
import { variables } from 'Styles/utils/variables';

export const IntroComponent = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${props => props.theme.backgroundColor};
  display:flex;
  align-items:center;
  justify-content: center;
  gap: 50px;
  transition: all 0.3s ease-in-out;

  .intro-title{
    h1{
      color: ${props => props.theme.textColor};
      font-size: ${variables.fontSizeLarge};
      font-weight: ${variables.fontWeightBold};
      position: relative;

    }
   
    span{
      color: ${props => props.theme.secondaryColor};
      font-size: ${variables.fontSizeMedium};
    }
  }

  .bio-pic{
    .image-wrapper{
      width: 300px;
      height: 300px;

      & img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        animation: animateBorder 8s ease-in-out infinite 1s;
        box-sizing: border-box;
        box-shadow: 0px 0px 9px 1px #eee;
        border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
      }

      @keyframes animateBorder{
        0% {
          border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
        }
        
        50% {
            border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
        }
        100% {
            border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
        }
      }
    }
  }
`;