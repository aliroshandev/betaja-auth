import React from 'react';
import './App.scss';
import CustomSpinner from './base/components/CustomSpinner/CustomSpinner';
import Main from './base/components/Main/Main';

function App() {
  return (
    <React.Suspense fallback={<CustomSpinner/>}>
      <Main/>
    </React.Suspense>
  );
}

export default App;
