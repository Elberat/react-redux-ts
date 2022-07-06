import React from 'react';
import UserList from './components/UserList';
import PostList from './components/PostList';

import { BrowserRouter as Router, useRoutes } from 'react-router-dom';

const App = () => {
    let routes = useRoutes([{ path: '/', element: <PostList /> }]);
    return routes;
};

export default App;
