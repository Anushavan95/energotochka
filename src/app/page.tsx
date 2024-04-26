import Image from "next/image";
import Example from "./components/example";
import { Footer } from "./components/footer/footer";
import Header from "./components/header/header";
import Main from "./components/main/main";

export default function Home() {
  return (
    <>
      <div className={"container-2xl "}>
        <Header />
        <Main />
      </div>
      <Footer />
    </>
  );
}
