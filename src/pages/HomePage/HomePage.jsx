import React from "react";
import backgroundImg from "../../images/background_image.png";
import {
  HomePageContainer,
  Line,
  LinksWrapper,
  SectionContainer,
  StyledBackground,
  StyledDescription,
  StyledDiv,
  StyledFrame,
  StyledHeading,
  StyledText,
  TextWrapper,
  Wrapper,
} from "./HomePage.styled";
import Studio from "../../components/Studio/Studio";
const HomePage = () => {
  return (
    <div>
      <Wrapper>
        <HomePageContainer>
          <LinksWrapper>
            <Line></Line>
            <a
              href="https://t.me/vidnovlennyavolossya"
              rel="noopener noreferrer"
              target="_blank"
            >
              Telegram
            </a>
            <a
              href="https://www.instagram.com/vidnovlennyavolossya/?igshid=MzRlODBiNWFlZA%3D%3D"
              rel="noopener noreferrer"
              target="_blank"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/Vidnovlennyavolossya"
              rel="noopener noreferrer"
              target="_blank"
            >
              Facebook
            </a>
          </LinksWrapper>
          <TextWrapper>
            <StyledHeading>
              Студія &#34;VIDNOVLENNYA VOLOSSYA &#34;
            </StyledHeading>
            <StyledText>
              Відновлюємо волосся з любов&apos;ю до своїх клієнтів💚{" "}
            </StyledText>
            <StyledDescription>
              З 2019 року наша студія успішно надає послуги з відновлення
              волосся усіх видів у м. Львів. Саме з нами можете не хвилюватись
              про ваше волосся, бо ми дбаємо про кожного клієнта, як про себе.
            </StyledDescription>
          </TextWrapper>
        </HomePageContainer>
        <StyledDiv>
          <StyledFrame>
            <StyledBackground>
              <img src={backgroundImg} alt="Фото Ірини Лащенко" />
            </StyledBackground>
          </StyledFrame>
        </StyledDiv>
      </Wrapper>
      <Studio></Studio>
    </div>
  );
};

export default HomePage;
