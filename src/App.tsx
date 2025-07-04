import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { lazy, Suspense } from "react";
import Loading from "./components/loading";
import MainLayout from "./layouts/main-layout";

const Home = lazy(()=> import("@/pages/home/page"))
const NotFound = lazy(()=> import("@/pages/404/page"))

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />}/>
            <Route path="*" element={<NotFound />}/>
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
