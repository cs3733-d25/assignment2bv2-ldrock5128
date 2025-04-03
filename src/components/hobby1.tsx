import List1 from './list1';
import Table1 from './table1';
import Form1 from "./form1";

const Hobby1 = () => {
    return (
        <div><h1>Lucien La Rock: Weightlifting</h1>
            <div id="banner">
                <img src="public/weightliftingBanner.jpg" width="640" alt="Barbell on a gym floor"/>
            </div>

            <p>Hello, I'm Lucien. I'm a CS major and a sophomore</p>
            <p>
                In my free time I really enjoy doing weightlifting. Every week I'll spend around at hour in the gym per
                day. It's
                a real stress reliever and helps my self-esteem. I spend the week working on different muscle groups
            </p>

            <hr/>

            <h3>Muscle Groups</h3>
            <List1/>

            <hr/>
            <h3>Tracking Progress</h3>
            <p>In order to track my progress I use a series of tables, each one tracking a single exercise.</p>
            <Table1/>

            <h3>Questionnaire</h3>
            <Form1/>

        </div>)
}

export default Hobby1;