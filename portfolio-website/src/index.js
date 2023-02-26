import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AboutPage from './components/about_page/AboutPage';
import ProjectsPage from './components/project_page/ProjectsPage';

import NotFound from './components/notfound/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        {/* <App /> */}
        <Routes>

            <Route path='*' element={<NotFound />} />
            <Route exact path="/" element={<App />}/>
            <Route exact path='/about' element={<AboutPage />} />
            <Route exact path='/project' element={<ProjectsPage />} />

        </Routes>
    </Router>
);

