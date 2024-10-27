import { Oval } from 'react-loader-spinner';

const Loader = ({
  size = '7vw',
  strokeSize = 4,
  color = 'var(--secondary-accent-color)',
  secondaryColor = 'var(--secondary-accent-color)',
}) => {
  return (
    <Oval
      height={size}
      width={size}
      color={color}
      wrapperClass="loader"
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor={secondaryColor}
      strokeWidth={strokeSize}
      strokeWidthSecondary={strokeSize}
    />
  );
};

export default Loader;
