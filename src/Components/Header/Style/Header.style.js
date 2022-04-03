import styled from 'styled-components'
import { variables } from 'Styles/utils/variables'

export const HeaderComponent = styled.header`
  background-color: transparent;
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
`;

export const Logo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  img{
    width: 80px;
    height: 45px;
  }
`;

export const HeaderNav = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ul{
    margin: 0;
    padding: 0;
    list-style: none;

    li{
      display: inline-block;
      margin-left: 5px;
      a{
        color: ${props => props.theme.menuColor};
        text-decoration: none;
        display: block;
        padding: 10px;
        position: relative;
        transition: all 0.3s ease-in-out;

        &::before{
          content: '';
          position: absolute;
          width: 0%;
          height: 2px;
          bottom: 0px;
          transition: all 0.3s ease-in-out;
          background-color: ${props => props.theme.secondaryColor};
        }

        &:hover{
          &::before{
            width: 100%;
          }
        }
      }
    }
  }
`;