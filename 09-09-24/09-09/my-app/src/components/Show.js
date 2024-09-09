import React from 'react'

const Show = ({show,setShow}) => {
  return (
     <>
    <h1>Show</h1>
    {show ? <p>Showing</p> : <p>Not showing</p>}
    {show && <p>Showing again</p>}
    <button onClick={()=>setShow(False)}Toggle show></button>
        </>
  );
};

export default Show