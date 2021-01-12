import styled from 'styled-components';

const MainWrapper = styled.div`
  position: relative;
  min-height: 100%;
  margin: 0 auto;
  padding: 30px 25px;
  max-width: ${(props) => props.theme.breakpoints.desktop};
`;

export default MainWrapper;
