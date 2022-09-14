import React, {useState} from 'react';
import {Card, Row} from "react-bootstrap";


const BrandBar = () => {

    const [brand,setBrand]=useState([
        {id:1,name:'Samsung'}   ,
        {id:2,name:'Lenovo'}   ,
        {id:3,name:'Bosh'}   ,
        {id:3,name:'LG'}   ,
        ]
    )


    return (
           <Row>
<div className='d-flex' >
                   {brand.map(e=>{
                       return(
                       <Card key={e.id} style={{cursor:'pointer'}} className='p-2' onClick={()=>{} }
                       >
                         {e.name}
                       </Card>)
                   })}

</div>
</Row>
    );
};

export default BrandBar;