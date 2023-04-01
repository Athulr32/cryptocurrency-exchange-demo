
import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


const marketcap = {
    "btc": 43302457.359915,
    "eth": 673918149.9399761,
    "ltc": 13159821545.88937,
    "bch": 9886736353.695904,
    "bnb": 3909641284.5955687,
    "eos": 1029150653775.2601,
    "xrp": 2391727037203.7476,
    "xlm": 11368764872393.56,
    "link": 163345066181.04132,
    "dot": 195512978194.09424,
    "yfi": 140180884.73413792,
    "usd": 1232427022020.6152,
    "aed": 4526334723775.099,
    "ars": 256824894040311.06,
    "aud": 1842743369730.555,
    "bdt": 131891394396063.69,
    "bhd": 464083951839.1059,
    "bmd": 1232427022020.6152,
    "brl": 6240147740596.976,
    "cad": 1667288896740.5918,
    "chf": 1127503115073.8672,
    "clp": 974738855986326.4,
    "cny": 8465294728855.19,
    "czk": 26676499105147.266,
    "dkk": 8468129311005.867,
    "eur": 1134048534987.8213,
    "gbp": 998321347052.6917,
    "hkd": 9674490501510.717,
    "huf": 431596145229651.2,
    "idr": 18447768743168920,
    "ils": 4437291871434.113,
    "inr": 101281653747218.4,
    "jpy": 163635570142956.62,
    "krw": 1610128931459275.2,
    "kwd": 377942232707.95245,
    "lkr": 406771965452196.06,
    "mmk": 2586199615869081,
    "mxn": 22204637655745.426,
    "myr": 5438084234665.9795,
    "ngn": 567335455316971.8,
    "nok": 12927912975591.852,
    "nzd": 1969362921972.9524,
    "php": 66911539163346.17,
    "pkr": 349762788849451,
    "pln": 5319337426240.249,
    "rub": 95545141006451.38,
    "sar": 4624460563268.408,
    "sek": 12790743848040.957,
    "sgd": 1640113880905.0374,
    "thb": 42006236109593.125,
    "try": 23635731913715.78,
    "twd": 37638444495211.836,
    "uah": 45195174304600.97,
    "vef": 123402917714.92421,
    "vnd": 28943548612154170,
    "zar": 21929627727916.656,
    "xdr": 916675521697.867,
    "xag": 51128516732.62814,
    "xau": 625764820.4309667,
    "bits": 43302457359915,
    "sats": 4330245735991500.5
}

const labels = Object.keys(marketcap)

const valuesOfcap = Object.values(marketcap)

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: labels.map((v, i) => {
               console.log(valuesOfcap[i])
                return valuesOfcap[i]
            }),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },

    ],
};

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart',
        },
    },
};



export default function Statistics() {


    return (
        <div>
            <div>
                <div>Total market Cap</div>
                <Bar options={options} data={data} />;

            </div>
        </div>
    )
}









