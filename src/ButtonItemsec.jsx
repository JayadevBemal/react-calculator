export default function ButttonItemsec({ Button, data, Buttonclick }) {
  let operators = ["/", "*", "-", "+"];
  let numbers = [".", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  let numberStyle =
    "py-3.5 rounded-2xl bg-slate-800/50 text-white border border-white/5 hover:bg-slate-700/60 active:scale-95 transition duration-150";

  let deleteStyle =
    "py-3.5 rounded-2xl bg-slate-800/80 text-slate-300 border border-white/5 hover:bg-slate-700/80 active:scale-95 transition duration-150 flex items-center justify-center";

  let allClearstyle =
    "py-3.5 rounded-2xl bg-rose-500/20 text-rose-300 border border-rose-500/30 hover:bg-rose-500/30 active:scale-95 transition duration-150";

  let percentageStyle =
    "py-3.5 rounded-2xl bg-slate-800/80 text-indigo-300 border border-white/5 hover:bg-slate-700/80 active:scale-95 transition duration-150";

  let divisionStyle =
    "py-3.5 rounded-2xl bg-amber-500/20 text-amber-300 border border-amber-500/30 hover:bg-amber-500/30 active:scale-95 transition duration-150";

  let multipleStyle =
    "py-3.5 rounded-2xl bg-amber-500/20 text-amber-300 border border-amber-500/30 hover:bg-amber-500/30 active:scale-95 transition duration-150";

  let equalStyle =
    "col-span-2 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold shadow-lg shadow-emerald-500/20 hover:from-emerald-400 hover:to-teal-400 active:scale-95 transition duration-150";

  let moduloStyle =
    "py-3.5 rounded-2xl bg-slate-800/80 text-indigo-300 border border-white/5 hover:bg-slate-700/80 active:scale-95 transition duration-150";

  return (
    <>
      {Button.map((item) => (
        <button onClick={Buttonclick} key={item} className={numberStyle}>
          {" "}
          {item}{" "}
        </button>
      ))}
    </>
  );
}
