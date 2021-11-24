controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 8 8 . . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . 8 9 9 8 . . . . . . 
        . . . . . 8 8 9 9 8 8 . . . . . 
        . . . . . 8 9 9 9 9 8 . . . . . 
        . . . . 8 8 9 9 9 9 8 8 . . . . 
        . . . . 8 9 9 9 9 9 9 8 . . . . 
        . . . . 8 8 8 9 9 8 8 8 . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, fireextinguisher, 100, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    fire.destroy()
    info.player1.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    fire.destroy()
    info.changeLifeBy(-1)
})
let fire: Sprite = null
let projectile: Sprite = null
let fireextinguisher: Sprite = null
fireextinguisher = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . f f f f f f 9 9 9 
    . . . . . . . f . . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . 2 2 2 2 2 2 2 2 2 . . . . 
    . . . 2 2 2 2 2 2 2 2 2 . . . . 
    . . . 2 2 1 1 1 1 1 2 2 . . . . 
    . . . 2 2 1 1 1 1 1 2 2 . . . . 
    . . . 2 2 1 1 1 1 1 2 2 . . . . 
    . . . 2 2 1 1 1 1 1 2 2 . . . . 
    . . . 2 2 1 1 1 1 1 2 2 . . . . 
    . . . 2 2 1 1 1 1 1 2 2 . . . . 
    . . . 2 2 1 1 1 1 1 2 2 . . . . 
    . . . 2 2 2 2 2 2 2 2 2 . . . . 
    . . . 2 2 2 2 2 2 2 2 2 . . . . 
    `, SpriteKind.Player)
controller.moveSprite(fireextinguisher)
scene.setBackgroundColor(7)
fireextinguisher.setBounceOnWall(true)
info.setScore(0)
info.player1.setLife(7)
game.onUpdateInterval(1000, function () {
    fire = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . 2 4 2 2 2 . . . . . . 
        . . . . 2 2 4 4 4 2 . . . . . . 
        . . . . 2 4 4 5 4 2 . . . . . . 
        . . . . 2 4 5 5 4 2 . . . . . . 
        . . . . 2 4 5 5 4 2 . . . . . . 
        . . . . 2 4 4 4 4 2 . . . . . . 
        . . . . 2 2 2 2 2 2 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    fire.setPosition(Math.randomRange(120, 160), Math.randomRange(0, 120))
    fire.setVelocity(-100, 0)
})
