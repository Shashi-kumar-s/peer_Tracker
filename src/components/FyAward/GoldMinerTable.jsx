import axios from 'axios';
import React, { useEffect, useState } from 'react'

const GoldMinerTable = () => {
    // const [tableData, setTableData] = useState([])

    // useEffect(() => {
    //     const fetchChartData = async () => {
    //         try {
    //             const response = await axios.post(`${import.meta.env.VITE_APP_BASE_URL}/cal_bend_value/`, { id });
    //             setTableData(response.data.List)
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };

    //     fetchChartData();
    // }, []);


    return (
        <div className="w-[50%]">
            <table className="border-collapse border border-gray-200 w-[100%]">
                <thead className="bg-[#4DA8C3]">
                    <tr className="text-white">
                        <th className="text-white text-left pl-2">VanEck Vectors Gold Miners ETF (GDX)</th>
                        <th className="text-white text-right pr-2">Result</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border border-gray-200">
                        <td className="border border-gray-200 pl-2">80th Percentile</td>
                        <td className="border border-gray-200 text-right pr-2">10.4%</td>
                    </tr>
                    <tr className="border border-gray-200 bg-[#E6F3F6]">
                        <td className="border border-gray-200 pl-2">75th Percentile</td>
                        <td className="border border-gray-200 text-right pr-2">9.1%</td>
                    </tr>
                    <tr className="border border-gray-200">
                        <td className="border border-gray-200 pl-2">55th Percentile</td>
                        <td className="border border-gray-200 text-right pr-2">-1.2%</td>
                    </tr>
                    <tr className="border border-gray-200 bg-[#E6F3F6]">
                        <td className="border border-gray-200 pl-2">25th Percentile</td>
                        <td className="border border-gray-200 text-right pr-2">-12.0%</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default GoldMinerTable
