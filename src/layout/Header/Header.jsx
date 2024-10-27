import { Link } from 'react-router-dom';
import Container from '../../components/Section/Container/Container';
import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.header}>
      <Container>
        <Link to="/" className={css.headerLogoLink}>
          Superhero
        </Link>
      </Container>
    </header>
  );
};

export default Header;
