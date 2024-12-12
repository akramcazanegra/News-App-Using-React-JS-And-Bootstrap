import { useState } from "react"
import Navbar from "./Component/Navbar"
import Newsboard from "./Component/Newsboard"



export const App = () => {
  const [category, setCategory] = useState("general")
  return (
    <div>  
     <Navbar setCategory={setCategory}/>
      <Newsboard category={category}/>
    </div>
  )
}


export default App