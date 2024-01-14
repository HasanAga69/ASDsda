import React, { useRef } from 'react'

interface Props {
  title: string,
  style?: string,
  targetSection: string
}

const Button: React.FC<Props> = ({ title, targetSection }) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollToSection = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={scrollRef} className={`section-${targetSection}`}>
      <button className='px-4 py-2 mt-1 flex justify-center items-center scroll-down' onClick={scrollToSection}>
        {title}
      </button>
    </div>
  );
};


// const Button = ({title, style}: Props) => {
//   return (
//     <a href={item}>
//     <button className='px-4 py-2 mt-1 flex justify-center items-center scroll-down' />
//     </a>
//   )
// }

export default Button