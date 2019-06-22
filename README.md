# Bitcoin Converter
An application for converting currencies into their bitcoin value. View it live here https://react-bitcoin-converter.netlify.com/currencies

### Basic Information View
![Basic Info](basic_info.png?raw=true "Basic Info")

### Choose Currencies View
![Choose Currencies](choose_currencies.png?raw=true "Choose Currencies")

### Conversions View
![Conversions](conversions.png?raw=true "Conversions")

### Requirements
- NodeJS and NPM
- Rename the `.env.sample` file to `.env` and fill the variables according to values gotten from https://bitcoinaverage.com/en/apikeys Register or Sign In to get the keys

### Installation
- Clone this repository `git clone https://github.com/ekundayo-ab/react-bitcoin-converter`
- `cd` into project directory on the terminal `cd react-bitcoin-converter`
- Install dependencies `npm install`

### Running the Application
- To run project do `npm start`
- To build for production do `npm run build`


### Notes
One could fetch the exchange rates for multiple currencies directly but that is not the case in this implementation because the endpoint is restricted to enterprise users on the bitcon average platform. So, the current rates in comparison to 1 dollar is first gotten, the rates for a single conversion of BTC to USD is also gotten, this is then used to calculate the conversions for other currencies.
