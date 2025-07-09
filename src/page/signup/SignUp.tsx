import { IcEssentialDot } from '@/assets/svg';
import BasicInfoSection from '@/page/signup/BasicInfoSection/BasicInfoSection';
import * as styles from '@/page/signup/SignUp.css';
import { Survey } from '@/page/signup/component/Survey/Survey';

const SIGNUP_MESSAGE = '회원가입 NINEDOPT를 만나보세요!';
const FIT_INFO_MESSAGE = '내 성향을 선택하고 맞춤형 목표 추천을 받아보세요';

const SignUp = () => {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.layoutContainer}>
        <header className={styles.headerContainer}>
          <h1 className={styles.headerText}>회원가입</h1>
          <p className={styles.descriptionText}>{SIGNUP_MESSAGE}</p>
        </header>
        <div className={styles.basicInfoContainer}>
          <span className={styles.InfoText}>기본정보</span>
          <span>
            <IcEssentialDot className={styles.essentialIcon} />
            <span className={styles.essentialText}>필수 입력 항목</span>
          </span>
        </div>
        <div className={styles.basicInfoSection}>
          <BasicInfoSection />
        </div>
        <div className={styles.fitInfoContainer}>
          <span className={styles.InfoText}>맞춤 정보</span>
          <p className={styles.fitInfoText}>{FIT_INFO_MESSAGE}</p>
        </div>
        <div className={styles.surveySection}>
          <Survey />
        </div>
      </div>
    </main>
  );
};

export default SignUp;
