import db from '../config/db.js';



export const fetchNoConData = async (Tb_name)=>{
    let deta = await db.query(`select * from ${Tb_name}`);
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

export const fetchConDataPay = async (Tb_name,getDate)=>{
    let deta = await db.query(conDataTemplate[Tb_name].query,[getDate]);
    return (deta.rows)
} 

export const fetchConDataAtt = async (Tb_name,getMonth,getYear)=>{
    let deta = await db.query(conDataTemplate[Tb_name].query,[getMonth,getYear]);
    return (deta.rows)
} 