import styled from "styled-components";

export const HomePageContainer = styled.div`
  /* padding-left: 200px; */
  /* padding-top: 120px; */
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledDiv = styled.div`
  width: 50%;

  height: 100vh;
  background-color: #1e705c;
  /* position: ;
  right: 0;
  */
  z-index: -1;
`;

export const StyledFrame = styled.div`
  width: 500px;
  height: 500px;
  border: 10px solid #ebf3f5;
  margin-top: 100px;
  margin-left: -100px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* position: fixed;
  right: 20%;
  top: 15%; */
`;

export const StyledBackground = styled.div`
  max-width: 400px;
  max-height: 400px;
  background-color: #0e8c56;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledHeading = styled.h1`
  color: #5c8692;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.54;
  letter-spacing: 0.075em;
  margin-bottom: 8px;
`;
export const StyledText = styled.p`
  color: #141414;
  font-family: Playfair Display;
  font-size: 52px;
  font-weight: 700;
  letter-spacing: -0.01em;
  line-height: 1.15;
  margin-bottom: 24px;
`;

export const StyledDescription = styled.p`
  color: #555;
  font-size: 19px;
  line-height: 1.7;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 510px;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 80px;
`;

export const LinksWrapper = styled.div`
  transform: rotate(-90deg);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  a {
    color: #0e8c56;
    font-weight: 700;
    font-size: 20px;
    &:hover,
    &:focus {
      color: #1e705c;
    }
  }
`;

export const Line = styled.div`
  width: 1px;
  height: 60px;
  background-color: #1e705c;
  transform: rotate(-90deg);
  margin-right: 40px;
`;

export const SectionContainer = styled.div`
  /* display: flex;
  flex-direction: column; */
`;
