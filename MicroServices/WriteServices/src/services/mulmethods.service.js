import db from '../config/db.js';

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

export const postMulData = async (Tb_name,newEnquiry)=>{
    try{
        console.log("student id in service", newEnquiry);
        await db.query(`INSERT INTO ${Tb_name} ${queryTemplates_post[Tb_name].cols} 
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

export const deleteMulData = async (Tb_name,newEnquiry)=>{
    try{
        console.log(`DELETE FROM ${Tb_name} WHERE ${queryTemplates_delete[Tb_name].cols} = ANY(ARRAY[${newEnquiry}])`)
        await db.query(`DELETE FROM ${Tb_name} WHERE ${queryTemplates_delete[Tb_name].cols} = ANY(ARRAY[${newEnquiry}])`);
        return("sucessfully deleted the enquiry data");
    }
    catch(err){
        return("enquiry form is not add",err)
    }
} 

