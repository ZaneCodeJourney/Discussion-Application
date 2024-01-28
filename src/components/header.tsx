import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
} from "@nextui-org/react";
import HeaderAuth from "./header-auth";
import SearchInput from "./search-input";
import { Suspense } from "react";
import { DiGithubBadge } from "react-icons/di";
import { BsLinkedin } from "react-icons/bs";

export default function Header() {
  return (
    <Navbar className="shadow mb-6">
      <NavbarBrand>
        <Link href="/" className="font-bold">
          Discuss
        </Link>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem>
          <Suspense>
            <SearchInput />
          </Suspense>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="flex items-center space-x-4">
          {" "}
          {/* 这将创建一个横向布局并在图标之间添加空间 */}
          <Link
            href="https://github.com/ZaneCodeJourney"
            passHref
            target="_blank"
          >
            {/* Tailwind CSS 用来增加图标大小的类 */}
            <a className="text-5xl text-grey-500">
              <DiGithubBadge />
            </a>{" "}
            {/* 这里的 text-5xl 可以根据您的需要调整大小 */}
          </Link>
          <Link
            href="https://www.linkedin.com/in/ziyang-wen-217082276/"
            passHref
            target="_blank"
          >
            {/* 同样，增加 LinkedIn 图标的大小 */}
            <a className="text-5xl text-blue-700">
              <BsLinkedin />
            </a>{" "}
            {/* 调整 text-5xl 以改变大小 */}
          </Link>
        </NavbarItem>
        <HeaderAuth />
      </NavbarContent>
    </Navbar>
  );
}
