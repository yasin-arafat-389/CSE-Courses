import "./App.css";
import Cart from "./Components/Cart/Cart";
import Courses from "./Components/Courses/Courses";
import Header from "./Components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <div className="flex w-[90%] mx-auto gap-5 ">
        <Courses />
        <Cart />
      </div>
    </>
  );
}

export default App;
