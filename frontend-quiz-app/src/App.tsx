import { RouterProvider, useLocation } from "react-router-dom";
import { Navbar, Page } from "./components";
import { router } from "./routes/routes";
import { useEffect, useState } from "react";

function App() {
  const location = useLocation()
  const [quizTitle, setQuizTitle] = useState("")

  useEffect(()=>{
    if (location.pathname.includes('/html')) {
      setQuizTitle('HTML quiz')
    } else if(location.pathname.includes('/css')){
      setQuizTitle('CSS quiz')
    } else if(location.pathname.includes('/javascript')){
      setQuizTitle('javascript quiz')
    } else if(location.pathname.includes('/accessibility')){
      setQuizTitle('accessibility quiz')
    } else{
      setQuizTitle('')
    }
  },[location])
  
  return (
    <>
      <Navbar quizzes={{title: quizTitle}} />
      <Page>
        <RouterProvider router={router} />
      </Page>
    </>
  );
}

export default App;
