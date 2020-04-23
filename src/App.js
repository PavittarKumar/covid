import React from 'react';
import {Cards,Chart,CountryPicker} from './components';
import Symptoms from './components/Symptoms/Symptoms';
import styles from './App.module.css';
import {fetchData} from './api'; 

import corona from './images/corona.png';

class App extends  React.Component{

    state={
        data:{},
        country:'',
    }

    async componentDidMount(){
        const fetchedData = await fetchData();
        this.setState({data:fetchedData});
    }

    handleCountryChange=async(country)=>{
        const fetchedData=await fetchData(country);
        this.setState({data:fetchedData,country:country})
    }

    render(){
        const {data,country}=this.state;
        return(
            <div className={styles.container}>
                <div className='Image'>
                <img className={styles.image} src={corona} alt='COVID-19'/>
                </div>
                <p>Stay Home Stay Safe</p>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
                <div><br/></div>
                <Symptoms/>
                <div><p>
                        Do follow the Rules provided by WHO.
                    </p>
                    </div>
                    <div className={styles.links}>
                        <a href='https://iamazad.in'>Creator</a>        
                        <a href='https://www.who.int/health-topics/coronavirus#tab=tab_1'>WHO</a> 
                    </div>
                       
            </div>
        )
    }
}

export default App;