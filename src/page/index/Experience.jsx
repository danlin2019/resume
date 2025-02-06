import { NavLink } from "react-router-dom";
import exImg1 from "../../assets/experience-1.png";
import exImg2 from "../../assets/experience-2.jpg";
import exImg3 from "../../assets/experience-3.png";
import exImg4 from "../../assets/experience-4.png";
import exImg5 from "../../assets/experience-5.png";
const Experience = () => {
  return (
    <>
      <ul className="experience 6">
          <li>
            <div className="experience-img">
              <img src={exImg5} />
            </div>
            <div className="experience-detailed">
              <div className="time">2021~2024</div>
              <h2>關鍵頻論網 前端工程師</h2>
              <p>
                進入關鍵評論網擔任前端工程師，主要負責官網的維護與管理平台功能的優化工作，並與後端團隊合作進行資料串接。在這段期間，開始觸碰到前後端分離的開發模式，進一步啟發對前端技術深度探索與思考。
              </p>
            </div>
          </li>
          <li>
            <div className="experience-img">
              <img src={exImg4} />
            </div>
            <div className="experience-detailed">
              <div className="time">2019~2021</div>
              <h2>奇禾數位整合行銷有限公司 前端工程師</h2>
              <p>
                進入奇禾數位任職前端工程師。主要工作是活動網的製作，也開始碰觸到
                Ｖue 框架 及 API
                串接。工作模式從切完版提交給後端，轉為前後端分離。
              </p>
            </div>
          </li>
          <li>
            <div className="experience-img">
              <img src={exImg3} />
            </div>
            <div className="experience-detailed">
              <div className="time">2016~2019</div>
              <h2>源做視覺整合設計 前端設計師</h2>
              <p>
                經過自學後進入源做視覺任職前端設計師，正式開始擔任前端的角色。主要內容是官網切版及
                css animate 動態及效果研究。
              </p>
            </div>
          </li>
          <li>
            <div className="experience-img">
              <img src={exImg2} />
            </div>
            <div className="experience-detailed">
              <div className="time">2013~2015</div>
              <h2>米蘭營銷策劃股份有限公司 創意設計</h2>
              <p>
                於米蘭數位任職創意設計。參與了從創意發想、視覺設計、媒體素材整個過程，但在這邊不能碰到切版覺得難受，一方面也見識到了細膩的網頁動態，逐漸清楚了要投入前端領域的志向。
              </p>
            </div>
          </li>
          <li>
            <div className="experience-img">
              <img src={exImg1} />
            </div>
            <div className="experience-detailed">
              <div className="time">2010~2013</div>
              <h2>先得利資訊科技 網頁設計師</h2>
              <p>
                在製作官網為主的先得利資訊，從實習生做到網頁設計師，自此開始設計與切版之路。
              </p>
            </div>
          </li>
      </ul>
      {/* <div className="w-full text-center mb-16 lg:mb-36">
          <NavLink
            to="http://danportfolio.url.tw/dan/resume/dan_resume.pdf"
            target="_blank"
            className="text-white bg-regal-blue rounded-[99em] py-3 px-9 m-auto hover:bg-regal-orange transition duration-300"
          >
            查看詳細履歷
          </NavLink>
        </div> */}
    </>
  );
};

export default Experience;
