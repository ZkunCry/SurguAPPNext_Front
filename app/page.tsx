import Image from "next/image";
import Robot from "../assets/robot.svg";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="flex-1 home w-full py-3 "
      style={{ background: "var(--home-gradient)" }}
    >
      <Container>
        <div className="flex flex-col md:flex-row  items-center transition-[margin-top] duration-300 mt-[72px] md:mt-[223px] justify-between  ">
          <div className=" w-full md:hidden text-white">
            <h1 className="uppercase text-right text-[2.25rem]  font-normal leading-[normal] ">
              Ассистент
            </h1>
            <span className="block text-right leading-5 text-sm tracking-[-0.5px]">
              Ваш верный помощник в учебе
            </span>
          </div>

          <div className="relative">
            <Image priority src={Robot} alt="Robot" />
            <svg
              className="absolute left-[50%] translate-x-[-50%]"
              xmlns="http://www.w3.org/2000/svg"
              width="303"
              height="96"
              viewBox="0 0 303 96"
              fill="none"
            >
              <g filter="url(#filter0_f_133_4049)">
                <ellipse
                  cx="151.5"
                  cy="48"
                  rx="111.5"
                  ry="8"
                  fill="url(#paint0_radial_133_4049)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_133_4049"
                  x="0"
                  y="0"
                  width="303"
                  height="96"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="20"
                    result="effect1_foregroundBlur_133_4049"
                  />
                </filter>
                <radialGradient
                  id="paint0_radial_133_4049"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(151.5 48) scale(111.5 8)"
                >
                  <stop />
                  <stop offset="1" stopColor="#2E2644" />
                </radialGradient>
              </defs>
            </svg>
          </div>

          <div className="flex flex-col gap-[7.2rem]">
            <div className=" hidden md:block text-white">
              <h1 className="uppercase   text-right text-[2.25rem] mb-[0.7rem] font-normal leading-[normal] ">
                Ассистент
              </h1>
              <span className="block text-right leading-5 text-sm tracking-[-0.5px]">
                Ваш верный помощник в учебе
              </span>
            </div>
            <div className="flex flex-col items-center gap-y-[10px]">
              <div className="flex flex-col md:flex-row mt-[120px] gap-y-[20px] gap-x-[25px]">
                <Link href={"/signin"}>
                  <Button
                    className="min-w-[223px] text-white"
                    variant={"default"}
                  >
                    Войти
                  </Button>
                </Link>
                <Link href={"/signup"}>
                  <Button
                    className="min-w-[223px] text-white"
                    variant={"outline"}
                  >
                    Зарегистрироваться
                  </Button>
                </Link>
              </div>
              <Link href={"/news"}>Продолжить без входа</Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
