import { useState } from "react"
import { MenuIcon, MenuIconCLose } from "../iconSvg"

function MenuMobile() {
  const [MenuIsOn, setMenuIsOn] = useState(false)

  return (
    <div onClick={() => setMenuIsOn(!MenuIsOn)} class="cursor-pointer w-14 p-1">
      {
        MenuIsOn ? <MenuIconCLose/> : <MenuIcon/>
      }
      
    </div>
  )
}
export default MenuMobile