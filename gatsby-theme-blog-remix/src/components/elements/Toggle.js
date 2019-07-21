import { useState } from "react"

const Toggle = props => {
  const [toggleState, setToggleState] = useState(false)
  const toggle = () => {
    setToggleState(!toggleState)
  }
  const { children } = props
  return children({
    on: toggleState,
    toggle: toggle,
  })
}
export default Toggle
