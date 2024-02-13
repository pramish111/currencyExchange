const countries = {
  Afghanistan: { code: "AF", currencyCode: "AFN" },
  Albania: { code: "AL", currencyCode: "ALL" },
  Algeria: { code: "DZ", currencyCode: "DZD" },
  Andorra: { code: "AD", currencyCode: "EUR" },
  Angola: { code: "AO", currencyCode: "AOA" },
  "Antigua and Barbuda": { code: "AG", currencyCode: "XCD" },
  Argentina: { code: "AR", currencyCode: "ARS" },
  Armenia: { code: "AM", currencyCode: "AMD" },
  Australia: { code: "AU", currencyCode: "AUD" },
  Austria: { code: "AT", currencyCode: "EUR" },
  Azerbaijan: { code: "AZ", currencyCode: "AZN" },
  Bahamas: { code: "BS", currencyCode: "BSD" },
  Bahrain: { code: "BH", currencyCode: "BHD" },
  Bangladesh: { code: "BD", currencyCode: "BDT" },
  Barbados: { code: "BB", currencyCode: "BBD" },
  Belarus: { code: "BY", currencyCode: "BYN" },
  Belgium: { code: "BE", currencyCode: "EUR" },
  Belize: { code: "BZ", currencyCode: "BZD" },
  Benin: { code: "BJ", currencyCode: "XOF" },
  Bhutan: { code: "BT", currencyCode: "BTN" },
  Bolivia: { code: "BO", currencyCode: "BOB" },
  "Bosnia and Herzegovina": { code: "BA", currencyCode: "BAM" },
  Botswana: { code: "BW", currencyCode: "BWP" },
  Brazil: { code: "BR", currencyCode: "BRL" },
  Brunei: { code: "BN", currencyCode: "BND" },
  Bulgaria: { code: "BG", currencyCode: "BGN" },
  "Burkina Faso": { code: "BF", currencyCode: "XOF" },
  Burundi: { code: "BI", currencyCode: "BIF" },
  "Cabo Verde": { code: "CV", currencyCode: "CVE" },
  Cambodia: { code: "KH", currencyCode: "KHR" },
  Cameroon: { code: "CM", currencyCode: "XAF" },
  Canada: { code: "CA", currencyCode: "CAD" },
  "Central African Republic": { code: "CF", currencyCode: "XAF" },
  Chad: { code: "TD", currencyCode: "XAF" },
  Chile: { code: "CL", currencyCode: "CLP" },
  China: { code: "CN", currencyCode: "CNY" },
  Colombia: { code: "CO", currencyCode: "COP" },
  Comoros: { code: "KM", currencyCode: "KMF" },
  Congo: { code: "CG", currencyCode: "XAF" },
  "Costa Rica": { code: "CR", currencyCode: "CRC" },
  Croatia: { code: "HR", currencyCode: "HRK" },
  Cuba: { code: "CU", currencyCode: "CUP" },
  Cyprus: { code: "CY", currencyCode: "EUR" },
  "Czech Republic": { code: "CZ", currencyCode: "CZK" },
  Denmark: { code: "DK", currencyCode: "DKK" },
  Djibouti: { code: "DJ", currencyCode: "DJF" },
  Dominica: { code: "DM", currencyCode: "XCD" },
  "Dominican Republic": { code: "DO", currencyCode: "DOP" },
  Ecuador: { code: "EC", currencyCode: "USD" },
  Egypt: { code: "EG", currencyCode: "EGP" },
  "El Salvador": { code: "SV", currencyCode: "USD" },
  "Equatorial Guinea": { code: "GQ", currencyCode: "XAF" },
  Eritrea: { code: "ER", currencyCode: "ERN" },
  Estonia: { code: "EE", currencyCode: "EUR" },
  Eswatini: { code: "SZ", currencyCode: "SZL" },
  Ethiopia: { code: "ET", currencyCode: "ETB" },
  Fiji: { code: "FJ", currencyCode: "FJD" },
  Finland: { code: "FI", currencyCode: "EUR" },
  France: { code: "FR", currencyCode: "EUR" },
  Gabon: { code: "GA", currencyCode: "XAF" },
  Gambia: { code: "GM", currencyCode: "GMD" },
  Georgia: { code: "GE", currencyCode: "GEL" },
  Germany: { code: "DE", currencyCode: "EUR" },
  Ghana: { code: "GH", currencyCode: "GHS" },
  Greece: { code: "GR", currencyCode: "EUR" },
  Grenada: { code: "GD", currencyCode: "XCD" },
  Guatemala: { code: "GT", currencyCode: "GTQ" },
  Guinea: { code: "GN", currencyCode: "GNF" },
  "Guinea-Bissau": { code: "GW", currencyCode: "XOF" },
  Guyana: { code: "GY", currencyCode: "GYD" },
  Haiti: { code: "HT", currencyCode: "HTG" },
  Honduras: { code: "HN", currencyCode: "HNL" },
  Hungary: { code: "HU", currencyCode: "HUF" },
  Iceland: { code: "IS", currencyCode: "ISK" },
  India: { code: "IN", currencyCode: "INR" },
  Indonesia: { code: "ID", currencyCode: "IDR" },
  Iran: { code: "IR", currencyCode: "IRR" },
  Iraq: { code: "IQ", currencyCode: "IQD" },
  Ireland: { code: "IE", currencyCode: "EUR" },
  Israel: { code: "IL", currencyCode: "ILS" },
  Italy: { code: "IT", currencyCode: "EUR" },
  Jamaica: { code: "JM", currencyCode: "JMD" },
  Japan: { code: "JP", currencyCode: "JPY" },
  Jordan: { code: "JO", currencyCode: "JOD" },
  Kazakhstan: { code: "KZ", currencyCode: "KZT" },
  Kenya: { code: "KE", currencyCode: "KES" },
  Kiribati: { code: "KI", currencyCode: "AUD" },
  Kosovo: { code: "XK", currencyCode: "EUR" },
  Kuwait: { code: "KW", currencyCode: "KWD" },
  Kyrgyzstan: { code: "KG", currencyCode: "KGS" },
  Laos: { code: "LA", currencyCode: "LAK" },
  Latvia: { code: "LV", currencyCode: "EUR" },
  Lebanon: { code: "LB", currencyCode: "LBP" },
  Lesotho: { code: "LS", currencyCode: "LSL" },
  Liberia: { code: "LR", currencyCode: "LRD" },
  Libya: { code: "LY", currencyCode: "LYD" },
  Liechtenstein: { code: "LI", currencyCode: "CHF" },
  Lithuania: { code: "LT", currencyCode: "EUR" },
  Luxembourg: { code: "LU", currencyCode: "EUR" },
  Madagascar: { code: "MG", currencyCode: "MGA" },
  Malawi: { code: "MW", currencyCode: "MWK" },
  Malaysia: { code: "MY", currencyCode: "MYR" },
  Maldives: { code: "MV", currencyCode: "MVR" },
  Mali: { code: "ML", currencyCode: "XOF" },
  Malta: { code: "MT", currencyCode: "EUR" },
  "Marshall Islands": { code: "MH", currencyCode: "USD" },
  Mauritania: { code: "MR", currencyCode: "MRU" },
  Mauritius: { code: "MU", currencyCode: "MUR" },
  Mexico: { code: "MX", currencyCode: "MXN" },
  Micronesia: { code: "FM", currencyCode: "USD" },
  Moldova: { code: "MD", currencyCode: "MDL" },
  Monaco: { code: "MC", currencyCode: "EUR" },
  Mongolia: { code: "MN", currencyCode: "MNT" },
  Montenegro: { code: "ME", currencyCode: "EUR" },
  Morocco: { code: "MA", currencyCode: "MAD" },
  Mozambique: { code: "MZ", currencyCode: "MZN" },
  Myanmar: { code: "MM", currencyCode: "MMK" },
  Namibia: { code: "NA", currencyCode: "NAD" },
  Nauru: { code: "NR", currencyCode: "AUD" },
  Nepal: { code: "NP", currencyCode: "NPR" },
  Netherlands: { code: "NL", currencyCode: "EUR" },
  "New Zealand": { code: "NZ", currencyCode: "NZD" },
  Nicaragua: { code: "NI", currencyCode: "NIO" },
  Niger: { code: "NE", currencyCode: "XOF" },
  Nigeria: { code: "NG", currencyCode: "NGN" },
  "North Korea": { code: "KP", currencyCode: "KPW" },
  "North Macedonia": { code: "MK", currencyCode: "MKD" },
  Norway: { code: "NO", currencyCode: "NOK" },
  Oman: { code: "OM", currencyCode: "OMR" },
  Pakistan: { code: "PK", currencyCode: "PKR" },
  Palau: { code: "PW", currencyCode: "USD" },
  Palestine: { code: "PS", currencyCode: "ILS" },
  Panama: { code: "PA", currencyCode: "PAB" },
  "Papua New Guinea": { code: "PG", currencyCode: "PGK" },
  Paraguay: { code: "PY", currencyCode: "PYG" },
  Peru: { code: "PE", currencyCode: "PEN" },
  Philippines: { code: "PH", currencyCode: "PHP" },
  Poland: { code: "PL", currencyCode: "PLN" },
  Portugal: { code: "PT", currencyCode: "EUR" },
  Qatar: { code: "QA", currencyCode: "QAR" },
  Romania: { code: "RO", currencyCode: "RON" },
  Russia: { code: "RU", currencyCode: "RUB" },
  Rwanda: { code: "RW", currencyCode: "RWF" },
  "Saint Kitts and Nevis": { code: "KN", currencyCode: "XCD" },
  "Saint Lucia": { code: "LC", currencyCode: "XCD" },
  "Saint Vincent and the Grenadines": { code: "VC", currencyCode: "XCD" },
  Samoa: { code: "WS", currencyCode: "WST" },
  "San Marino": { code: "SM", currencyCode: "EUR" },
  "Sao Tome and Principe": { code: "ST", currencyCode: "STN" },
  "Saudi Arabia": { code: "SA", currencyCode: "SAR" },
  Senegal: { code: "SN", currencyCode: "XOF" },
  Serbia: { code: "RS", currencyCode: "RSD" },
  Seychelles: { code: "SC", currencyCode: "SCR" },
  "Sierra Leone": { code: "SL", currencyCode: "SLL" },
  Singapore: { code: "SG", currencyCode: "SGD" },
  Slovakia: { code: "SK", currencyCode: "EUR" },
  Slovenia: { code: "SI", currencyCode: "EUR" },
  "Solomon Islands": { code: "SB", currencyCode: "SBD" },
  Somalia: { code: "SO", currencyCode: "SOS" },
  "South Africa": { code: "ZA", currencyCode: "ZAR" },
  "South Korea": { code: "KR", currencyCode: "KRW" },
  "South Sudan": { code: "SS", currencyCode: "SSP" },
  Spain: { code: "ES", currencyCode: "EUR" },
  "Sri Lanka": { code: "LK", currencyCode: "LKR" },
  Sudan: { code: "SD", currencyCode: "SDG" },
  Suriname: { code: "SR", currencyCode: "SRD" },
  Sweden: { code: "SE", currencyCode: "SEK" },
  Switzerland: { code: "CH", currencyCode: "CHF" },
  Syria: { code: "SY", currencyCode: "SYP" },
  Taiwan: { code: "TW", currencyCode: "TWD" },
  Tajikistan: { code: "TJ", currencyCode: "TJS" },
  Tanzania: { code: "TZ", currencyCode: "TZS" },
  Thailand: { code: "TH", currencyCode: "THB" },
  "Timor-Leste": { code: "TL", currencyCode: "USD" },
  Togo: { code: "TG", currencyCode: "XOF" },
  Tonga: { code: "TO", currencyCode: "TOP" },
  "Trinidad and Tobago": { code: "TT", currencyCode: "TTD" },
  Tunisia: { code: "TN", currencyCode: "TND" },
  Turkey: { code: "TR", currencyCode: "TRY" },
  Turkmenistan: { code: "TM", currencyCode: "TMT" },
  Tuvalu: { code: "TV", currencyCode: "AUD" },
  Uganda: { code: "UG", currencyCode: "UGX" },
  Ukraine: { code: "UA", currencyCode: "UAH" },
  "United Arab Emirates": { code: "AE", currencyCode: "AED" },
  "United Kingdom": { code: "GB", currencyCode: "GBP" },
  "United States": { code: "US", currencyCode: "USD" },
  Uruguay: { code: "UY", currencyCode: "UYU" },
  Uzbekistan: { code: "UZ", currencyCode: "UZS" },
  Vanuatu: { code: "VU", currencyCode: "VUV" },
  Venezuela: { code: "VE", currencyCode: "VES" },
  Vietnam: { code: "VN", currencyCode: "VND" },
  Yemen: { code: "YE", currencyCode: "YER" },
  Zambia: { code: "ZM", currencyCode: "ZMW" },
  Zimbabwe: { code: "ZW", currencyCode: "ZWL" },
};
const url =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/jpy.json";
let inputs = document.querySelectorAll('.flag input[type="text"]');
let fromCurrencyCode, toCurrencyCode, result;
inputs.forEach((input) => {
  setTimeout(() => {
    input.addEventListener("input", async () => {
      const countryCode = await input.value;
      const flagImage = input.parentElement.querySelector(".flag-image");
      for (cod in countries) {
        if (input.value === countries[cod].code) {
          flagImage.src = `https://flagsapi.com/${countryCode}/shiny/64.png`;
        }
      }
    });
  }, 2000);
});

let interchange = document.querySelector("#icon");
let flag1_input = document.querySelector("#flag1_input");
let flag2_input = document.querySelector("#flag2_input");

interchange.addEventListener("click", () => {
  if (flag1_input.value && flag2_input.value) {
    interchange.classList.toggle("clicked");

    setTimeout(() => {
      let temp = flag1_input.value;
      flag1_input.value = flag2_input.value;
      flag2_input.value = temp;
      inputs.forEach((input) => {
        for (cod in countries) {
          if (input.value === countries[cod].code) {
            const countryCode = input.value;
            const flagImage = input.parentElement.querySelector(".flag-image");
            flagImage.src = `https://flagsapi.com/${countryCode}/shiny/64.png`;
          }
        }
      });
    }, 3000);
    setTimeout(() => {
      interchange.classList.remove("clicked");
    }, 3200);
  }
});

let amount = document.querySelector('.data input[type="number"]');
let countryOptions = document.querySelectorAll(".flag datalist");
countryOptions.forEach((country) => {
  for (cod in countries) {
    let option = document.createElement("option");
    option.innerText = cod;
    option.value = countries[cod].code;
    country.append(option);
  }
});
let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
  if (flag1_input.value && flag2_input.value) {
    for (cod in countries) {
      if (flag1_input.value === countries[cod].code) {
        fromCurrencyCode = countries[cod].currencyCode.toLowerCase();
      } else if (flag2_input.value === countries[cod].code) {
        toCurrencyCode = countries[cod].currencyCode.toLowerCase();
      }
    }
    if (amount.value <= 0) {
      amount.value = 1;
    }
    const exurl = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${fromCurrencyCode}/${toCurrencyCode}.json`;
    let response = await fetch(exurl);
    let data = await response.json();
    result = amount.value * data[toCurrencyCode];
  }
  let output = document.querySelector('#output input[type="text"]');
  setTimeout(() => {
    output.value = result + " " + toCurrencyCode.toUpperCase();
  }, 500);
});
