import styles from '/styles/register.module.css'
import Layout from '../components/layout'

export default function Login() {
    return (
        <Layout>
          <h1 className={styles.h1}>Registration</h1>

          <div className={styles.inpRow}>
          <label className={styles.label} htmlFor="inp-name">Name</label>
          <input className={styles.input} required type="text" placeholder="Your name" id="inp-name"/>
          </div>
      
          <div className={styles.inpRow}>
          <label className={styles.label} htmlFor="inp-sname">Surname</label>
          <input className={styles.input} required type="text" placeholder="Your surname" id="inp-sname"/>
          </div>
      
          <div className={styles.inpRow}>
          <label className={styles.label} htmlFor="inp-email">Email</label>
          <input className={styles.input} required type="text" placeholder="Your email" id="inp-email"/>
          </div>
      
          <div className={styles.inpRow}>
          <label className={styles.label} htmlFor="inp-passwd">Password</label>
          <input className={styles.input} required type="password" placeholder="Your password" id="inp-passwd"/>
          </div>
      
          <div className={styles.inpRow}>
          <label className={styles.label} htmlFor="sel-gender">Gender</label>
            <select className={styles.input + ' ' + styles.select} id="sel-gender">
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
      
          <div>
          <input className={styles.input} id={styles.submitBtn} type="submit" value="Submit"/>
          </div>
        </Layout>
    )
}
