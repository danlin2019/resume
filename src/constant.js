import workImg1 from "./assets/01_admin.jpg";
import workImg2 from "./assets/02_president.jpeg";
import workImg3 from "./assets/03_supamop.jpg";
import workImg4 from "./assets/04_pahbin.png";
import workImg5 from "./assets/05_deep.jpg";
import workImg5_1 from "./assets/05_guide.jpg";
import workImg6 from "./assets/06_esg.jpg";
import workImg7 from "./assets/07_unimax.jpg";
import workImg8 from "./assets/08_sillce.png";
import workImg10 from "./assets/10_skis.jpg";


export const WORK_LIST = [
  {
    id: 1,
    img: workImg1,
    title: "React 購物車前後台系統",
    description:"使用 Vite + React 開發，狀態管理使用 redux-toolkit",
    bg:"rgba(3,169,244, 0.94)"
  },
  {
    id: 2,
    img: workImg2,
    title: "2024總統大選即時開票",
    description:"使用 d3 和 vue 開發，這個網站能夠即時地獲取選舉數據並將其視覺化呈現。使用者可以透過這個網站，即時地查看候選人的得票情況、各縣市的開票狀況。這個網站結合了前端的互動性和後端的數據處理，提供了一個直觀、方便的方式來追蹤總統大選的最新動態。",
    bg:"rgba(255,165,156, 0.94)"
  },
  {
    id: 3,
    img: workImg3,
    title: "好神拖 貓起來賺",
    description:"1",
    bg:"rgba(88,6,88, 0.94)"
  },
  {
    id: 4,
    img: workImg4,
    title: "2024 臺灣文博會",
    description:"1",
    bg:"rgb(233 125 239 / 94%)"
  },
];

export const PROJECT_LIST = [
  {
    id: 1,
    img: workImg1,
    link: "/work/shoe",
    description: "專案：鞋子購物車後台系統<br />& 前台頁面切版串接",
    tagTitle:'使用技術',
    tag:['React','Vite','Tailwind CSS','Firebase','React-loading-skeleton','Axios'],
    content:"獨立完成此網頁開發，涵蓋了從功能規劃、資料庫設計到前端設計與配色的完整開發流程。專案使用 React 框架構建前後台，結合 Tailwind CSS 做樣式開發，具備 React 基礎知識，使用 Firebase 平台進行 API 開發與資料管理，狀態管理則採用 Redux Toolkit，以確保應用程式狀態的一致性。",
    bg: "rgba(3,169,244, 0.94)",
    className: "w-full lg:w-[100%] ",
  },
  {
    id: 2,
    img: workImg2,
    link: "/work/election",
    title: "2024 總統立委即時開票",
    description: "活動：總統開票看關鍵<br />& 總統立委即時開票",
    bg: "rgba(255,165,156, 0.94)",
    className: "w-full lg:w-[33.333%] group",
  },
  {
    id: 3,
    img: workImg3,
    link: "/work/mopevent",
    title: "好神拖 貓起來賺",
    description: "活動：好神拖貓起來賺！<br />線上轉蛋分享抽大獎",
    bg: "rgba(88,6,88, 0.94)",
    className: "w-full lg:w-[33.33333%] group",
  },
  {
    id: 4,
    img: workImg4,
    link: "/work/creativexpo",
    title: "2024 臺灣文博會",
    description: "官網：臺灣文化創意博覽會<br />CREATIVE EXPO TAIWAN",
    bg: "rgb(233,125,239,0.94)",
    className: "w-full lg:w-[33.33333%] group",
  },
  {
    id: 5,
    img: workImg5_1,
    link: "/work/guide",
    title: "2022六都議員暗公報",
    description: "活動：2022年六都議員暗公報",
    bg: "rgba(88,6,88, 0.94)",
    className: "w-full lg:w-[33.33333%] group",
  },

  {
    id: 6,
    img: workImg5,
    link: "/work/deep",
    title: "道法法律事務所",
    description: "官網：道法法律事務所<br />Deep & Far Attorneys-at-Law",
    bg: "rgba(103,58,183,0.94)",
    className: "w-full lg:w-[33.33333%] group",
  },
  {
    id: 7,
    img: workImg6,
    link: "/work/esg",
    title: "麗明營造 ESG 永續網站",
    description: "官網：麗明營造 ESG 永續網站",
    bg: "rgba(139,195,74,0.94)",
    className: "w-full lg:w-[33.33333%] group",
  },
  {
    id: 8,
    img: workImg7,
    link: "/work/unimax",
    title: "UNIMAX MEDICAL SYSTEMS INC.",
    description: "官網：UNIMAX MEDICAL<br />SYSTEMS INC.",
    bg: "rgba(255,87,34,0.94)",
    className: "w-full lg:w-[33.33333%] group",
  },
  {
    id: 9,
    img: workImg8,
    link: "/work/sillace",
    title: "春風 SILLACE",
    description: "活動：春風 SILLACE - 中元有絲嵐<br />享受五星儀式感",
    bg: "rgba(255,193,7,0.94)",
    className: "w-full lg:w-[33.33333%] group",
  },
  {
    id: 10,
    img: workImg10,
    link: "/work/skis",
    title: "新光證券 - 智慧選",
    description: "Web View：新光證券 - 智慧選",
    bg: "rgba(255,193,7,0.94)",
    className: "w-full lg:w-[33.33333%] group",
  },
];
