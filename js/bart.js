const API_KEY = "MW9S-E7SL-26DU-VV8V";
const API = "https://api.bart.gov/api";
const DEPARTURE_ENDPOINT = "/etd.aspx?";
const SCHEDULE_ENDPOINT = "/sched.aspx?";
const BERKELEY = "dbrk";
const MONTGOMERY = "mont";

const ABBREVS = new BiMap({'12th': '12th St. Oakland City Center',
    '16th': '16th St. Mission (SF)',
    '19th': '19th St. Oakland',
    '24th': '24th St. Mission (SF)',
    'antc': 'Antioch',
    'ashb': 'Ashby (Berkeley)',
    'balb': 'Balboa Park (SF)',
    'bayf': 'Bay Fair (San Leandro)',
    'cast': 'Castro Valley',
    'civc': 'Civic Center (SF)',
    'colm': 'Colma',
    'cols': 'Coliseum',
    'conc': 'Concord',
    'daly': 'Daly City',
    'dbrk': 'Downtown Berkeley',
    'deln': 'El Cerrito del Norte',
    'dubl': 'Dublin/Pleasanton',
    'embr': 'Embarcadero (SF)',
    'frmt': 'Fremont',
    'ftvl': 'Fruitvale (Oakland)',
    'glen': 'Glen Park (SF)',
    'hayw': 'Hayward',
    'lafy': 'Lafayette',
    'lake': 'Lake Merritt (Oakland)',
    'mcar': 'MacArthur (Oakland)',
    'mlbr': 'Millbrae',
    'mont': 'Montgomery St. (SF)',
    'nbrk': 'North Berkeley',
    'ncon': 'North Concord/Martinez',
    'oakl': "Oakland Int'l Airport",
    'orin': 'Orinda',
    'pctr': 'Pittsburg Center',
    'phil': 'Pleasant Hill',
    'pitt': 'Pittsburg/Bay Point',
    'plza': 'El Cerrito Plaza',
    'powl': 'Powell St. (SF)',
    'rich': 'Richmond',
    'rock': 'Rockridge (Oakland)',
    'sanl': 'San Leandro',
    'sbrn': 'San Bruno',
    'sfia': "San Francisco Int'l Airport",
    'shay': 'South Hayward',
    'ssan': 'South San Francisco',
    'ucty': 'Union City',
    'warm': 'Warm Springs/South Fremont',
    'wcrk': 'Walnut Creek',
    'wdub': 'West Dublin',
    'woak': 'West Oakland'
});

function getDepartures(fromStation, toStation, table) {
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
    $.getJSON(makeUrl(SCHEDULE_ENDPOINT, params), function (data) {
        let departures = data.root.schedule.request.trip;
        departures.forEach(function (departure) {
            let row = makeRow(departure);
            table.bootstrapTable('append', row);
        })
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

function makeRow(departureObject) {
    return {
        departureTime: departureObject["@origTimeMin"],
        destinationTime: departureObject["@destTimeMin"],
        origin: toFullName(departureObject["@origin"]),
        destination: toFullName(departureObject["@destination"]),
        numTransfers: departureObject.leg.length - 1
    }
}

function toFullName(abbrev) {
    if (!ABBREVS.containsKey(abbrev.toLowerCase())) {
        console.log("Error converting from abbrev");
        return abbrev;
    }
    return ABBREVS.getKey(abbrev.toLowerCase());
}
