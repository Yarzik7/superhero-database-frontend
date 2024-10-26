import Container from '../../components/Section/Container/Container';
import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.header}>
      <Container>
        <h1>Superhero</h1>
      </Container>
    </header>
  );
};

export default Header;
