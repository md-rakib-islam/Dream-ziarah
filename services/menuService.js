import { GET_MENUS_ALL_NESTED } from "@/constant/constants";
const  getAllMenuItem = async() => {
    try{
        const res = await fetch(GET_MENUS_ALL_NESTED);
        return res.json();
        
    }catch(err){
        console.log(err);
    }
};

export default getAllMenuItem;