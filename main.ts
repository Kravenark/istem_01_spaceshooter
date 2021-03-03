controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    BulletSprite = sprites.create(assets.image`BulletSprite`, SpriteKind.Projectile)
    BulletSprite.setPosition(SpaceShip.x, SpaceShip.y - 10)
    BulletSprite.setVelocity(0, -100)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    game.reset()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    EnemyShip.setPosition(randint(0, scene.screenWidth()), 0)
    EnemyShip.setVelocity(0, EnemyShip.vy + 5)
    info.changeScoreBy(1)
})
let BulletSprite: Sprite = null
let EnemyShip: Sprite = null
let SpaceShip: Sprite = null
SpaceShip = sprites.create(assets.image`Sprite_SpaceShip`, SpriteKind.Player)
SpaceShip.setPosition(86, 82)
EnemyShip = sprites.create(assets.image`Sprite_Alien`, SpriteKind.Enemy)
EnemyShip.setPosition(randint(0, scene.screenWidth()), 0)
EnemyShip.setVelocity(0, 30)
info.setScore(0)
forever(function () {
    controller.moveSprite(SpaceShip)
    if (EnemyShip.y > scene.screenHeight()) {
        EnemyShip.setPosition(randint(0, scene.screenWidth()), 0)
    }
    if (game.runtime() >= 10000) {
        game.splash(convertToText(info.score()))
    }
})
