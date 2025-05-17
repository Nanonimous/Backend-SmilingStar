import { db1, db2, db3, db4 ,db5 ,db6 ,db7} from '../config/db.js';

const db_mapping = {
    daycare : db1,
    bharatanatyam : db2,
    carnatic : db3,
    hindiclass : db4,
    piano: db5,
    violin: db6,
    tabla:db7
}

var queryTemplates_post = {
    payments : {
        cols : `(student_id, payment_date, checkit, month, year)`,
        vals :`student_id, CURRENT_DATE, false , EXTRACT(MONTH FROM CURRENT_DATE), EXTRACT(YEAR FROM CURRENT_DATE)`,
    },
    attendance : {
        cols : `(student_id, attendance_date, checkit, month, year)`,
        vals :`student_id, CURRENT_DATE, false , EXTRACT(MONTH FROM CURRENT_DATE), EXTRACT(YEAR FROM CURRENT_DATE)`,
    }
}

export const postMulData = async (progName, Tb_name, newEnquiry) => {
    try {
        console.log("student ids in service:", newEnquiry);

        // Validate table name
        if (!queryTemplates_post[Tb_name]) {
            throw new Error("Invalid table name");
        }

        const { cols, vals } = queryTemplates_post[Tb_name];

        // Use parameterized query for safety
        const query = `
            INSERT INTO ${Tb_name} ${cols}
            SELECT student_id, CURRENT_DATE, false, EXTRACT(MONTH FROM CURRENT_DATE), EXTRACT(YEAR FROM CURRENT_DATE)
            FROM UNNEST($1::int[]) AS student_id
        `;

        await db_mapping[progName].query(query, [newEnquiry]);

        return "Successfully added the enquiry data";
    } catch (err) {
        console.error(err);
        return `Enquiry form not added: ${err.message}`;
    }
};


var colTemplates_patch = {
    enquiry: {
        con: "sno",
        type: "text"
    },
    payments: {
        con: "payment_id",
        type: "boolean"
    },
    attendance: {
        con: "attendance_id",
        type: "boolean"
    }
};

export const patchMulData = async (progName, Tb_name, newEnquiry) => {
    try {
        const { id: ids, checkit: statuses } = newEnquiry;

        // Safety checks
        if (!Array.isArray(ids) || !Array.isArray(statuses)) {
            throw new Error("IDs and statuses must be arrays.");
        }

        if (ids.length !== statuses.length) {
            throw new Error("IDs and statuses length mismatch");
        }

        const valuesClause = ids
            .map((_, i) => `($${i * 2 + 1}, $${i * 2 + 2})`)
            .join(', ');

        const values = ids.flatMap((id, i) => [id, statuses[i]]);
        const columnName = colTemplates_patch[Tb_name]?.con;

        if (!columnName) {
            throw new Error(`Invalid table name: ${Tb_name}`);
        }

        const query = `
                UPDATE ${Tb_name} AS t
                SET checkIt = v.checkIt::${colTemplates_patch[Tb_name].type}
                FROM (
                    VALUES ${valuesClause}
                ) AS v(id, checkIt)
                WHERE t.${columnName} = v.id::int;
            `;
    

        await db_mapping[progName].query(query, values);
        return { message: `Successfully updated ${Tb_name} data` };
    } catch (err) {
        console.error("Update error:", err);
        return { error: "Error updating data", details: err.message };
    }
};


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

