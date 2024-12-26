import './App.css'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  const [bgcolor,setbgcolor]=useState('red')
  const [borderred,setborderred]=useState(true)
  const [borderyellow,setborderyellow]=useState(false)
  const [borderblue,setborderblue]=useState(false)

  const handlileclick=(color)=>{
    setbgcolor(color)
    if(color=="red"){
      setborderred(true)
      setborderblue(false)
      setborderyellow(false)
    }
    else if(color=="green"){
      setborderred(false)
      setborderblue(false)
      setborderyellow(true)
    }
    else{
      setborderred(false)
      setborderblue(true)
      setborderyellow(false)
    }
  }

  return (
    <>
      <div style={{backgroundColor:`${bgcolor}`,height:'100vh',position:'relative'}}>
        <h1 style={{textAlign:'center',color:'white',position:'absolute',top:'50px',left: '50%',
      transform: 'translateX(-50%)'}}>Change Background Color</h1>
        <div style={{backgroundColor:`${bgcolor}`,height:'100vh'}}>
          <Stack style={{height:'100%',display:'flex',justifyContent:"center",alignItems:'center'}} spacing={2} direction="row">
            <Button id='redColor' onClick={()=>handlileclick('red')} style={{border: borderred ? "4px solid white":"2px solid red", backgroundColor:'black',color:'red'}} variant="outlined">RED</Button>
            <Button id='yellowColor' onClick={()=>handlileclick('green')} style={{border: borderyellow ? "4px solid white":"2px solid green", backgroundColor:'black',color:'green'}} variant="outlined">GREEN</Button>
            <Button id='blueColor' onClick={()=>handlileclick('blue')} style={{border: borderblue ? "4px solid white":"2px solid blue", backgroundColor:'black',color:'blue'}} variant="outlined">BLUE</Button>
          </Stack>
        </div>
      </div>
    </>
  )
}

export default App
