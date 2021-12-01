import React from 'react'
import ProfilPhoto from './component/profil/ProfilPhoto'
import FullName from './component/profil/FullName'
import Adresse from './component/profil/Adresse'
import './App.css'


function App() {
  return (
    <div className='container rounded text-white' style={{width:'30%'}}>
       <div className='card bg-dark text-white'>
            <div className='card-header'>
                 <ProfilPhoto />
            </div>
            <div className='card-body text-center'>
                 <FullName />
                 <Adresse />
            </div>
      </div>
    </div>
  );
}

export default App;
