import Section from '../Section';
import Container from '../Container/Container';

const SectionWithContainer = ({ children }) => {
  return (
    <Section>
      <Container>{children}</Container>
    </Section>
  );
};

export default SectionWithContainer;
