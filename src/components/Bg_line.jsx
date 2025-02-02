const BgLine = () =>{


  return (
    <div className="linesBG">
    {[...Array(11)].map((_, item) => {
      return  <div key={item} className="bLines"></div>
    })}
  </div>
  )

}


export default BgLine