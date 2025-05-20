import pg from "pg";
import * as getIt from "../services/get.service.js"

export const getAll = async (req, res) => {
    try {
        const tb_Name = req.params.tb;
        const progName = req.params.prog;
        if (req.query.getMonth && req.query.getYear) {
            const Month = req.query.getMonth;
            const year = req.query.getYear;
            console.log("comming here to payment")
            const out = await getIt.fetchConDataPay(progName, tb_Name, Month, year);
            return res.status(200).json(out);
        }else if (req.query.month && req.query.year && req.query.date) {
            const getMonth = req.query.month;
            const getYear = req.query.year;
            const getDate = req.query.date;
            console.log("month:", req.query.month);
            console.log("year:", req.query.year);
            console.log("date:", req.query.date);
            console.log("comming here to attendance")
            const formateDate = `${getYear}-0${getMonth}-${getDate}`;
            const out = await getIt.fetchConDataAtt(progName, tb_Name, formateDate);
            return res.status(200).json(out);
        } else if(req.query.studId){
            const stuIds = req.query.studId;
            console.log("student id in getting fetch",stuIds)

            const out = await getIt.fetchStuIds(progName, "paymentAll", stuIds);
            return res.status(200).json(out);
        }
        else{
            // Default response if no query matches
            const out = await getIt.fetchNoConData(progName, tb_Name);
            return res.status(200).json(out);
        }


    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal server error" });
    }
}
