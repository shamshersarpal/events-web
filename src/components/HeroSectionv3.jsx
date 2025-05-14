import Image from "next/image";
import banner from "@/images/bannerv1.jpg";

export default function herov3() {
  return (
    <>
      <section className="relative">
        <Image src={banner} alt="banner" width="100%" />
      </section>
    </>
  );
}
