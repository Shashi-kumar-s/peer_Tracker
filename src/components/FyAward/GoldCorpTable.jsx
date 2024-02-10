import { useEffect } from 'react'
import { FaInfo } from "react-icons/fa";
import styles from "../FyAward/FyAward.module.css"
import axios from 'axios';

const GoldCorpTable = () => {

    // useEffect(() => {
    //     const fetchChartData = async () => {
    //         try {
    //             const response = await axios.post(`${import.meta.env.VITE_APP_BASE_URL}/summary_calculated/`, { id });
    //             console.log(response.data.List, "sssssssssssssssssssss");

    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };

    //     fetchChartData();
    // }, []);



    return (
        <div className="w-[50%]">
            <table className="w-[100%]">
                <thead className="bg-[#4DA8C3]  text-white">
                    <tr>
                        <th className="text-left pl-2">Newmont Goldcorp Calculation</th>
                        <th className="text-right pr-2">Result</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.tooltip}>
                                <span className="flex items-center pl-2">Beginning Average<FaInfo size={14} /></span>
                                <div className={styles.tooltip_text}>
                                    Based on the 25 trading day average stock price from 01/23/2023 to 02/27/2023
                                </div>
                            </div>
                        </td>
                        <td className="align-right py-2 text-right pr-2">$49.01</td>
                    </tr>
                    <tr className="bg-[#E6F3F6]">
                        <td >
                            <div className={styles.tooltip}>
                                <span className="flex items-center pl-2 ">Ending Average <FaInfo size={14} /></span>
                                <div className={styles.tooltip_text}>
                                    Based on the 25 trading day average stock price from 01/02/2024 to 02/06/2024
                                </div>
                            </div>
                        </td>
                        <td className="align-right py-2 text-right pr-2">$37.76</td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.tooltip}>
                                <span className="flex items-center pl-2">Dividends<FaInfo size={14} /></span>
                                <div className={styles.tooltip_text}>
                                    Dividends are assumed to be reinvested on the ex-dividend date
                                </div>
                            </div>
                        </td>
                        <td className="align-right py-2 text-right pr-2">$1.60</td>
                    </tr>
                    <tr className="bg-[#E6F3F6]">
                        <td className='pl-2'>TSR</td>
                        <td className="align-right py-2 text-right pr-2">-23.0%</td>
                    </tr>
                    <tr>
                        <td className='pl-2'>Percentile</td>
                        <td className="align-right py-2 text-right pr-2">9th</td>
                    </tr>
                    <tr className="bg-[#E6F3F6]">
                        <td className='pl-2'>Payout</td>
                        <td className="align-right py-2 text-right pr-2">0.0%</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default GoldCorpTable
