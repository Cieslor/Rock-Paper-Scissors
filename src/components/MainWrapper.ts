import styled from 'styled-components';

const MainWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  margin: 0 auto;
  max-width: ${(props) => props.theme.breakpoints.desktop};
`;

export default MainWrapper;
