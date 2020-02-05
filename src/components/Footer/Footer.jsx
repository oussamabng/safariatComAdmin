import React from "react";
import Title from '../Title/Title'
import footerImg from './images/footer_img.png'
const Footer = () => {
  return (
    <div class="bg-white pt-8 text-center h-40 font-montserrat text-gray lh-17">
      <button className="bg-yellow text-white text-xl font-bold font-normal py-3 mt-4 mb-8 px-12 rounded-full button-shadow">
        join us
      </button>
      <Title 
        title="WE MAKE IT REALLY CLOSE"
        subTitle="travel agencies and travellers (guides and influencers) are not to be separated, which means that,
        one completes the other, travel agencies need travellers and tourism influencers, also travellers
        and tourism activists can’t stand alone without travel agencies and operators."
        className="py-4 w-20"
      />
      <div className="flex font-montserrat justify-start mx-24 content-start py-4 ">
          <div className="block ml-2 mr-40">
              <h3 className="text-xl font-bold mb-2">contact us</h3>
              <p className="text-xs mb-2">+213 (0) 777 59 53 56</p>
              <p className="text-xs mb-2">+213 (0) 665 59 53 56</p>
              <p className="text-xs mb-2">contact@Safariatcom.com</p>
              <p className="text-xs mb-2">adress: neighberhood ,algeirs , algeria </p>
          </div>
          <div className="block mr-145">
              <h3 className="text-xl font-bold mb-2">support</h3>
              <p className="text-xs mb-2">help & support</p>
              <p className="text-xs mb-2">trust & safety</p>
              <p className="text-xs mb-2">support@Safariatcom.com</p>
          </div>
          <div className="block">
              <h3 className="text-xl font-bold mb-2">more</h3>
              <p className="text-xs mb-2">language</p>
              <p className="text-xs mb-2">privacy</p>
              <p className="text-xs mb-2">terms & conditions</p>
          </div>
      </div>
      <div className="mt-4">
          <p className="text-xs">Copyright © 2020 SafariatCom platform. All rights reserved.</p>
          <img src={footerImg} alt="" className="mx-auto mt-2 text-center"/>
      </div>
    </div>
  );
};

export default Footer;
