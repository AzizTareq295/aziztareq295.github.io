import styled from 'styled-components'
import { variables } from './utils/variables'

export const MyPortfolio = styled.div`

`;

export const PageContainer = styled.div`
  max-width: 1250px;
  height: 100%;
  padding: 0 15px;
  margin: 0 auto;
  display: flex;

  @media screen and (min-width: ${variables.large}) and (max-width: ${variables.xLarge}) {
    max-width: 1100px;
  }

  @media (max-width: ${variables.large}) {
    max-width: 900px;
  }

  @media (max-width: ${variables.medium}) {
    max-width: 100%;
  }

  @media (max-width: ${variables.small}) {
    max-width: 100%;
  }
`;

export const PageSection = styled.div`
  width: ${props => props.width || '100%'};
`;
