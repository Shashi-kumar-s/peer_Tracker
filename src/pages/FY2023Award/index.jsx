import { useContext } from "react";
import { MyContext } from "../../context/AuthProvider";
import newMountlogo from "../../assets/NewmontLogo.png"
import TsrChart from "../../components/FyAward/TsrChart";
import PayoutChart from "../../components/FyAward/PayoutChart";
import TsrBarChart from "../../components/FyAward/TsrBarChart";
import GoldCorpTable from "../../components/FyAward/GoldCorpTable";
import GoldMinerTable from "../../components/FyAward/GoldMinerTable";




const buttonData = [
    { id: "1", value: "TSR File" },
    { id: "2", value: "Peer TSRs" },
    { id: "3", value: "Historical TSR" },
]





const FY2023Award = () => {
    const { tsrChartYear2023,PayoutChartYear2023,tsrBarChartYear2023 } = useContext(MyContext);


    return (
        <div className='p-5'>
            <div className="flex justify-between">
                <div>
                    <p className="text-3xl">FYyear Award</p>
                    <p className="text-3xl">Calculations as of 02/09/2024</p>
                </div>
                <div>
                    <img src={newMountlogo} alt="newMountlogo" />
                </div>
            </div>
            <div className="flex justify-between w-[100%] mt-8 gap-8 ">
                <GoldCorpTable />
                <GoldMinerTable />
            </div>
            <div className="flex items-center justify-center gap-4 mt-8">
                {buttonData.map(ele => <button key={ele.id} className="bg-[#4DA8C3]  text-white py-2 px-3 rounded-md font-bold">{ele.value}</button>)}
            </div>
            <div className=" mt-8 border border-gray-300">
                <TsrChart tsrChartYear={tsrChartYear2023} />
            </div>
            <div className=" mt-8 border border-gray-300">
                <PayoutChart payoutChartYear={PayoutChartYear2023} />
            </div>
            <div className=" mt-8 border border-gray-300">
                <TsrBarChart tsrBarChartYear={tsrBarChartYear2023} />
            </div>
        </div>
    )
}

export default FY2023Award
