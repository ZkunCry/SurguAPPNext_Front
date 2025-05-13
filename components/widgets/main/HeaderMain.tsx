import Container from "@/components/ui/container";
import Header from "@/components/ui/header";
import Image from "next/image";
import React from "react";
import Logo from "@/assets/robot.svg";

import ResponsiveUserMenu from "./ResponsiveUserMobileMenu";

const HeaderMain = () => {
  return (
    <Header className="w-full sticky top-0 z-5 py-[21px] bg-maincolor border-b border-border ">
      <Container>
        <div className="flex justify-between items-center">
          <div className="logo flex items-center gap-[9px]">
            <Image height={50} width={50} src={Logo} alt="logo" />
            <h1 className="uppercase font-medium">Ассистент</h1>
          </div>
          <ResponsiveUserMenu />
        </div>
      </Container>
    </Header>
  );
};

export default HeaderMain;
