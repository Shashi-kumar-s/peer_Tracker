import { useContext } from "react";
import NewmontLogo from "../../assets/NewmontLogo.png";
import HistoricalAwardsSummarySeventeenToSixteen from "../../components/historicalAwardSummary17-16.jsx/index.jsx";
import HistoricalAwardsSummaryTwentyToEighteen from "../../components/historicalAwardSummary20-18.jsx";
import { MyContext } from "../../context/AuthProvider.jsx";

const HistoricalAwards = () => {
    const { historicalDataYear2020, historicalDataYear2019, historicalDataYear2018, historicalDataYear2017, historicalDataYear2016 } = useContext(MyContext)

    
    return (
        <div className="px-8">
            <div className="flex justify-between items-center py-8">
                <div className="text-3xl">
                    <p>Calculations as of 02/08/2024</p>
                </div>
                <div>
                    <img src={NewmontLogo} alt="NewmontLogo" />
                </div>
            </div>
            <div className="flex justify-between w-[100%] px-4">
                <div className="w-[30%] text-center">
                    <HistoricalAwardsSummaryTwentyToEighteen historicalData={historicalDataYear2020} />
                </div>
                <div className="w-[30%] text-center">
                    <HistoricalAwardsSummaryTwentyToEighteen historicalData={historicalDataYear2019} />
                </div>
                <div className="w-[30%] text-center">
                    <HistoricalAwardsSummaryTwentyToEighteen historicalData={historicalDataYear2018} />
                </div>
            </div>
            <div className="flex w-[100%] px-4 py-10 gap-14">
                <div className="w-[30%] text-center">
                    <HistoricalAwardsSummarySeventeenToSixteen historicalData={historicalDataYear2017} />
                </div>
                <div className="w-[30%] text-center">
                    <HistoricalAwardsSummarySeventeenToSixteen historicalData={historicalDataYear2016} />
                </div>
            </div>
        </div>
    );
};

export default HistoricalAwards;
