import db from '../config/db.js';

export const fetchData = async (Tb_name)=>{
    let deta = await db.query(`select * from ${Tb_name}`);
    return (deta.rows)
} 