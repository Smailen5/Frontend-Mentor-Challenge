import { MainContent } from "@/components/organisms/MainContent";
// import Image from "next/image";
// import web3Desktop from "../assets/images/image-web-3-desktop.jpg";
// import web3 from "../assets/images/image-web-3-mobile.jpg";

export default function Home() {
  return (
    <div className="">
      {/* <picture className='xl:hidden'>
        <source srcSet={web3Desktop.src} media="(min-width:768px)" />
        <Image
          src={web3.src}
          alt="web"
          layout="responsive"
          width={375}
          height={250}
        />
      </picture> */}
      <MainContent />
    </div>
  );
}
