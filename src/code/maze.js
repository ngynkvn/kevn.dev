const colors = ["green", "blue", "orange", "red"]
const choice = arr => arr[Math.floor(Math.random() * arr.length)]
function* makeChoice(array) {
    while (true) {
        yield choice(array)
    }
}

export function* drawStepGenerator(
    canvas,
    {
        squaresHigh,
        squaresWide,
        pathWidth,
        squareSize,
        colorFunction = makeChoice(colors),
    }
) {
    const ctx = canvas.getContext("2d")
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.beginPath()
    for (let i = 0; i < squaresHigh; i++) {
        const y = getP(i)
        for (let j = 0; j < squaresWide; j++) {
            const x = getP(j)
            const outcome = Math.random()
            if (outcome < 0.5) {
                drawForwardSlash(x, y)
            } else {
                drawBackwardSlash(x, y)
            }
            yield
        }
    }

    function getP(i) {
        return i * squareSize
    }

    function drawForwardSlash(x, y) {
        ctx.beginPath()
        ctx.strokeStyle = colorFunction.next().value
        ctx.lineWidth = pathWidth
        ctx.moveTo(x, y)
        ctx.lineTo(x + squareSize, y + squareSize)
        ctx.stroke()
    }

    function drawBackwardSlash(x, y) {
        ctx.beginPath()
        ctx.strokeStyle = choice(colors)
        ctx.lineWidth = pathWidth
        ctx.moveTo(x + squareSize, y)
        ctx.lineTo(x, y + squareSize)
        ctx.stroke()
    }
}

function* colorGenerator() {
    function RGB2Color(r, g, b) {
        return `rgb(${Math.round(r)}, ${Math.round(g)},${Math.round(b)})`
    }
    var i = 0
    var frequency = 0.1
    while (true) {
        const red = Math.sin(frequency * i + 0) * 127 + 128
        const green = Math.sin(frequency * i + 2) * 127 + 128
        const blue = Math.sin(frequency * i + 4) * 127 + 128
        i += 1
        yield RGB2Color(red, green, blue)
    }
}
export function* drawMazeGenerator(
    canvas,
    {
        squaresHigh,
        squaresWide,
        pathWidth,
        squareSize,
        colorFunction = colorGenerator(),
    }
) {
    const ctx = canvas.getContext("2d")
    const unvisited = new Set()
    const stack = []
    for (var i = 0; i < squaresHigh; i++) {
        for (var j = 0; j < squaresWide; j++) {
            unvisited.add(`${j} ${i}`)
        }
    }

    let currCell = `${Math.floor(Math.random() * squaresWide)} ${Math.floor(
        Math.random() * squaresHigh
    )}`
    unvisited.delete(currCell)
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    while (unvisited.size !== 0) {
        const unvisitedNeighbors = getUnvisitedNeighbors(currCell)
        if (unvisitedNeighbors.length !== 0) {
            if (unvisitedNeighbors.length > 1) {
                stack.push(currCell)
            }
            const toVisit = choice(unvisitedNeighbors)
            unvisited.delete(toVisit)
            draw(currCell, toVisit)
            yield
            currCell = toVisit
        } else if (stack.length !== 0) {
            while (
                stack.length &&
                getUnvisitedNeighbors(currCell).length === 0
            ) {
                currCell = stack.pop()
            }
        }
    }
    function draw(from, to) {
        ctx.beginPath()
        ctx.strokeStyle = colorFunction.next().value
        ctx.lineWidth = pathWidth
        ctx.moveTo(...scaled(toInt(from)))
        ctx.lineTo(...scaled(toInt(to)))
        ctx.stroke()
    }
    function scaled(arr) {
        return arr.map(v => v * squareSize + squareSize)
    }
    function toInt(cell) {
        return cell.split(" ").map(v => parseInt(v, 10))
    }
    function getUnvisitedNeighbors(currCell) {
        const [x, y] = toInt(currCell)
        const neighbors = []
        for (let i = -1; i < 2; i += 2) {
            if (unvisited.has(`${x + i} ${y}`)) {
                neighbors.push(`${x + i} ${y}`)
            }
            if (unvisited.has(`${x} ${y + i}`)) {
                neighbors.push(`${x} ${y + i}`)
            }
        }
        return neighbors
    }
}

// function drawGrid() {
//   ctx.beginPath();
//   ctx.strokeStyle = "green";
//   ctx.lineWidth = 1;
//   for (var i = squareSize; i < squaresWide * squareSize; i += squareSize) {
//     for (var j = squareSize; j < squaresHigh * squareSize; j += squareSize) {
//       ctx.strokeRect(i, j, squareSize, squareSize);
//     }
//   }
// }
