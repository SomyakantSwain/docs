import React, { useEffect, useRef, useState } from "react";
import Cards from "./Cards";

function Foreground() {
  const ref = useRef(null);
  const [data, setData] = useState(null);

  const [editCard, seteditCard] = useState(null);

  const saveData = (id, desc) => {
    let x = data;
    x[id].desc = desc;
    setData(x);
    localStorage.setItem("data", JSON.stringify(x))
    alert("data saved successfully!")
    seteditCard(null)
  }
  useEffect(() => {
    if (localStorage && data === null) {
      if (localStorage.getItem("data")) {
        setData(JSON.parse(localStorage.getItem("data")))
      }
    }
  })
  console.log(JSON.stringify([
    {
      desc: "Somyakant Swain",
      filesize: ".8mb",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Download  Now",
        tagColor: "blue",
      },
    },
    {
      desc: "Suvranshu Choudhury",
      filesize: ".8mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download  Now",
        tagColor: "blue",
      },
    },
    {
      desc: "Anshuman Panda",
      filesize: ".8mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "upload",
        tagColor: "green",
      },
    },
  ]));
  // useEffect ru data anibu and then sei data ku setData(<eithi purei debu>)
  return (
    <div
      ref={ref}
      className=" fixed top-0 left-0 min-h-screen  z-[3] w-full h-full flex gap-10 flex-wrap p-5"
    >
      {data?.map((item, index) => (

        <Cards key={index} id={index} data={item} editCard={editCard} seteditCard={seteditCard} saveData={saveData} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;
