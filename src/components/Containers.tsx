import Container from './Container';
import './styles/Containers.css';

const Containers = () => {
  return (
    <>
      <div className="flex-container">
        <Container src={'./assets/paint.svg'} name={'Projects'}></Container>
        <Container src={'./assets/about-me.svg'} name={'About Me'}></Container>
        <Container src={'./assets/stalls.svg'} name={'Stalls'}></Container>
        <Container src={'./assets/gallery.svg'} name={'Gallery'}></Container>
        <Container src={'./assets/zines.svg'} name={'Zines'}></Container>
        <Container src={'./assets/shop.svg'} name={'Shop'}></Container>
      </div>
    </>
  );
};

export default Containers;
