import WorkList from "./index/WorkList";
import workImg1 from "../assets/05_guide.jpg";
import workImg2 from "../assets/05_guide_1.jpg";
import workImg3 from "../assets/05_guide_2.jpg";
import { useEffect } from "react";



function WorkGuide() {
  useEffect(() => {
    setTimeout(()=> window.scrollTo(0, 0),300)
  }, []);
  return (
    <>
      <div className="article-contet">
          <h2>活動：2022年六都議員暗公報</h2>
          <img src={workImg1}  className="mb-4"/>
          <h3 className="mb-2 font-bold text-gray-500 text-xl">使用技術</h3>
          <div className="tag text-sm">
            <span>Vue</span>
            <span>Pinia</span>
            <span>Vite</span>
            <span>SCSS</span>
            <span>Swiper</span>
            <span>Axios</span>
          </div>
          <div>
          除了選舉公報上精美的政見與經歷外，媒體部同仁整理了候選人們的政治工作經歷，以及各式各樣可能還未被選民發現的資訊；透過一筆筆的查找比對，收錄了中選會沒公佈，候選人可能也不太希望被大家知道的「基本資料」，首頁以地圖形式分區域呈現，內頁呈現每一個選區的列表，點選候選人顯示詳細的資料。
          </div>
          <br />
        
          <h3 className="mb-2 font-bold text-gray-500 text-xl">Web Link</h3>
          <div>
            <a className="hover:text-regal-orange transition duration-300" href="https://www.thenewslens.com/election/2022/guide" target="_blank">https://www.thenewslens.com/election/2022/guide</a>
          </div>
          <br />
          <div className="mb-10">

            <h3 className="mb-2 font-bold text-gray-500 text-xl">主要功能</h3>
            <h4 className="font-semibold text-gray-700 mb-2">首頁地圖與行政區域選擇：</h4>
            <ul className="list-disc pl-7 mb-6">
              <li>首頁以地圖形式分區域呈現六都（台北市、新北市、台中市、台南市、高雄市、桃園市）</li>
              <li>使用者可從地圖或下拉選單選擇目標城市和選區</li>
              <li>選擇後，網址會動態更新為帶有參數的深鏈結，例如：?city=nwt&area=3&twe=1</li>
            </ul>
            <h4 className="font-semibold text-gray-700 mb-2">獎勵與互動：</h4>
            <ul className="list-disc pl-7 mb-6">
              <li>玩家從首頁點擊「轉好運」進入遊戲，遊戲時間為 10 秒。結束後，玩家可獲得一顆扭蛋</li>
              <li>使用者可從地圖或下拉選單選擇目標城市（六都）和選區（如新北市第三選區）</li>
            </ul>
            <h4 className="font-semibold text-gray-700 mb-2">選區候選人列表展示：</h4>
            <ul className="list-disc pl-7 mb-6">
              <li>進入選區後，依據條件載入該選區的候選人清單</li>
              <li>RWD響應式切版，適配桌面與行動裝置</li>
            </ul>
            <h4 className="font-semibold text-gray-700 mb-2">條件篩選功能：</h4>
            <ul className="list-disc pl-7 mb-6">
              <li>篩選出有政治工作候選人</li>
              <li>篩選出有司法案件的候選人</li>
              <li>篩選出有政治家族背景候選人</li>
              <li>篩選出2018當選議員之候選人</li>
              <li>篩選條件改變後，候選人列表會即時更新，顯示符合條件的候選人</li>
            </ul>
            <h4 className="font-semibold text-gray-700 mb-2">候選人詳細資訊：</h4>
            <ul className="list-disc pl-7 mb-6">
              <li>點擊候選人卡片後，會彈出詳細資訊的 Popup 視窗</li>
              <li>可左右滑動功能，方便切換同選區的其他候選人資訊</li>
            </ul>
            <div>
              <img src={workImg2}/>
              <img src={workImg3}/>
            </div>
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

export default WorkGuide;
