import styles from '/styles/register.module.css'
import Layout from '../components/layout'

export default function Login() {
    return (
        <Layout>
          <h1 className={styles.h1}>Registration</h1>

          <div class={styles.inpRow}>
          <label className={styles.label} for="inp-name">Name</label>
          <input class={styles.input} required type="text" placeholder="Your name" id="inp-name"/>
          </div>
      
          <div class={styles.inpRow}>
          <label className={styles.label} for="inp-sname">Surname</label>
          <input class={styles.input} required type="text" placeholder="Your surname" id="inp-sname"/>
          </div>
      
          <div class={styles.inpRow}>
          <label className={styles.label} for="inp-email">Email</label>
          <input class={styles.input} required type="text" placeholder="Your email" id="inp-email"/>
          </div>
      
          <div class={styles.inpRow}>
          <label className={styles.label} for="inp-passwd">Password</label>
          <input class={styles.input} required type="password" placeholder="Your password" id="inp-passwd"/>
          </div>
      
          <div class={styles.inpRow}>
          <label className={styles.label} for="sel-gender">Gender</label>
            <select class={styles.input + ' ' + styles.select} id="sel-gender" id="sel-gender">
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
      
          <div>
          <input class={styles.input} id={styles.submitBtn} type="submit" value="Submit"/>
          </div>
        </Layout>
    )
}