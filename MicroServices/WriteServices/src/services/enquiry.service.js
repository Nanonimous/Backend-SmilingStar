import db from '../config/db.js';

var colTemplates_post = {
    enquiry : {
        cols : `(first_name,last_name,email,mobile,pincode,country,state,city,location,programs,age,gender)`,
        vals : `($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`
    },
    students :{ 
        cols : `(student_name,father_name,mother_name,address,email,age,phone_number,gender,monthly_fee)`,
        vals : `($1, $2, $3, $4, $5, $6, $7, $8, $9)`
    }
}

export const postData = async (Tb_name,newEnquiry)=>{
    try{
        await db.query(`insert into ${Tb_name} ${colTemplates_post[Tb_name].cols} values ${colTemplates_post[Tb_name].vals}`,Object.values(newEnquiry))
        return("sucessfully added the enquiry data");
    }
    catch(err){
        return("enquiry form is not add",err)
    }
} 

var colTemplates_delete = {
    enquiry : {
        condition : `sno`,
    },
    students :{ 
        condition : `student_id`,
    }
}

export const deleteData = async (Tb_name,newEnquiry)=>{
    try{
        await db.query(`DELETE FROM ${Tb_name} WHERE ${colTemplates_delete[Tb_name].condition} = $1`,[newEnquiry]);
        return("sucessfully deleted the enquiry data");
    }
    catch(err){
        return("enquiry form is not add",err)
    }
} 