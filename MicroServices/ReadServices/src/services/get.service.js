import { db1, db2, db3, db4 } from '../config/db.js';

const db_mapping = {
    dayCare : db1,
    bharataNatyam : db2,
    carnatic : db3,
    HindiClass : db4,
}

export const fetchNoConData = async (progName, Tb_name)=>{
    let deta = await db_mapping[progName].query(`select * from ${Tb_name}`);
    return (deta.rows)
} 

const conDataTemplate = {
    attendance : {
        query : `SELECT s.student_id, s.student_name,
                CASE WHEN a.student_id IS NOT NULL THEN 'Present' ELSE 'Absent' END AS attendance_status,
                COALESCE(a.attendance_date, $1) AS attendance_date
                FROM students s
                LEFT JOIN attendance a ON s.student_id = a.student_id 
                AND a.attendance_date = $1`
    },
    payments :{
        query : `SELECT s.student_id, s.student_name, 
                COALESCE(p.status, 'Unpaid') AS payment_status, 
                p.payment_date, p.amount
                FROM students s
                LEFT JOIN payments p ON s.student_id = p.student_id 
                AND p.month = $1  
                AND p.year = $2` 
    }
}

export const fetchConDataPay = async (progName,Tb_name,getDate)=>{
    let deta = await db_mapping[progName].query(conDataTemplate[Tb_name].query,[getDate]);
    return (deta.rows)
} 

export const fetchConDataAtt = async (progName,Tb_name,getMonth,getYear)=>{
    let deta = await db_mapping[progName].query(conDataTemplate[Tb_name].query,[getMonth,getYear]);
    return (deta.rows)
} 