import styled from 'styled-components';
import { variables } from 'Styles/utils/variables';

export const MenuWrapper = styled.div`
  width: 320px;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  box-shadow: -5px 0px 8px -4px #ccc;
  background-color: rgb(239 254 255 / 97%);
  padding: 20px;
  transition: all 0.3s ease-in-out;

  .close-menu {
    position: absolute;
    left: -45px;
    background: rgb(239 254 255 / 97%);
    padding: 10px;
    cursor: pointer;
    border-radius: 5px 0px 0px 5px;
    box-shadow: -5px 0px 8px 0px #ccc;
    top: 26px;
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
          font-size: ${variables.fontSizeMedium};
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