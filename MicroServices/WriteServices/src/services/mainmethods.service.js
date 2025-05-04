import { db1, db2, db3, db4 } from '../config/db.js';

const db_mapping = {
    daycare : db1,
    bharatanatyam : db2,
    carnatic : db3,
    Hindiclass : db4,
}

var colTemplates_post = {
    enquiry : {
        cols : `(first_name,last_name,email,mobile,pincode,country,state,city,location,programs,age,gender)`,
        vals : `($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`
    },
    students :{ 
        cols : `(student_name,father_name,mother_name,address,email,age,phone_number,gender,monthly_fee)`,
        vals : `($1, $2, $3, $4, $5, $6, $7, $8, $9)`
    },
    payments : {
        cols : `(student_id,payment_date,status,month,year)`,
        vals : `($1 , CURRENT_DATE , true , EXTRACT(MONTH FROM CURRENT_DATE) , EXTRACT(YEAR FROM CURRENT_DATE))`
    },
    attendance : {
        cols : `(student_id,attendance_date,status,month,year)`,
        vals : `($1, CURRENT_DATE , true , EXTRACT(MONTH FROM CURRENT_DATE) , EXTRACT(YEAR FROM CURRENT_DATE))`
    }
}

export const postData = async (progName,Tb_name,newEnquiry)=>{
    try{
        console.log(Object.values(newEnquiry))
        await db_mapping[progName].query(`insert into ${Tb_name} ${colTemplates_post[Tb_name].cols} values ${colTemplates_post[Tb_name].vals}`,Object.values(newEnquiry))
        return("sucessfully added the enquiry data");
    }
    catch(err){
        return("enquiry form is not add",err)
    }
} 

var colTemplates_patch= {
    enquiry : {
        con : "sno"
    },
    payments : {
        con : "payment_id"
    },
    attendance : {
        con : "attendance_id"
    }
}    

export const patchData = async (progName,Tb_name,newCheckIt)=>{
    try{
        console.log(Object.values(newCheckIt));
        await db_mapping[progName].query(`update ${Tb_name} set status = $1 where ${colTemplates_patch[Tb_name].con} = $2`,[newCheckIt.status , newCheckIt.id]);
        return(`sucessfully updated the ${Tb_name} data`);
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
    },
    payments :{
        condition : "payment_id"
    },
    attendance:{
        condition : "attendance_id"
    }

}

export const deleteData = async (progName,Tb_name,newEnquiry)=>{
    try{ 
        await db_mapping[progName].query(`DELETE FROM ${Tb_name} WHERE ${colTemplates_delete[Tb_name].condition} = $1`,[newEnquiry]);
        return("sucessfully deleted the enquiry data");
    }
    catch(err){
        return("enquiry form is not add",err)
    }
} 
