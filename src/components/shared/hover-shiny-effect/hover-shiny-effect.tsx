//https://bholmes.dev/blog/a-shiny-on-hover-effect-that-follows-your-mouse-css/
import { useEffect, useRef } from 'react';
import styles from './styles.module.scss';

type Props = {
  color?: string;
};

function HoverShinyEffect({ color }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const container = containerRef.current;
  useEffect(() => {
    if(container != null) {
      function mouseMoveEvent(e: MouseEvent) {
        const { x } = container.getBoundingClientRect();
        container?.style.setProperty('--px', `${e.clientX - x}`);
        color && container?.style.setProperty('--color', color);
      }
      container.addEventListener('mousemove', mouseMoveEvent);

      return () => {
        container.removeEventListener('mousemove', mouseMoveEvent);
      };
    };
  }, [color]);
  return <div ref={containerRef} className={styles.shiny_boi}></div>;
}

export default HoverShinyEffect;
