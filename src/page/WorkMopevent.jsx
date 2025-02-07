import WorkList from "./index/WorkList";
import workImg1 from "../assets/03_supamop_1.jpg";
import { useEffect } from "react";



function WorkMopevent() {
  useEffect(() => {
    setTimeout(()=> window.scrollTo(0, 0),300)
  }, []);
  return (
    <>
    <div className="article-contet">
        <h2>專案：好神拖貓起來賺</h2>
        <img src={workImg1}  className="mb-4"/>
        <h3 className="mb-2 font-bold text-gray-500 text-xl">使用技術</h3>
        <div className="tag text-sm">
          <span>Jquery</span>
          <span>Pug</span>
          <span>SCSS</span>
          <span>css Animate</span>
          <span>Axios</span>
        </div>
        <div>
        此活動專案的玩法是玩家透過點選轉盤來進行遊戲，每次轉盤旋轉時，系統會自動記錄圈數。遊戲開始時會播放 MP4 ，提供沉浸式的情境體驗，增強活動趣味性。在第一次遊戲結束後，玩家可獲得一顆扭蛋，扭蛋會隨機開啟籤詩，增加遊戲的驚喜感與互動性。玩家可以選擇將當前圈數記錄下來，也可以點選「繼續累積」來疊加圈數，累計的圈數將參與排名，圈數越多，排名越靠前，激發玩家的挑戰精神與持續參與的動力。

        </div>
        <br />
      
        <h3 className="mb-2 font-bold text-gray-500 text-xl">Web Link(活動已下架 此為DEMO)</h3>
        <div>
          <a className="hover:text-regal-orange transition duration-300" href="http://danportfolio.url.tw/supamopevent/demo/" target="_blank">http://danportfolio.url.tw/supamopevent/demo/</a>
        </div>
        <br />
        <div className="mb-10">

          <h3 className="mb-2 font-bold text-gray-500 text-xl">主要功能</h3>
          <h4 className="font-semibold text-gray-700 mb-2">轉盤遊戲：</h4>
          <ul className="list-disc pl-7 mb-6">
            <li>使用者點擊轉盤進行遊戲，記錄此次遊戲圈數</li>
            <li>遊戲開始時播放 MP4，在遊戲結束前兩秒會伴隨音樂淡出，避免聲音突兀中斷，提升用戶體驗</li>
          </ul>
          <h4 className="font-semibold text-gray-700 mb-2">獎勵與互動：</h4>
          <ul className="list-disc pl-7 mb-6">
            <li>玩家從首頁點擊「轉好運」進入遊戲，遊戲時間為 10 秒。結束後，玩家可獲得一顆扭蛋</li>
            <li>扭蛋會隨機開啟籤詩，增加遊戲的趣味性與隨機性，並提供分享功能，方便玩家擴散活動內容</li>
          </ul>
          <h4 className="font-semibold text-gray-700 mb-2">圈數累積與排名：</h4>
          <ul className="list-disc pl-7 mb-6">
            <li>玩家可選擇立即登錄圈數，輸入姓名與 E-mail 打API，將資訊記錄傳送到資料庫</li>
            <li>點擊「繼續累積」進行第二次遊戲，時間延長至 30 秒，系統會自動帶入上次輸入的姓名與 E-mail，並累計玩家的圈數。</li>
            <li>排行榜顯示前 100 名玩家的排名，激勵玩家挑戰更高圈數</li>
          </ul>
          <h4 className="font-semibold text-gray-700 mb-2">專案亮點：</h4>
          <ul className="list-disc pl-7 mb-6">
            <li>使用 MP4 視頻播放，增強用戶參與感與活動氛圍</li>
            <li>扭蛋與籤詩的隨機化設計，提供多層次的遊戲體驗，增加活動的趣味性</li>
            <li>排名機制激勵玩家持續參與，通過圈數累積與排行榜提升用戶黏著度</li>
          </ul>
        </div>
        <div>
          <div className="w-full text-center">
            <button className="text-white bg-regal-blue rounded-[99em] py-3 px-9 m-auto hover:bg-regal-orange transition duration-300" onClick={()=>window.history.go(-1)}>回上一頁</button>
          </div>
        </div>
    </div>
    <WorkList/>
    </>
  )
};

export default WorkMopevent;
