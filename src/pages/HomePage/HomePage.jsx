import backgroundImg from "../../images/background.png";
import {
  HomePageContainer,
  StyledBackground,
  StyledBtn,
  StyledDescription,
  StyledDiv,
  StyledFrame,
  StyledHeading,
  StyledText,
  TextWrapper,
  Wrapper,
} from "./HomePage.styled";
import Studio from "../../components/Studio/Studio";
import { useNavigate } from "react-router-dom";
import Links from "../../components/Links/Links";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Wrapper>
        <HomePageContainer>
          <Links />
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
            <StyledBtn onClick={() => navigate("/services")}>
              Переглянути послуги
            </StyledBtn>
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
