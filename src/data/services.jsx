import explore from "../assets/Home/Services/explore.png";
import play from "../assets/Home/Services/play.png";
import fun from "../assets/Home/Services/fun.gif";
import memories from "../assets/Home/Services/memories.gif";
import chill from "../assets/Home/Services/chill.png";
import mission from "../assets/Home/Services/mission.png";

import c1 from "../assets/Services/Card/c1.jpg";
import c2 from "../assets/Services/Card/c2.webp";
import c3 from "../assets/Services/Card/c3.jpg";
import c4 from "../assets/Services/Card/c4.webp";

import i1 from "../assets/Services/Icon/i1.png";
import i2 from "../assets/Services/Icon/i2.jpeg";
import i3 from "../assets/Services/Icon/i3.png";
import i4 from "../assets/Services/Icon/i4.png";
import i5 from "../assets/Services/Icon/i5.png";
import i6 from "../assets/Services/Icon/i6.png";
import i7 from "../assets/Services/Icon/i7.svg";

import { Image } from "../components/Elements/Image";

export const services = [
  {
    title: "Explore",
    image: explore,
    bg: "bg-[#C8615A]",
  },
  {
    title: "Play",
    image: play,
    bg: "bg-[#B1653B]",
  },
  {
    title: "Fun",
    image: fun,
    bg: "bg-[#77A3AB]",
  },
  {
    title: "Memories",
    image: memories,
    bg: "bg-[#5757A5]",
  },
  {
    title: "Chill",
    image: chill,
    bg: "bg-[#FFBB22]",
  },
  {
    title: "Mission",
    image: mission,
    bg: "bg-[#513C3E]",
  },
];

export const cards = [
  {
    category: "Explore",
    title: "Teyvat Explorer's Journey",
    description:
      "Embark on an epic adventure across the breathtaking landscapes of Teyvat. Discover hidden treasures, unravel mysteries, and forge unforgettable memories.",
    src: c1,
    link: "#",
    color: "text-[#7B86A0]",
    bg: "bg-[#E2C882]",
    border: "border-[#E2C882]",
    id: 1,
  },
  {
    category: "Mission",
    title: "Epic Quests Await",
    description:
      "Embark on thrilling missions and challenges in the world of Genshin Impact. Uncover ancient secrets, confront powerful foes, and become a hero of Teyvat.",
    src: c2,
    link: "#",
    color: "text-[#5DD9EC]",
    bg: "bg-[#386692]",
    border: "border-[#386692]",
    id: 2,
  },
  {
    category: "Memories",
    title: "Create Lasting Memories",
    description:
      "Capture unforgettable moments and experiences in the vibrant world of Genshin Impact. From scenic vistas to heart-pounding battles, every memory is yours to cherish.",
    src: c3,
    link: "#",
    color: "text-[#5757A5]",
    bg: "bg-[#BFB9E3]",
    border: "border-[#BFB9E3]",
    id: 3,
  },
  {
    category: "Play",
    title: "Let the Adventure Begin",
    description:
      "Immerse yourself in the captivating gameplay of Genshin Impact. Explore vast landscapes, engage in thrilling combat, and embark on an epic journey like no other.",
    src: c4,
    link: "#",
    color: "text-[#FEEDE3]",
    bg: "bg-[#D28041]",
    border: "border-[#D28041]",
    id: 4,
  },
];

export const why = [
  {
    id: 1,
    title: "Unlock a Vibrant Community",
    desc: "Join our thriving community where you can exchange ideas, share knowledge, and connect with fellow Genshin Impact enthusiasts to enhance your gaming experience.",
    bg: "bg-[#D9DC4E]",
    icon: "",
    el: true,
    renderEl: <Image src={i1} alt="i1" lazy />,
  },
  {
    id: 2,
    title: "Discover Comprehensive Resources",
    desc: "Explore a wealth of tips, tricks, and insights about Genshin Impact, fostering a deeper understanding of the game's mechanics, lore, and strategies for optimal gameplay.",
    bg: "bg-[#D9DC4E]",
    icon: "",
    el: true,
    renderEl: <Image src={i2} alt="i2" lazy />,
  },
  {
    id: 3,
    title: "Expand Your Social Network",
    desc: "Connect with like-minded players, make new friends, and form lasting bonds as you embark on adventures, exchange experiences, and enjoy collaborative gameplay in Genshin Impact.",
    bg: "bg-[#D9DC4E]",
    icon: "",
    el: true,
    renderEl: <Image src={i3} alt="i3" lazy />,
  },
  {
    id: 4,
    title: "Enhance Your Gaming Experience",
    desc: "Immerse yourself in a vibrant online community dedicated to Genshin Impact, where you can enhance your gaming experience through shared knowledge, camaraderie, and collective exploration.",
    bg: "bg-[#D9DC4E]",
    icon: "",
    el: true,
    renderEl: <Image src={i4} alt="i4" lazy className="bg-light" />,
  },
  {
    id: 5,
    title: "Forge Lasting Friendships",
    desc: "Create meaningful connections with fellow players, bond over shared interests, and forge lasting friendships that extend beyond the virtual world of Genshin Impact.",
    bg: "bg-[#D9DC4E]",
    icon: "",
    el: true,
    renderEl: <Image src={i5} alt="i5" lazy />,
  },
  {
    id: 6,
    title: "Immerse Yourself in a Dynamic Community",
    desc: "Immerse yourself in a dynamic online community dedicated to Genshin Impact, where you can share experiences, exchange tips, and participate in collaborative activities to enhance your gameplay.",
    bg: "bg-[#D9DC4E]",
    icon: "",
    el: true,
    renderEl: <Image src={i6} alt="i6" lazy />,
  },
  {
    id: 7,
    title: "Stay Updated and Informed",
    desc: "Stay updated with the latest news, updates, and events in the world of Genshin Impact, ensuring you're always informed and ready to embark on new adventures with your fellow players.",
    bg: "bg-[#D9DC4E]",
    icon: "",
    el: true,
    renderEl: <Image src={i7} alt="i7" lazy />,
  },
  {
    id: 8,
    title: "Immerse Yourself in Stunning Visuals",
    desc: "Dive into the mesmerizing world of Genshin Impact, where breathtaking landscapes, vibrant characters, and captivating animations await at every turn.",
    bg: "",
    icon: "https://media1.tenor.com/m/TXNrUrcFeUUAAAAd/fischl-genshin-impact.gif",
    el: false,
  },
  {
    id: 9,
    title: "Unleash Your Creativity",
    desc: "Express yourself through art, music, and storytelling inspired by the rich lore and fantastical world of Genshin Impact, and share your creations with a global community of fellow enthusiasts.",
    bg: "",
    icon: "https://media.tenor.com/tFEH7-hhDTIAAAAi/kokomi-genshin-middle-finger.gif",
    el: false,
  },
];
