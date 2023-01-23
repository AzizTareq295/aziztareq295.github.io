import styled from 'styled-components';
import { variables } from 'Styles/utils/variables';

export const MenuWrapper = styled.div`
  width: 0;
  height: 100vh;
  position: fixed;
  top: 0;
  right: -100%;
  box-shadow: -5px 0px 8px -4px #ccc;
  background-color: rgb(239 254 255 / 97%);
  padding: 20px;
  transition: 
    width 0.8s ease-in-out,
    right 0.8s ease-in-out;

  &.active-menu{
    width: 320px;
    right: 0;
  }

  .menu-header{
    width: 100%;

    & .menu-close{
      display: flex;
      align-items: center;
      justify-content: flex-end;
      > span{
        cursor: pointer;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        &::before{
          content: '';
          width: 0;
          height: 0;
          background-color: ${variables.secondaryColor};
          border-radius: 50%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          position: absolute;
          z-index: -1;
          transition: all 0.3s ease-in-out;
        }

        &:hover{
          &::before{
            width: 100%;
            height: 100%;
          }
        }
      }
    } 

    .menu-intro{
      width: 100%;
      text-align: center;
      margin-bottom: 20px;

      & img{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        object-fit: cover;
      }

      & h4{
        color: ${variables.secondaryColor};
        font-size: ${variables.fontSizeSmall};
      }
    }
  }

  nav{
    width: 100%;
    height: 100%;
    ul{
      margin: 0;
      padding: 0;
      list-style: none;

      li{
        a{
          color: ${props => props.theme.menuColor};
          text-decoration: none;
          display: block;
          padding: 10px;
          font-size: ${variables.fontSizeSmall};
          text-shadow: 0px 0px 0px ${variables.secondaryColor};
          transition: all 0.3s ease-in-out;

          &:hover{
            text-shadow: 3px 3px 3px ${variables.secondaryColor};
          }
        }
      }
    }
  }
`;