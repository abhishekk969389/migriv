import type { IconType } from "react-icons";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPhone,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaClock,
  FaGraduationCap,
  FaBriefcase,
  FaPlaneDeparture,
  FaRegFileAlt,
  FaPassport,
  FaPlane,
  FaComments,
  FaHourglassHalf,
  FaCamera,
  FaChartLine,
  FaHome,
  FaTools,
  FaUserFriends,
  FaUsers,
  FaQuoteLeft,
  FaStar,
} from "react-icons/fa";
import { FaFileCircleCheck, FaFilePen, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { HiOutlineGlobeAlt } from "react-icons/hi2";
import {
  FiChevronDown,
  FiArrowRight,
  FiMenu,
  FiX,
  FiPhone,
  FiArrowLeft,
  FiMessageSquare,
  FiUser,
  FiChevronRight,
  FiUsers,
  FiFileText,
  FiShield,
  FiGlobe,
  FiMail,
  FiMapPin,
  FiClock,
  FiHeadphones,
  FiTag,
} from "react-icons/fi";
import { AU, CA, DE, EU, GB, NZ, US } from "country-flag-icons/react/3x2";
import type { ComponentType, SVGProps } from "react";

export const iconMap: Record<string, IconType> = {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaLocationDot,
  FaPhone,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaClock,
  FaGraduationCap,
  FaBriefcase,
  FaPlaneDeparture,
  FaRegFileAlt,
  FaPassport,
  FaPlane,
  FaComments,
  FaHourglassHalf,
  FaCamera,
  FaChartLine,
  FaHome,
  FaTools,
  FaUserFriends,
  FaUsers,
  FaQuoteLeft,
  FaStar,
  FaFileCircleCheck,
  FaFilePen,
  MdEmail,
  HiOutlineGlobeAlt,
  FiChevronDown,
  FiArrowRight,
  FiMenu,
  FiX,
  FiPhone,
  FiArrowLeft,
  FiMessageSquare,
  FiUser,
  FiChevronRight,
  FiUsers,
  FiFileText,
  FiShield,
  FiGlobe,
  FiMail,
  FiMapPin,
  FiClock,
  FiHeadphones,
  FiTag,
};

export const flagMap: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  AU: AU as any,
  CA: CA as any,
  DE: DE as any,
  EU: EU as any,
  GB: GB as any,
  NZ: NZ as any,
  US: US as any,
};

export function getIcon(name: string): IconType {
  const Icon = iconMap[name];
  if (!Icon) {
    return FiArrowRight; // default safe fallback
  }
  return Icon;
}

export function getFlag(code: string): ComponentType<SVGProps<SVGSVGElement>> {
  const Flag = flagMap[code];
  if (!Flag) {
    return EU as any; // default safe fallback
  }
  return Flag as any;
}
