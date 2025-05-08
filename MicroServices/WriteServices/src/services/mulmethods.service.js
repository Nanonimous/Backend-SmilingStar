import { db1, db2, db3, db4 } from '../config/db.js';

const db_mapping = {
    dayCare : db1,
    bharataNatyam : db2,
    carnatic : db3,
    HindiClass : db4,
}

var queryTemplates_post = {
    payments : {
        cols : `(student_id, payment_date, status, month, year)`,
        vals :`student_id, CURRENT_DATE, true , EXTRACT(MONTH FROM CURRENT_DATE), EXTRACT(YEAR FROM CURRENT_DATE)`,
    },
    attendance : {
        cols : `(student_id, attendance_date, status, month, year)`,
        vals :`student_id, CURRENT_DATE, true , EXTRACT(MONTH FROM CURRENT_DATE), EXTRACT(YEAR FROM CURRENT_DATE)`,
    }
}

export const postMulData = async (progName,Tb_name,newEnquiry)=>{
    try{
        console.log("student id in service", newEnquiry);
        await db_mapping[progName].query(`INSERT INTO ${Tb_name} ${queryTemplates_post[Tb_name].cols} 
                        select ${queryTemplates_post[Tb_name].vals} 
                        FROM UNNEST(ARRAY[${newEnquiry}]) AS student_id`)
        return("sucessfully added the enquiry data");
    }
    catch(err){
        return("enquiry form is not add",err)
    }
} 

var queryTemplates_delete = {
    payments :{ 
        cols : `payment_id`,
    },
    attendance :{ 
        cols : `attendance_id`,
    }   
}

export const deleteMulData = async (progName,Tb_name,newEnquiry)=>{
    try{
        console.log(`DELETE FROM ${Tb_name} WHERE ${queryTemplates_delete[Tb_name].cols} = ANY(ARRAY[${newEnquiry}])`)
        await db_mapping[progName].query(`DELETE FROM ${Tb_name} WHERE ${queryTemplates_delete[Tb_name].cols} = ANY(ARRAY[${newEnquiry}])`);
        return("sucessfully deleted the enquiry data");
    }
    catch(err){
        return("enquiry form is not add",err)
    }
} 

