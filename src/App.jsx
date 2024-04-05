import React, { useState, useEffect } from "react";
import { Suspense } from "react";
import { BarLoader } from "react-spinners";
import Home from "./pages/Home";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Suspense
      fallback={
        <div className="h-screen w-full flex items-center justify-center">
          <BarLoader color="#0091F6" height={4} />
        </div>
      }>
      {loading ? (
        <div className="h-screen w-full flex items-center justify-center">
          <BarLoader color="#0091F6" height={4} />
        </div>
      ) : (
        <>
          <div className=" dark:bg-black dark:text-white bg-zinc-50">
            <Home />
          </div>
        </>
      )}
    </Suspense>
  );
};

export default App;
