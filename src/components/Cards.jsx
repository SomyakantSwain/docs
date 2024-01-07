import React, { useRef, useState } from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"


function Cards({ data, reference, id, seteditCard, editCard, saveData }) {
  const [desc, setdesc] = useState(data?.desc)
  // console.log(id)
  const descInpRef = useRef(null);

  return (
    <motion.div drag dragConstraints={reference} whileDrag={{ scale: 1.2 }} dragElastic={0.2} dragTransition={{ bounceStiffness: 400, bounceDamping: 7 }} className=" flex-shrink-0 relative w-60 h-72 rounded-[45px] bg-zinc-900/90 px-8 py-10 text-white overflow-hidden">
      <button onClick={() => {
        seteditCard(id);
        // console.log(descInpRef.current);
        descInpRef.current.focus()
        // alert(id)
      }}>
        <FaRegFileAlt />
      </button>
      {/* <p className="mt-5 text-sm leading-tight font-semibold">
        {data.desc}
      </p> */}
      <input ref={descInpRef} type="text" value={desc} onChange={(e => {
        setdesc(e.target.value)
      })} className={editCard === id ? "border-none outline-none bg-transparent" : "border-none outline-none bg-transparent pointer-events-none"} />
      <div className="footer absolute bottom-0 w-full  left-0">
        <div className="flex items-center justify-between px-8 py-3 mb-3">
          <h5>{data.filesize}</h5>
          <span className=" w-8 h-8 bg-zinc-600 rounded-full flex items-center justify-center">
            {data.close ? <IoClose /> : <FaRegFileAlt size=".7rem" color="#fff" />}

          </span>
        </div>
        {/* {
          data.tag.isOpen && (
            <motion.div whileTap={{ scale: 1.3 }} className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"}   px-6 flex items-center justify-center`}>
              <h3 className="text-sm font-semibolds"> {data.tag.tagTitle}</h3>
            </motion.div>
          )

        } */}
        {
          editCard === id ? <button onClick={() => {
            saveData(id, desc);
          }} className="w-full p-3 bg-blue-500">Save</button> : <button className="w-full p-3 bg-green-500">download</button>
        }

      </div>
    </motion.div >
  );
}

export default Cards;
