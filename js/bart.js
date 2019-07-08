const API_KEY = "MW9S-E7SL-26DU-VV8V";
const API = "http://api.bart.gov/api";
const DEPARTURE_ENDPOINT = "/etd.aspx?";
const SCHEDULE_ENDPOINT = "/sched.aspx?";
const BERKELEY = "dbrk";
const MONTGOMERY = "mont";

function getDepartures(fromStation, toStation) {
    params = {
        "cmd": "depart",
        "orig": fromStation,
        "dest": toStation,
        "key": API_KEY,
        "json": "y",
        "b": "0",
        "a": "4",
        "l": "1"
    };
    console.log(makeUrl(SCHEDULE_ENDPOINT, params));
    $.getJSON(makeUrl(SCHEDULE_ENDPOINT, params), function (data) {
        let departures = data.root.schedule.request;
        console.log(departures);
        for (let departure in departures) {
            console.log(departure);
        }
    });
}

function makeUrl(endpoint, params) {
    let URL = API + endpoint;

    let string_params = [];
    for (let param in params) {
        let value = params[param];
        let param_to_append = param + "=" + value;
        string_params.push(param_to_append);
    }
    URL = URL.concat(string_params.join("&"));
    return URL;
}

function addRow(tableId, items) {

}
