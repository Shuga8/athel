import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Page from "./components/Page";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="" element={<Page />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
