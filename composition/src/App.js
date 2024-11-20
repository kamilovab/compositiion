import Comment from './components/Comment';
import './App.css';

function App() {
  const user = {
    author: {
      avatarUrl: "https://www.zooplus.co.uk/magazine/wp-content/uploads/2021/01/striped-grey-kitten.jpg",
      name: 'Hello Kitty'
    },
    text: 'I hope you enjoy learning React',
    date: new Date()
  }


  return (
    <div className="App">
      <Comment author = {user.author} text={user.text} date={user.date}/>
    </div>
  );
}

export default App;
