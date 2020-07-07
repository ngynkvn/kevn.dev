import React from "react"
import Layout from "../../components/layout"
export default () => (
    <Layout>
        <div class="content">
            <p>
                This was a school project I did during my freshman year at UF.
            </p>

            <p>
                The AI is based on the quintessential minimax algorithm to play.
            </p>

            <p>
                The main challenges with this project was working with others to
                create the final product. The project lent itself naturally to
                being able to be split into multiple moving parts (Board
                representation, Search algorithm, and Evaluation functions).
                However it was difficult to manage and due to lack of testing
                and time, bugs were rampant and difficult to track down.
            </p>

            <p>
                Currently I’m spending freetime tracking down the bugs,
                refactoring the code and developing a good testing suite for the
                engine before I move onto improving it’s performance. I learned
                a lot about how project structure and working with others on
                this project.
            </p>

            <p>
                In the future I want to make this an accessible engine for new
                programmers to explore and contribute to so that they can learn
                to navigate code, and also gain insight myself into how others
                solve problems.
            </p>

            <p>
                <a href="https://github.com/ngynkvn/chess">
                    https://github.com/ngynkvn/chess
                </a>
            </p>
        </div>
    </Layout>
)
