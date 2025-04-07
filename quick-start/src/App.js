import logo from './logo.svg';
import './App.css';

import MyApp from './components/myapp';
import UserInfo from './components/userInfo';
import ListItem from './components/list';
import MyButton from './components/event';
import MyButtonState from './components/usingState';
import ShareState from './components/sharedState';


function App() {
  return (
    <>
      <MyApp />
      <UserInfo />
      <ListItem />
      <MyButton />
      <MyButtonState />
      <MyButtonState />
      <ShareState />
    </>
  );
}

export default App;
