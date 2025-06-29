/* eslint-disable */
import { BiCodeBlock, BiPencil } from "react-icons/bi";
import { BsCodeSlash, BsClipboardData } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { FaLaptopCode, FaMobileAlt, FaPaintBrush } from "react-icons/fa";

export const servicesData = [
  {
    id: 1,
    title: 'Web Development',
    icon: <FaLaptopCode />,
  },
  {
    id: 2,
    title: 'UI/UX Design',
    icon: <FaPaintBrush />,
  },
  {
    id: 3,
    title: 'Responsive Design',
    icon: <FaMobileAlt />,
  },
  {
    id: 4,
    title: 'API Integration',
    icon: <BsCodeSlash />,
  },
  {
    id: 5,
    title: 'Technical Writing',
    icon: <BiPencil />,
  },
  {
    id: 6,
    title: 'Email Automation',
    icon: <AiOutlineMail />,
  },
  {
    id: 7,
    title: 'Data Entry & Dashboarding',
    icon: <BsClipboardData />,
  },
];
