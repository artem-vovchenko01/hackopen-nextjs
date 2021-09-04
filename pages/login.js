export default function Login() {
    return (
        <>
        <h1>Registration</h1>

        <div class="inp-row">
        <label for="inp-name">Name</label>
        <input required type="text" placeholder="Your name" id="inp-name"/>
        </div>
    
        <div class="inp-row">
        <label for="inp-sname">Surname</label>
        <input required type="text" placeholder="Your surname" id="inp-sname"/>
        </div>
    
        <div class="inp-row">
        <label for="inp-email">Email</label>
        <input required type="text" placeholder="Your email" id="inp-email"/>
        </div>
    
        <div class="inp-row">
        <label for="inp-passwd">Password</label>
        <input required type="password" placeholder="Your password" id="inp-passwd"/>
        </div>
    
        <div class="inp-row">
        <label for="sel-gender">Gender</label>
          <select id="sel-gender" id="sel-gender">
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>
    
        <div>
        <input id="submit-btn" type="submit" value="Submit"/>
        </div>
        </>
    )
}