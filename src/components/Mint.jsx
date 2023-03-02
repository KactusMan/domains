import { useState } from "react";
// import dayImage from '../components/assets/mint-pass.webp';
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
          <picture  className="rounded-md 2xl:rounded-[40px] sm:w-full  sm:top-[14%] sm:relative xl:rounded-[40px] xl:relative  xl:w-full xl:h-[270%]  xl:top-[80%] xl:left-[22%]  lg:rounded-[40px] md:rounded-[40px] sm:rounded-[40px]  2xl:w-[60%] 2xl:h-[300%] lg:w-[100%] 2xl:relative 2xl:top-[75%]  lg:h-[400px] lg:relative lg:top-[46%] object-cover p-1 md:p-2 h-[215px] md:relative md:top-[70px] ">
            
             <source srcset="./assets/mint-pass.webp" type="image/webp"/>
            <source srcset="./assets/mint-pass.webp" type="image/jpeg"/> 
              <img className="rounded-full border-2" src="./assets/mint-pass.webp" alt="mint-pass"/>

            </picture>

        
        </div>
        <div className="lg:w-[45%] xl:top-[500px] xl:h-max  xl:relative text-center pt-5 lg:pt-0">
         
         {/* MINT PASS */}
         
          <div className="  ">
          <h1 className=" opacity-100  z-30  sm:text-[3em] sm:w-max sm:leading-[110%] sm:text-center sm:top-[66%] sm:left-[25%] md:w-max  md:top-[85%] md:left-[28%] md:text-[5em] md:text-center md:leading-[110%] lg:w-max lg:text-center  absolute lg:top-20 lg:text-[7em] lg:leading-[100%]  xl:top-28 xl:left-[35%]  2xl:text-center     2xl:top-[30%] xl:w-max  xl:text-center xl:leading-[110%]  batsand xl:text-[6em] 2xl:w-max 2xl:text-[7em] 2xl:leading-[110%] 2xl:left-[60%]"> Mint Pass   </h1>
                    <h1 className=" opacity-100 z-20   sm:text-[3em]  sm:w-max sm:leading-[110%] sm:text-center sm:top-[66.7%] sm:left-[25%] md:w-max  md:top-[86%] md:left-[28%] md:text-[5em] md:text-center md:leading-[110%] absolute lg:w-max lg:text-center lg:top-24 lg:text-[7em] lg:leading-[100%] xl:top-[29%] xl:left-[35%]  2xl:text-center 2xl:top-[32%]  xl:w-max xl:text-center xl:leading-[110%] batsand-dark xl:text-[6em] 2xl:w-max 2xl:text-[7em] 2xl:leading-[95%] 2xl:left-[60%]"> Mint Pass  </h1>
          </div>

          {/* MINT PASS SUPPLY */}
          
          <p className="sm:top-[210px] sm:relative pt-6 text-lg font-normal lg:relative lg:top-[32%] xl:text-[1.2em] mint-text xl:top-[200px] xl:relative md:relative md:top-[160px]  2xl:relative 2xl:w-max 2xl:left-[60%] 2xl:top-[120px] 2xl:text-[1.3em]  lg:left-[10%]  text-white">
          3666 Mint Passes for OGs & WLs only, these passes <br />
          are free to mint.  Passes will grant you access to the <br />
          Teach Em Turtles Phase 1 mint.  
          </p>



        {/* PLUS MINUS BUTTON */}

          <div className=" sm:top-[200px] sm:relative border rounded-full lg:relative  2xl:relative 2xl:left-[26%] 2xl:top-[140px]  lg:top-[30%] xl:top-[200px] md:relative md:top-[160px] xl:relative lg:left-[10%]  p-1  w-[288px] mx-auto mt-10">
            <div className="flex justify-between items-center   py-4 px-4 rounded-full">
              <button
                disabled={counter <= 0}
                className="cursor-pointer "
                onClick={decrease}
              >
                <img src="./assets/minus.svg" alt="minus" />
              </button>
              <div className="text-2xl ">{counter}</div>
              <button className="cursor-pointer " onClick={increase}>
                <img src="./assets/plus.svg" alt="sum" />
              </button>
            </div>
          </div> 



           <div className="flex justify-around sm:top-[200px] sm:relative items-center lg:relative xl:w-[18%] lg:top-[30%]  2xl:top-[140px] 2xl:relative 2xl:left-[26%] xl:top-[200px] md:relative md:top-[160px] xl:relative lg:left-[10%] w-[45%] 2xl:w-[20%] mx-auto pt-5">
            <div>
              <img src="./assets/eva_info.svg" alt="eva_info" />
            </div>
            <div>
              <p className="text-base leading-[24px] font-medium text-[#654A20]">
              1 Pass per 1 OG/WL Wallet
              </p>
            </div>
          </div>


          <div
            onClick={() => {
              setopenModal(!openModal);
            }}
            className="cursor-pointer sm:top-[200px] sm:relative  lg:relative xl:relative xl:top-[200px] xl:w-[15%] 2xl:top-[150px] lg:top-[30%] lg:left-[10%] 2xl:relative 2xl:left-[26%] md:relative md:top-[160px]   bg-[#654A20] rounded-full  w-[50%] 2xl:w-[15%] md:w-[20%] lg:w-[30%] mx-auto p-2 mt-5"
          >
            <p className="text-lg font-bold text-white 2xl:top-[60%]">Mint</p>
          </div>
          <div className="flex justify-evenly sm:top-[200px] sm:relative lg:relative lg:top-[30%] 2xl:top-[160px] xl:top-[200px] xl:relative xl:w-[15%] 2xl:relative 2xl:left-[26%]    lg:left-[10%] items-center w-[50%] md:relative md:top-[160px] md:w-[20%]  2xl:w-[20%] lg:w-[30%] mx-auto mt-5">
            <div>
              <img
                src="./assets/etherscan_circle.svg"
                alt="etherscan_circle"
              />
            </div>
            <div>
              <img src="./assets/eth.svg" alt="eth" />
            </div>
            <div>
              <img src="./assets/mintwit.svg" alt="mintwit" />
            </div>
            <div>
              <img src="./assets/mintbrowser.svg" alt="mintbrowser" />
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
