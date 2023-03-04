import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "none",
    padding: "0px",
    overflow: "h",
    border: "none",
  },
  overlay: {
    zIndex: "40",
    background: "rgba(0, 0, 0, 0.6)",
  },
};
const SecModal = ({ openModal, closeModal }) => {
  return (
    <Modal isOpen={openModal} style={customStyles} onRequestClose={closeModal}>
      <div className=" rounded-xl z-20">
        <div className="  p-1 bg-white red-box-shadow w-auto mx-2 md:w-[600px] md:mx-auto rounded-[36px] shadow-6xl">
          <div className="bg-[#283142] rounded-[36px]">
            <div className="w-full text-[29.67px] text-center font-semibold pt-5">
              Connected with MetaMask
            </div>
            <div className="flex items-center justify-evenly py-10 w-[80%] mx-auto outline-none">
              <div>
                <img src="./assets/linearcircle.png" alt="linearcircle" />
              </div>
              <div>
                <p className="text-[31.29px] font-medium leading-[42.71px]">
                  0xde43...6a94
                </p>
              </div>
            </div>
            <div className="flex justify-evenly items-center">
              <div className="flex justify-evenly items-center">
                <div>
                  <img src="/assets/copy.png" alt="copy" />
                </div>
                <div>Copy Address </div>
              </div>
              <div className="flex justify-evenly items-center">
                <div>
                  <img
                    src="./assets/externallink.png"
                    alt="externallink"
                  />
                </div>
                <div>View on Etherscan</div>
              </div>
            </div>
            <div className="text-right py-5 w-14 ml-auto mr-10">
              <p className="border-b-2 ">Change</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -right-20 -top-10 flex items-center justify-center mt-5">
        <div className="cursor-pointer" onClick={closeModal}>
          <img src="./assets/cross.png" alt="cross" />
        </div>
      </div>
    </Modal>
  );
};

export default SecModal;
