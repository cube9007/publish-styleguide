import React from "react";
import { BrowserRouter, HashRouter, Route, Routes, Link } from "react-router-dom";

import HOME from "./page/HOME";
import Dropdown from "./page/layout/product/Dropdown";
import Sidemenu from "./page/layout/product/Sidemenu";
import NormalLayout from "./page/layout/website/NormalLayout";
import HorizenFadeBanner from "./page/layout/website/HorizenFadeBanner";
import HorizenSlideBanner from "./page/layout/website/HorizenSlideBanner";
import HorizenSlideButtonBanner from "./page/layout/website/HorizenSlideButtonBanner";
import HorizenAutoAndBtnSlideBanner from "./page/layout/website/HorizenAutoAndBtnSlideBanner";

import LogIn from "./page/styleguide/LogIn"
import Album from "./page/styleguide/Album";
import TextField from "./page/styleguide/TextField";
import ToggleButton from "./page/styleguide/ToggleButton";
import Switch from "./page/styleguide/Switch";
import Loading from "./page/styleguide/Loading";
import LoadingProgressCircle from "./page/styleguide/LoadingProgressCircle";
import LoadingProgressLinear from "./page/styleguide/LoadingProgressLinear";
import Date from "./page/styleguide/Date";
import DateRange from "./page/styleguide/DateRange";
import ButtonPage from "./page/styleguide/Button";
import MotionDiv from "./page/styleguide/MotionDiv";
import SelectPage from "./page/styleguide/Select";
import NoData from "./page/styleguide/NoData";
import TabPage from "./page/styleguide/Tabs";
import CardPage from "./page/styleguide/Card";
import Masonry from "./page/styleguide/Masonry";
import Location from "./page/styleguide/Location";
import BreadCrumbs from "./page/styleguide/BreadCrumbs";
import Fontcolor from "./page/styleguide/Fontcolor";
import Materialicons from "./page/styleguide/Materialicons";

import './assets/scss/style.scss';

function App() {
  return (
    <div >
      <HashRouter>
        <Routes>
          <Route path="/" element={<HOME />} />
          
          <Route path="/page/layout/product/Dropdown" element={<Dropdown/>} />
          <Route path="/page/layout/product/Sidemenu" element={<Sidemenu/>} />
          <Route path="/page/layout/website/NormalLayout" element={<NormalLayout/>} />
          <Route path="/page/layout/website/HorizenFadeBanner" element={<HorizenFadeBanner/>} />
          <Route path="/page/layout/website/HorizenSlideBanner" element={<HorizenSlideBanner/>} />
          <Route path="/page/layout/website/HorizenSlideButtonBanner" element={<HorizenSlideButtonBanner/>} />
          <Route path="/page/layout/website/HorizenAutoAndBtnSlideBanner" element={<HorizenAutoAndBtnSlideBanner/>} />

          <Route path="/page/styleguide/LogIn" element={<LogIn />} /> 
          <Route path="/page/styleguide/Album" element={<Album />} /> 
          <Route path="/page/styleguide/TextField" element={<TextField />} /> 
          <Route path="/page/styleguide/ToggleButton" element={<ToggleButton />} /> 
          <Route path="/page/styleguide/Switch" element={<Switch />} /> 
          <Route path="/page/styleguide/Loading" element={<Loading />} /> 
          <Route path="/page/styleguide/LoadingProgressCircle" element={<LoadingProgressCircle />} />
          <Route path="/page/styleguide/LoadingProgressLinear" element={<LoadingProgressLinear />} /> 
          <Route path="/page/styleguide/Date" element={<Date />} /> 
          <Route path="/page/styleguide/DateRange" element={<DateRange />} /> 
          <Route path="/page/styleguide/ButtonPage" element={<ButtonPage />} /> 
          <Route path="/page/styleguide/MotionDiv" element={<MotionDiv />} /> 
          <Route path="/page/styleguide/Select" element={<SelectPage />} /> 
          <Route path="/page/styleguide/NoData" element={<NoData />} /> 
          <Route path="/page/styleguide/Tabs" element={<TabPage />} /> 
          <Route path="/page/styleguide/CardPage" element={<CardPage />} /> 
          <Route path="/page/styleguide/Masonry" element={<Masonry />} /> 
          <Route path="/page/styleguide/Location" element={<Location />} /> 
          <Route path="/page/styleguide/BreadCrumbs" element={<BreadCrumbs />} /> 
          <Route path="/page/styleguide/Fontcolor" element={<Fontcolor />} /> 
          <Route path="/page/styleguide/Materialicons" element={<Materialicons />} /> 
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;