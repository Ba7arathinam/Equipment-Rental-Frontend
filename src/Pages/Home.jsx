import React from "react";
import TopBar from "../Components/TopBar";
import Board from "../Components/Board";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import Carousal from "../Components/Carousal";
const Home = () => {
  return (
    <div style={{color:'white',background:'BLACK'}}>
      <TopBar />
      <Carousal/>
      <div style={{ height: "2rem" }}></div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5 text-center">
            <h1 className="mt-3 rentals" style={{color:'GREEN'}}>Equipment Rentals</h1>
            <p className="now" style={{color:'WHITE'}}>is now</p>
            <p className="smater">Smarter</p>
            <p className="moto-description" but={"View Equipments"} style={{color:'white'}}>
              Equiphunt is a one-stop solution for all your equipment needs.
              Scroll down to see what we have for you.
            </p>
          </div>
          <div className="col-md-7 text-center">
            {/* <img
              style={{ width: "100%", height: "100%" }}
              src="https://appkodes-cdn.fra1.cdn.digitaloceanspaces.com/wp-content/uploads/2019/06/equipment-rental-business-what-and-why.jpg"
              alt="name"
            /> */}
         <img src="https://cdni.iconscout.com/illustration/premium/thumb/man-booking-online-ticket-online-from-a-travel-agency-2527779-2114677.png" alt="" />
          </div>
        </div>
      </div>
      <div style={{ height: "5rem" }}></div>
      <div className="container-fluid">
        <div className=" m-auto text-center"style={{background:"black"}}>
          <Board 
            style={{background:"black"}}
            title={"Hire Equipments"}
            desc={
              "Hire tested premium quality equipment for rent at best prices."
            }
            but={"View Equipments"}
            ima={
              "https://www.bing.com/th/id/OGC.5bc6241761697fd20503e23ecede3482?pid=1.7&rurl=http%3a%2f%2fwww.aaarentals.com%2fphotos%2fHomeAnime.gif&ehk=7w0eu6i5GPuZDXjZtVkWoQCcutHCjUj%2bjYNbMikIvRU%3d"
            }
            imaStyle={"50px"}
            
          />
        </div>
        <div style={{ height: "5rem" }}></div>
      </div>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img
                style={{ width: "100%" }}
                src="https://th.bing.com/th/id/R.d30ca5fc706e3251b8403940fe5462b0?rik=FvOosNluw2ZkpQ&riu=http%3a%2f%2fclipartmag.com%2fimages%2fpeople-shaking-hands-clipart-21.png&ehk=tE9%2b3LEih4c5I7C2kcCXogqbnuQnszBo5gygKwpV1A8%3d&risl=&pid=ImgRaw&r=0"
                alt="icon2"
              />
            </div>
            <div className="col-md-8 text-center d-flex align-items-center">
              <div className="">
                <p className="roller">Let's Build the World Together!</p>
                <p className="safety-description" style={{color:'white'}}>
                  We'll do the heavy lifting so you can focus on what matters
                  the most. Sign up to get started with our services. Got
                  questions? Contact us.
                </p>
                <div className=" ">
                  <Link
                    to="/signup"
                    className="btn btn-outline-primary col-md-3"
                  >
                    SIGN UP
                  </Link>
                  <Link
                    to="/contact"
                    className="btn btn-outline-primary col-md-3 mx-3 "
                  >
                    CONTACT US
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;