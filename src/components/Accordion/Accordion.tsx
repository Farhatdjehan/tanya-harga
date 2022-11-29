import * as React from "react";
import Collapse from "rc-collapse";
import motion from "./motionUtil";
import "rc-collapse/assets/index.css";
import ChevronBack from "../../../public/assets/svg/chevron_right.svg";
import Image from "next/image";

interface accordionProps {
  styles?: any;
  getItems: any;
}

function Accordion(props: accordionProps) {
  const { styles, getItems } = props;
  const [time, setTime] = React.useState(random());
  const [accordion, setAccordion] = React.useState(true);
  const [activeKey, setActiveKey] = React.useState("");

  const onChangeHandler = (activeKey: any) => {
    setActiveKey(activeKey);
  };

  const text =
    "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.";

  function random() {
    return parseInt((Math.random() * 10).toString(), 10) + 1;
  }

  const arrowPath =
    "M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88" +
    ".5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3." +
    "6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-0.7 5." +
    "2-2L869 536.2c14.7-12.8 14.7-35.6 0-48.4z";

  function expandIcon({ isActive }: any) {
    return (
      <i
        style={
          isActive
            ? {
                marginRight: ".5rem",
                display: "flex",
                alignItems: "center",
                transform: "rotate(90deg)",
                transitionDuration: "0.5s",
                userSelect: "none",
              }
            : {
                marginRight: ".5rem",
                display: "flex",
                alignItems: "center",
                transform: "rotate(270deg)",
                transitionDuration: "0.5s",
                userSelect: "none",
              }
        }
      >
        <div
          style={{
            position: "relative",
            height: "12px",
            width: "12px",
          }}
        >
          <Image
            src={ChevronBack}
            layout="fill"
            objectFit="contain"
            alt={`Chevron Back`}
          />
        </div>
      </i>
    );
  }

  return (
    <Collapse
      accordion={accordion}
      onChange={onChangeHandler}
      activeKey={activeKey}
      expandIcon={expandIcon}
      openMotion={motion}
    >
      {getItems(activeKey)}
    </Collapse>
  );
}

export default Accordion;
