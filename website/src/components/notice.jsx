import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import Subheader from "./typography/subheader";
import Content from "./typography/content";
import Section from "./section";

function Notice({ to }) {
  return (
    <Section id={"notice"}>
      <Subheader className={"mb-auto"}>Note before Starting</Subheader>

      <span className={"mb-auto"}>
        <Content className={"text-center"}>
          Your progress will be lost after reloading.
          <br />
          You can login use twilio to save your progress
        </Content>
        <button>Login</button>
      </span>

      <span
        className={"absolute flex flex-col w-full items-center -bottom-[100vh]"}
      >
        <a
          href={`#${to}`}
          className={
            "duration-150 ease-in-out w-10 h-10 text-slate-300 hover:w-11 hover:h-11"
          }
        >
          <IoIosArrowDown className={"w-full h-full"} />
        </a>
        <br />
      </span>
    </Section>
  );
}

export default Notice;
