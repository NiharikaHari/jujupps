import { useInView } from 'react-intersection-observer';

interface Props {
  src: string;
  name: string;
}

const Container = ({ src, name }: Props) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  if (inView) {
    entry?.target.classList.add('show');
  } else {
    entry?.target.classList.remove('show');
  }

  return (
    <div className="container hidden" ref={ref}>
      <img src={src}></img>
      <span className="dynapuff-regular">{name}</span>
    </div>
  );
};

export default Container;
