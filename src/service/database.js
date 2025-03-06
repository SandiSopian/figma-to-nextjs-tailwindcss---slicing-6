import HeroImg from "../assets/hero-image.jpg";
import HeroWave from "../assets/wave.svg";
import SmartIP from "../assets/Smart-IP.png";
import SmartDoor from "../assets/Smart-Door.png";
import SmartIR from "../assets/Smart-IR.png";
import SmartLED from "../assets/Smart-LED.png";
import SmartLight from "../assets/Smart-Light_wallswitch.png";
import SmartFeeder from "../assets/Smart-Pet_feeder.png";
import SmartVacuum from "../assets/Smart-vacuum.png";
import FooterImg from "../assets/footer-image.jpg";

export const heroSection = {
  heroImg: HeroImg,
  heroWave: HeroWave,
};

export const catalogSection = [
  {
    product1: {
      catalogName: "Smart IP",
      catalogImg: SmartIP,
    },
  },
  {
    product2: {
      catalogName: "Smart Door",
      catalogImg: SmartDoor,
    },
  },
  {
    product3: {
      catalogName: "Smart IR",
      catalogImg: SmartIR,
    },
  },
  {
    product4: {
      catalogName: "Smart LED",
      catalogImg: SmartLED,
    },
  },
  {
    product5: {
      catalogName: "Smart Light",
      catalogImg: SmartLight,
    },
  },
  {
    product6: {
      catalogName: "Smart Feeder",
      catalogImg: SmartFeeder,
    },
  },
  {
    product7: {
      catalogName: "Smart Vacuum",
      catalogImg: SmartVacuum,
    },
  },
];

export const moreSection = {
  product1: {
    productName: "BARDI Smart IP Camera BARDION Series (Dual-Band Version)",
    productDescription:
      "The BARDI Smart IP Camera BARDION Series (Dual-Band Version) is a smart camera designed in collaboration with the BARDION character, capable of transmitting video and audio through a smartphone. The BARDI Smart IP Camera BARDION Series (Dual-Band Version) has an SD card slot that supports up to 256GB (not included). In dark conditions, it will automatically switch to night vision. The camera's video orientation can be adjusted within the app, allowing 355° horizontal rotation and 60° vertical rotation. It also features motion tracking with a human filter, which detects and filters human movement. Additionally, the camera has a built-in siren alarm to deter intruders. Simply download the app and connect the camera to a dual-band WiFi network (2.4GHz & 5GHz) for optimal performance.",
    productImg: SmartIP,
  },
  product2: {
    productName: "Wall Switch EU 3 Gang - White/Black",
    productDescription:
      "The BARDI Smart Wall Switch EU 3 Gang is a smart light switch that can be turned on or off via an app or by touch.This switch features 3 gangs and comes in white and black color options. Each gang has a maximum capacity of 800W.The BARDI Smart Wall Switch EU 3 Gang has a sleek, modern design with a glass touch surface. While it fits into the same mounting box as traditional switches, it requires a neutral wire connection, unlike traditional switches that typically only connect to the live wire.",
    productImg: SmartLight,
  },
  product3: {
    productName: "Smart Pet Feeder Lite Version",
    productDescription:
      "The BARDI Pet Feeder Lite Version is a smart pet feeder for your home, equipped with 2.4GHz WiFi support and the BARDI Smart Home app, allowing you to schedule feeding times for your beloved pet. This feeder comes with a built-in camera to monitor your pet. It also features a two-way speaker system, making it easy to watch, communicate with, and call your pet. Additionally, the BARDI Pet Feeder Lite Version includes a timer function to set feeding times and a motion sensor that notifies you when your pet approaches the feeder to eat. With the BARDI Pet Feeder Lite Version, you can easily monitor your pet’s condition even when you're not at home, ensuring 24/7 supervision and greater peace of mind.",
    productImg: SmartFeeder,
  },
};

export const footerSection = { footerImg: FooterImg, footerEmail: "mailto@", footerIg: "https://www.instagram.com/bardismarthome", footerFb: "https://www.facebook.com/bardismarthome", footerWebsite: "https://www.bardi.co.id/" };
