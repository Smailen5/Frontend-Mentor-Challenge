/* eslint-disable no-unused-vars */
import experiences from "../data/experiences.json";
import rings from "../assets/images/pattern-rings.svg";
import { useGlobalContext } from "../context";

const Experiences = () => {
  const { useWindowWidth } = useGlobalContext();
  const width = useWindowWidth();
  const isTablet = width >= 768;
  return (
    <div className="">experiences</div>
  );
};

export default Experiences;
