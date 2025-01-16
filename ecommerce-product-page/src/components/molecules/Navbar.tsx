import { iconCart, iconMenu, imageAvatar, logo } from "@/assets/images";
import Container from "@/components/atoms/Container";
import Image from "@/components/atoms/Image";

function Navbar() {
  return (
    <Container variant="wrapper">
      <Container variant="navbar">
        <Container variant="image">
          <Image src={iconMenu} alt="menu" />
          <Image src={logo} alt="logo" />
        </Container>

        <Container variant="image">
          <Image src={iconCart} alt="cart" />
          <Image src={imageAvatar} alt="user" className="h-8 w-8" />
        </Container>
      </Container>
    </Container>
  );
}

export default Navbar;
