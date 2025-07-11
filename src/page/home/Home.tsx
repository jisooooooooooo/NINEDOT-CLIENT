import Mandalart from '@/common/component/Mandalart/Mandalart';

const Home = () => {
  return (
    <div>
      <h1>홈</h1>
      <Mandalart type={'TODO_SUB'} />
      <Mandalart type={'TODO_MAIN'} />
      <Mandalart type={'TODO_EDIT'} />
      <Mandalart type={'MY_MANDAL'} />
    </div>
  );
};

export default Home;
