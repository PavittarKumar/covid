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
                    Some may experience:
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

        <div className={styles.container}>

        <div>
            <h1>
                Stay Home. Save Lives.
            </h1>
            <ul>
                <li><b>Stay</b> Home</li>
                <li><b>Keep</b> a safe distance</li>
                <li><b>Wash</b> hands often</li>
                <li><b>Cover</b> your cough</li>
                <li><b>Sick?</b> Call the above helpline</li>
            </ul>
            </div>

            <div>
                <h1>
                   Bored? What to do:
                </h1>

                <ul>
                    <li>Meditation</li>
                    <li>Read Books</li>
                    <li>Work from home if possible</li>
                    <li>Learn new Skills</li>
                    <li>Stay Updated with Corona Virus Updates</li>
                </ul>
            </div>
             
        </div>

        </div>
    );
}

export default Symptoms;