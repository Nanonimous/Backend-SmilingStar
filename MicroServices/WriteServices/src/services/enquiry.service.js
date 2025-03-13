import db from '../config/db.js';

export const postData = async (Tb_name,newEnquiry)=>{
    try{
        await db.query(`insert into ${Tb_name} (first_name,last_name,email,mobile,pincode,country,state,city,location,programs,age,gender) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`,Object.values(newEnquiry))
        return("sucessfully added the enquiry data");
    }
    catch(err){
        return("enquiry form is not add",err)
    }
} 

export const deleteData = async (Tb_name,newEnquiry)=>{
    try{
        await db.query(`DELETE FROM ${Tb_name} WHERE sno = $1`,[newEnquiry]);
        return("sucessfully deleted the enquiry data");
    }
    catch(err){
        return("enquiry form is not add",err)
    }
} 