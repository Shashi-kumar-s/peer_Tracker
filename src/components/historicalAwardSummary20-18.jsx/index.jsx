import { BsInfoLg } from 'react-icons/bs'
import { CgAddR } from 'react-icons/cg'
import axios from "axios";
import { Fragment, useCallback, useContext, useEffect, useState } from 'react';
import Loader from '../common/loader';
import { MyContext } from '../../context/AuthProvider';



const HistoricalAwardsSummaryTwentyToEighteen = ({ historicalData }) => {
  const { historicalLoading } = useContext(MyContext)
  const [inputData, setInputData] = useState("")



  return (
    <>
      {historicalLoading ?
        <div className='flex items-center justify-center h-[70px]'>
          <Loader />
        </div>
        :
        historicalData && historicalData.List?.map((ele, i) => {
          return (
            <Fragment key={i}>
              <p className="text-[#4D4F53] text-2xl flex items-center justify-center font-medium">{ele.AwardName}<BsInfoLg size={30} color="#000" /></p>
              <div className=" border border-[#4DA8C3] bg-[#4DA8C3] text-white text-xl py-1">
                <p>TSR: {ele.ClientTSR}</p>
                <p className=" text-lg">{ele.Percentile} Percentile</p>
                <p className="flex items-center justify-center gap-2">Rank: #1.80 out of 7<CgAddR size={26} /></p>
                <p>Payout: {ele.Payout}</p>
                <p >{inputData && `*My Value: $ ${(inputData * ele.PayoutDecimal * ele.ClientTSRDecimal * 100).toFixed(2)}`}</p>
              </div>
              <div className="py-2">
                <p className="text-[17px]">Target Shares :</p>
                <input type="number" value={inputData} onChange={(e) => setInputData(e.target.value)} name="customInput0" min="0" placeholder="Input Target Shares" className="border border-gray-400  rounded-sm text-lg p-[2px]" />
              </div>
            </Fragment>
          )
        })
      }

    </>
  )
}

export default HistoricalAwardsSummaryTwentyToEighteen
