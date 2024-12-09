namespace SpriteKind {
    export const boss = SpriteKind.create()
    export const enemigo2 = SpriteKind.create()
    export const escudo = SpriteKind.create()
    export const obstaculo = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.obstaculo, function (sprite, otherSprite) {
    sprites.destroy(sprite)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.enemigo2, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.rings, 200)
    sprites.destroy(projectile)
    for (let index = 0; index < 2; index++) {
        pause(100)
        info.changeScoreBy(10)
    }
    if (info.score() % 100 == 0) {
        info.changeLifeBy(1)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.enemigo2, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeLifeBy(-1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (recarga < 5) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . 2 2 2 2 . . . . . . 
            . . . . . . 2 2 2 2 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, nave, 0, -70)
        recarga += 1
    }
})
sprites.onDestroyed(SpriteKind.boss, function (sprite) {
    generarjefe += -2
})
sprites.onDestroyed(SpriteKind.escudo, function (sprite) {
    generarjefe += 1
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.boss, function (sprite, otherSprite) {
    vida_escudo += -1
    sprites.destroy(sprite)
    if (vida_escudo == 1) {
        animation.runImageAnimation(
        jefe1,
        assets.animation`myAnim`,
        200,
        false
        )
        generarjefe += 1
        jefe1.vx = 0
        jefe1.setBounceOnWall(false)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.rings, 200)
    sprites.destroy(sprite)
    info.changeScoreBy(10)
    if (info.score() % 100 == 0) {
        info.changeLifeBy(1)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeLifeBy(-1)
})
let patoboom: Sprite = null
let boti: Sprite = null
let guardias: Sprite = null
let jefe1: Sprite = null
let vida_escudo = 0
let projectile: Sprite = null
let nave: Sprite = null
let recarga = 0
info.setScore(480)
info.setLife(5)
recarga = 0
let generarjefe = 0
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffff1fffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffff1fffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffff99d999999bbbbbbbbcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffff99dddbdd6666661688bbcccccccc9999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffff999999ddbbbbd666666888111111ccccccccccb99ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    f99966dddddbbbbb66888888811881188ccccccccccbbc999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    f99966dddddbbbbb66888888811881188ccccccccccbbc999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    d699dddbbbbbb66661888888818888888188818cccccccccbe9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    d966dd6bbbb6dbdd6888888888888888888888888888ccccccc999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    d966dd6bbbb6dbdd6888888888888888888888888888ccccccc999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    d966dd6bbbb6dbdd6888888888888888888888888888ccccccc999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    96666666666dbb66688888886888888888ccccccccccccccccccccccc9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    96666966666d68886688888888888ccccccccccccccccccccccccccccc699fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    96666966666d68886688888888888ccccccccccccccccccccccccccccc699ffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffff
    669966666666688888888888888cccccccbbbbccccc8bcccccccccccccccc99fffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffff
    66666666666688888888888888cbbbbccbee8bbbbbbcbccccccbbbbbbccccbb99ffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffff
    6666666666668888888888888bcccbb88888888bbbbbbbbb888888888bccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    666666688886688888688888bbbbbbb888888888888ccc8888b888888bbcc88cccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    666666688886688888688888bbbbbbb888888888888ccc8888b888888bbcc88cccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    666666888886888886888888bbcbb888888888888888bc8888bcccccc8bcc88886cc9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    666666888886888886888888bbcbb888888888888888bc8888bcccccc8bcc88886cc9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    6666688888868888888888888888888888bb888888888888888cccccc8ccccc88866c9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    66666666666868888888888888888bbbbdbbbebbbbb888888888888888bcccc88c886c9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffff
    66666688888868888688888888dddddddddddddeeee888888888888888bccccbbbcccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    6666688666688888888bbbbbdddddddddbddbbdddddccccccd888888b8ebbccccbbbbbc9999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    6666688666688888888bbbbbdddddddddbddbbdddddccccccd888888b8ebbccccbbbbbc9999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    6666688666688888888bbbbbdddddddddbddbbdddddccccccd888888b8ebbccccbbbbbc9999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    6666688666688888888bbbbbdddddddddbddbbdddddccccccd888888b8ebbccccbbbbbc9999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    6666688666688888888bbbbbdddddddbbbbbbbdbbbbbbcccccccccccb8bbbbbccccc8bbbbbb9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    6666666666688888bbbddddddddddbbbbbdddbbbbbbbbbbbbbcccccccc8bbcccccbbb8bbbbbcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    6666686888888888bbdddddddbbbbbbddbbbbbbbbbbbbbbbbcccccccccc88bbbbcccc88bbbbc9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    66668868888868bbbdddddddddbbbbbddbbbbbbbbbbbbbbbbbcbbbbbccc8888bbccccc88888c6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    66dd8868888666bbddbbbbbbbddbbbbddbbbbbbbbbbbbbbbbbccccccccccc8888bbbccc8888869ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    66dd8868888666bbddbbbbbbbddbbbbddbbbbbbbbbbbbbbbbbccccccccccc8888bbbccc8888869ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    66dd6688888668bbddbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccc888bbccccccc866ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    66dd6688888668bbddbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccc888bbccccccc866ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    66666688888668bbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccc88888bbcccccc6699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    66666688888868bbddbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccc8888bbccccc8699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
nave = sprites.create(img`
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    .........................fffffffffffff..........................
    ......................ffff99999999999ffff.......................
    ....................fff99999999999999999fff.....................
    ..................fff999999994444999999999fff...................
    ..........ffffff.ff9999999994444449999999999ff.ffffff...........
    .........f888888ff999999999944455499999999999ff888888f..........
    .........f88888ff99999999999445544999999999999ff88888f..........
    .........f8888ff9999999999955555555999999999999ff8888f..........
    .........f8888f999999999995555555555999999999999f8888f..........
    .........f8888f999999999995555555555999999999999f8888f..........
    .........f888f99999999999955555555559999999999999f888f..........
    .........f888f99999999999955555555559999999999999f888f..........
    .........f88f9999999999999555555555599999999999999f88f..........
    .........f88f9999999999999555555555599999999999999f88f..........
    .........f88f9999999999999955555555999999999999999f88f..........
    .........f88f9999999999999995555559999999999999999f88f..........
    .........f88f9999999999999995555559999999999999999f88f..........
    .........f88f999999999999555f555555559999999999999f88f..........
    .........f88ff999999999555555fff55555599999999999ff88f..........
    .........f88f8fff999995555555555ff555555999999fff8f88f..........
    .........f88f8fff999995555555555ff555555999999fff8f88f..........
    .........f88f8888fff99555555555555f55555999fff8888f88f..........
    .........f88f8888888fffffffffffffffffffffff8888888f88f..........
    .........f88f8888888888888888888888888888888888888f88f..........
    .........f88f8888888888888888888888888888888888888f88f..........
    .........f88f8888888888888888888888888888888888888f88f..........
    .........f88f8888888888888888888888888888888888888f88f..........
    .........f88f8888888888888888888888888888888888888f88f..........
    .........f888f88888888888888888888888888888888888f888f..........
    .........f888f88888888888888888888888888888888888f888f..........
    .........f8888f888888888888888888888888888888888f8888f..........
    .........f88888f8888888888888888888888888888888ff8888f..........
    .........f888888f88888888888888888888888888888f888888f..........
    .........f888888fff8888888888888888888888888fff888888f..........
    .........f888888f.ff88888888888888888888888ff.f888888f..........
    .........f888888f..f88888888888888888888888f..f888888f..........
    ..........ffffff....fff88888888888888888fff....ffffff...........
    ...........bbbb........fffffffffffffffff........bbbb............
    ..........bbbbbb...............................bbbbbb...........
    .........bbbbbbbb.............................bbbbbbbb..........
    .........bbbbbbbb.............................bbbbbbbb..........
    .........bcbcbcbc.............................cbcbcbcb..........
    ..........444444...............................444444...........
    .........44422444.............................44222444..........
    .........44222444.............................44222444..........
    .........44222444.............................44422444..........
    ..........442244...............................444244...........
    ..........442244...............................444444...........
    ...........4444.................................4444............
    ...........4444.................................4444............
    ............44...................................44.............
    .............4....................................4.............
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    `, SpriteKind.Player)
controller.moveSprite(nave)
nave.setPosition(78, 104)
nave.setStayInScreen(true)
nave.setScale(0.5, ScaleAnchor.Middle)
game.onUpdate(function () {
    if (Math.percentChance(50)) {
    	
    }
})
game.onUpdateInterval(randint(2000, 3000 - 2 * info.score()), function () {
    if (generarjefe == 1) {
        guardias = sprites.createProjectileFromSide(assets.image`myImage5`, 0, 15)
        guardias.setPosition(randint(0, scene.screenWidth()), 0)
        guardias.setVelocity(0, 60)
        guardias.setKind(SpriteKind.obstaculo)
        guardias.setScale(1, ScaleAnchor.Middle)
    }
})
game.onUpdateInterval(randint(3500, 6000 - 2 * info.score()), function () {
    if (generarjefe == 0) {
        if (info.score() > 140) {
            boti = sprites.createProjectileFromSide(assets.image`myImage3`, 50, 50)
            boti.setPosition(randint(0, scene.screenWidth()), 0)
            boti.setVelocity(-60, 59)
            boti.setBounceOnWall(true)
            timer.after(2500, function () {
                boti.setBounceOnWall(false)
            })
            boti.setKind(SpriteKind.enemigo2)
            boti.setScale(0.5, ScaleAnchor.Middle)
        }
    }
})
game.onUpdateInterval(randint(3500, 6000 - 2 * info.score()), function () {
    if (generarjefe == 0) {
        patoboom = sprites.createProjectileFromSide(assets.image`myImage11`, 0, 60)
        patoboom.setPosition(randint(0, scene.screenWidth()), 0)
        patoboom.setVelocity(0, 60)
        patoboom.setKind(SpriteKind.Enemy)
        patoboom.setScale(0.5, ScaleAnchor.Middle)
    }
})
game.onUpdateInterval(randint(3500, 6000 - 2 * info.score()), function () {
    if (generarjefe == 0) {
        if (info.score() > 150) {
            boti = sprites.createProjectileFromSide(assets.image`myImage3`, 50, 50)
            boti.setPosition(randint(0, scene.screenWidth()), 0)
            boti.setVelocity(-59, 60)
            boti.setBounceOnWall(true)
            boti.setKind(SpriteKind.enemigo2)
            boti.setScale(0.5, ScaleAnchor.Middle)
            timer.after(2500, function () {
                boti.setBounceOnWall(false)
            })
        }
    }
})
forever(function () {
    if (recarga == 5) {
        pause(5000)
        recarga += -5
    }
    if (info.score() % 490 == 0) {
        info.changeScoreBy(10)
        generarjefe += 1
        for (let index = 0; index < 4; index++) {
            sprites.destroy(boti)
            sprites.destroy(patoboom)
        }
        jefe1 = sprites.create(assets.image`myImage`, SpriteKind.boss)
        jefe1.setPosition(76, 16)
        vida_escudo = 20
        jefe1.setBounceOnWall(true)
        jefe1.vx = 20
    }
    if (true) {
    	
    }
})
