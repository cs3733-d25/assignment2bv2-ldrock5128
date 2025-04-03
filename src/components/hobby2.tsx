import List2 from './list2';
import Table2 from './table2';
import Form2 from './form2';

const Hobby2 = () => {
    return (
        <div><h1>Maggie Hosie: Watching Formula 1</h1>
            <div id="banner">
                <img src="" width="640" alt=""/>
            </div>

            <p>My name is Maggie, I don't have a productive hobby to share, but I have been watching F1 for a few years
                now, and it has been pretty fun.</p>

            <h3>Hobby Introduction</h3>
            <p>Formula one(F1) is the highest level of single-seat, open-wheel and open-cockpit professional motor
                racing contest. There are only 20 F1 drivers and 10 F1 teams in the whole world. This sport has it all –
                from intense, competitive racing to thrilling drama and unforgettable scandals.</p>
            <hr/>

            <h4>Some of the things this hobby has brought into my life:</h4>
            <List2/>

            <hr/>
            <label>My fantasy F1 drivers, their current points(b4 Japan GP), current fantasy points, and my rating from
                joy to depression</label>
            <Table2/>

            <hr/>
            <h3>Questionnaire</h3>
            <Form2/>

        </div>)
}

export default Hobby2;