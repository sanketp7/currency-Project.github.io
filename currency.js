
const countryList = {
    AED: "AE",
    AFN: "AF",
    XCD: "AG",
    ALL: "AL",
    AMD: "AM",
    ANG: "AN",
    AOA: "AO",
    AQD: "AQ",
    ARS: "AR",
    AUD: "AU",
    AZN: "AZ",
    BAM: "BA",
    BBD: "BB",
    BDT: "BD",
    XOF: "BE",
    BGN: "BG",
    BHD: "BH",
    BIF: "BI",
    BMD: "BM",
    BND: "BN",
    BOB: "BO",
    BRL: "BR",
    BSD: "BS",
    NOK: "BV",
    BWP: "BW",
    BYR: "BY",
    BZD: "BZ",
    CAD: "CA",
    CDF: "CD",
    XAF: "CF",
    CHF: "CH",
    CLP: "CL",
    CNY: "CN",
    COP: "CO",
    CRC: "CR",
    CUP: "CU",
    CVE: "CV",
    CYP: "CY",
    CZK: "CZ",
    DJF: "DJ",
    DKK: "DK",
    DOP: "DO",
    DZD: "DZ",
    ECS: "EC",
    EEK: "EE",
    EGP: "EG",
    ETB: "ET",
    EUR: "FR",
    FJD: "FJ",
    FKP: "FK",
    GBP: "GB",
    GEL: "GE",
    GGP: "GG",
    GHS: "GH",
    GIP: "GI",
    GMD: "GM",
    GNF: "GN",
    GTQ: "GT",
    GYD: "GY",
    HKD: "HK",
    HNL: "HN",
    HRK: "HR",
    HTG: "HT",
    HUF: "HU",
    IDR: "ID",
    ILS: "IL",
    INR: "IN",
    IQD: "IQ",
    IRR: "IR",
    ISK: "IS",
    JMD: "JM",
    JOD: "JO",
    JPY: "JP",
    KES: "KE",
    KGS: "KG",
    KHR: "KH",
    KMF: "KM",
    KPW: "KP",
    KRW: "KR",
    KWD: "KW",
    KYD: "KY",
    KZT: "KZ",
    LAK: "LA",
    LBP: "LB",
    LKR: "LK",
    LRD: "LR",
    LSL: "LS",
    LTL: "LT",
    LVL: "LV",
    LYD: "LY",
    MAD: "MA",
    MDL: "MD",
    MGA: "MG",
    MKD: "MK",
    MMK: "MM",
    MNT: "MN",
    MOP: "MO",
    MRO: "MR",
    MTL: "MT",
    MUR: "MU",
    MVR: "MV",
    MWK: "MW",
    MXN: "MX",
    MYR: "MY",
    MZN: "MZ",
    NAD: "NA",
    XPF: "NC",
    NGN: "NG",
    NIO: "NI",
    NPR: "NP",
    NZD: "NZ",
    OMR: "OM",
    PAB: "PA",
    PEN: "PE",
    PGK: "PG",
    PHP: "PH",
    PKR: "PK",
    PLN: "PL",
    PYG: "PY",
    QAR: "QA",
    RON: "RO",
    RSD: "RS",
    RUB: "RU",
    RWF: "RW",
    SAR: "SA",
    SBD: "SB",
    SCR: "SC",
    SDG: "SD",
    SEK: "SE",
    SGD: "SG",
    SKK: "SK",
    SLL: "SL",
    SOS: "SO",
    SRD: "SR",
    STD: "ST",
    SVC: "SV",
    SYP: "SY",
    SZL: "SZ",
    THB: "TH",
    TJS: "TJ",
    TMT: "TM",
    TND: "TN",
    TOP: "TO",
    TRY: "TR",
    TTD: "TT",
    TWD: "TW",
    TZS: "TZ",
    UAH: "UA",
    UGX: "UG",
    USD: "US",
    UYU: "UY",
    UZS: "UZ",
    VEF: "VE",
    VND: "VN",
    VUV: "VU",
    YER: "YE",
    ZAR: "ZA",
    ZMK: "ZM",
    ZWD: "ZW",
  };
  let url = "https://economia.awesomeapi.com.br/last/"
  let input = document.querySelector("input");
let list = document.querySelectorAll('.main-div select');
let output = document.querySelector('.main-div h2 span');
let button = document.querySelector('button');
const fromCurr = document.querySelector(".from");
const toCurr = document.querySelector(".to");



for (let select of list) {
    for (const contryCode in countryList) {
        let option = document.createElement('option')
        option.innerHTML = contryCode;
        option.value = contryCode;
        if (select.name === "from" && contryCode === "USD") {
            option.selected = "selected";
        }
        else if (select.name === "to" && contryCode === "INR") {
            option.selected = "selected";
        }
            select.append(option);
    }
    
}


function finalOutput(){
    let inputValue = input.value;
    // console.log(inputValue)
    // console.log()
    if (inputValue == "") {
        alert('Please Enter Some Value inside');
    }
    else{
            // let  data = fetch(`https://economia.awesomeapi.com.br/last/${fromCurr.value}-${toCurr.value}`)
            let  data = fetch(`https://v6.exchangerate-api.com/v6/daf536dcef890d5cbe723fb3/latest/${fromCurr.value}`)
            data.then((response)=>{
                console.log(response.status);
                // console.log(response.ok);
                if (response.ok) {
                    // console.log(input.value != "")
                    return response.json();
                }
                else{
                    alert("Unabel to load tha API")
                }
            }).then((value)=>{
                let objectName  = "conversion_rates";
                if (value.hasOwnProperty(objectName)) {
                    const usdInrData = value[objectName];
                    for (const key in usdInrData) {
                        if (key === toCurr.value) {
                            let roundedValue = input.value * usdInrData[key];
                            const toFloat = parseFloat(roundedValue);
                            output.innerHTML = `${toFloat.toFixed(2)} ${toCurr.value}`;
                        }
                    }
                  } else {
                    console.log("No data found for USD-INR exchange rate.");
                  }

            })
    }
}


button.addEventListener("click",finalOutput)