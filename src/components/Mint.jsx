import { useState } from "react";
import dayImage from '../components/assets/final-morning.mp4';
import MessageModal from "../components/modal";
import SecModal from "../components/secmodal";



export default function Mint() {
  const [metamaskopenModal, setmetamaskopenModal] = useState(false);
  function closeModals() {
    setmetamaskopenModal(false);
  }

  // const openNewModal =()=>{
  //     setmetamaskopenModals(true)
  // }
  const [openModal, setopenModal] = useState(false);
  //   const [metaMassModal,setmetaMassModal] = useState(false)
  function closeModal() {
    setopenModal(false);
  }
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter((count) => count + 1);
  };

  //decrease counter
  const decrease = () => {
    setCounter((count) => count - 1);
  };
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="max-w-[1500px] w-[80%] mx-auto my-20"
    >
      <div className="flex flex-col lg:flex-row    w-full">
        <div className="lg:w-[45%]  h-[215px] md:h-full relative lg:h-auto">
          <video
            className="rounded-md 2xl:rounded-[40px] sm:w-full  sm:top-[14%] sm:relative xl:rounded-[40px] xl:relative  xl:w-full xl:h-[270%]  xl:top-[60%] lg:rounded-[40px] md:rounded-[40px] sm:rounded-[40px]  2xl:w-[60%] 2xl:h-[300%] lg:w-[100%] 2xl:relative 2xl:top-[75%] 2xl:right-[9%] lg:h-[400px] lg:relative lg:top-[26%] object-cover p-1 md:p-2 h-[215px] md:h-full"
            src={dayImage}
            alt="gif"
            type="video/mp4"
            loop={true}
            autoPlay={true}
          />
        
        </div>
        <div className="lg:w-[45%] xl:top-[500px] xl:h-max  xl:relative text-center pt-5 lg:pt-0">
          {/* <div className=" ">
            <p className="text-5xl font-bold text-transparent   bg-clip-text bg-gradient-to-r to-[#FF566B] via-[#633CFD]  from-[#21E5F0]">
              Genesis Super
              <br /> Pass
            </p>
          </div> */}
          <p className="pt-6 text-lg font-normal lg:relative lg:top-[32%] xl:text-[1.2em]   2xl:relative 2xl:w-max 2xl:left-[56%] 2xl:text-[1.3em]  lg:left-[10%]  text-white">
            1111 Genesis Super Pass that will grant you access to the Superwall <br />
            E2E & P2E Ecosystem which includes Social Media, NFT Marketplace, <br />
            Launchpad, Custom Goods Market, Staking, future drops and more. <br />
          </p>
          <div className="bg-gradient-to-r from-[#FF566B] via-[#702CD5] lg:relative  2xl:relative 2xl:left-[30%]  lg:top-[30%] lg:left-[10%] to-[#21E5F0] p-1 rounded-full w-[288px] mx-auto mt-10">
            <div className="flex justify-between items-center bg-[#000000] py-4 px-4 rounded-full">
              <button
                disabled={counter <= 0}
                className="cursor-pointer"
                onClick={decrease}
              >
                <img src="./assets/minus.png" alt="minus" />
              </button>
              <div className="text-2xl text-white">{counter}</div>
              <button className="cursor-pointer" onClick={increase}>
                <img src="./assets/sum.png" alt="sum" />
              </button>
            </div>
          </div>
          <div className="flex justify-around items-center lg:relative xl:w-[18%] lg:top-[30%] 2xl:relative 2xl:left-[30%]  lg:left-[10%] w-[45%] 2xl:w-[20%] mx-auto pt-5">
            <div>
              <img src="./assets/eva_info.png" alt="eva_info" />
            </div>
            <div>
              <p className="text-base leading-[24px] font-medium text-[#C6C6C6]">
                1 NFT = 0.085 ETH
              </p>
            </div>
          </div>
          <div
            onClick={() => {
              setopenModal(!openModal);
            }}
            className="cursor-pointer bg-gradient-to-r lg:relative xl:relative xl:w-[15%] lg:top-[30%] lg:left-[10%] 2xl:relative 2xl:left-[30%]   from-[#FF566B] via-[#702CD5] to-[#21E5F0]  rounded-full  w-[50%] 2xl:w-[15%] md:w-[20%] lg:w-[30%] mx-auto p-2 mt-5"
          >
            <p className="text-lg font-bold ">Mint</p>
          </div>
          <div className="flex justify-evenly lg:relative lg:top-[30%] xl:relative xl:w-[15%] 2xl:relative 2xl:left-[30%]  lg:left-[10%] items-center w-[50%] md:w-[20%] 2xl:w-[20%] lg:w-[30%] mx-auto mt-5">
            <div>
              <img
                src="./assets/etherscan_circle.png"
                alt="etherscan_circle"
              />
            </div>
            <div>
              <img src="./assets/eth.png" alt="eth" />
            </div>
            <div>
              <img src="./assets/mintwit.png" alt="mintwit" />
            </div>
            <div>
              <img src="./assets/mintbrowser.png" alt="mintbrowser" />
            </div>
          </div>
        </div>
      </div>
      {openModal && (
        <div className="w-full  flex justify-center  items-center ">
          <MessageModal
            openModal={openModal}
            closeModal={closeModal}
            setopenModal={setopenModal}
            openMetaMaskModal={() => setmetamaskopenModal(true)}
          />
        </div>
      )}
      {metamaskopenModal && (
        <div className="w-full  flex justify-center  items-center ">
          <SecModal openModal={metamaskopenModal} closeModal={closeModals} />
        </div>
      )}
    </div>
  );
}
