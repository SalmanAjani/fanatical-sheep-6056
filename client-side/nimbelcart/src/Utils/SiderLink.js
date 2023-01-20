import { MdSpaceDashboard } from 'react-icons/md';
import { BiAddToQueue,BiLineChart ,BiSupport} from 'react-icons/bi';
import { AiFillDatabase,AiOutlineBarChart} from 'react-icons/ai'
import { TiChartPie} from 'react-icons/ti'
import { MdVideoSettings} from 'react-icons/md'
import { FcMindMap,FcFaq} from 'react-icons/fc'
import { SiGooglecalendar } from "react-icons/si"
import {FiStar} from 'react-icons/fi';
export const SideBarItems = [
    { name: 'Dashboard', icon: MdSpaceDashboard,to:"/admin/dashboard" },
    { name: 'Add Product', icon:BiAddToQueue,to:"/admin/addproduct" },
    { name: 'Manage Products', icon: AiFillDatabase,to:"/admin/manageproducts" },
    { name: 'Favourites', icon: FiStar,to:"/admin/favourits" },
    { name: 'Clanders', icon: SiGooglecalendar,to:"/admin/calenders" },
    {name: 'Pie Chart', icon: TiChartPie,to:"/admin/piechart"},
    {name: 'Bar Chart', icon: AiOutlineBarChart,to:"/admin/barchart/"},
    {name: 'Line Chart', icon: BiLineChart,to:"/admin/linechart"},
    {name: 'Geography Chart', icon: FcMindMap,to:"/admin/geographychart"},
    {name: 'Admin Support', icon:BiSupport,to:"/admin/support"},
    {name: 'FAQ', icon: FcFaq,to:"/admin/frequentlyaskedquestions"},
    {name:"Tutorial",icon:MdVideoSettings,to:"/admin/tutorial"}
  ];