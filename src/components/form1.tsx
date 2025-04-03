const Form1 = () => {
    return (<form>
        <label htmlFor="fullname">Enter your full name:</label>
        <input type="text" id="fullname"/>

        <br/><br/>
        <label htmlFor="email">Enter your email address:</label>
        <input type="text" id="email"/>

        <br/><br/>

        What are your favorite muscles to work?:
        <br/>
        <input type="checkbox" id="chest"/>
        <label htmlFor="chest">Chest</label>

        <br/>

        <input type="checkbox" id="back"/>
        <label htmlFor="back">Back</label>

        <br/>

        <input type="checkbox" id="tri"/>
        <label htmlFor="tri">Triceps</label>

        <br/>

        <input type="checkbox" id="bi"/>
        <label htmlFor="bi">Biceps</label>

        <br/>

        <input type="checkbox" id="shoulders"/>
        <label htmlFor="shoulders">Shoulders</label>

        <br/>

        <input type="checkbox" id="quads"/>
        <label htmlFor="quads">Quadriceps</label>

        <br/>

        <input type="checkbox" id="ham"/>
        <label htmlFor="ham">Hamstrings</label>

        <br/>

        <input type="checkbox" id="glutes"/>
        <label htmlFor="glutes">Glutes</label>

        <br/>

        <input type="checkbox" id="calves"/>
        <label htmlFor="calves">Calves</label>

        <br/><br/>

        What is the best Bench Press Variation?:
        <br/>
        <input type="radio" id="standard" name="press" value="standard"/>
        <label htmlFor="standard">Standard Press</label>

        <br/>

        <input type="radio" id="decline" name="press" value="decline"/>
        <label htmlFor="decline">Decline Press</label>

        <br/>

        <input type="radio" id="incline" name="press" value="incline"/>
        <label htmlFor="incline">Incline Press</label>

        <br/><br/>

        <label htmlFor="time">What's the best time to work out:</label>

        <br/>

        <select id="time" name="tip">
            <option value="1">Morning</option>
            <option value="2">Afternoon</option>
            <option value="3">Evening</option>
        </select>

        <br/><br/>

        <label htmlFor="comments">Comments:</label>
        <br/>
        <textarea rows= {2} cols={40} id="comments"></textarea>

        <br/><br/>
        <input type="submit" value="Submit" id="submitButton"/>
    </form>)
}

export default Form1;