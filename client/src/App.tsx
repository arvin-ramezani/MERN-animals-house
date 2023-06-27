import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import { useAppSelector } from './app/Hook';
import { selectUser } from './features/user/userSlice';
import Layout from './components/Layout/Layout';

function App() {
  const { userInfo } = useAppSelector(selectUser);

  return (
    <Router>
      <Layout>
        <Switch>
          <Route
            path='/'
            component={Home}
            exact
          />
          <Route path='/register'>
            {userInfo ? <Redirect to='/' /> : <Register login={false} />}
          </Route>
          <Route path='/login'>
            {userInfo ? <Redirect to='/' /> : <Register login />}
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
