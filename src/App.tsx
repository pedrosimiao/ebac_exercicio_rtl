import Post from "./components/Post";

import styles from './App.module.css';

import chatBalloon from './assets/images/chat-balloon.png'

function App() {
  return (
    <div className={styles.app}>
      <Post imageUrl={chatBalloon}>
        Comments section
      </Post>
    </div>
  );
}

export default App;
