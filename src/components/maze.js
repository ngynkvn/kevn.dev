import React, { PureComponent } from "react"
import { drawStepGenerator } from "../code/maze"
class Maze extends PureComponent {
    constructor(props) {
        super(props)
        this.canvasRef = React.createRef()
        this.interval = null
    }
    static defaultProps = {
        generatorFunction: drawStepGenerator,
    }
    componentDidMount() {
        this.componentDidUpdate()
    }
    componentDidUpdate() {
        if (this.interval) {
            this.interval = clearInterval(this.interval)
        }
        const squaresHigh = this.props.height / this.props.squareSize
        const squaresWide = this.props.width / this.props.squareSize
        const { pathWidth, squareSize, timeDelta } = this.props
        this.canvasRef.current.height = this.props.height + squareSize
        this.canvasRef.current.width = this.props.width + squareSize
        const iter = this.props.generatorFunction(this.canvasRef.current, {
            squaresHigh,
            squaresWide,
            pathWidth,
            squareSize,
        })
        this.interval = setInterval(() => {
            if (iter.next().done) {
                this.interval = clearInterval(this.interval)
            }
        }, timeDelta)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }
    render() {
        return (
            <canvas
                ref={this.canvasRef}
                width={this.props.width}
                height={this.props.height}
            ></canvas>
        )
    }
}
export default Maze
