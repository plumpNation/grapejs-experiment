import React from 'react';
import { GrapesjsReact } from 'grapesjs-react';
import 'grapesjs-preset-webpage';
import 'grapesjs/dist/css/grapes.min.css';

export const App = () => (
  <GrapesjsReact
    id='grapesjs-react'
    // @ts-ignore
    plugins={[
      'gjs-preset-webpage',
      'gjs-blocks-basic'
    ]}
  />
);

export default App;
