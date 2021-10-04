import React from "react";
import {
  IoMailOutline,
  IoLocationOutline,
  IoCallOutline,
} from "react-icons/io5";

const contactData = [
  {
    id: 1,
    icon: <IoCallOutline className="text-warning fs-4 mb-2" />,
    text: "1-800-1234-678",
  },
  {
    id: 2,
    icon: <IoMailOutline className="text-warning fs-4 mb-2" />,
    text: "musicedu@music.com",
  },
  {
    id: 3,
    icon: <IoLocationOutline className="text-warning fs-4 mb-2" />,
    text: "San Diego, USA",
  },
];

const navData = [
  {
    id: 1,
    url: "/",
    name: "Home",
  },
  {
    id: 2,
    url: "/about",
    name: "About",
  },
  {
    id: 3,
    url: "/services",
    name: "Services",
  },
  {
    id: 4,
    url: "/contact",
    name: "Contact",
  },
];

export { navData, contactData };
