import Image from "next/image";
import web3Desktop from "../assets/images/image-web-3-desktop.jpg";
import web3 from "../assets/images/image-web-3-mobile.jpg";

export default function Home() {
  return (
    <div className="p-4">
      <picture>
        <source srcSet={web3Desktop.src} media="(min-width:768px)" />
        <Image
          src={web3.src}
          alt="web"
          layout="responsive"
          width={375}
          height={250}
        />
      </picture>
      <div className="my-4 space-y-4">
        <h2 className="text-very-dark-blue text-4xl font-extrabold">
          The Bright Future of Web 3.0?
        </h2>

        <p className="text-dark-grayish-blue">
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>

        <button className="bg-soft-red p-2 px-7 text-sm font-bold uppercase tracking-widest">
          Read More
        </button>
      </div>
    </div>
  );
}
