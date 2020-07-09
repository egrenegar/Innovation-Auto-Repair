import styles from './ourTeam.module.css';

export default function OurTeam() {
    return (
        <div className={styles.ourTeamBody}>
            <div className={styles.heading}>
                <h1>Our Team</h1>
                <hr className={styles.ourTeamHr}/>
            </div>
            <div className={styles.employees}>
                <div className={styles.row}>
                    <div className={styles.employee}>
                        <div className={styles.imageDiv}>
                            <img className={styles.photos} src='https://via.placeholder.com/125' alt='Team member 1'/>
                        </div>
                        <div className={styles.details}>
                            <h4 >Amy Akhavan</h4>
                            <p>
                                Position
                            </p>
                        </div>
                    </div>
                    <div className={styles.employee}>
                        <div className={styles.imageDiv}>
                            <img className={styles.photos} src='https://via.placeholder.com/125' alt='Team member 2'/>
                        </div>
                        <div className={styles.details}>
                            <h4 >Bruce Baggins</h4>
                            <p>
                                Position
                            </p>
                        </div>                  
                    </div>
                    <div className={styles.employee}>
                        <div className={styles.imageDiv}>
                            <img className={styles.photos} src='https://via.placeholder.com/125' alt='Team member 3'/>
                        </div>
                        <div className={styles.details}>
                            <h4 >Carole Crowe</h4>
                            <p>
                                Position
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.employee}>
                        <div className={styles.imageDiv}>
                            <img className={styles.photos} src='https://via.placeholder.com/125' alt='Team member 4'/>
                        </div>
                        <div className={styles.details}>
                            <h4 >Dennis Dominguez</h4>
                            <p>
                                Position
                            </p>
                        </div>
                    </div>
                    <div className={styles.employee}>
                        <div className={styles.imageDiv}>
                            <img className={styles.photos} src='https://via.placeholder.com/125' alt='Team member 5'/>
                        </div>
                        <div className={styles.details}>
                            <h4 >Emmet Einstein</h4>
                            <p>
                                Position
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}