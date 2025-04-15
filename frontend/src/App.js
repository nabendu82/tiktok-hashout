import './App.css';
import Video from './components/Video';

function App() {
  return (
    <div className="app">
      <div className='app__videos'>
        <Video url="https://res.cloudinary.com/dxkxvfo2o/video/upload/v1608169738/video1_cvrjfm.mp4" channel="nabendu82" description="Macbook Air to Windows PC" song="I am Windows" likes={145} shares={100} messages={45} />
        <Video url="https://res.cloudinary.com/dxkxvfo2o/video/upload/v1608169739/video2_mecbdo.mp4" channel="twd" description="Tuesday morning editing" song="Editing is great" likes={245} shares={190} messages={25} />
      </div>
    </div>
  );
}

export default App;
