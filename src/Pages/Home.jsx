import { useContext } from "react"
import Search from "../Components/Search"
import Movies from "../Components/Movies"

export default function Home(){
 
    return(
      <div className="home-bg">
      <h1 className="home-title">ℳ𝑜𝓋𝒾𝑒 𝒱𝒾𝓁𝓁𝒶</h1>
        <Search/>
        <Movies/>
      </div>
    )
}