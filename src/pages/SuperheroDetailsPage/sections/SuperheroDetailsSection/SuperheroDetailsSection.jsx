import { useParams } from 'react-router-dom';
import SectionWithContainer from '../../../../components/Section/SectionWithContainer/SectionWithContainer';
import SuperheroInfo from '../../../../components/SuperheroInfo/SuperheroInfo';

const SuperheroDetailsSection = () => {
  const { superheroId } = useParams();
  return (
    <SectionWithContainer>
      <SuperheroInfo data={superheroId} />
    </SectionWithContainer>
  );
};

export default SuperheroDetailsSection;
