interface IntroProps {
    name1: string;
    name2: string;
}

const Intro = ({name1, name2}: IntroProps) => {
    return (
        <p>Hi, we are {name1} and {name2}. Here are our hobbies.</p>
    )
}


export default Intro;