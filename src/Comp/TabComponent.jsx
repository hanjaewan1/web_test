import { Link } from "react-router-dom";
import DropDown from "./DropDown";

export const TabComponent = ({
  DropDownMap,
  open,
  TabComponentName,
  handleClickTab,
}) => {
  return (
    <Link to={"#"}>
      <ul
        className="drop"
        onClick={() => {
          handleClickTab(TabComponentName);
        }}
      >
        {TabComponentName}
        {open ? "∧" : "∨"}
        {open && <DropDown DropDownMap={DropDownMap} />}
      </ul>
    </Link>
  );
};
