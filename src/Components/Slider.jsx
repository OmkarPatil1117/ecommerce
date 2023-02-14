import React, {  useState } from "react";
import img from "../Apple Img/img1.png"
import img2 from "../Apple Img/img2.jpg"
import img3 from "../Apple Img/img3.jpg"

function Slider(props) {
  const [imgN] = useState(props.value)
  const [allImg ] = useState([img, img2, img3 ]);

//   useEffect ( ()=> {
//     setInterval( ()=> {
//       setImg( (imgN) => imgN < 4 ? imgN + 1 : 0 )
//     }, 3000 )
//   }, [] )
  return (
    <>
    <img src={allImg[imgN]} alt="" style={{ width  : "100%", height : " 66vh" }}  />
    </>
  );
}

export default Slider;
