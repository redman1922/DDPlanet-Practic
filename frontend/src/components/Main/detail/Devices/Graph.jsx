import {Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis} from "recharts";
import {useNavigate} from "react-router-dom";

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

    const navigate = useNavigate();

    return (
        <div style={{width:'fit-content',margin:'0 auto',boxSizing:'border-box',padding:'0 0 40px 0'}}>
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
            <table style={{borderRadius:'5px', boxSizing:'border-box', padding:'20px', margin: '40px auto 0',borderSpacing:'12px',background:'gray'}}>
                <thead>
                <tr>
                    {data.map((names) => <th style={{padding:'5px', background:'#D3D3D3',boxSizing:"border-box", borderRadius:'5px'}}>{names.name}</th>)}

                </tr>
                </thead>
                <tbody>{
                    data.map((item) =><td style={{borderRadius:'5px',padding:'5px',border:'1px solid #d7d3d3',color:'#d7d3d3'}}><strong>{item.sensors}</strong></td>)
                }
                </tbody>
            </table>
            <button onClick={()=> navigate('/main')} style={{margin:'30px 0 0 0',boxSizing:'border-box',padding:'10px 30px',borderRadius:'5px',outline:'none',borderColor:'none'}}>Назад</button>
        </div>
    );
};

export default Graph;