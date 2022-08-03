import Header from "./components/header/header";
import {BrowserRouter,Route,Routes } from "react-router-dom"
//import Query from './pages/query/query';
import Query from './query';
//import chart from './pages/chart/chart';
import Chart from './chart.js';
import DismissHeader from './components/dismissHeader/dismissHeader';
import Sidebar from './components/sidebar/sidebar';
import { useContext } from "react";
import { DataContext } from "./context/context";
export default function Router()
{
    const {loading,error}=useContext(DataContext)
    return(
        <BrowserRouter>
      <DismissHeader/>
      <Header/>
      <Routes>
      <Route path="/search" element={Query}/>
      </Routes>
      {
          loading?<p>loading...</p>:error?<p>oops sorry,something went wrong</p>:(
      <div className="d-flex">
      <Sidebar/>
      <Routes>
        <Route path="/search" element={Query}/>
        <Route path="/chart" element={Chart}/>
        <Route path="/">
        
        </Route>
        </Routes>
      </div>
           )}
      </BrowserRouter>
    )
}