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
          <Link
            href="https://github.com/ZaneCodeJourney"
            passHref
            target="_blank"
          >
            <a className="text-5xl text-grey-500">
              <DiGithubBadge />
            </a>{" "}
          </Link>
          <Link
            href="https://www.linkedin.com/in/ziyang-wen-217082276/"
            passHref
            target="_blank"
          >
            <a className="text-4xl text-blue-700">
              <BsLinkedin />
            </a>{" "}
          </Link>
        </NavbarItem>
        <HeaderAuth />
      </NavbarContent>
    </Navbar>
  );
}
