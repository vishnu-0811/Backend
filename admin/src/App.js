import { BrowserRouter, Routes,Route } from 'react-router-dom';
import AdminPanel from './component/AdminPanel';

import View from './component/View';
import Login from './component/Login';
import AddCategory from './component/AddCategory';
import AddProduct from './component/AddProduct';
import ViewCat from './component/ViewCat';
import AddSubcategory from './component/AddSubcategory';
import ViewSubcat from './component/ViewSubcat';


function App() {
  return (
      <>
   
      <BrowserRouter>
        <Routes>
               <Route path='/' element = {<AdminPanel/>} >
               
              {/* <Route index element = {<AdminPanel/>} />  */}
              <Route path='/AddCategory' element = {<AddCategory/>} />
              <Route path='/ViewCat' element = { <ViewCat/> } />
              <Route path='/AddSubcategory' element = {<AddSubcategory/>} />
              <Route path='/ViewSubcat' element={<ViewSubcat/>} />
              <Route path='/AddProduct' element = {<AddProduct/>} />
              <Route path='/View' element = {<View/>} /> 
              <Route path='/Login' element = {<Login/>} /> 

               </Route> 
               
        </Routes>
      </BrowserRouter>
     

      
  
     </>
  );
}

export default App;
