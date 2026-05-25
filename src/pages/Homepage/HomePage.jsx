import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { useDimensions } from '../../hooks/useDimensions';

export const HomePage = () => {
  const { isMobile } = useDimensions();

  return (
    <>
      <Header />
      <div>{`This is the homepage on ${isMobile ? 'mobile' : 'desktop'}`}</div>
      <Footer />
    </>
  );
};
