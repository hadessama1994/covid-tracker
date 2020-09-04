import axios from 'axios'


const url = 'https://covid19.mathdro.id/api'




export async function fetchData(country) {
    try {
        
        if (country){
            try {
                const {data: { confirmed, recovered, deaths, lastUpdate}} = await axios.get(`${url}/countries/${country}`)
                return {confirmed, recovered, deaths, lastUpdate}
            } catch (error) {
                return {confirmed: 'error fetch',
                recovered: 'error fetch', 
                deaths: 'error fetch', 
                lastUpdate: 'error fetch' }
                
            }
            
        }
        
        else{
        const {data: { confirmed, recovered, deaths, lastUpdate}} = await axios.get(url)  //DATA = objeto retornado pelo axios

        return {confirmed, recovered, deaths, lastUpdate}}

    } catch (error) {
        return error
        
    }
}

export async function fetchAllCountries(){
    try {
        const {data:  countries} = await axios.get(`${url}/countries`)
        
        return countries.countries.map((allCointries) => allCointries.name);
        
    } catch (error) {
        return {name: 'not found'}
    }
}


export async function fetchDailyData() {
    try {
      const { data } = await axios.get(`${url}/daily`);
      
  
      return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));

    } catch (error) {
      return {name: 'not found'};
    }
  }


