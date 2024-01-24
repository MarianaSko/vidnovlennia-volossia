import styled from "styled-components";

export const Container = styled.div`
  padding: 40px 120px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  p {
    text-align: center;
  }
  /* align-items: center; */

  gap: 80px;
  img {
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
    height: 560px;
  }
`;

export const StyledDiv = styled.div`
  width: 100vw;
  /* background-color: teal; */
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  max-width: 600px;
  padding: 20px;
  border-radius: 8px;
`;

export const StyledHeading = styled.h2`
  color: #141414;
  font-family: Playfair Display;
  font-size: 52px;
  font-weight: 700;
  letter-spacing: -0.01em;
  line-height: 1.15;
  margin-bottom: 24px;
  text-align: center;
`;

export const StyledText = styled.p`
  color: #5c8692;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.54;
  letter-spacing: 0.075em;
  margin-bottom: 8px;
  margin-top: 40px;
  span {
    color: #0e8c56;
  }
`;
