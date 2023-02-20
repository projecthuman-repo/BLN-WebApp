import "./App.css";
// import CourseBox from "./components/Course-Box/CourseBox";
import Header from "./components/Header-Components/Logged-In/Header-Logged-In";
// import SideNav from "./components/Side-Nav-bar/Side-Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import CourseBox from "./components/Course-Box/CourseBox";


function App() {
  return (
    <>
      <Header />
      <CourseBox />
    </>
  );
}

export default App;
