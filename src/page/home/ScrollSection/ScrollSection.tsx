import * as styles from '@/page/home/ScrollSection/ScrollSection.css';

type Props = {
  title: string;
  content: string;
  index: number;
};

const ScrollSection = ({ title, content, index }: Props) => {
  const isOdd = index % 2 === 1;
  const direction = isOdd ? 'right' : 'left';

  return (
    <section className={styles.scrollContainer}>
      <div className={styles.layoutContainer({ direction })}>
        <div>
          <h1 className={styles.titleText} dangerouslySetInnerHTML={{ __html: title }} />
          <p className={styles.contentText} dangerouslySetInnerHTML={{ __html: content }} />
        </div>
        <div className={styles.sectionContainer}>CONTENT</div>
      </div>
    </section>
  );
};

export default ScrollSection;
