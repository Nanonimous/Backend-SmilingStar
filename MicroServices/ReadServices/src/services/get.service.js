import { db1, db2, db3, db4 , db5, db6, db7} from '../config/db.js';

const db_mapping = {
    daycare : db1,
    bharatanatyam : db2,
    carnatic : db3,
    hindiclass : db4,
    piano: db5,
    violin: db6,
    tabla:db7
}

export const fetchNoConData = async (progName, Tb_name)=>{
    let deta = await db_mapping[progName].query(`select * from ${Tb_name}`);
    return (deta.rows)
} 

const conDataTemplate = {
    attendance : {
        query : `SELECT 
                    *
                    FROM 
                        students s
                    JOIN 
                        attendance a ON s.student_id = a.student_id
                    WHERE 
                    a.attendance_date=$1;`
    },
    payments :{
        query : `SELECT 
                    *
                    FROM 
                        students s
                    JOIN 
                        payments p ON s.student_id = p.student_id
                    WHERE 
                        p.month= $1 and p.year = $2
                    ;` 
    }
}

export const fetchConDataPay = async (progName,Tb_name,Month,year )=>{
    let deta = await db_mapping[progName].query(conDataTemplate[Tb_name].query,[Month,year]);
    return (deta.rows)
} 

export const fetchConDataAtt = async (progName,Tb_name,formateDate)=>{
    let deta = await db_mapping[progName].query(conDataTemplate[Tb_name].query,[formateDate]);
    return (deta.rows)
} 