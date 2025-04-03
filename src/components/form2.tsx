const Form2 = () => {
    return (
        <form>
            <h3>F1 driver for my fantasy team suggestion</h3>
            <label>Name</label>
            <input type="text"/>
            <br/>
            <label>Team</label>
            <input type="text"/>
            <br/>
            <label>Why?</label>
            <br/>
            <input type="checkbox"/>
            <label>Cheap</label>
            <input type="checkbox"/>
            <label>Consistent</label>
            <input type="checkbox"/>
            <label>Underdog</label>
            <br/>
            <label>Expectations:</label>
            <br/>
            <input type="radio" name="radio"/>
            <label>Joy</label>
            <input type="radio" name="radio"/>
            <label>Neutral</label>
            <input type="radio" name="radio"/>
            <label>Sadness</label>
            <br/>
            <label>Comments</label>
            <br/>
            <textarea id="comments"></textarea>
            <br/>
            <label>What should I do if they do poorly in the next race</label>
            <br/>
            <select>
                <option>Keep</option>
                <option>Drop</option>
                <option>Swap</option>
                <option>Cry</option>
            </select>
            <br/>
            <button>Submit</button>
        </form>
    )
}
export default Form2;