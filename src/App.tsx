import { MouseEventHandler, useRef } from "react";
import Header from "./components/Header/Header";
import About from "./pages/About";
import Archivings from "./pages/Archivings";
import Home from "./pages/Home";
import Works from "./pages/Works";

function App() {
  const tabRef = useRef<React.RefObject<HTMLDivElement>[]>([
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ]);

  const scroll = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const tabClickHandler: MouseEventHandler<HTMLElement> = (e) => {
    const clickedIndex = Number(e.currentTarget.dataset.index);

    //checkout my works
    if (isNaN(clickedIndex)) scroll(tabRef.current[2]);
    //tabs
    else scroll(tabRef.current[clickedIndex]);
  };

  return (
    <>
      <Header ontabClick={tabClickHandler} />
      <Home ref={tabRef.current[0]} onViewWorkClick={tabClickHandler} />
      <About ref={tabRef.current[1]} />
      <Works ref={tabRef.current[2]} />
      <Archivings ref={tabRef.current[3]} />
    </>
  );
}

export default App;
