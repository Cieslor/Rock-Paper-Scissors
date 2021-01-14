import styled from 'styled-components';

const MainWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0 auto;
  padding: 30px 25px;
  max-width: ${(props) => props.theme.breakpoints.desktop};
`;

export default MainWrapper;
