import {Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis} from "recharts";
import {useNavigate} from "react-router-dom";
import classes from "../stylesForDetails.module.css";

const data = [
    {
        "name": "0:00",
        "sensors": 4000,
    },
    {
        "name": "0:10",
        "sensors": 3000,
    },
    {
        "name": "0:15",
        "sensors": 2000,
    },
    {
        "name": "0:20",
        "sensors": 2780,
    },
    {
        "name": "0:25",
        "sensors": 1890,
    },
    {
        "name": "0:30",
        "sensors": 2390,
    },
    {
        "name": "0:35",
        "sensors": 4122,
    },
    {
        "name": "0:40",
        "sensors": 1356,
    }, {
        "name": "0:45",
        "sensors": 2435,
    }, {
        "name": "0:50",
        "sensors": 1345,
    }, {
        "name": "0:55",
        "sensors": 3244,
    }, {
        "name": "1:00",
        "sensors": 2365,
    }
]

const Graph = () => {

    return (
        <div className={classes.wrapperForGraph}>
            <AreaChart width={730} height={250} data={data}
                       margin={{top: 30, right: 30, left: 0, bottom: 0}}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <XAxis dataKey="name"/>
                <YAxis/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip/>
                <Area type="monotone" dataKey="sensors" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)"/>
            </AreaChart>
            <table className={classes.wrapperForTable}>
                <thead>
                <tr>
                    {data.map((names) => <th key={names.name} className={classes.titleTables}>{names.name}</th>)}

                </tr>
                </thead>
                <tbody>
                <tr>
                {
                    data.map((item,index) => <td key={index}
                                           style={{

                                           }}>
                        <strong>{item.sensors}</strong>
                    </td>)
                }</tr>
                </tbody>
            </table>
        </div>
    );
};

export default Graph;