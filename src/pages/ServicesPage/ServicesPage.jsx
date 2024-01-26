import {
  HeadingWrapper,
  StyledDescription,
  StyledHeading,
  StyledList,
  StyledText,
} from "./ServicesPage.styled";
import { Container } from "../../components/Studio/Studio.styled";
import { servicesList } from "../../components/ServiceItem/servicesList";
import ServiceItem from "../../components/ServiceItem/ServiceItem";

const ServicesPage = () => {
  return (
    <Container>
      <HeadingWrapper>
        <StyledHeading>Наші послуги</StyledHeading>
        <StyledText>Чудовий результат за дві години</StyledText>
        <StyledDescription>
          Майстри нашої Студії <span>&#34;Vidnovlennya Volossya&#34; </span>
          прекрасно знають, як правильно підібрати та якісно виконати процедури
          для вашого волосся. Ми використовуємо лише професійні засоби
          <span> premium </span>
          класу.
        </StyledDescription>
      </HeadingWrapper>
      <StyledList>
        {servicesList.map((item) => (
          <ServiceItem key={item.id} obj={item}></ServiceItem>
        ))}
      </StyledList>
    </Container>
  );
};

export default ServicesPage;
