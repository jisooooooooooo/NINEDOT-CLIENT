import * as styles from '@/page/history/component/StreakDetail/StreakDetail.css';

const DEFAULT_MESSAGE = '원하는 날의 점을 클릭하고 <br/> 그날 내가 한 일을 확인해보세요!';

const StreakDetail = () => {
  return (
    <div className={styles.detailContainer}>
      <p className={styles.defaultText} dangerouslySetInnerHTML={{ __html: DEFAULT_MESSAGE }} />
    </div>
  );
};

export default StreakDetail;
