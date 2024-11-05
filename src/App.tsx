//1-SPR
// import {
//   DeatailLogger,
//   ShowMemberDetails,
//   type Member,
// } from "./components/Single-Responsibility/SRP-Ok";

//2-OCR
// import { Loading, ShowText } from "./components/Open-Close/OCR-Ok";
// import { Text } from "./components/Open-Close/OCR-Violated";

// const Patrik: Member = {
//   age: 22,
//   name: "Patrick",
// };

function App() {
  //1-SPR
  // DeatailLogger(Patrik);
  // return (
  //   <div>
  //     <ShowMemberDetails name={Patrik.name} age={Patrik.age} />
  //   </div>
  // );
  //2-OCR
  // return (
  //   <main className="flex flex-col gap-20">
  //     <div className="bg-slate-400 font-serif flex flex-col items-center gap-y-4">
  //       <p className="text-center">
  //         If we disregard SOLID , we would see the components below
  //       </p>
  //       <p className="text-center">⬇⬇⬇</p>
  //       <Text isLoading={true} text="Hello World" />
  //       <Text isLoading={false} text="Hello World" />
  //     </div>
  //     <div className="bg-yellow-100 flex flex-col items-center">
  //       <div className=" flex flex-col p-4">
  //         <p className="italic">
  //           If we regard SOLID , we would see the components below
  //         </p>
  //         <div className="w-full flex flex-col items-center">
  //           <p className="text-center">when is still Loading ⬇⬇⬇</p>
  //           <Loading isLoading={true}>
  //             <ShowText text="Hello World when SOLID is Ok" />
  //           </Loading>
  //         </div>
  //         <div className="flex flex-col items-center">
  //           <p className="w-full text-center p-4">
  //             when Loading is Finished ⬇⬇⬇
  //           </p>
  //           <Loading isLoading={false}>
  //             <ShowText text="Hello World when SOLID is Ok" />
  //           </Loading>
  //         </div>
  //       </div>
  //     </div>
  //   </main>
  // );
}

export default App;
