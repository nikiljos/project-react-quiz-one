import './QuizComponent.css'

let QuizComponent=()=>(
    <div className="Quiz">
        <h2>Question</h2>
        <div className="counter">1 of 15</div>
        <div className="question">
            Which is the only mammal that can jump?
        </div>
        <div className="options">
            <div className="opt">Elephant</div>
            <div className="opt">Cheetah</div>
            <div className="opt">Nikhil</div>
            <div className="opt">Donkey</div>
        </div>
        <div className="cta">
            <button className='prev'>Previous</button>
            <button className='next'>Next</button>
            <button className='quit'>Quit</button>
        </div>
    </div>
)

export default QuizComponent