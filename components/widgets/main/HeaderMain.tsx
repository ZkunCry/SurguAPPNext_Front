import Container from "@/components/ui/container";
import Header from "@/components/ui/header";
import Image from "next/image";
import React from "react";
import Logo from "../../../assets/Logo.png";
import UserAvatar from "./UserAvatar";
const HeaderMain = () => {
  return (
    <Header className="w-full sticky top-0 z-10 py-[21px] bg-maincolor border-b border-border ">
      <Container>
        <div className="flex justify-between items-center">
          <div className="logo flex items-center gap-[9px]">
            <Image height={39} width={39} src={Logo} alt="logo" />
            <span className="uppercase">Ассистент</span>
          </div>
          <UserAvatar />
        </div>
      </Container>
    </Header>
  );
};

export default HeaderMain;
