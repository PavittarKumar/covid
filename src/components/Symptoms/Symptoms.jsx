import React from 'react';
import styles from './Symptoms.module.css';

const Symptoms=()=>{
    return(
        <div className={styles.bigContainer}>
        <div className={styles.container}>
            <div>
            <h1>
                Common symptoms:
            </h1>
            <ul>
                <li>Fever</li>
                <li>Tiredness</li>
                <li>Dry Cough</li>
            </ul>
            </div>
            <div>
                <h1>
                    Some may experience
                </h1>
                <ul>
                    <li>Aches and Pain</li>
                    <li>Nasal Congestion</li>
                    <li>Runny Nose</li>
                    <li>Sore Throat</li>
                    <li>Diarrhoea</li>
                </ul>
            </div>                     
        </div>

        <p className={styles.help}>
                Helpline Number(INDIA) :+91-11-23978046 
        </p>

        </div>
    );
}

export default Symptoms;