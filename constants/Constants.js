import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

/* Navbar + Footer */
export const NAVLINKS = [
  {
    name: "Entertainment",
    path: "/entertainment",
  },
  {
    name: "Audio",
    path: "/audio",
  },
  {
    name: "Security",
    path: "/security",
  },
  {
    name: "Comfort & Safety",
    path: "/comfort-and-safety",
  },
];
/* Contact us + Footer + NavBar */
export const MOBILE_MENU_BOT_TEXT = [
  {
    icon: <LocalPhoneOutlinedIcon />,
    text: "647-693-5688",
  },
  {
    icon: <AlternateEmailOutlinedIcon />,
    text: "info@housesmarts.io",
  },
  {
    icon: <LocationOnOutlinedIcon />,
    text: "Serving Southern Ontario",
  },
];

/* Entertainment Page */
export const BASIC_HOME_THEATRE = {
  title: "BASIC HOME THEATRE",
  bgImage: "/basicHomeTheatreBg.png",
  bgTablet: "/basicHomeTheatreTabletBg.png",
  bgMobile: "/basicHomeTheatreMobileBg.png",
  yellowText: `Experience the ultimate in home entertainment with our HD projector home theater system, available for just $5,000! With this price point, our goal is to make the home theatre experience accessible to everyone.`,
  secondText: `Our system includes everything you need for a fully immersive movie-watching experience, including a state-of-the-art HD projector, high-quality speakers, a powerful receiver, and all necessary cables. Plus, our team of experts will handle all the installation for you, so you can sit back, relax, and enjoy the show in no time.`,
  thirdText: `With HD resolution and advanced speaker systems, you'll be able to experience your favorite movies and TV shows like never before, you'll feel like you're right in the middle of the action.`,
  icons: [
    { childIcon: "/fixedPriceIcon.svg", text1: "Fixed Price ", text2: "$5000" },
    { childIcon: "/hdIcon.svg", text1: "HD ", text2: "projector" },
    {
      childIcon: "/highFidelitySpeakersIcon.svg",
      text1: "High-quality ",
      text2: "speakers",
    },
    {
      childIcon: "/superiorRecieverIcon.svg",
      text1: "Powerful ",
      text2: "receiver",
    },
    {
      childIcon: "/installationServiceIcon.svg",
      text1: "Installation ",
      text2: "service",
    },
  ],
};
export const CUSTOM_HOME_THEATRE = {
  title: "CUSTOM HOME THEATRE",
  bgImage: "/customHomeTheatreBg.png",
  bgTablet: "/customHomeTheatreTabletBg.png",
  bgMobile: "/customHomeTheatreMobileBg.png",
  yellowText: `At House Smarts, we offer fully customized home theater systems tailored to fit your unique space and budget.`,
  secondText: `Our team of experts will design a perfect solution, considering room size, seating, and entertainment preferences.`,
  thirdText: `We use latest technology and top-of-the-line equipment to create an immersive experience. Trust us to create a truly unique home theater. Contact us today to schedule a consultation.`,
  icons: [
    {
      childIcon: "/personalDesignIcon.svg",
      text1: "Personal",
      text2: "design",
    },
    { childIcon: "/4kIcon.svg", text1: "4K", text2: "projector" },
    {
      childIcon: "/highFidelitySpeakersIcon.svg",
      text1: "High-Fidelity ",
      text2: "speakers",
    },
    {
      childIcon: "/superiorRecieverIcon.svg",
      text1: "Superior ",
      text2: "receiver",
    },
    {
      childIcon: "/installationServiceIcon.svg",
      text1: "Installation ",
      text2: "service",
    },
  ],
};
export const CUSTOM_SPORTS_DEN = {
  title: "CUSTOM SPORTS DEN",
  bgImage: "/customSportsDenBg.png",
  bgTablet: "/customSportsDenTabletBg.png",
  bgMobile: "/customSportsDenMobileBg.png",
  yellowText: `We offer custom-built sports dens for the ultimate game-watching experience.`,
  secondText: `Our team designs a sports den that captures the spirit of your favorite team, including colors and logos. `,
  thirdText: `Our package includes a HD viewing experience combined with immersive sound that puts you right in the action. We handle installation and customization to fit your home's unique needs.`,
  icons: [
    {
      childIcon: "/personalDesignIcon.svg",
      text1: "Personal",
      text2: "design",
    },
    { childIcon: "/hdIcon.svg", text1: "HDTV", text2: "projector" },
    {
      childIcon: "/highFidelitySpeakersIcon.svg",
      text1: "High-quality ",
      text2: "speakers",
    },
    {
      childIcon: "/teamColoursIcon.svg",
      text1: "Team",
      text2: "colours",
    },
    {
      childIcon: "/installationServiceIcon.svg",
      text1: "Installation ",
      text2: "service",
    },
  ],
};
export const GAMING_ROOM = {
  title: "GAMING ROOM",
  bgImage: "/gamingRoomBg.png",
  bgTablet: "/gamingRoomTabletBg.png",
  bgMobile: "/gameRoomMobileBg.png",
  yellowText: `Transform your space into the ultimate gaming and entertainment destination a custom gaming room! `,
  secondText: `Immerse yourself in the action with a state-of-the-art audio and visual setup, featuring the latest gaming consoles and high-definition projectors. `,
  thirdText: `Relax in comfortable, ergonomic seating and enjoy the ultimate gaming experience. Our team of experts will work with you to design and build a custom gaming room that fits your style and budget. `,
  forthText: `Don't settle for a mediocre gaming setup - elevate your game with House Smarts.`,
  icons: [
    {
      childIcon: "/personalDesignIcon.svg",
      text1: "Personal",
      text2: "design",
    },
    { childIcon: "/4kIcon.svg", text1: "4K", text2: "projector" },
    {
      childIcon: "/highFidelitySpeakersIcon.svg",
      text1: "Surround",
      text2: "sound",
    },
    {
      childIcon: "/gameConsoleIcon.svg",
      text1: "Latest",
      text2: "console",
    },
    {
      childIcon: "/installationServiceIcon.svg",
      text1: "Installation ",
      text2: "service",
    },
  ],
};

/* Audio Page */
export const WHOLE_HOME_AUDIO = {
  title: "WHOLE HOME AUDIO",
  bgImage: "/wholeHomeAudioBg.png",
  bgTablet: "/wholeHomeAudioTabletBg.png",
  bgMobile: "/wholeHomeAudioMobileBg.png",
  yellowText: `With a whole home music system, you can easily stream your favorite music, podcasts, and audio books throughout every room in your home.`,
  secondText: `Whole home audio systems are easy to use, with a simple app that lets you control the audio in each room from your smartphone or tablet. You can even set different zones and adjust the volume in each room separately, so everyone in the house can listen to their own music at the volume they prefer.`,
  thirdText: `Combined with high-quality speakers, we can deliver crystal-clear sound throughout your house. And with built-in WiFi and Bluetooth, you can easily connect to your favorite streaming services like Spotify, Pandora, and Apple Music.`,
  icons: [
    {
      childIcon: "/appControlIcon.svg",
      text1: "App",
      text2: "control",
    },
    {
      childIcon: "/separetelyZonedIcon.svg",
      text1: "Separately",
      text2: "zoned",
    },
    {
      childIcon: "/highFidelitySpeakersIcon.svg",
      text1: "Clear",
      text2: "sound",
    },
    {
      childIcon: "/streamingConnection.svg",
      text1: "Streaming",
      text2: "connection",
    },
    {
      childIcon: "/installationServiceIcon.svg",
      text1: "Installation ",
      text2: "service",
    },
  ],
};
export const AUDIO_ROOM_CONFIGURATION = {
  title: "AUDIO ROOM CONFIGURATION",
  bgImage: "/audioRoomConfigurationBg.png",
  bgTablet: "/audioRoomConfigurationTabletBg.png",
  bgMobile: "/audioRoomConfigurationMobileBg.png",
  yellowText: `With a whole home music system, you can easily stream your favorite music, podcasts, and audio books throughout every room in your home.`,
  secondText: `Whole home audio systems are easy to use, with a simple app that lets you control the audio in each room from your smartphone or tablet. You can even set different zones and adjust the volume in each room separately, so everyone in the house can listen to their own music at the volume they prefer.`,
  thirdText: `Combined with high-quality speakers, we can deliver crystal-clear sound throughout your house. And with built-in WiFi and Bluetooth, you can easily connect to your favorite streaming services like Spotify, Pandora, and Apple Music.`,
  icons: [
    {
      childIcon: "/appControlIcon.svg",
      text1: "App",
      text2: "control",
    },
    {
      childIcon: "/separetelyZonedIcon.svg",
      text1: "Separately",
      text2: "zoned",
    },
    {
      childIcon: "/highFidelitySpeakersIcon.svg",
      text1: "Clear",
      text2: "sound",
    },
    {
      childIcon: "/streamingConnection.svg",
      text1: "Streaming",
      text2: "connection",
    },
    {
      childIcon: "/installationServiceIcon.svg",
      text1: "Installation ",
      text2: "service",
    },
  ],
};

/* Security Page */
export const ACCESS_CONTROL_AND_DOOR_LOCKS = {
  title: "ACCESS CONTROL & DOOR LOCKS",
  bgImage: "/accessControlAndDoorLocksBg.png",
  bgTablet: "/accessControlAndDoorLocksTabletBg.png",
  bgMobile: "/accessControlAndDoorLocksMobileBg.png",
  yellowText: `Smart door locks will allow you to enter your home, or a room, without a key by inputting a code on a keypad.`,
  secondText: `When integrated with a home security or automation system, you can control the door locks from anywhere via your phone’s app. This is great for letting guests into your home when you are away or ensuring your door is locked after you leave. You can also receive notifications when the lock is used along with the user information. `,
  thirdText: `Don’t ever worry about leaving a key under your door mat again.`,
  icons: [
    {
      childIcon: "/reliableProtectionIcon.svg",
      text1: "Reliable",
      text2: "protection",
    },
    {
      childIcon: "/remoteControlIcon.svg",
      text1: "Remote",
      text2: "control",
    },
    {
      childIcon: "/appControlIcon.svg",
      text1: "Special",
      text2: "mobile App",
    },
    {
      childIcon: "/noMoreKeysIcon.svg",
      text1: "No more",
      text2: "keys",
    },
    {
      childIcon: "/installationServiceIcon.svg",
      text1: "Installation ",
      text2: "service",
    },
  ],
};
export const MONITORING = {
  title: "MONITORING",
  bgImage: "/monitoringBg.png",
  bgTablet: "/monitoringTabletBg.png",
  bgMobile: "/monitoringMobileBg.png",
  yellowText: `You can count on your home being safe and protected for the people or pets who are in it, even when you're not at home.`,
  secondText: `If you want greater peace of mind than a passive security system, we can help by providing 24/7 monitoring to ensure you have the concierge assistance you need, while respecting your discretion and privacy. `,
  thirdText: `With our monitoring packages, our service center is always there to help, whether it’s a fire, intrusion, or health related circumstance, the proper help will be on its way.`,
  icons: [
    {
      childIcon: "/monitoringIcon.svg",
      text1: "24/7",
      text2: "monitoring",
    },
    {
      childIcon: "/conciergeAssistanceIcon.svg",
      text1: "Concierge",
      text2: "assistance",
    },
    {
      childIcon: "/privacyRespectIcon.svg",
      text1: "Privacy",
      text2: "respect",
    },
    {
      childIcon: "/rescuesCallIcon.svg",
      text1: "Rescue",
      text2: "call",
    },
    {
      childIcon: "/installationServiceIcon.svg",
      text1: "Installation ",
      text2: "service",
    },
  ],
};
export const WATER_LEAK_PROTECTION = {
  title: "WATER LEAK PROTECTION",
  bgImage: "/waterLeakProtectionBg.png",
  bgTablet: "/waterLeakProtectionTabletBg.png",
  bgMobile: "/waterLeakProtectionMobileBg.png",
  yellowText: `Introducing the ultimate solution for home leak protection - our state-of-the-art smart water leak detection system. Say goodbye to the stress and uncertainty of potential water damage with our advanced technology.`,
  secondText: `Once installed, our system will constantly monitor your home for any signs of leaks, and if one is detected, it will immediately notify you and automatically turn off the main water flow to prevent further`,
  thirdText: `With our system, you'll have the peace of mind knowing that you're always in control. You can remotely check cameras to see what's happening in real-time, or even open your front door to let the plumbers in quickly. Plus, with qualifying products, you may be able to save money on your home insurance.`,
  forthText: `Don't wait for a disaster to strike - protect your home and your peace of mind with our smart water leak detection system today.`,
  icons: [
    {
      childIcon: "/monitoringIcon.svg",
      text1: "24/7",
      text2: "monitoring",
    },
    {
      childIcon: "/appControlIcon.svg",
      text1: "Auto",
      text2: "notification",
    },
    {
      childIcon: "/waterFlowIcon.svg",
      text1: "Water flow",
      text2: "auto stop",
    },
    {
      childIcon: "/installationServiceIcon.svg",
      text1: "Installation ",
      text2: "service",
    },
  ],
};
export const CALLSHIELD = {
  title: "CALLSHIELD",
  bgImage: "/callShieldBg.png",
  bgTablet: "/callShieldTabletBg.png",
  bgMobile: "/callShieldMobileBg.png",
  yellowText: `Introducing "CallShield" - the ultimate solution for protecting yourself from unwanted and potentially fraudulent phone calls.`,
  secondText: `Our technology utilizes cutting-edge techniques to eliminate spam and fraudulent calls, ensuring that only important and relevant calls make it through to you.`,
  thirdText: `With our CallShield service, you can enjoy the peace of mind that comes with knowing that you will be protected from unwanted interruptions. No more interruptions from telemarketers, robocalls, or scammers - just the calls you want and need. Plus, with our personal call answering service, you can even customize your call routing options to suit your specific needs.`,
  forthText: `You can enjoy the peace of mind that comes with knowing that you and your loved ones are protected from phone fraud.`,
};

/* Comfort and Safety Page */
export const HOME_COMFORT_PACKAGE = {
  title: "HOME COMFORT PACKAGE",
  bgImage: "/homeComfortPackageBg.png",
  bgTablet: "/homeComfortPackageTabletBg.png",
  bgMobile: "/homeComfortPackageMobileBg.png",
  yellowText: `Experience ultimate home comfort with our Home Comfort Package. `,
  secondText: `This package includes a Thermostat, two smoke detectors, and a doorbell, all installed for just $1499.00. The Thermostat allows you to control your home's temperature from anywhere, while the smoke detectors provide early warning in case of fire. And, the doorbell lets you see who's at your door and communicate with them, even when you're not home. `,
  thirdText: `Stay comfortable, safe and connected with this all-in-one package. Order now and enjoy the peace of mind that comes with a smarter home. Available brands: Apple | Nest | Amazon`,
  icons: [
    { childIcon: "/termostatIcon.svg", text1: "Thermostat", text2: "" },
    {
      childIcon: "/smokeDetectorIcon.svg",
      text1: "2 Smoke ",
      text2: "detectors",
    },
    {
      childIcon: "/doorbellIcon.svg",
      text1: "Doorbell",
      text2: "",
    },
    {
      childIcon: "/installationServiceIcon.svg",
      text1: "Installation ",
      text2: "service",
    },
  ],
};
export const LIGHTING_AND_SHADES_AUTOMATION = {
  title: "LIGHTING & SHADES AUTOMATION",
  bgImage: "/lightingAndShadesAutomationBg.png",
  bgTablet: "/lightingAndShadesAutomationTabletBg.png",
  bgMobile: "/lightingAndShadesAutomationMobileBg.png",
  yellowText: `Upgrade your home's lighting and shades with the convenience of automation.`,
  secondText: `Imagine being able to control the lighting and shades in your home from anywhere, at any time. With our lighting and shades automation systems, you can do just that. Whether you're at home or away, you can easily adjust the lighting and shades to suit your needs and preferences. `,
  thirdText: `Enjoy the benefits of energy efficiency, increased security, and the ultimate in convenience with our lighting and shades automation solutions. Upgrade your home today and experience the ultimate in comfort and control.`,
  icons: [
    {
      childIcon: "/personalDesignIcon.svg",
      text1: "Personal",
      text2: "design",
    },
    {
      childIcon: "/automatedLightingIcon.svg",
      text1: "Automated",
      text2: "lighting",
    },
    {
      childIcon: "/automatedShades.svg",
      text1: "Automated",
      text2: "shades",
    },
    {
      childIcon: "/appControlIcon.svg",
      text1: "Remote",
      text2: "control",
    },
    {
      childIcon: "/installationServiceIcon.svg",
      text1: "Installation ",
      text2: "service",
    },
  ],
};
export const OUTDOOR_SPACE = {
  title: "OUTDOOR SPACE",
  bgImage: "/outdoorSpaceBg.png",
  bgTablet: "/outdoorSpaceTabletBg.png",
  bgMobile: "/outdoorSpaceMobileBg.png",
  yellowText: `Transform your outdoor space into an oasis with our motorized awnings, outdoor sound systems, and outdoor lighting solutions.`,
  secondText: `Transform your outdoor space into an oasis with our motorized awnings, outdoor sound systems, and outdoor lighting solutions. Enjoy the perfect ambiance for entertaining, relaxing, or dining al fresco.`,
  thirdText: `Our motorized awnings provide shade and protection from the sun, while our sound systems set the mood with your favorite tunes. And, our outdoor lighting adds the perfect finishing touch to any evening gathering. Upgrade your backyard today and make the most of your outdoor space`,
  icons: [
    {
      childIcon: "/motorizedAwningsIcon.svg",
      text1: "Motorized",
      text2: "awnings",
    },
    {
      childIcon: "/highFidelitySpeakersIcon.svg",
      text1: "High-quality ",
      text2: "speakers",
    },
    {
      childIcon: "/automatedLightingIcon.svg",
      text1: "Outdoor",
      text2: "lighting",
    },
    {
      childIcon: "/installationServiceIcon.svg",
      text1: "Installation ",
      text2: "service",
    },
  ],
};
export const CARE_TECH_FOR_SENIORS = {
  title: "CARE TECH FOR SENIORS",
  bgImage: "/careTechForSeniorsBg.png",
  bgTablet: "/careTechForSeniorsTabletBg.png",
  bgMobile: "/careTechForSeniorsMobileBg.png",
  yellowText: `Experience the ease and convenience of senior living with our state-of-the-art home automation technology specifically designed for seniors.`,
  secondText: `Our Care Tech for Seniors package includes a range of cutting-edge features to enhance safety, security and independence. With our home monitoring, you can have peace of mind knowing that fall detection alerts are in place.`,
  thirdText: `Our smart smoke detectors provide early warning in case of fire. You can also control your home with your voice using Google or Amazon voice assistants, sensor lighting and a smart thermostat. Additionally, our video doorbell allows you to see who is at the door and communicate with them, even when you're not home. Upgrade your senior living experience today with our Care Tech for Seniors package.`,
  icons: [
    {
      childIcon: "/fallDetectionIcon.svg",
      text1: "Fall",
      text2: "detection",
    },
    {
      childIcon: "/smokeDetectorIcon.svg",
      text1: "Smart smoke",
      text2: "detector",
    },
    {
      childIcon: "/voiceAssistantsIcon.svg",
      text1: "Voice",
      text2: "assistances",
    },
    {
      childIcon: "/automatedLightingIcon.svg",
      text1: "Sensor",
      text2: "lighting",
    },
    {
      childIcon: "/termostatIcon.svg",
      text1: "Smart ",
      text2: "thermostat",
    },
    {
      childIcon: "/videoDoorbellIcon.svg",
      text1: "Video",
      text2: "doorbell",
    },
    {
      childIcon: "/installationServiceIcon.svg",
      text1: "Installation ",
      text2: "service",
    },
  ],
};
export const ELECTRIC_CAR_CHARGER_INSTALL = {
  title: "ELECTRIC CAR CHARGER INSTALL",
  bgImage: "/electricCarChargerInstallBg.png",
  bgTablet: "/electricCarChargerInstallTabletBg.png",
  bgMobile: "/electricCarChargerInstallMobileBg.png",
  yellowText: `Say goodbye to long trips to the gas station and hello to convenient, eco-friendly charging at home with our professional home car charging station installation service.`,
  secondText: `Our team of experts will work with you to determine the best placement and equipment options for your specific needs, ensuring a smooth and seamless installation process. `,
  thirdText: `With our service, you'll be able to charge your electric or hybrid vehicle in the comfort of your own garage or driveway, saving you time and money while reducing your carbon footprint. Contact us today to learn more and schedule your installation.`,
  icons: [
    {
      childIcon: "/fastChargeIcon.svg",
      text1: "Fast",
      text2: "charger",
    },
    { childIcon: "/200AmpIcon.svg", text1: "200", text2: "Amp" },
    {
      childIcon: "/100AmpIcon.svg",
      text1: "100",
      text2: "Amp",
    },

    {
      childIcon: "/installationServiceIcon.svg",
      text1: "Installation ",
      text2: "service",
    },
  ],
};
