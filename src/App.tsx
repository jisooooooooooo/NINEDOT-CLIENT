import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';

import { router } from '@/route';
import Loading from '@/common/component/Loading/Loading';

function App() {
  return (
    <Suspense fallback={<Loading type="goal" />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
