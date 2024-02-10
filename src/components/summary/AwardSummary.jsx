import axios from "axios";
import { Fragment, useContext, useEffect, useState } from "react";
import { BsInfoLg } from "react-icons/bs"
import { Link } from "react-router-dom"
import Loader from "../common/loader";
import { MyContext } from "../../context/AuthProvider";


const AwardSummary = ({ summaryData }) => {
    const { summaryLoading } = useContext(MyContext)
    const [inputData, setInputData] = useState("")



    return (
        <div className="w-[30%] text-center">
            {summaryLoading ?
                <div className='flex items-center justify-center h-[70px]'>
                    <Loader />
                </div>
                :
                summaryData && summaryData.List?.map((ele, i) => {
                    return (
                        <Fragment key={i}>
                            <Link to="/FY2023Award" className="text-[#4D4F53] text-2xl flex items-center justify-center font-medium">{ele.AwardName}<BsInfoLg size={30} color="#000" /></Link>
                            <div className=" border border-[#4DA8C3] bg-[#4DA8C3] text-white text-xl py-1">
                                <p >TSR: {ele.ClientTSR}</p>
                                <p className=" text-lg">{ele.Percentile} Percentile</p>
                                <p >Payout: {ele.Payout}</p>
                                <p >{inputData && `*My Value: $ ${(inputData * ele.PayoutDecimal * ele.ClientTSRDecimal * 100).toFixed(2)}`}</p>
                            </div>
                            <div className="py-2">
                                <p className="text-[17px]">Target Shares :</p>
                                <input type="number" value={inputData} onChange={(e) => setInputData(e.target.value)} name="customInput0" min="0" placeholder="Input Target Shares" className="border border-gray-400  rounded-sm text-lg p-[2px]" />
                            </div>
                            <Link to="/FY2023Award" className="text-lg text-blue-500 hover:text-blue-700">FY2023 Award Calculation Details</Link>
                        </Fragment>
                    )
                })
            }
        </div>

    )
}

export default AwardSummary
