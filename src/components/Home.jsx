import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteRegi, getRegiList, registRegi, updateRegi } from "../services/regi.service";

function Home({title, author, date, content}) {
    return(

               <Link to="/regi" className="link-sucess h5 fw-bold">회원 등록하러 가기</Link>
    ) 
}

export default Home;