import "./App.css";
import { product } from "./components/Data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

function App() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <>
      <div className="carousel">
        <h2>Carousel Tutorial</h2>

        <Slider  {...settings}>

          {
            product.map((item) => {
              const{id, image, title, price, description} = item
              return(
                <>
                
                <div className="card">
                  <div className="image-box">
                  <img src="images/mac.jpeg" alt="" />
                  </div>

                  <div className="product_info">
                    <h3>{title}</h3>
                    <p>This is product Description here</p>
                    <h3>$ {price}</h3>
                  </div>
                  <div className="button_section">
                    <button>Add TO Cart</button>
        </div>
      </div>
                
                </>
              )

            })
          }
    


      {/* <div className="box">
        <h3>2</h3>
      </div>
      <div className="box">
        <h3>3</h3>
      </div>
      <div className="box">
        <h3>4</h3>
      </div>
      <div className="box">
        <h3>5</h3>
      </div>
      <div className="box">
        <h3>6</h3>
      </div>
      <div className="box">
        <h3>7</h3>
      </div>
      <div className="box">
        <h3>8</h3>
      </div> */}

      </Slider>


      </div>

 
    </>
  );
}

export default App;
