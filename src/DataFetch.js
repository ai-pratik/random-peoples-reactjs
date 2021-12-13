import React,{ useState,useEffect} from "react";

import axios from "axios";
import {
    Container,
    Row,
    Col,Button
  } from "reactstrap";
import Mycard from "./Mycard"
const DataFetch=()=>{
    const [details,setDetails]=useState({})
    const [details1,setDetails1]=useState({})


    const fetchdetails=async()=>{
        const {data} = await axios.get('https://randomuser.me/api/')
        const details=data.results[0];
        setDetails(details);
    };
    const fetchdetails1=async()=>{
        const {data} = await axios.get('https://randomuser.me/api/')
        const details1=data.results[0];
        setDetails1(details1);
    };
    useEffect(()=>{
        fetchdetails();
    },[])
    useEffect(()=>{
        fetchdetails1();
    },[])
    return( <div>
        
            <Mycard details={details}/>
            <Mycard details={details1}/>
        
            </div>
            
            

    )
}

export default DataFetch;