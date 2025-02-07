import { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom"
function Nav() {
  const navigate = useNavigate()
  const [isScroll,setIsScroll] = useState(false)

  useEffect(()=>{
    const handleScroll = () =>{
      if(window.scrollY >= 100){
        setIsScroll(true)
      }else{
        setIsScroll(false)
      }
    }

    window.addEventListener('scroll',handleScroll)
    //移除監聽 避免重複
    return ()=>{
      window.removeEventListener('scroll',handleScroll)
    }
  },[])

  const handleScrollToSection = (section) => {
    navigate("/", { state: { targetSection: section } });
  };
  return(
    <header className={`${ isScroll ? 'bg-[#ffffffed] shadow-md' : ''} w-full fixed p-3 py-3 lg:p-6 z-20 transition duration-300`}>
        <Link to="/" data-discover="true">
          <div className="flex justify-center items-center h-12 w-12 rounded-[99em] bg-regal-blue text-white text-xl">D</div>
        </Link>
        <nav className="absolute top-[50%] right-3 lg:right-6 transform -translate-y-1/2">
          <ul className="flex flex-row space-x-8 text-base lg:text-xl">
            <li>
              <button onClick={() => handleScrollToSection("about")}>
                ABOUT
              </button>
            </li>
            <li>
              <button onClick={() => handleScrollToSection("works")}>
                WORKS
              </button>
            </li>
          </ul>
        </nav>

    </header>
  )
}

export default Nav