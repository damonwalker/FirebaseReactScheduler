import { Route, Switch } from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetUps';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import Layout from './components/layout/Layout';
import UpdateMeetupPage from './pages/UpdateMeetUps';

function App() {
  // localhost:3000
  return (
    <Layout>
      <Switch>
      <Route path='/' exact>
        <AllMeetupsPage />
      </Route>
      <Route path='/new-meetup'>
        <NewMeetupPage />
      </Route>
      <Route path='/favorites'>
        <FavoritesPage />
      </Route>
      <Route path='/update'>
        <UpdateMeetupPage/>
      </Route>
      </Switch>
    </Layout>
  );
}

export default App;
