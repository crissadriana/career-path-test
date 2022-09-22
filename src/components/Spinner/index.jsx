import Overlay from "../Overlay";
import LoadingIcon from "../../assets/pulse.svg";

const Spinner = () => (
  <Overlay>
    <img src={LoadingIcon} alt="Loading" />
  </Overlay>
);

export default Spinner;
