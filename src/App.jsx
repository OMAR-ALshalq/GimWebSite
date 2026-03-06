import './App.css'
import { useState , useEffect} from 'react'
import Headr from './Component/headr/Headr'
import Heeroo from "./Component/hero/Heeroo"
import About from './Component/about/About'
import Contact from './Component/contact/Contact'
import Services from './Component/services/Services'
import Comment from './Component/comment/Comment'
import Footer from './Component/footer/Footer'
function App() {
  const [dark, setDark] = useState(localStorage.getItem("theme") === "dark");

  useEffect(() => {
    // تحديث الـ attribute في ملف الـ HTML
    if (dark) {
      document.documentElement.setAttribute("dark-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("dark-theme", "light");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);
  return (
    <div
      style={{
        // backgroundColor: dark ? "black" : "white",
        // minHeight: "100vh"
      }} 
    >
      <Headr dark={dark} setdark={setDark} />
      <Heeroo />
      <About />
      <Contact />
      <Services />
      <Comment />
      <Footer />
    </div>
  );
}

export default App
