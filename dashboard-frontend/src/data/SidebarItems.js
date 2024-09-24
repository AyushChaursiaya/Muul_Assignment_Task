import ShowChartIcon from "@mui/icons-material/ShowChart";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BarChartIcon from "@mui/icons-material/BarChart";
import PieChartIcon from "@mui/icons-material/PieChart";
import CategoryIcon from "@mui/icons-material/Category";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LayersIcon from "@mui/icons-material/Layers";

export const upperList = [
  { text: "Dashboard", icon: <DashboardIcon />, href: "/" },
  { text: "Line Chart", icon: <ShowChartIcon />, href: "/line" },
  { text: "Bar Chart", icon: <BarChartIcon />, href: "/bar" },
  { text: "Pie Chart", icon: <PieChartIcon />, href: "/pie" },
];

export const lowerList = [
  { text: "Costumers", icon: <CurrencyRupeeIcon />, href: "/" },
  { text: "Overview", icon: <LayersIcon />, href: "/" },
  { text: "Category", icon: <CategoryIcon />, href: "/" },
  { text: "Offers", icon: <LocalOfferIcon />, href: "/" },
];
