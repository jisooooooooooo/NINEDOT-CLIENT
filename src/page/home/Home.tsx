import Mandalart from '@/shared/component/Mandalart/Square/Square';

const Home = () => {
  const subGoals = Array(8).fill('세부 목표를 입력하세요');

  return (
    <div>
      <h1>홈</h1>
      <Mandalart.Main content="상위 목표를 입력하세요" />
      {subGoals.map((content, index) => (
        <Mandalart.Sub key={index} content={content} />
      ))}
    </div>
  );
};

export default Home;
