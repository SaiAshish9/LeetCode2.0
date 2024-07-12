const COMPANIES = [
  {
    text: "Meta",
    count: "1753",
  },
  {
    text: "Google",
    count: "2251",
  },
  {
    text: "Amazon",
    count: "2488",
  },
  {
    text: "Uber",
    count: "1649",
  },
  {
    text: "Microsoft",
    count: "1816",
  },
  {
    text: "TikTok",
    count: "8",
  },
  {
    text: "Apple",
    count: "1895",
  },
  {
    text: "Oracle",
    count: "11",
  },
  {
    text: "Goldman Sachs",
    count: "23",
  },
  {
    text: "Salesforce",
    count: "19",
  },
  {
    text: "Citadel",
    count: "5",
  },
  {
    text: "Bloomberg",
    count: "1813",
  },
  {
    text: "Adobe",
    count: "1824",
  },
  {
    text: "LinkedIn",
    count: "71",
  },
  {
    text: "J.P. Morgan",
    count: "8",
  },
  {
    text: "Walmart Labs",
    count: "13",
  },
  {
    text: "Atlassian",
    count: "9",
  },
  {
    text: "Pinterest",
    count: "3",
  },
  {
    text: "DoorDash",
    count: "7",
  },
  {
    text: "Airbnb",
    count: "40",
  },
  {
    text: "Infosys",
    count: "19",
  },
  {
    text: "Intuit",
    count: "11",
  },
  {
    text: "Zoho",
    count: "3",
  },
  {
    text: "Accenture",
    count: "7",
  },
  {
    text: "Nvidia",
    count: "2",
  },
  {
    text: "Yandex",
    count: "1",
  },
  {
    text: "Snap",
    count: "29",
  },
  {
    text: "DE Shaw",
    count: "22",
  },
  {
    text: "tcs",
    count: "7",
  },
  {
    text: "Snowflake",
    count: "4",
  },
  {
    text: "PayPal",
    count: "13",
  },
  {
    text: "Netflix",
    count: "200",
  },
  {
    text: "Tesla",
    count: "2",
  },
  {
    text: "ByteDance",
    count: "3",
  },
  {
    text: "Yahoo",
    count: "16",
  },
  {
    text: "eBay",
    count: "8",
  },
  {
    text: "Capital One",
    count: "2",
  },
  {
    text: "Databricks",
    count: "3",
  },
  {
    text: "Cisco",
    count: "6",
  },
  {
    text: "IBM",
    count: "14",
  },
  {
    text: "Lyft",
    count: "3",
  },
  {
    text: "Samsung",
    count: "15",
  },
  {
    text: "Palantir Technologies",
    count: "12",
  },
  {
    text: "Flipkart",
    count: "8",
  },
  {
    text: "ServiceNow",
    count: "3",
  },
  {
    text: "Visa",
    count: "9",
  },
  {
    text: "SAP",
    count: "5",
  },
  {
    text: "Expedia",
    count: "15",
  },
  {
    text: "PhonePe",
    count: "4",
  },
  {
    text: "Coupang",
    count: "7",
  },
  {
    text: "Qualcomm",
    count: "2",
  },
  {
    text: "Block",
    count: "9",
  },
  {
    text: "Morgan Stanley",
    count: "7",
  },
  {
    text: "Roblox",
    count: "8",
  },
  {
    text: "X",
    count: "49",
  },
  {
    text: "Datadog",
    count: "49",
  },
  {
    text: "Rubrik",
    count: "10",
  },
  {
    text: "BlackRock",
    count: "141",
  },
  {
    text: "Jane Street",
    count: "3",
  },
  {
    text: "Wayfair",
    count: "11",
  },
  {
    text: "Docusign",
    count: "172",
  },
  {
    text: "Rippling",
    count: "60",
  },
  {
    text: "Stripe",
    count: "1",
  },
  {
    text: "Robinhood",
    count: "8",
  },
  {
    text: "Coinbase",
    count: "1",
  },
  {
    text: "Spotify",
    count: "2",
  },
  {
    text: "Two Sigma",
    count: "9",
  },
  {
    text: "Nutanix",
    count: "11",
  },
  {
    text: "American Express",
    count: "10",
  },
  {
    text: "Reddit",
    count: "1",
  },
  {
    text: "VMware",
    count: "3",
  },
  {
    text: "Yelp",
    count: "25",
  },
  {
    text: "Intel",
    count: "2",
  },
  {
    text: "Agoda",
    count: "1",
  },
  {
    text: "Deutsche Bank",
    count: "9",
  },
  {
    text: "Epic Systems",
    count: "3",
  },
  {
    text: "Arcesium",
    count: "5",
  },
  {
    text: "Sprinklr",
    count: "14",
  },
  {
    text: "Qualtrics",
    count: "1",
  },
  {
    text: "Hudson River Trading",
    count: "7",
  },
  {
    text: "Pure Storage",
    count: "2",
  },
  {
    text: "Splunk",
    count: "210",
  },
  {
    text: "Confluent",
    count: "1",
  },
  {
    text: "Karat",
    count: "86",
  },
  {
    text: "Huawei",
    count: "2",
  },
  {
    text: "Booking.com",
    count: "6",
  },
  {
    text: "Anduril",
    count: "37",
  },
  {
    text: "Zillow",
    count: "252",
  },
  {
    text: "MathWorks",
    count: "11",
  },
  {
    text: "EPAM Systems",
    count: "1",
  },
  {
    text: "Optiver",
    count: "38",
  },
  {
    text: "Grab",
    count: "4",
  },
  {
    text: "Akuna Capital",
    count: "14",
  },
  {
    text: "Waymo",
    count: "67",
  },
  {
    text: "Twilio",
    count: "3",
  },
  {
    text: "Workday",
    count: "125",
  },
  {
    text: "Cognizant",
    count: "1",
  },
  {
    text: "Arista Networks",
    count: "2",
  },
  {
    text: "Instacart",
    count: "1",
  },
  {
    text: "Cruise",
    count: "1",
  },
  {
    text: "Juspay",
    count: "3",
  },
  {
    text: "Quora",
    count: "14",
  },
  {
    text: "Dropbox",
    count: "19",
  },
  {
    text: "Shopee",
    count: "1",
  },
  {
    text: "Swiggy",
    count: "2",
  },
  {
    text: "Disney",
    count: "72",
  },
  {
    text: "Myntra",
    count: "1",
  },
  {
    text: "Affirm",
    count: "1",
  },
  {
    text: "Alibaba",
    count: "4",
  },
  {
    text: "Palo Alto Networks",
    count: "1",
  },
  {
    text: "Zoox",
    count: "34",
  },
  {
    text: "Deloitte",
    count: "1",
  },
  {
    text: "Indeed",
    count: "5",
  },
  {
    text: "Verkada",
    count: "29",
  },
  {
    text: "DRW",
    count: "2",
  },
  {
    text: "CrowdStrike",
    count: "43",
  },
  {
    text: "Media.net",
    count: "15",
  },
  {
    text: "Zomato",
    count: "5",
  },
  {
    text: "Mastercard",
    count: "55",
  },
  {
    text: "MongoDB",
    count: "91",
  },
  {
    text: "Wells Fargo",
    count: "1",
  },
  {
    text: "Capgemini",
    count: "1",
  },
  {
    text: "Cohesity",
    count: "153",
  },
  {
    text: "Siemens",
    count: "2",
  },
  {
    text: "MakeMyTrip",
    count: "4",
  },
  {
    text: "C3 IoT",
    count: "0",
  },
  {
    text: "Autodesk",
    count: "7",
  },
  {
    text: "Meesho",
    count: "3",
  },
  {
    text: "Hudson River Trading",
    count: "0",
  },
  {
    text: "ZScaler",
    count: "5",
  },
  {
    text: "Barclays",
    count: "4",
  },
  {
    text: "Coursera",
    count: "7",
  },
  {
    text: "Tinkoff",
    count: "88",
  },
  {
    text: "Zynga",
    count: "193",
  },
  {
    text: "Audible",
    count: "3",
  },
  {
    text: "Cloudera",
    count: "2",
  },
  {
    text: "Cloudflare",
    count: "39",
  },
  {
    text: "SoFi",
    count: "47",
  },
  {
    text: "Squarepoint Capital",
    count: "39",
  },
  {
    text: "Wix",
    count: "37",
  },
  {
    text: "Warnermedia",
    count: "1",
  },
  {
    text: "Paytm",
    count: "6",
  },
  {
    text: "The Trade Desk",
    count: "1",
  },
  {
    text: "AMD",
    count: "63",
  },
  {
    text: "Hulu",
    count: "6",
  },
  {
    text: "LiveRamp",
    count: "4",
  },
  {
    text: "Roku",
    count: "112",
  },
  {
    text: "Tripadvisor",
    count: "1",
  },
  {
    text: "Riot Games",
    count: "1",
  },
  {
    text: "Turing",
    count: "86",
  },
  {
    text: "Millennium",
    count: "30",
  },
  {
    text: "Grammarly",
    count: "47",
  },
  {
    text: "Zoom",
    count: "2",
  },
  {
    text: "IXL",
    count: "7",
  },
  {
    text: "Okta",
    count: "100",
  },
  {
    text: "BNY Mellon",
    count: "4",
  },
  {
    text: "Tencent",
    count: "2",
  },
  {
    text: "UBS",
    count: "1",
  },
  {
    text: "Box",
    count: "97",
  },
  {
    text: "Akamai",
    count: "1",
  },
  {
    text: "Shopify",
    count: "26",
  },
  {
    text: "Zeta",
    count: "1",
  },
  {
    text: "FactSet",
    count: "3",
  },
  {
    text: "Dell",
    count: "1",
  },
  {
    text: "Nagarro",
    count: "2",
  },
  {
    text: "Wipro",
    count: "161",
  },
  {
    text: "Twitch",
    count: "3",
  },
  {
    text: "GoDaddy",
    count: "2",
  },
  {
    text: "IMC",
    count: "27",
  },
  {
    text: "Airtel",
    count: "2",
  },
  {
    text: "carwale",
    count: "49",
  },
  {
    text: "Jump Trading",
    count: "86",
  },
  {
    text: "Bank of America",
    count: "76",
  },
  {
    text: "Moveworks",
    count: "1",
  },
  {
    text: "Rakuten",
    count: "100",
  },
  {
    text: "Flexport",
    count: "1",
  },
  {
    text: "josh technology",
    count: "51",
  },
  {
    text: "Avito",
    count: "40",
  },
  {
    text: "SIG",
    count: "25",
  },
  {
    text: "PornHub",
    count: "117",
  },
  {
    text: "Sumo Logic",
    count: "1",
  },
  {
    text: "Lowe's",
    count: "2",
  },
  {
    text: "NetApp",
    count: "75",
  },
  {
    text: "Point72",
    count: "5",
  },
  {
    text: "Duolingo",
    count: "3",
  },
  {
    text: "Commvault",
    count: "1",
  },
  {
    text: "Zalando",
    count: "1",
  },
  {
    text: "Bolt",
    count: "1",
  },
  {
    text: "razorpay",
    count: "3",
  },
  {
    text: "Grubhub",
    count: "47",
  },
  {
    text: "Patreon",
    count: "15",
  },
  {
    text: "Fidelity",
    count: "1",
  },
  {
    text: "Groupon",
    count: "1",
  },
  {
    text: "FreshWorks",
    count: "84",
  },
  {
    text: "Nordstrom",
    count: "87",
  },
  {
    text: "UiPath",
    count: "3",
  },
  {
    text: "PayPay",
    count: "1",
  },
  {
    text: "GE Healthcare",
    count: "1",
  },
  {
    text: "Chewy",
    count: "66",
  },
  {
    text: "HPE",
    count: "77",
  },
  {
    text: "Rivian",
    count: "73",
  },
  {
    text: "Nuro",
    count: "1",
  },
  {
    text: "Veeva Systems",
    count: "43",
  },
  {
    text: "Asana",
    count: "1",
  },
  {
    text: "BitGo",
    count: "1",
  },
  {
    text: "Deliveroo",
    count: "1",
  },
  {
    text: "Ozon",
    count: "41",
  },
  {
    text: "Amdocs",
    count: "1",
  },
  {
    text: "Remitly",
    count: "20",
  },
  {
    text: "Ripple",
    count: "35",
  },
  {
    text: "Tower Research Capital",
    count: "40",
  },
  {
    text: "Tiger Analytics",
    count: "1",
  },
  {
    text: "McKinsey",
    count: "2",
  },
  {
    text: "Fortinet",
    count: "70",
  },
  {
    text: "Miro",
    count: "22",
  },
  {
    text: "Mercari",
    count: "5",
  },
  {
    text: "Axon",
    count: "51",
  },
  {
    text: "smartnews",
    count: "51",
  },
  {
    text: "persistent systems",
    count: "1",
  },
  {
    text: "Citigroup",
    count: "61",
  },
  {
    text: "AQR Capital Management",
    count: "1",
  },
  {
    text: "General Motors",
    count: "30",
  },
  {
    text: "Netskope",
    count: "63",
  },
  {
    text: "sabre",
    count: "37",
  },
  {
    text: "Pwc",
    count: "41",
  },
  {
    text: "opentext",
    count: "1",
  },
  {
    text: "Virtu Financial",
    count: "5",
  },
  {
    text: "athenahealth",
    count: "1",
  },
  {
    text: "Verily",
    count: "44",
  },
  {
    text: "WorldQuant",
    count: "27",
  },
  {
    text: "Clari",
    count: "2",
  },
  {
    text: "Dream11",
    count: "1",
  },
  {
    text: "Hubspot",
    count: "16",
  },
  {
    text: "RBC",
    count: "34",
  },
  {
    text: "HSBC",
    count: "44",
  },
  {
    text: "Gusto",
    count: "17",
  },
  {
    text: "Altimetrik",
    count: "1",
  },
  {
    text: "Hotstar",
    count: "1",
  },
  {
    text: "HashedIn",
    count: "1",
  },
  {
    text: "Sigmoid",
    count: "34",
  },
  {
    text: "Careem",
    count: "32",
  },
  {
    text: "Amadeus",
    count: "35",
  },
  {
    text: "Garena",
    count: "1",
  },
  {
    text: "citibank",
    count: "0",
  },
  {
    text: "Info Edge",
    count: "1",
  },
  {
    text: "Druva",
    count: "1",
  },
  {
    text: "F5",
    count: "1",
  },
  {
    text: "Accolite",
    count: "2",
  },
  {
    text: "Upstart",
    count: "36",
  },
  {
    text: "Citrix",
    count: "5",
  },
  {
    text: "Samsara",
    count: "2",
  },
  {
    text: "Activision",
    count: "1",
  },
  {
    text: "Smartsheet",
    count: "49",
  },
  {
    text: "Cadence",
    count: "66",
  },
  {
    text: "Bosch",
    count: "46",
  },
  {
    text: "Thomson Reuters",
    count: "2",
  },
  {
    text: "WeRide",
    count: "1",
  },
  {
    text: "jio",
    count: "97",
  },
  {
    text: "Avalara",
    count: "1",
  },
  {
    text: "MindTree",
    count: "1",
  },
  {
    text: "Groww",
    count: "1",
  },
  {
    text: "Pocket Gems",
    count: "15",
  },
  {
    text: "CRED",
    count: "43",
  },
  {
    text: "SoundHound",
    count: "2",
  },
  {
    text: "Navi",
    count: "1",
  },
  {
    text: "Sony",
    count: "1",
  },
  {
    text: "Optum",
    count: "2",
  },
  {
    text: "ericsson",
    count: "46",
  },
  {
    text: "Directi",
    count: "8",
  },
  {
    text: "Tekion",
    count: "1",
  },
  {
    text: "Pony.ai",
    count: "4",
  },
  {
    text: "InMobi",
    count: "1",
  },
  {
    text: "National Instruments",
    count: "1",
  },
  {
    text: "NetEase",
    count: "2",
  },
  {
    text: "ShareChat",
    count: "2",
  },
  {
    text: "Tesco",
    count: "29",
  },
  {
    text: "Synology",
    count: "35",
  },
  {
    text: "Toast",
    count: "12",
  },
  {
    text: "ThousandEyes",
    count: "22",
  },
  {
    text: "ThoughtWorks",
    count: "48",
  },
  {
    text: "Zendesk",
    count: "2",
  },
  {
    text: "Opendoor",
    count: "20",
  },
  {
    text: "AppDynamics",
    count: "2",
  },
  {
    text: "Canonical",
    count: "1",
  },
  {
    text: "Lucid",
    count: "2",
  },
  {
    text: "oyo",
    count: "154",
  },
  {
    text: "General Electric",
    count: "1",
  },
  {
    text: "Urban Company",
    count: "54",
  },
  {
    text: "Honeywell",
    count: "1",
  },
  {
    text: "Veritas",
    count: "1",
  },
  {
    text: "Quip (Salesforce)",
    count: "0",
  },
  {
    text: "Cashfree",
    count: "2",
  },
  {
    text: "Virtusa",
    count: "1",
  },
  {
    text: "Redfin",
    count: "88",
  },
  {
    text: "GE Digital",
    count: "1",
  },
  {
    text: "MAQ Software",
    count: "1",
  },
  {
    text: "zeta suite",
    count: "1",
  },
  {
    text: "thoughtspot",
    count: "76",
  },
  {
    text: "CVENT",
    count: "43",
  },
  {
    text: "Whatfix",
    count: "29",
  },
  {
    text: "FPT",
    count: "1",
  },
  {
    text: "Addepar",
    count: "21",
  },
  {
    text: "Squarespace",
    count: "25",
  },
  {
    text: "Chime",
    count: "24",
  },
  {
    text: "DP world",
    count: "63",
  },
  {
    text: "Slice",
    count: "42",
  },
  {
    text: "Dataminr",
    count: "2",
  },
  {
    text: "Comcast",
    count: "52",
  },
  {
    text: "Freecharge",
    count: "38",
  },
  {
    text: "PayU",
    count: "1",
  },
  {
    text: "Turvo",
    count: "2",
  },
  {
    text: "Zopsmart",
    count: "1",
  },
  {
    text: "Valve",
    count: "1",
  },
  {
    text: "Poshmark",
    count: "3",
  },
  {
    text: "Toptal",
    count: "1",
  },
  {
    text: "Zenefits",
    count: "21",
  },
  {
    text: "Trilogy",
    count: "4",
  },
  {
    text: "Houzz",
    count: "2",
  },
  {
    text: "Fleetx",
    count: "1",
  },
  {
    text: "Societe Generale",
    count: "1",
  },
  {
    text: "Baidu",
    count: "10",
  },
  {
    text: "Vimeo",
    count: "1",
  },
  {
    text: "Hive",
    count: "24",
  },
  {
    text: "Mitsogo",
    count: "9",
  },
  {
    text: "Luxoft",
    count: "36",
  },
  {
    text: "Code Studio",
    count: "1",
  },
  {
    text: "United Health Group",
    count: "2",
  },
  {
    text: "CureFit",
    count: "1",
  },
  {
    text: "Thumbtack",
    count: "1",
  },
  {
    text: "Wealthfront",
    count: "1",
  },
  {
    text: "Discord",
    count: "1",
  },
  {
    text: "GSN Games",
    count: "5",
  },
  {
    text: "TuSimple",
    count: "4",
  },
  {
    text: "Wayve",
    count: "1",
  },
  {
    text: "Wish",
    count: "4",
  },
  {
    text: "observe.ai",
    count: "1",
  },
  {
    text: "Meituan",
    count: "1",
  },
  {
    text: "Zappos",
    count: "1",
  },
  {
    text: "Postmates",
    count: "3",
  },
  {
    text: "TripleByte",
    count: "1",
  },
  {
    text: "Sapient",
    count: "0",
  },
  {
    text: "Snapdeal",
    count: "1",
  },
  {
    text: "Airbus SE",
    count: "2",
  },
  {
    text: "IIT Bombay",
    count: "1",
  },
  {
    text: "spinny",
    count: "34",
  },
  {
    text: "Gameskraft",
    count: "43",
  },
  {
    text: "Yext",
    count: "37",
  },
  {
    text: "Yatra",
    count: "1",
  },
  {
    text: "Kakao",
    count: "2",
  },
  {
    text: "Gap",
    count: "26",
  },
  {
    text: "Newzera",
    count: "31",
  },
  {
    text: "Aetion",
    count: "1",
  },
  {
    text: "ASUS",
    count: "46",
  },
  {
    text: "Microstrategy",
    count: "1",
  },
  {
    text: "PubMatic",
    count: "32",
  },
  {
    text: "Moengage",
    count: "1",
  },
  {
    text: "Quince",
    count: "1",
  },
  {
    text: "Works Applications",
    count: "4",
  },
  {
    text: "instagram",
    count: "0",
  },
  {
    text: "Dunzo",
    count: "6",
  },
  {
    text: "Mindtickle",
    count: "3",
  },
  {
    text: "TIAA",
    count: "1",
  },
  {
    text: "National Payments Corporation of India",
    count: "2",
  },
  {
    text: "Drawbridge",
    count: "1",
  },
  {
    text: "fourkites",
    count: "3",
  },
  {
    text: "WePay",
    count: "49",
  },
  {
    text: "Gilt Groupe",
    count: "1",
  },
  {
    text: "ForUsAll",
    count: "1",
  },
  {
    text: "Machine Zone",
    count: "2",
  },
  {
    text: "Fallible",
    count: "1",
  },
  {
    text: "Rackspace",
    count: "1",
  },
  {
    text: "Strava",
    count: "1",
  },
  {
    text: "Bridgewater Associates",
    count: "1",
  },
  {
    text: "Netsuite",
    count: "2",
  },
  {
    text: "Helix",
    count: "1",
  },
  {
    text: "Jingchi",
    count: "1",
  },
  {
    text: "Bloomreach",
    count: "1",
  },
  {
    text: "Poynt",
    count: "1",
  },
  {
    text: "Delhivery",
    count: "44",
  },
  {
    text: "BT Group",
    count: "1",
  },
  {
    text: "Alphonso",
    count: "1",
  },
  {
    text: "Softwire",
    count: "1",
  },
  {
    text: "Larsen & Toubro",
    count: "2",
  },
  {
    text: "HiLabs",
    count: "1",
  },
  {
    text: "DailyHunt",
    count: "1",
  },
  {
    text: "Criteo",
    count: "25",
  },
  {
    text: "Radius",
    count: "1",
  },
  {
    text: "Affinity",
    count: "1",
  },
  {
    text: "Auriga",
    count: "1",
  },
  {
    text: "T-mobile",
    count: "1",
  },
  {
    text: "ION",
    count: "0",
  },
  {
    text: "TA Digital",
    count: "1",
  },
  {
    text: "Analytics quotient",
    count: "2",
  },
  {
    text: "Polar",
    count: "1",
  },
  {
    text: "Flexera",
    count: "0",
  },
  {
    text: "NextJump",
    count: "1",
  },
  {
    text: "Quantbox",
    count: "0",
  },
  {
    text: "1Kosmos",
    count: "1",
  },
  {
    text: "Ultraleap",
    count: "1",
  },
  {
    text: "Xing",
    count: "1",
  },
  {
    text: "RetailMeNot",
    count: "1",
  },
  {
    text: "Ascend",
    count: "1",
  },
  {
    text: "AllinCall",
    count: "1",
  },
  {
    text: "Accelya",
    count: "1",
  },
  {
    text: "Pickrr",
    count: "1",
  },
  {
    text: "Mobisy",
    count: "1",
  },
  {
    text: "MishiPay",
    count: "1",
  },
  {
    text: "Unbxd",
    count: "1",
  },
  {
    text: "MachineZone",
    count: "1",
  },
  {
    text: "Edelweiss Group",
    count: "1",
  },
  {
    text: "Qumulo",
    count: "39",
  },
  {
    text: "T System",
    count: "0",
  },
  {
    text: "Jeavio",
    count: "1",
  },
  {
    text: "MoneyLion",
    count: "1",
  },
  {
    text: "Unstop",
    count: "1",
  },
  {
    text: "Zluri",
    count: "1",
  },
  {
    text: "edabit",
    count: "0",
  },
  {
    text: "Clutter",
    count: "1",
  },
  {
    text: "Purplle",
    count: "1",
  },
  {
    text: "DTCC",
    count: "1",
  },
];

export default COMPANIES;
