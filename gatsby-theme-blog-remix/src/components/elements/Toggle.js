import { useState } from "react";
/**
 * this component is meant to be used as a render component
 * that toggles a true and false state
 * todo make hook
 */
const Toggle = props => {
  const [toggleState, setToggleState] = useState(false);
  const toggle = () => {
    setToggleState(!toggleState);
  };
  const { children } = props;
  return children({
    on: toggleState,
    toggle: toggle,
  });
};
export default Toggle;
