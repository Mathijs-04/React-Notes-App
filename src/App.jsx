import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Layout from './Layout.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import Notes from './Notes.jsx';
import CreateNote from './CreateNote.jsx';
import Note from './Note.jsx';
import EditNote from './EditNote.jsx';

const router = createBrowserRouter(
    [
      {
        element: <Layout />,
        children: [
          {
            path: "/",
            element: <Home />
          },
          {
            path: "/about",
            element: <About />
          },
          {
            path: "/notes",
            element: <Notes />
          },
          {
            path: "/notes/create",
            element: <CreateNote />
          },
          {
            path: "/notes/:id",
            element: <Note />
          },
          {
            path: "/notes/:id/edit",
            element: <EditNote />
          }
        ]
      }
    ],
    { basename: "/react-notes-app" }
);

function App() {
  return (
      <>
        <RouterProvider router={router} />
      </>
  );
}

export default App;
