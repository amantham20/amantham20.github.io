import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import AboutPage from './components/about_page/AboutPage';
import ProjectsPage from './components/project_page/ProjectsPage';

import NotFound from './components/notfound/NotFound';
import ScrollToTop from './Helper/ScrollToTop';

// const router = createHashRouter([
//     {
//       path: "/*",
//       element: <App />,
//     }
//   ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        {/* <App /> */}
        <ScrollToTop />
        <Routes basename="/">

            <Route path='*' element={<NotFound />} />
            <Route exact path="/" element={<App />}/>
            <Route exact path='/about' element={<AboutPage />} />
            <Route exact path='/project' element={<ProjectsPage />} />

        </Routes>
    </Router>
);

