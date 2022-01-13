import fetch from "node-fetch";

class Report {
    report;

}

let endpoint = "https://redisq.zkillboard.com/listen.php";
let expensive_kills = [];
let fleet_kills = [];

async function file_get_contents(uri, callback) {
    let res = await fetch(uri),
        ret = await res.text(); 
    return callback ? callback(ret) : ret; // a Promise() actually.
}

function check_report(killmail) {
    console.log("checking killmail...");
    const killmail_parsed = JSON.parse(killmail);
    const info = killmail_parsed?.package?.zkb;
    const date = killmail_parsed?.package?.killmail?.killmail_time;

    // filter location

    // filter ganks

    // filter times

    if (info != null && info.totalValue > 40000000) {
        console.log(killmail);
        console.log(date);
        expensive_kills.push(killmail);
    }
}


while (true) {
    await file_get_contents(endpoint, check_report);
}
