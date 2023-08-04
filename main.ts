controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Personaje.y == 228) {
        Personaje.vy = -260
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(otherSprite)
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`Añadir Puntos`, function (sprite, location) {
    info.changeScoreBy(1)
    sprites.destroy(sprite)
})
let Arbolito: Sprite = null
let Personaje: Sprite = null
scene.setBackgroundImage(assets.image`Fondo  Color`)
tiles.setCurrentTilemap(tilemap`Fondo`)
Personaje = sprites.create(assets.image`Dino`, SpriteKind.Player)
tiles.placeOnRandomTile(Personaje, assets.tile`Start`)
Personaje.ay = 500
scene.centerCameraAt(80, 196)
info.setLife(3)
info.setScore(0)
game.onUpdateInterval(2000, function () {
    Arbolito = sprites.createProjectileFromSide(assets.image`Arbolito`, -65, 0)
    Arbolito.setPosition(160, 228)
})
