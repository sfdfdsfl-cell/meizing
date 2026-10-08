import Image from "next/image";
import Reveal from "@/components/Reveal";

const marqueeCss = `
@keyframes ott-marquee {
  from { transform: translate3d(0, 0, 0); }
  to { transform: translate3d(-50%, 0, 0); }
}
.ott-marquee-track {
  animation: ott-marquee 35s linear infinite;
  will-change: transform;
}
.ott-marquee:hover .ott-marquee-track {
  animation-play-state: paused;
}
`;

const logos = [
  {
    name: "Prime Video",
    src: "/ott-marquee/prime.png",
    width: 205,
    height: 128,
  },
  { name: "Sony LIV", src: "/ott-marquee/liv.png", width: 144, height: 144 },
  {
    name: "JioHotstar",
    src: "/ott-marquee/hotstar.png",
    width: 256,
    height: 144,
  },
  { name: "ZEE5", src: "/ott-marquee/zee5.png", width: 144, height: 144 },
  { name: "FanCode", src: "/ott-marquee/fancode.png", width: 468, height: 144 },
  { name: "Sun NXT", src: "/ott-marquee/sun.png", width: 208, height: 192 },
  { name: "Chaupal", src: "/ott-marquee/chaupal.png", width: 370, height: 96 },
  {
    name: "Lionsgate Play",
    src: "/ott-marquee/liongate.png",
    width: 152,
    height: 152,
  },
  { name: "Hungama", src: "/ott-marquee/hungama.png", width: 390, height: 96 },
  { name: "hoichoi", src: "/ott-marquee/hoichoi.png", width: 152, height: 152 },
  {
    name: "ShemarooMe",
    src: "/ott-marquee/shemaroo.png",
    width: 283,
    height: 128,
  },
];

function LogoRow({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center gap-12 pr-12 sm:gap-16 sm:pr-16"
    >
      {logos.map((logo) => (
        <li key={logo.name} className="flex h-16 shrink-0 items-center">
          <Image
            src={logo.src}
            alt={hidden ? "" : logo.name}
            width={logo.width}
            height={logo.height}
            className="h-full w-auto max-w-none object-contain"
          />
        </li>
      ))}
    </ul>
  );
}

export default function OttMarquee() {
  return (
    <section aria-labelledby="ott-marquee-heading" className="w-full bg-white">
      <style href="ott-marquee" precedence="default">
        {marqueeCss}
      </style>
      <div className="mx-auto max-w-6xl px-6 pt-20 sm:pt-24">
        <Reveal className="text-center">
          <h2
            id="ott-marquee-heading"
            className="text-3xl font-bold tracking-tight text-[#0b0b1a] sm:text-4xl"
          >
            Entertainment with Mezing Broadband
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-slate-500 sm:text-lg">
            Add your favorite OTT packs to any internet plan and enjoy more
            entertainment. Packs starting at ₹599.
          </p>
        </Reveal>
      </div>

      <div className="ott-marquee relative mt-12 overflow-hidden pb-20 sm:pb-24 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="ott-marquee-track flex w-max">
          <LogoRow />
          <LogoRow hidden />
        </div>
      </div>
    </section>
  );
}
