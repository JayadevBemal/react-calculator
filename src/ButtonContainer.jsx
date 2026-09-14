import ButttonItemsec from "./ButtonItem";

const ButtonContainersec = ({ array, click, data }) => {
  return (
    <>
      <div className="w-full max-w-[340px] bg-white/[0.04] backdrop-blur-2xl border border-white 10 rounded-3xl p-6 shadow-2xl shadow-black/60 z-10">
        {/* Screen / Display */}

        {/* Buttons Grid */}
        <div className="grid grid-cols-4 gap-3 font-semibold text-lg">
          <ButttonItemsec Button={array} data={data} Buttonclick={click}>
            {" "}
          </ButttonItemsec>
        </div>
      </div>
    </>
  );
};

export default ButtonContainersec;
