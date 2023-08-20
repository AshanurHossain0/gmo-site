import { useState, FC } from 'react'
import { CheckDataModel } from '../model'
import { Box, Button, Checkbox, Collapse, FormControlLabel } from '@mui/material'
import { UnfoldMoreOutlined, UnfoldLessOutlined } from '@mui/icons-material';
const Checkdata: FC = () => {

    const departments: CheckDataModel[] = [
        {
            "department": "customer_service",
            "sub_departments": [
                "support",
                "customer_success"
            ]
        },
        {
            "department": "design",
            "sub_departments": [
                "graphic_design",
                "product_design",
                "web_design"
            ]
        }
    ]

    const [checked1, setChecked1] = useState([...Array(departments[0].sub_departments.length)].map((_,i)=>{ return {serial:i,val:false}}));
    const [checked2, setChecked2] = useState([...Array(departments[1].sub_departments.length)].map((_,i)=>{ return {serial:i,val:false}}));
    const [expand1, setExpand1] = useState(false);
    const [expand2, setExpand2] = useState(false);

    const handleChange1=(e:React.ChangeEvent<HTMLInputElement>,serial:number)=>{
        setChecked1([...checked1.filter(obj=>obj.serial !== serial),{serial,val:e.target.checked}])
    }
    const handleChange2=(e:React.ChangeEvent<HTMLInputElement>,serial:number)=>{
        setChecked2([...checked2.filter(obj=>obj.serial !== serial),{serial,val:e.target.checked}])
    }

    const handleParent1=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setChecked1([...Array(departments[0].sub_departments.length)].map((_,i)=>{ return {serial:i,val:e.target.checked}}))
    }
    const handleParent2=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setChecked2([...Array(departments[1].sub_departments.length)].map((_,i)=>{ return {serial:i,val:e.target.checked}}))
    }

    // console.log(checked1);
    // console.log(checked2);
    


    return (
        <div style={{ width: '80%', marginLeft: '10%', marginRight: '10%', marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ width: '50%' }}>
                <Box>
                    <Box>
                        <FormControlLabel
                            label={departments[0].department[0].toUpperCase() + departments[0].department.slice(1)}
                            control={
                                <Checkbox
                                    checked={checked1.filter((obj)=>obj.val===false).length===0}
                                    onChange={(e)=>handleParent1(e)}
                                />
                            }
                        />
                        <Button endIcon={!expand1 ? <UnfoldMoreOutlined /> : <UnfoldLessOutlined />} onClick={() => setExpand1(!expand1)} size='small' variant='text' >{expand1 ? 'Collapse' : 'Expand'}</Button>
                    </Box>
                    <Collapse in={expand1}>
                        {
                            departments[0].sub_departments.map((subDept, i) => (
                                <Box key={i} sx={{ marginLeft: '20px' }}>
                                    <FormControlLabel
                                        label={subDept[0].toUpperCase()+subDept.slice(1)}
                                        control={<Checkbox checked={checked1.filter(obj=>obj.serial===i)[0].val} onChange={(e)=>handleChange1(e,i)}  />}
                                    />
                                </Box>
                            ))
                        }
                    </Collapse>
                </Box>
            </div>
            <div style={{ width: '50%' }}>
                <Box>
                    <Box>
                        <FormControlLabel
                            label={departments[1].department[0].toUpperCase() + departments[1].department.slice(1)}
                            control={
                                <Checkbox
                                    checked={checked2.filter((obj)=>obj.val===false).length===0}
                                    onChange={(e)=>handleParent2(e)}
                                />
                            }
                        />
                        <Button endIcon={!expand2 ? <UnfoldMoreOutlined /> : <UnfoldLessOutlined />} onClick={() => setExpand2(!expand2)} size='small' variant='text' >{expand2 ? 'Collapse' : 'Expand'}</Button>
                    </Box>
                    <Collapse in={expand2}>
                        {
                            departments[1].sub_departments.map((subDept, i) => (
                                <Box key={i} sx={{ marginLeft: '20px' }}>
                                    <FormControlLabel
                                        label={subDept[0].toUpperCase()+subDept.slice(1)}
                                        control={<Checkbox checked={checked2.filter(obj=>obj.serial===i)[0].val} onChange={(e)=>handleChange2(e,i)}  />}
                                    />
                                </Box>
                            ))
                        }
                    </Collapse>
                </Box>
            </div>
        </div>
    )
}

export default Checkdata