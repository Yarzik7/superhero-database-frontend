import SectionWithContainer from '../../../../components/Section/SectionWithContainer/SectionWithContainer';
import SuperheroList from '../../../../components/SuperheroList/SuperheroList';

const SuperheroListSection = () => {
  return (
    <SectionWithContainer>
      <h1 className="visually-hidden">Superheroes</h1>
      <SuperheroList />
    </SectionWithContainer>
  );
};

export default SuperheroListSection;
