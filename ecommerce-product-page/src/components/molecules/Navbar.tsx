import { iconCart, iconMenu, imageAvatar, logo } from "@/assets/images";
import Container from "@/components/atoms/Container";
import Image from "@/components/atoms/Image";
import { useState } from "react";
import { Button } from "../ui/button";
import { Sidebar } from "./Sidebar";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Container variant="wrapper">
        <Container variant="navbar">
          <Container variant="image" className="gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(true)}
            >
              <Image src={iconMenu} alt="menu" />
            </Button>
            <Image src={logo} alt="logo" />
          </Container>

          <Container variant="image">
            <Image src={iconCart} alt="cart" />
            <Image src={imageAvatar} alt="user" className="h-8 w-8" />
          </Container>
        </Container>
      </Container>

      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

export default Navbar;
