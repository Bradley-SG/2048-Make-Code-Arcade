namespace SpriteKind {
    export const _TileSprite = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    iNEW = 0
    jNEW = 0
    setActionAchieved = false
    slideUp()
    combineUp()
    slideUp()
    if (setActionAchieved) {
        pause(100)
        spawnNewTiles()
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
function combineLeft () {
    for (let i2 = 0; i2 <= 3; i2++) {
        iNEW = i2 + 1
        for (let j2 = 0; j2 <= 3; j2++) {
            jNEW = j2 + 1
            if (!(tiles.tileAtLocationEquals(tiles.getTileLocation(iNEW + 2, jNEW + 1), assets.tile`blankTile0`) || tiles.tileAtLocationEquals(tiles.getTileLocation(iNEW + 2, jNEW + 1), assets.tile`blankTile`))) {
                if (tiles.tileImageAtLocation(tiles.getTileLocation(iNEW + 2, jNEW + 1)) == tiles.tileImageAtLocation(tiles.getTileLocation(iNEW + 1, jNEW + 1))) {
                    setActionAchieved = true
                    console.log("ActionAchieved Reason: CombineLeftSuccess")
                    tileUp(iNEW - 1, jNEW)
                    placeTile(jNEW, iNEW, 0)
                }
            }
        }
    }
}
function slideDown () {
    for (let index = 0; index < 3; index++) {
        for (let i = 0; i <= 3; i++) {
            iNEW = 4 - i
            for (let j = 0; j <= 3; j++) {
                jNEW = 4 - j
                if (!(tiles.tileAtLocationEquals(tiles.getTileLocation(jNEW + 2, iNEW + 1), assets.tile`blankTile0`) || tiles.tileAtLocationEquals(tiles.getTileLocation(jNEW + 2, iNEW + 1), assets.tile`blankTile`))) {
                    if (tiles.tileAtLocationEquals(tiles.getTileLocation(jNEW + 2, iNEW + 2), assets.tile`blankTile0`)) {
                        setActionAchieved = true
                        console.log("ActionAchieved Reason: SlideDownSuccess")
                        tiles.setTileAt(tiles.getTileLocation(jNEW + 2, iNEW + 2), tiles.tileImageAtLocation(tiles.getTileLocation(jNEW + 2, iNEW + 1)))
                        placeTile(iNEW, jNEW, 0)
                    }
                }
            }
        }
    }
}
function slideLeft () {
    for (let index = 0; index < 3; index++) {
        for (let k = 0; k <= 3; k++) {
            iNEW = 4 - k
            for (let l = 0; l <= 3; l++) {
                jNEW = 4 - l
                if (!(tiles.tileAtLocationEquals(tiles.getTileLocation(5 - iNEW + 2, 5 - jNEW + 1), assets.tile`blankTile0`) || tiles.tileAtLocationEquals(tiles.getTileLocation(5 - iNEW + 2, 5 - jNEW + 1), assets.tile`blankTile`))) {
                    if (tiles.tileAtLocationEquals(tiles.getTileLocation(5 - iNEW + 1, 5 - jNEW + 1), assets.tile`blankTile0`)) {
                        setActionAchieved = true
                        console.log("ActionAchieved Reason: SlideLeftSuccess")
                        tiles.setTileAt(tiles.getTileLocation(5 - iNEW + 1, 5 - jNEW + 1), tiles.tileImageAtLocation(tiles.getTileLocation(5 - iNEW + 2, 5 - jNEW + 1)))
                        placeTile(5 - jNEW, 5 - iNEW, 0)
                    }
                }
            }
        }
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (colorPallete == "Original") {
        colorPallete = "Gray Scale"
    } else if (colorPallete == "Gray Scale") {
        colorPallete = "Poke"
    } else if (colorPallete == "Poke") {
        colorPallete = "D.I.Y"
    } else if (colorPallete == "D.I.Y") {
        colorPallete = "Steam Punk"
    } else {
        colorPallete = "Original"
    }
    blockSettings.writeString("colorPallete", colorPallete)
    updatePallete()
})
function combineUp () {
    for (let i22 = 0; i22 <= 3; i22++) {
        iNEW = i22 + 1
        for (let j22 = 0; j22 <= 3; j22++) {
            jNEW = j22 + 1
            if (!(tiles.tileAtLocationEquals(tiles.getTileLocation(jNEW + 2, iNEW + 1), assets.tile`blankTile0`) || tiles.tileAtLocationEquals(tiles.getTileLocation(jNEW + 2, iNEW + 1), assets.tile`blankTile`))) {
                if (tiles.tileImageAtLocation(tiles.getTileLocation(jNEW + 2, iNEW + 1)) == tiles.tileImageAtLocation(tiles.getTileLocation(jNEW + 2, iNEW + 0))) {
                    setActionAchieved = true
                    console.log("ActionAchieved Reason: CombineUpSuccess")
                    tileUp(jNEW, iNEW - 1)
                    placeTile(iNEW, jNEW, 0)
                }
            }
        }
    }
}
function startGame () {
    if (!(blockSettings.readNumber("highScore") >= 0)) {
        blockSettings.writeNumber("highScore", 0)
    }
    highScore = blockSettings.readNumber("highScore")
    highScoreText = textsprite.create("High Score: " + highScore, 0, 15)
    highScoreText.setPosition(80, 110)
    colorPallete = blockSettings.readString("colorPallete")
    palleteDisplay = textsprite.create(" ")
    updatePallete()
    info.setScore(0)
    tiles.setCurrentTilemap(tilemap`2048Grid-Standard`)
    spawnNewTiles()
    spawnNewTiles()
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    iNEW = 0
    jNEW = 0
    setActionAchieved = false
    slideLeft()
    combineLeft()
    slideLeft()
    if (setActionAchieved) {
        pause(100)
        spawnNewTiles()
    }
})
function slideUp () {
    for (let index = 0; index < 3; index++) {
        for (let m = 0; m <= 3; m++) {
            iNEW = 4 - m
            for (let n = 0; n <= 3; n++) {
                jNEW = 4 - n
                if (!(tiles.tileAtLocationEquals(tiles.getTileLocation(5 - jNEW + 2, 5 - iNEW + 1), assets.tile`blankTile0`) || tiles.tileAtLocationEquals(tiles.getTileLocation(5 - jNEW + 2, 5 - iNEW + 1), assets.tile`blankTile`))) {
                    if (tiles.tileAtLocationEquals(tiles.getTileLocation(5 - jNEW + 2, 5 - iNEW), assets.tile`blankTile0`)) {
                        setActionAchieved = true
                        console.log("ActionAchieved Reason: SlideUpSuccess")
                        tiles.setTileAt(tiles.getTileLocation(5 - jNEW + 2, 5 - iNEW), tiles.tileImageAtLocation(tiles.getTileLocation(5 - jNEW + 2, 5 - iNEW + 1)))
                        placeTile(5 - iNEW, 5 - jNEW, 0)
                    }
                }
            }
        }
    }
}
function placeTile (row: number, column: number, tileNum: number) {
    tiles.setTileAt(tiles.getTileLocation(column + 2, row + 1), tiles.tileImageAtLocation(tiles.getTileLocation(tileNum, 8)))
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    iNEW = 0
    jNEW = 0
    setActionAchieved = false
    slideRight()
    combineRight()
    slideRight()
    if (setActionAchieved) {
        pause(100)
        spawnNewTiles()
    }
})
function combineRight () {
    for (let i23 = 0; i23 <= 3; i23++) {
        iNEW = 4 - i23
        for (let j23 = 0; j23 <= 3; j23++) {
            jNEW = 4 - j23
            if (!(tiles.tileAtLocationEquals(tiles.getTileLocation(iNEW + 2, jNEW + 1), assets.tile`blankTile0`) || tiles.tileAtLocationEquals(tiles.getTileLocation(iNEW + 2, jNEW + 1), assets.tile`blankTile`))) {
                if (tiles.tileImageAtLocation(tiles.getTileLocation(iNEW + 2, jNEW + 1)) == tiles.tileImageAtLocation(tiles.getTileLocation(iNEW + 3, jNEW + 1))) {
                    setActionAchieved = true
                    console.log("ActionAchieved Reason: CombineRightSuccess")
                    tileUp(iNEW + 1, jNEW)
                    placeTile(jNEW, iNEW, 0)
                }
            }
        }
    }
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    iNEW = 0
    jNEW = 0
    setActionAchieved = false
    slideDown()
    combineDown()
    slideDown()
    if (setActionAchieved) {
        pause(100)
        spawnNewTiles()
    }
})
function loop () {
    if (info.score() > highScore) {
        highScore = info.score()
        blockSettings.writeNumber("highScore", info.score())
    }
    highScoreText.destroy()
    highScoreText = textsprite.create("High Score: " + highScore, 0, 15)
    highScoreText.setPosition(80, 110)
}
function updatePallete () {
    if (colorPallete == "Original") {
        color.setPalette(
        color.originalPalette
        )
    } else if (colorPallete == "Gray Scale") {
        color.setPalette(
        color.GrayScale
        )
        color.setColor(15, color.rgb(220, 220, 220))
        color.setColor(1, color.rgb(20, 20, 20))
    } else if (colorPallete == "Poke") {
        color.setPalette(
        color.Poke
        )
        color.setColor(1, color.rgb(20, 20, 25))
        color.setColor(15, color.rgb(220, 220, 220))
    } else if (colorPallete == "D.I.Y") {
        color.setPalette(
        color.DIY
        )
    } else if (colorPallete == "Steam Punk") {
        color.setPalette(
        color.SteamPunk
        )
    }
    for (let index = 0; index < 30; index++) {
        palleteDisplay.destroy()
    }
    if (colorPallete == "Original") {
        palleteDisplay = textsprite.create("", 1, 1)
    } else {
        palleteDisplay = textsprite.create(colorPallete, 1, 15)
    }
    palleteDisplay.setStayInScreen(true)
    palleteDisplay.setPosition(24, 25)
    palleteDisplay.setVelocity(-101000, -150)
}
function spawnNewTiles () {
    generatedX = randint(1, 4)
    generatedY = randint(1, 4)
    tempCounter = 0
    while (!(tiles.tileAtLocationEquals(tiles.getTileLocation(generatedX + 2, generatedY + 1), assets.tile`blankTile0`))) {
        generatedX = randint(1, 4)
        generatedY = randint(1, 4)
        tempCounter += 1
        if (100 < tempCounter) {
            break;
        }
    }
    if (randint(1, 10) == 1) {
        if (tiles.tileAtLocationEquals(tiles.getTileLocation(generatedX + 2, generatedY + 1), assets.tile`blankTile0`)) {
            placeTile(generatedY, generatedX, 2)
        }
        console.log("Generated A Tile_4 at: X:" + generatedX + "Y:" + generatedX)
    } else {
        if (tiles.tileAtLocationEquals(tiles.getTileLocation(generatedX + 2, generatedY + 1), assets.tile`blankTile0`)) {
            placeTile(generatedY, generatedX, 1)
        }
        console.log("Generated A Tile_2 at: X:" + generatedX + "Y:" + generatedX)
    }
}
function tileUp (xUP: number, yUP: number) {
    if (tiles.tileAtLocationEquals(tiles.getTileLocation(xUP + 2, yUP + 1), assets.tile`Tile_2`)) {
        tiles.setTileAt(tiles.getTileLocation(xUP + 2, yUP + 1), assets.tile`Tile_4`)
        info.changeScoreBy(4)
    } else {
        if (tiles.tileAtLocationEquals(tiles.getTileLocation(xUP + 2, yUP + 1), assets.tile`Tile_4`)) {
            tiles.setTileAt(tiles.getTileLocation(xUP + 2, yUP + 1), assets.tile`Tile_0`)
            info.changeScoreBy(8)
        } else {
            if (tiles.tileAtLocationEquals(tiles.getTileLocation(xUP + 2, yUP + 1), assets.tile`Tile_0`)) {
                tiles.setTileAt(tiles.getTileLocation(xUP + 2, yUP + 1), assets.tile`Tile_16`)
                info.changeScoreBy(16)
            } else {
                if (tiles.tileAtLocationEquals(tiles.getTileLocation(xUP + 2, yUP + 1), assets.tile`Tile_16`)) {
                    tiles.setTileAt(tiles.getTileLocation(xUP + 2, yUP + 1), assets.tile`Tile_32`)
                    info.changeScoreBy(32)
                } else {
                    if (tiles.tileAtLocationEquals(tiles.getTileLocation(xUP + 2, yUP + 1), assets.tile`Tile_32`)) {
                        tiles.setTileAt(tiles.getTileLocation(xUP + 2, yUP + 1), assets.tile`Tile_64`)
                        info.changeScoreBy(64)
                    } else {
                        if (tiles.tileAtLocationEquals(tiles.getTileLocation(xUP + 2, yUP + 1), assets.tile`Tile_64`)) {
                            tiles.setTileAt(tiles.getTileLocation(xUP + 2, yUP + 1), assets.tile`Tile_128`)
                            info.changeScoreBy(128)
                        } else {
                            if (tiles.tileAtLocationEquals(tiles.getTileLocation(xUP + 2, yUP + 1), assets.tile`Tile_128`)) {
                                tiles.setTileAt(tiles.getTileLocation(xUP + 2, yUP + 1), assets.tile`Tile_256`)
                                info.changeScoreBy(256)
                            } else {
                                if (tiles.tileAtLocationEquals(tiles.getTileLocation(xUP + 2, yUP + 1), assets.tile`Tile_256`)) {
                                    tiles.setTileAt(tiles.getTileLocation(xUP + 2, yUP + 1), assets.tile`Tile_512`)
                                    info.changeScoreBy(512)
                                } else {
                                    if (tiles.tileAtLocationEquals(tiles.getTileLocation(xUP + 2, yUP + 1), assets.tile`Tile_512`)) {
                                        tiles.setTileAt(tiles.getTileLocation(xUP + 2, yUP + 1), assets.tile`Tile_1024`)
                                        info.changeScoreBy(1024)
                                    } else {
                                        if (tiles.tileAtLocationEquals(tiles.getTileLocation(xUP + 2, yUP + 1), assets.tile`Tile_1024`)) {
                                            tiles.setTileAt(tiles.getTileLocation(xUP + 2, yUP + 1), assets.tile`Tile_2048`)
                                            info.changeScoreBy(2048)
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
function combineDown () {
    for (let i24 = 0; i24 <= 3; i24++) {
        iNEW = 4 - i24
        for (let j24 = 0; j24 <= 3; j24++) {
            jNEW = 4 - j24
            if (!(tiles.tileAtLocationEquals(tiles.getTileLocation(jNEW + 2, iNEW + 1), assets.tile`blankTile0`) || tiles.tileAtLocationEquals(tiles.getTileLocation(jNEW + 2, iNEW + 1), assets.tile`blankTile`))) {
                if (tiles.tileImageAtLocation(tiles.getTileLocation(jNEW + 2, iNEW + 1)) == tiles.tileImageAtLocation(tiles.getTileLocation(jNEW + 2, iNEW + 2))) {
                    setActionAchieved = true
                    console.log("ActionAchieved Reason: CombineDownSuccess")
                    tileUp(jNEW, iNEW + 1)
                    placeTile(iNEW, jNEW, 0)
                }
            }
        }
    }
}
function slideRight () {
    for (let index = 0; index < 3; index++) {
        for (let o = 0; o <= 3; o++) {
            iNEW = 4 - o
            for (let p = 0; p <= 3; p++) {
                jNEW = 4 - p
                if (!(tiles.tileAtLocationEquals(tiles.getTileLocation(iNEW + 2, jNEW + 1), assets.tile`blankTile0`) || tiles.tileAtLocationEquals(tiles.getTileLocation(iNEW + 2, jNEW + 1), assets.tile`blankTile`))) {
                    if (tiles.tileAtLocationEquals(tiles.getTileLocation(iNEW + 3, jNEW + 1), assets.tile`blankTile0`)) {
                        setActionAchieved = true
                        console.log("ActionAchieved Reason: SlideRightSuccess")
                        tiles.setTileAt(tiles.getTileLocation(iNEW + 3, jNEW + 1), tiles.tileImageAtLocation(tiles.getTileLocation(iNEW + 2, jNEW + 1)))
                        placeTile(jNEW, iNEW, 0)
                    }
                }
            }
        }
    }
}
let tempCounter = 0
let generatedY = 0
let generatedX = 0
let palleteDisplay: TextSprite = null
let highScoreText: TextSprite = null
let highScore = 0
let colorPallete = ""
let setActionAchieved = false
let jNEW = 0
let iNEW = 0
if (blockSettings.exists("colorPallete")) {
    startGame()
} else {
    blockSettings.writeString("colorPallete", "Original")
    startGame()
}
forever(function () {
    loop()
})
