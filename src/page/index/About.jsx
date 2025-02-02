import nameImage from "../../assets/name.jpg";
const About = () => {
  return (
    <>
      <div className=" overflow-hidden rounded-[99em] w-60 h-w-60 md:w-[300px] md:h-[300px] grayscale-[1] m-auto mb-8">
        <img src={nameImage} />
      </div>
      <div className="leading-8 mb-5">
        您好，我是林鈞鼎，一名熱愛動態與挑戰的前端工程師。
        <br />
        擁有大型官網設計規劃、活動頁動態效果撰寫、API串接、與行銷活動視覺構成相關經驗。
        <br />
        <br />
        從快遞員自學成為網頁設計師，因接觸到網頁動態與切版工作，激發了我對前端開發的濃厚興趣，
        <br />
        透過不斷學習與實踐，逐步轉型為前端工程師。
        <br />
        <br />
        隨著工作中逐漸接觸到資料處理相關的開發需求，例如 API 串接、前後端分離、伺服器端渲染 (SSR) 以及圖表與視覺化等的應用，開始認真思考前端技術的深度學習方向，並希望未來能將這些技術整合到自己的專業領域中。我將此作為下一步的學習目標，並期待在專案中能有更多實踐機會。
        <br />
        <br />
        目前從 Vue 過渡到 React，並持續學習前端相關技術，積極提升自身的專業素養。在未來的規劃中，我希望逐步掌握更多後端技術，向全端工程師方向邁進，與團隊共同成長，一起經營出好的產品。
      </div>
    </>
  );
};

export default About;
