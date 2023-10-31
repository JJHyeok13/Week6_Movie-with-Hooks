import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react';
import "./App.css"
import Home from "./Components/Pages/Home";
import Celebrity from "./Components/Pages/Celebrity";
import Movies from "./Components/Pages/Movies";
import NotFound from "./Components/Pages/NotFound";
import TV from "./Components/Pages/TV";
import Header from "./Components/Header";
import AdPage from "./Components/AdPage";
import MovieDetail from "./Components/Pages/MovieDetail";


function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tv" element={<TV />} />
          <Route path="/celebrity" element={<Celebrity />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="/adpage" element={<AdPage />} />
          <Route path="/movie/:title" element={<MovieDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;