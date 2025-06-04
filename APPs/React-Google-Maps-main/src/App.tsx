import { Status, Wrapper } from '@googlemaps/react-wrapper';
import VITE_GOOGLE_KEY from '../.env';

const render = (status: Status) => {
  switch (status) {
    case Status.LOADING:
      return <>로딩중...</>;
    case Status.FAILURE:
      return <>에러 발생</>;
    case Status.SUCCESS:
      return <>로드 성공</>;
  }
};

function App() {
  return <Wrapper apiKey={VITE_GOOGLE_KEY} render={render} />;
}

export default App;
