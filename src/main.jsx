import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import './index.css'

//components
import { Home } from './pages/Home';
import { MediaCategoryLink } from './components/MediaCategoryLink';
import { MoviesSection } from './pages/MoviesSection';
import { MovieView } from './pages/MovieView';
import { SeriesSection } from './pages/SeriesSection';
import { SerieView } from './pages/SerieView';
import { PlayMedia } from './pages/PlayMedia';
import { CollectionView } from './pages/CollectionView';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        < Route path='/' element={ < Home /> } />
        
        <Route path='/movies' element={< MoviesSection />}>
            <Route path='category/:categoryId/:categoryName' element={< MediaCategoryLink mediaType={'movie'} />} />
        </Route>

        <Route path='/series' element={< SeriesSection />}>
            <Route path='category/:categoryId/:categoryName' element={< MediaCategoryLink mediaType={'tv'}/>} />
        </Route>

        <Route path='/movie/:movieId' element={< MovieView />} />
        <Route path='/tv/:serieId' element={< SerieView />} />
        {/* <Route path='/collection/:collectionId' element={< CollectionView />} /> */}

        < Route path='/watch/:mediaId' element={< PlayMedia />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
