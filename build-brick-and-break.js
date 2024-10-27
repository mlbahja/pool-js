export function build(numberOfBricks) {
    const wall = document.body;
    let brickCount = 0;
        const brickLayingInterval = setInterval(() => {
        const newBrick = document.createElement("div");
        newBrick.id = `brick-${brickCount + 1}`;
        if ((brickCount + 1) % 3 === 0) {
            newBrick.dataset.foundation = "true";
        }
        wall.appendChild(newBrick);
        brickCount++;
        if (brickCount >= numberOfBricks) {
            clearInterval(brickLayingInterval);
        }
    }, 100);
}
export function repair(...brickIds) {
    brickIds.forEach((brickId) => {
        const brickToRepair = document.getElementById(brickId);
        if (brickToRepair) {
            if (brickToRepair.dataset.foundation) {
                brickToRepair.dataset.repaired = "in progress";
            } else {
                brickToRepair.dataset.repaired = "true";
            }
        }
    });
}
export function destroy() {
    const allBricks = document.getElementsByTagName("div");
    
    if (allBricks.length > 0) {
        const lastBrick = allBricks[allBricks.length - 1];
        lastBrick.remove();
    }
}
// export function build(n) {
//     let body = document.getElementsByTagName("body")[0];
//     console.log(body)
//     let bricks = 1;
//     let interval = setInterval(() => {
//         let brick = document.createElement("div");
//         brick.setAttribute("id", "brick-" + bricks);
//         bricks % 3 === 2 ? (brick.dataset.foundation = true) : null;
//         body.appendChild(brick);
//         bricks++;
//         if (bricks > n) {
//             clearInterval(interval);
//         }
//     }, 100);
// }

// export function repair(...ids) {
//     ids.forEach((id) => {
//         let brick = document.getElementById(id);
//         brick.getAttribute("foundation")
//             ? (brick.dataset.repaired = "in progress")
//             : (brick.dataset.repaired = true);
//     });
// }

// export function destroy() {
//     let bricks = document.getElementsByTagName("div");
//     bricks[bricks.length - 1].remove();
// }