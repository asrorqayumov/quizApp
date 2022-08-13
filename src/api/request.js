import axios from "axios";

export function getCategorys(){
   return axios
   .get('https://opentdb.com/api_category.php')
   .then((res)=> res.data)
   .catch((err)=> err)
}

export function getQuestions(amount,categoryId){
    return axios
    .get(`https://opentdb.com/api.php?amount=${amount}&category=${categoryId}`)
    .then((res)=> res.data)
    .catch((err)=> err)
 }
 