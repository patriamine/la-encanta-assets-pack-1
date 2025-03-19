multigame.onGameFinished(function (gameName) {
    sprites.destroyAllSpritesOfKind(SpriteKind.MiniMenu)
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    sprites.destroyAllSpritesOfKind(SpriteKind.Food)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.Text)
    effects.confetti.endScreenEffect()
    effects.starField.endScreenEffect()
    scroller.scrollBackgroundWithSpeed(0, 0)
    if (fase != "ending") {
        sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    }
    multigame.startGame(fase)
})
multigame.onLifeZero("game", function () {
    game.gameOver(false)
})
multigame.forever("game", function () {
    if (invencibilidad == 1) {
        for (let index = 0; index < 4; index++) {
            Jugador.setFlag(SpriteFlag.Invisible, true)
            pause(200)
            Jugador.setFlag(SpriteFlag.Invisible, false)
            pause(400)
        }
        invencibilidad = 0
    }
})
multigame.onStart("ending", function () {
    info.setLife(0)
    story.startCutscene(function () {
        tiles.setCurrentTilemap(tilemap`nivel4`)
        story.spriteMoveToLocation(Jugador, 110, 80, 100)
        story.spriteSayText(Jugador, "hemos llegado")
        Jugador.setImage(img`
            ......ffffffff......
            ......f2f222ff......
            ......fd1dd1df......
            ......d3fddf32......
            ......dddddddd......
            .......ddeddd.......
            ........dddd........
            .....d12ddddd1d.....
            ....dd12222221dd....
            ...ddd11111111ddd...
            ..dddd111e1111dddd..
            ..dddd11e1111edddd..
            .dddd.111111e1.dddd.
            .dddd.11111111.dddd.
            .ddd..11111111..ddd.
            ......55588555......
            ......55588555......
            ......55588555......
            ......55588555......
            ......55588555......
            ......55588555......
            .....7e99ee997e.....
            .....9999ee9999.....
            .....ffffffffff.....
            ....................
            `)
        Jugador.ay = 200
        encanta2 = sprites.create(img`
            ................
            .....eeeeee.....
            ....eeeeedee....
            ....ee1de1de....
            ....e3fddf3e....
            ....edddddde....
            ....eddfddde....
            ....eee22eee....
            ...eed1dd1dee...
            ...edd1111dde...
            ...ddd1111ddd...
            ..ddde1111eddd..
            ..dd..1111..dd..
            .....111111.....
            ....11111111....
            ......2222......
            ......dddd......
            ......dddd......
            .....dddddd.....
            ................
            `, SpriteKind.Player)
        encanta2.setPosition(116, 57)
        encanta2.ay = 200
        pause(1500)
        game.gameOver(true)
        game.setGameOverEffect(true, effects.confetti)
    })
})
multigame.onStart("story", function () {
    reyImg = img`
        ......................................................eeeeeeee................................
        .....................................................eeeeeeeeee...............................
        ..................................................eeeeeeeeeeeeeee.............................
        ................................................eeeeeeeeeeeeeeeeeee...........................
        ...............................................eeeeeeeeeeeeeeeeeeeee..........................
        .............................................ceeeeeeeeeeeeeeeeeeeeeee.........................
        ............................................eeeeeeeeeeeeeeeeeeeeeeeeed........................
        ...........................................eeeeeeeeeeeeeeeeeeeeeeeeeeed.......................
        ...........................................eeeeeeeeeeeeeeeeeeeeeeeeeeee.......................
        ..........................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeed......................
        ..........................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeee......................
        ..........................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeee......................
        ..........................................ceeeeeeeeeeeeeeeeeeeeeeeeeeeeee.....................
        ..........................................beeeeeeeeeeeeeeeeeeeeeeeeeeeeee.....................
        .........................................bbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee....................
        ..........................................ceeeebeeeeeeeeeeeeeeeeeeeeeeeeee....................
        ..........................................dddccbeeeeeeeeeeeeeeeeeeeeeeeeee....................
        .........................................bcddcddddeeeeeeeeeeddeeeeeeeeeeee....................
        ..........................................cddcddddddddddddddddeeeeeddddeee....................
        .........................................ddddddffccdddddddddddcfcbdddddeee....................
        .........................................fddddddcfffddddddddcfcbdbddddddee....................
        .........................................fdddddddddccddddddccdddddddddddee....................
        .........................................fddddddddddcdddddddddddddddddddcc....................
        .........................................fdddddddddddddddddddddddddddddddd....................
        .........................................fdddddddddddddddddddddddddddddddd....................
        ........................................bcddddcccccddddddddddccccddddddddd....................
        .......................................ffcddddccbbcfddddddddccbbccdddddddd....................
        .......................................fdddddddfcccccddddddddccfcddddddddd....................
        .......................................fdddddddddddddddddddddddddddddddddd....................
        .......................................fddddddddddddddddddddddddddcdddddd.....................
        ........................................fddddddddddddddddddddddddcdddddd......................
        ........................................fddddddddddddddddddddddddddddddd......................
        .........................................fcddddddddddddddddddddddddddddd......................
        ..........................................cdddddddddcddddddddddddddddddd......................
        ..........................................cdddddddddcdddddddddddddddddd.......................
        ...........................................dddddddddddddddddddddddddddd.......................
        ...........................................ddddddddccdddddddddddddddddd.......................
        ...........................................dddddddddddddddddddddddddddd.......................
        ...........................................dddddddddddddddddddddddddddd.......................
        ...........................................dddddddddddddddddddddddddddd.......................
        ...........................................cddddddddddddddddddddddddddd.......................
        ............................................cdddddddddddccccccdddddddc........................
        ............................................cbdddddddbcccccccdddddddd.........................
        ............................................ccbddddddcfcdddddddddddbc.........................
        ..............................................bddddddddddddddddddddb..........................
        ..............................................ccddddddddcdcfddddddbc..........................
        ...............................................ccddddddfccddddddddc...........................
        .................................................ddddddddddddddddc............................
        ..................................................dddddddccddddddc............................
        ..................................................cbddddddddddddfcb...........................
        ...................................................cbddddddddddcdd............................
        ....................................................ccdddddddccffddc..........................
        .....................................................ccdddddcfccbddc..........................
        .....................................................bddddddcbbdddbc..........................
        .....................................................ddbccdddddddddcc.........................
        .fffffffdf..........................................cddddddddddddddd..........................
        .fbfdfbfddf.........................................ccddddddddddddddcdddddddd.fffffffff.ff....
        .f.dddffddf.ff.......................................cddddddddddddddddccdddddff1111111ffff....
        .fffddddddddd.........................ff............ccdddddddddddddddddddddddff1111111111f....
        ..ff.dddddddd........................f.f..........ffdddddddddddddddddddddddddff1111111111f....
        fffffdddddddddd.....................f11.fff.fffffffdddddddddddddddddddddddddfff11111111111f...
        fdddddddddddddd.....................f1111.fffddddddddddddddddddddddddddddddddff11111111111f...
        ffddddddddddddf11..................f11111ffdddddddddddddddddddddddddddcdddddfb111111111111ff..
        .ffffdddddddddf111fff.............ff111111fddddddddddddddcddddddddddddddddfffb1111111111111f..
        ...f.ddddddddf1111d1f.............f11111111cddddddddddddddddddddddddddddddf1111111111111111f..
        ....ddddddddff1111111f...........ff11111111cbddddddddddddddddddddddddddddff1111111111111111f..
        ...ffdddddddf111111111ff.........f1111111111fbdddcddddddddddddddddddddddff111111111111111111f.
        ....fffffdddf1111111111ff......f.f1111111111fbddddddddcdddddddddddddddddff1d1111111111111111f.
        ........ffdff11111111111fff....fff1111111111fffdddddddddcdddddddcdddddfff1d11111111111111111f.
        .........ff.1111111111111fff...fbf111111111111ffffdddddddccddddcbddddfff11111111111111111111f.
        ...........ff11111111111111ff..f11111111111111111bfffffddddddddddddccbf111d11111111111ff111ff.
        ...........ff1111111111111111fff1111111111111111111111fffddddddddddc1c1d11d111111111fffffffff.
        ..........f1111111111111111111f1111111111111111111111c1dfffdddddddd1111111111111111.ffffffff..
        ..........f111111111111111111111111111111111111111111111fbfffffddddcc11111111111111fffff......
        ..........f1111111111111111111111111111111111111111111111ff11dfffff1111111111111111f..........
        ..........f11111111111111111111111111111111111111111111111111111f111111111111111111f..........
        ..........f111111111111111111111111111111111111111111111111111111111111111111111111f..........
        ..........f111111111111111111111111111111111111111111111111111111111111111111111111bf.........
        .........ff111111111111111111111111111111111111111111111111111111111111111111111111.f.........
        .........f11111111111111111111111111111111111111111111111111111111111111111111111111f.........
        .........ff111111111111111111111111111111.f111111111111111111111111111111111111d11dff.........
        ..........fffffffffff1111111111111111111fff1111111111111111111111111111111111111d1ff..........
        .....................ff11ff111111111111ff.11111111111111111111111111111111111111fff...........
        ......................ffffffffff111111fff.111111111111111111111111111111111111fff.............
        ...............................ffffffff.ff111111111111111111111111111111111bbff...............
        .........................................ff11111111111111111111111111111bbbfff................
        ..........................................fffffff1111111111111111111111bfff...................
        .............................................bbbbfffff111111111111111ffffb....................
        ................................................bbbbbbffffffffffffffff........................
        .....................................................bbbbbbbbbbbf.............................
        `
    princesa2Img = img`
        99999999999999999999999999999999999999999bbbb999999999999999999999999999999999999999999
        99999999999999999999999999999999999999bbbeeeeee9999999999999999999999999999999999999999
        9999999999999999999999999999999999be9beeeeeeeeeeb99999999999999999999999999999999999999
        99999999999999999999999999999999beeebebebbecbeeeeeb999999999999999999999999999999999999
        9999999999999999999999999999999eeebbeebeebeebbeeeeeb99999999999999999999999999999999999
        999999999999999999999999999999beeebeeebeebeeebeeeeee99999999999999999999999999999999999
        99999999999999999999999999999beeeeeeeebeebbeebbeeeeee9999999999999999999999999999999999
        9999999999999999999999999999beeeeeeeeebeebbeeeeeeeeeeb999999999999999999999999999999999
        999999999999999999999999999ceeeeeeeeeebeeebeeeeeeeeeeeb99999999999999999999999999999999
        999999999999999999999999999beeeeeeeeeeeeeeeeeeeeeeeeeeec9999999999999999999999999999999
        99999999999999999999999999beeeeeeeeeeeeeeeeeeeeeeeeeeeeb9999999999999999999999999999999
        99999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeebeeb999999999999999999999999999999
        9999999999999999999999999beeeeeeeeeeeeeeeeeeeeeeeeeeebeeb999999999999999999999999999999
        999999999999999999999999beeeeeeeeeeeeeeeeeeeeeeeeeeeebeeeb99999999999999999999999999999
        999999999999999999999999beeeeeeeeeeeeeeeeeeeebbeeeeeeeeeeb99999999999999999999999999999
        999999999999999999999999eeeeeeeeeeeeeeeeeebcbbbbeeeeeeeeeb99999999999999999999999999999
        99999999999999999999999beeeeeeeeeebcbbebecbecbebbebeeeeeebb9999999999999999999999999999
        99999999999999999999999beeeeeeeeeebbbbbbbceeeeebbcbeeeeeebb9999999999999999999999999999
        9999999999999999999999bbeeeeeeeeebbbbbbbbbeeeeebbcebeeeeebe9999999999999999999999999999
        9999999999999999999999beeeeeeeebbbbbbebbbbeeeebbcbbbeeeeebeb999999999999999999999999999
        9999999999999999999999beeeeeeeebdbbbbebbbbbeebbbbbbeebeebeeb999999999999999999999999999
        9999999999999999999999bbeeeeeebbdbbbbebbbbceebcebbbbcbeebeeb999999999999999999999999999
        9999999999999999999999bbeeeeeebbdbebbbecbccbbbbebcbccceebeeb999999999999999999999999999
        9999999999999999999999eeeeeeeebbdbeebbfbbbbbcbbebfccccbbbeeb999999999999999999999999999
        9999999999999999999999eeeeeebbbbdbbbbbbbddbccbbcccccfcbcbbeb999999999999999999999999999
        9999999999999999999999bbbebbbcbbddbcbccbcbdccbbbcffcbfbbbbee999999999999999999999999999
        9999999999999999999999eeeebbbbcbddbffffccbdbbbddbfcccccbbbeeb99999999999999999999999999
        9999999999999999999999eeeecddbccddbfffcbcbdbcdbbdccbfcbccbeb999999999999999999999999999
        9999999999999999999999eeeecddbccbdbbffffbdbfbdbbdbbbbbbcceec999999999999999999999999999
        9999999999999999999999eeeecbdbbcbdddbcccdbcbddbbdbbcbbbbbeeb999999999999999999999999999
        99999999999999999999999eeebcdbcbdddbddbdddddddbdddbdbbbbbbbb999999999999999999999999999
        99999999999999999999999beeebcbccdddbcbddddddddbdddddbbcbbbbb999999999999999999999999999
        99999999999999999999999beebbbfccbddddddddddddbbdddddbbcbebbb999999999999999999999999999
        99999999999999999999999beebbbcbcdddddddddddddbbdddddbbbbebeb999999999999999999999999999
        99999999999999999999999beebccbbcdddddddddddddbbdddddbbbbebeb999999999999999999999999999
        99999999999999999999999beeebcbbbbddddddddddddbbdddddccbbbbbf999999999999999999999999999
        99999999999999999999999beeecbbbbbddddddddddddbbdddddccbbbbef999999999999999999999999999
        99999999999999999999999beebbdbdbbddddddddddddbddddddccbbbeec999999999999999999999999999
        99999999999999999999999eeebbdbdbbdddddddddddddddddddcccbbeec999999999999999999999999999
        9999999999999999999999beeebbbbdbcddddddddddddddddddbcbceeeec999999999999999999999999999
        9999999999999999999999beeebbccbbcddddddddddddddddddbcbbbbbeb999999999999999999999999999
        9999999999999999999999beeebcbcbbcdddddddddddddddddbcebbccbeb999999999999999999999999999
        9999999999999999999999beeebcbcbbbbdddddddbcbbdddddcbebbbcbebb99999999999999999999999999
        9999999999999999999999bbeeebcccbbcddddddcfbbccdddbceebbbbeebb99999999999999999999999999
        999999999999999999999cebeeebcfccbcbddddddbbbbbddbceeeeeeeeeeb99999999999999999999999999
        999999999999999999999beeeeeeebbccffbddddbbbbbbdbcbeeeeeeeeeeb99999999999999999999999999
        999999999999999999999beeeeeeeeeebcffbddddbbbcbbbceeeeeeeeeeeb99999999999999999999999999
        999999999999999999999cebbeebeebbeeccbcbbdddddbcceeeeeeeeebbeb99999999999999999999999999
        999999999999999999999bebeeeeeeeeeeecbbbbbbbbbcceeeeeeeeeeecbb99999999999999999999999999
        999999999999999999999bebeeeeeeeeeeebcbbbbbccccbeeeeeeeeeeeb99999999999999999999999db999
        99999999999999999999cbbbbeebeeeeeeebcbbbbbbdbcbeeeeeeeeeec99999999999999999999999dbcb99
        99999999999999999999cbbbbbbbbeebeeebcbbbbbbdbceeeeeeeeeeecf999999999999999999999ddcbdb9
        99999999999999999999bbbbbeebeeeeeeeebddddbbbbceeeeeeeeeeebf99999999999999999bd99d..ddc9
        9999999999999999999bbbbbeeeeeeeeeeeecdddddbdbceeeeeeeeeeeb999999999999999999bd9bd...bb9
        9999999999999999999ccbbbbbbbbbbbbbbfbddddddddcbeeeeeebeeeeb99999999999999999bbcdd..cbd9
        9999999999999999999fcccccbbbbcccbbbbdddddddddbbeeeeeeeeeeeb99999999999999999dbcbd..bdbb
        9999999999999999999cccbbbddbdbfbddddddddddddddcbeeeeeeeeeeb9999999999999999bddbcd.ddbbd
        99999999b9999999999fcddbbbdddbfbbbbccccddddddddbcbeeeeeeeeb9999999999999999bdddbdddbdd9
        9999bb99bb999999999cbbbddddddcccbbbbbdbcbdbbcbbddbbbbbbbeb99999999999999999bddddddddd99
        bb99bb99bb999999999bdddddddddbbcdddddddbddbcbbccbbbcccbbbc9999999999999999bddddddddb999
        9bbccbbfbdb99999999bbddddddcb11cbdddddddddddddddbbbccbddddd99999999999999bddddddddc9999
        9cbbbdbbbbbb9999999ddddddddb111bcbddddddddddddddddcccbdddddd999999999999cddbbddbbc99999
        9dcbbbbbbbbbb99999bddddddcdbb111bcbddddddddddddddbb1cbddddddd99999999999bdddddbcc999999
        99bbbbbbdbbbb99999bdddddcddb11111bcbddddddddddddbcb1cbdddddddb999999999bddddddc99999999
        99bbbbbbbbbbbb9999bdddddcddb1111111ccbdddddddddbcb11cbdddddddb99999999bddddddb999999999
        9bbbbbbbbbbbbbb999bddddddddbbb111111bccbbddddbbbcb11bbdddbddddb9999999bdbddddc999999999
        999ccbbbbbbbbbdb99bddddcdddbb111111111bbbbbbbbcbd11111ddddddddb999999bddbdddb9999999999
        999999bccbbbbbbb99bddddcdddbd1111111111111111111111111bddddddddc99999dddddddc9999999999
        99999999cbbbbbbbbfbddddcdddbb1111111111111111111111111bdbbdddddb9999bdddbddb99999999999
        999999999cbbbbbbbcbbdddcdddbb1111111111111111111111111cbbbdddbdb9999bdddbddc99999999999
        9999999999bdbbbbbbbddddcddddb1111111111111111111111111bcbddddddbd99bddddbdb999999999999
        99999999999bbbbbbbcbddddddddb1111111111111111111111111bfbddddddbb99bddddddc999999999999
        99999999999bdbbbbbbcbdddddbbb111111111111111111111111bbfbbddbbdbb9bdbbbbbb9999999999999
        999999999999bbbbbbbcbdddcbbbb111111111111111111111111bb9bddddbdbbcbdbbddbc9999999999999
        999999999999bbbbbbbbcdddcbdb1111111111111111111111111bc9bddddbddbbddbbddb99999999999999
        9999999999999bbbbbbbcbbdcbdb1111111111111111111111111bf99bdddbddcbddbbddc99999999999999
        9999999999999cbbbbbbcbbbcbbb11111111bbbb11bb1bb111b11c999bdbbbdbcbbbbbbb999999999999999
        99999999999999bbbbbbbbbbcbdb1111111b1111111111b11111b9999bddbbdbbbdbbbdc999999999999999
        99999999999999cbbbbbbbbbcbdb1111111b1111111111111111c9999cddbbdbbbbbbdb9999999999999999
        99999999999999cbbbbbbbbbcbbb1111111b111b111111b1111b999999bdbbdbbbbbbdc9999999999999999
        999999999999999cbbbbbbbbcbbbb11111bb111b11b111b111bc999999bdbbddbbbbbb99999999999999999
        9999999999999999bbbbbbdbcbddb1db111b11111111111111b99999999dbbddbbbbb999999999999999999
        9999999999999999cbbbbbbbbbbdbddb111b11111111111111c99999999bdbbbbbbdb999999999999999999
        99999999999999999cbbbbbcbbbbbbbbb11b111b11b111b11bc99999999bdbbbbbbbb999999999999999999
        999999999999999999bdbbb99bddbbdbb11b111b111111b111c999999999bbddbbbb9999999999999999999
        9999999999999999999bbbc999bbbddbb11b11111111111111c999999999bbbdbbbb9999999999999999999
        9999999999999999999999c99999bbdbb11b11111111111111c9999999999bbbbbb99999999999999999999
        99999999999999999999999999999cbb111bbbbb11bb11bb1bb9999999999bbbbbb99999999999999999999
        99999999999999999999999999999999bb111111111111111bc99999999999bdbb999999999999999999999
        999999999999999999999999999999999999bb1b11bbbbbcc999999999999999b9999999999999999999999
        `
    encanta_game_character = assets.image`la encantá`
    encanta = sprites.create(encanta_game_character, 0)
    rey = sprites.create(reyImg, 0)
    encanta.setPosition(40, 40)
    rey.setPosition(105, 40)
    story.printText("Hace muchos años en la localidad de Rojales", 80, 100, 15, 1, story.TextSpeed.Normal)
    story.printText("Un rey malvado maldijo a su hija por enamorase de un príncipe extranjero", 80, 100)
    rey.destroy()
    story.printText("La única manera de salvarla sería llevándola a la orilla del rio Segura", 80, 100)
    encanta.destroy(effects.fire, 500)
    story.printText("Por eso cada 100 años se aparece durante la noche de San Juan en el Cabezo Soler", 80, 100)
    story.printText("Años atrás un jornalero del pueblo la encontró y trató de salvarla...", 80, 100)
    fase = "standBy"
    multigame.finishGame("story")
})
multigame.onStart("game", function () {
    invencibilidad = 0
    info.setLife(3)
    scene.setBackgroundImage(img`
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddd33dddddddddddddddddddddddddddddddddddddd33dddddddddddddddddddddddddddddddddddddd33dddddddddddddddddddddddddddddddddddddd33dddddddddddddddd
        ddddddddddddddddddddddd3ddddddddddddddddddddddddddddddddddddddd3ddddddddddddddddddddddddddddddddddddddd3ddddddddddddddddddddddddddddddddddddddd3dddddddddddddddd
        ddddddddddddddddddddd3333dddddddddddddddddddddddddddddddddddd3333dddddddddddddddddddddddddddddddddddd3333dddddddddddddddddddddddddddddddddddd3333ddddddddddddddd
        dddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddddddddddddddd
        ddddddddddddddddddd3333333ddddddddddddddddddddddddddddddddd3333333ddddddddddddddddddddddddddddddddd3333333ddddddddddddddddddddddddddddddddd3333333dddddddddddddd
        ddddddddddddddddddd33333d3ddddddddddddddddddddddddddddddddd33333d3ddddddddddddddddddddddddddddddddd33333d3ddddddddddddddddddddddddddddddddd33333d3dddddddddddddd
        ddddddddddddbddddddd3333ddddddddddddddddddddddddddddbddddddd3333ddddddddddddddddddddddddddddbddddddd3333ddddddddddddddddddddddddddddbddddddd3333dddddddddddddddd
        ddddddddddddbdddddd3333333ddddddddddddddddddddddddddbdddddd3333333ddddddddddddddddddddddddddbdddddd3333333ddddddddddddddddddddddddddbdddddd3333333dddddddddddddd
        ddddddddddddbddddd33333333ddddddddddddddddddddddddddbddddd33333333ddddddddddddddddddddddddddbddddd33333333ddddddddddddddddddddddddddbddddd33333333dddddddddddddd
        ddddddddddddbdddd33333333333ddddddddddddddddddddddddbdddd33333333333ddddddddddddddddddddddddbdddd33333333333ddddddddddddddddddddddddbdddd33333333333dddddddddddd
        dd33ddddddddbdd3d3333333333333ddddbddddddd33ddddddddbdd3d3333333333333ddddbddddddd33ddddddddbdd3d3333333333333ddddbddddddd33ddddddddbdd3d3333333333333ddddbddddd
        d33333ddddddbdd333333333333333ddddbdddddd33333ddddddbdd333333333333333ddddbdddddd33333ddddddbdd333333333333333ddddbdddddd33333ddddddbdd333333333333333ddddbddddd
        33333333ddddbddd33333333333333ddddbddddd33333333ddddbddd33333333333333ddddbddddd33333333ddddbddd33333333333333ddddbddddd33333333ddddbddd33333333333333ddddbddddd
        333333333ddddbdddd333333333333ddddbddddd333333333ddddbdddd333333333333ddddbddddd333333333ddddbdddd333333333333ddddbddddd333333333ddddbdddd333333333333ddddbddddd
        d33333333dddddbdddd3333333444444dbbdddd3d33333333dddddbdddd3333333444444dbbdddd3d33333333dddddbdddd3333333444444dbbdddd3d33333333dddddbdddd3333333444444dbbdddd3
        d333333333dddddbb3333333444444444bdddd3dd333333333dddddbb3333333444444444bdddd3dd333333333dddddbb3333333444444444bdddd3dd333333333dddddbb3333333444444444bdddd3d
        33333333ddddddddbb33333333443443bbdddddd33333333ddddddddbb33333333443443bbdddddd33333333ddddddddbb33333333443443bbdddddd33333333ddddddddbb33333333443443bbdddddd
        333333333dddddd333b333333343334bb3ddddd3333333333dddddd333b333333343334bb3ddddd3333333333dddddd333b333333343334bb3ddddd3333333333dddddd333b333333343334bb3ddddd3
        3333b33dddddd33333333333333333bbdddddd333333b33dddddd33333333333333333bbdddddd333333b33dddddd33333333333333333bbdddddd333333b33dddddd33333333333333333bbdddddd33
        3333b3333ddddd333333333333333bbddddddd333333b3333ddddd333333333333333bbddddddd333333b3333ddddd333333333333333bbddddddd333333b3333ddddd333333333333333bbddddddd33
        3333b33b33dddddd333344444333333ddddddd333333b33b33dddddd333344444333333ddddddd333333b33b33dddddd333344444333333ddddddd333333b33b33dddddd333344444333333ddddddd33
        3333b33b33ddddd34444444444333333333ddd333333b33b33ddddd34444444444333333333ddd333333b33b33ddddd34444444444333333333ddd333333b33b33ddddd34444444444333333333ddd33
        3333b3b333dddd444444444443344433333ddd333333b3b333dddd444444444443344433333ddd333333b3b333dddd444444444443344433333ddd333333b3b333dddd444444444443344433333ddd33
        3333bbb3443d3334444444444443444333ddddd33333bbb3443d3334444444444443444333ddddd33333bbb3443d3334444444444443444333ddddd33333bbb3443d3334444444444443444333ddddd3
        3333bb3443334444444444444444344433dddd333333bb3443334444444444444444344433dddd333333bb3443334444444444444444344433dddd333333bb3443334444444444444444344433dddd33
        333bb33333444444444444444444433333333333333bb33333444444444444444444433333333333333bb33333444444444444444444433333333333333bb33333444444444444444444433333333333
        33bb333344444444444444443bb333333333b33333bb333344444444444444443bb333333333b33333bb333344444444444444443bb333333333b33333bb333344444444444444443bb333333333b333
        33b3333433334443443443443bb333443333b33333b3333433334443443443443bb333443333b33333b3333433334443443443443bb333443333b33333b3333433334443443443443bb333443333b333
        33b3b33333344434433444333bb333b44333b33333b3b33333344434433444333bb333b44333b33333b3b33333344434433444333bb333b44333b33333b3b33333344434433444333bb333b44333b333
        3bb3b33333343334333334333bb333b33333b3333bb3b33333343334333334333bb333b33333b3333bb3b33333343334333334333bb333b33333b3333bb3b33333343334333334333bb333b33333b333
        3bbbb33333333433344333333bb333b333333b333bbbb33333333433344333333bb333b333333b333bbbb33333333433344333333bb333b333333b333bbbb33333333433344333333bb333b333333b33
        3bbb333333334433443333333bb333b333333b333bbb333333334433443333333bb333b333333b333bbb333333334433443333333bb333b333333b333bbb333333334433443333333bb333b333333b33
        3b333333333343333333b3333bb33b3333333bbb3b333333333343333333b3333bb33b3333333bbb3b333333333343333333b3333bb33b3333333bbb3b333333333343333333b3333bb33b3333333bbb
        bb333333333333333333b3333bbb3b333333333bbb333333333333333333b3333bbb3b333333333bbb333333333333333333b3333bbb3b333333333bbb333333333333333333b3333bbb3b333333333b
        3b333333333333333333b3333bbbb333333333333b333333333333333333b3333bbbb333333333333b333333333333333333b3333bbbb333333333333b333333333333333333b3333bbbb33333333333
        3b333333333333333333b3333bbbb333444333333b333333333333333333b3333bbbb333444333333b333333333333333333b3333bbbb333444333333b333333333333333333b3333bbbb33344433333
        3b444334443333333333b3333bbb3334443333333b444334443333333333b3333bbb3334443333333b444334443333333333b3333bbb3334443333333b444334443333333333b3333bbb333444333333
        44444433444333333333b3333bbb33444334444444444433444333333333b3333bbb33444334444444444433444333333333b3333bbb33444334444444444433444333333333b3333bbb334443344444
        44443333b44433333333b3333bbb33333444444444443333b44433333333b3333bbb33333444444444443333b44433333333b3333bbb33333444444444443333b44433333333b3333bbb333334444444
        44444443b33333333b33b3333bbb33334444444444444443b33333333b33b3333bbb33334444444444444443b33333333b33b3333bbb33334444444444444443b33333333b33b3333bbb333344444444
        44444444443333333b33b3333bbbb3444434444444444444443333333b33b3333bbbb3444434444444444444443333333b33b3333bbbb3444434444444444444443333333b33b3333bbbb34444344444
        44444344443333333b33b3333bbb4444b433443444444344443333333b33b3333bbb4444b433443444444344443333333b33b3333bbb4444b433443444444344443333333b33b3333bbb4444b4334434
        3444333bb3bb33333b33b3333bbbb444b33443333444333bb3bb33333b33b3333bbbb444b33443333444333bb3bb33333b33b3333bbbb444b33443333444333bb3bb33333b33b3333bbbb444b3344333
        33b4333bb3b333333bb3bb333bbbb333bb33333333b4333bb3b333333bb3bb333bbbb333bb33333333b4333bb3b333333bb3bb333bbbb333bb33333333b4333bb3b333333bb3bb333bbbb333bb333333
        33b3333bbbb3333333bbbb333bbbb333bb33333333b3333bbbb3333333bbbb333bbbb333bb33333333b3333bbbb3333333bbbb333bbbb333bb33333333b3333bbbb3333333bbbb333bbbb333bb333333
        33b3333bb3333333333bbb333bbbb333bb33333333b3333bb3333333333bbb333bbbb333bb33333333b3333bb3333333333bbb333bbbb333bb33333333b3333bb3333333333bbb333bbbb333bb333333
        33b3333bb33333333333bbb33bbbb333bb33333333b3333bb33333333333bbb33bbbb333bb33333333b3333bb33333333333bbb33bbbb333bb33333333b3333bb33333333333bbb33bbbb333bb333333
        333b333bb33333333333bbb33bbbb333bb333333333b333bb33333333333bbb33bbbb333bb333333333b333bb33333333333bbb33bbbb333bb333333333b333bb33333333333bbb33bbbb333bb333333
        333bb3bbb3333443444334b33bbbb333bb33b333333bb3bbb3333443444334b33bbbb333bb33b333333bb3bbb3333443444334b33bbbb333bb33b333333bb3bbb3333443444334b33bbbb333bb33b333
        333bbbbbb3334444444444443bbbbb33bb33b333333bbbbbb3334444444444443bbbbb33bb33b333333bbbbbb3334444444444443bbbbb33bb33b333333bbbbbb3334444444444443bbbbb33bb33b333
        3333bbbbb334444444444444bbbbbb3bb33bb3333333bbbbb334444444444444bbbbbb3bb33bb3333333bbbbb334444444444444bbbbbb3bb33bb3333333bbbbb334444444444444bbbbbb3bb33bb333
        33333bbbb333443444444434bbbbbb3bb33b333333333bbbb333443444444434bbbbbb3bb33b333333333bbbb333443444444434bbbbbb3bb33b333333333bbbb333443444444434bbbbbb3bb33b3333
        33333bbb3344334444443433bbbbbb3bb3b3333333333bbb3344334444443433bbbbbb3bb3b3333333333bbb3344334444443433bbbbbb3bb3b3333333333bbb3344334444443433bbbbbb3bb3b33333
        33333bbb3333344334433433bbbbbb3bbb33333333333bbb3333344334433433bbbbbb3bbb33333333333bbb3333344334433433bbbbbb3bbb33333333333bbb3333344334433433bbbbbb3bbb333333
        33333bbb333b3433333333333bbbbbbb3333333333333bbb333b3433333333333bbbbbbb3333333333333bbb333b3433333333333bbbbbbb3333333333333bbb333b3433333333333bbbbbbb33333333
        33333bbb333b3333333333333bbbbbbb3333333333333bbb333b3333333333333bbbbbbb3333333333333bbb333b3333333333333bbbbbbb3333333333333bbb333b3333333333333bbbbbbb33333333
        33333bbb333b3b33333333333bbbbbbb3333333333333bbb333b3b33333333333bbbbbbb3333333333333bbb333b3b33333333333bbbbbbb3333333333333bbb333b3b33333333333bbbbbbb33333333
        33333bbb333b3b33333333333bbbbbb33333333333333bbb333b3b33333333333bbbbbb33333333333333bbb333b3b33333333333bbbbbb33333333333333bbb333b3b33333333333bbbbbb333333333
        33333bbb333b3b33333333333bbbbb333333333333333bbb333b3b33333333333bbbbb333333333333333bbb333b3b33333333333bbbbb333333333333333bbb333b3b33333333333bbbbb3333333333
        33333bb3333bbb33333333333bbbbb333333333333333bb3333bbb33333333333bbbbb333333333333333bb3333bbb33333333333bbbbb333333333333333bb3333bbb33333333333bbbbb3333333333
        33333bb333bbb333333333333bbbbb333333333333333bb333bbb333333333333bbbbb333333333333333bb333bbb333333333333bbbbb333333333333333bb333bbb333333333333bbbbb3333333333
        3333bbb333b333333333dd333bbbbb3d333333333333bbb333b333333333dd333bbbbb3d333333333333bbb333b333333333dd333bbbbb3d333333333333bbb333b333333333dd333bbbbb3d33333333
        3333bbb333b3333333333dd3bbbbbb33dd3333d33333bbb333b3333333333dd3bbbbbb33dd3333d33333bbb333b3333333333dd3bbbbbb33dd3333d33333bbb333b3333333333dd3bbbbbb33dd3333d3
        3333bbb3bbb3333333333333bbbbbbb33d333dd33333bbb3bbb3333333333333bbbbbbb33d333dd33333bbb3bbb3333333333333bbbbbbb33d333dd33333bbb3bbb3333333333333bbbbbbb33d333dd3
        dd33bbbbbb33333333d33333bbbbbbb333333d33dd33bbbbbb33333333d33333bbbbbbb333333d33dd33bbbbbb33333333d33333bbbbbbb333333d33dd33bbbbbb33333333d33333bbbbbbb333333d33
        3dd3bbbbb33dd3333dd3333dbbbbbbbd333333333dd3bbbbb33dd3333dd3333dbbbbbbbd333333333dd3bbbbb33dd3333dd3333dbbbbbbbd333333333dd3bbbbb33dd3333dd3333dbbbbbbbd33333333
        3dddbbbbb333dd33dd33d3ddbbbbbbbd333d33333dddbbbbb333dd33dd33d3ddbbbbbbbd333d33333dddbbbbb333dd33dd33d3ddbbbbbbbd333d33333dddbbbbb333dd33dd33d3ddbbbbbbbd333d3333
        3dddbbb333333333d33dddddbbbbbbbdd3dd33d33dddbbb333333333d33dddddbbbbbbbdd3dd33d33dddbbb333333333d33dddddbbbbbbbdd3dd33d33dddbbb333333333d33dddddbbbbbbbdd3dd33d3
        ddddbbbd33333333333dddddbbbbbbbdddd33dddddddbbbd33333333333dddddbbbbbbbdddd33dddddddbbbd33333333333dddddbbbbbbbdddd33dddddddbbbd33333333333dddddbbbbbbbdddd33ddd
        ddddbbbd333d33ddd33dddddbbbbbbbdddddddddddddbbbd333d33ddd33dddddbbbbbbbdddddddddddddbbbd333d33ddd33dddddbbbbbbbdddddddddddddbbbd333d33ddd33dddddbbbbbbbddddddddd
        ddddbbbd33ddd3dddd3dddddbbbbbbbdddddddddddddbbbd33ddd3dddd3dddddbbbbbbbdddddddddddddbbbd33ddd3dddd3dddddbbbbbbbdddddddddddddbbbd33ddd3dddd3dddddbbbbbbbddddddddd
        ddddbbbdddddddddddddddddbbbbbbbdddddddddddddbbbdddddddddddddddddbbbbbbbdddddddddddddbbbdddddddddddddddddbbbbbbbdddddddddddddbbbdddddddddddddddddbbbbbbbddddddddd
        ddddbbb3ddddddddddddddddbbbbbbbdddddddddddddbbb3ddddddddddddddddbbbbbbbdddddddddddddbbb3ddddddddddddddddbbbbbbbdddddddddddddbbb3ddddddddddddddddbbbbbbbddddddddd
        ddddbbb3ddddddddddddddddbbbbbbbdddddddddddddbbb3ddddddddddddddddbbbbbbbdddddddddddddbbb3ddddddddddddddddbbbbbbbdddddddddddddbbb3ddddddddddddddddbbbbbbbddddddddd
        ddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbddddddddd
        ddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbddddddddd
        ddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbddddddddd
        ddddbbbb3dddddddddddddddbbbbbbbdddddddddddddbbbb3dddddddddddddddbbbbbbbdddddddddddddbbbb3dddddddddddddddbbbbbbbdddddddddddddbbbb3dddddddddddddddbbbbbbbddddddddd
        ddddbbbbbdddddddddddddddbbbbbbbdddddddddddddbbbbbdddddddddddddddbbbbbbbdddddddddddddbbbbbdddddddddddddddbbbbbbbdddddddddddddbbbbbdddddddddddddddbbbbbbbddddddddd
        ddddbbbbbdddddddddddddddbbbbbbbdddddddddddddbbbbbdddddddddddddddbbbbbbbdddddddddddddbbbbbdddddddddddddddbbbbbbbdddddddddddddbbbbbdddddddddddddddbbbbbbbddddddddd
        ddddbbbbb3ddddddddddddd3bbbbbbb3ddddddddddddbbbbb3ddddddddddddd3bbbbbbb3ddddddddddddbbbbb3ddddddddddddd3bbbbbbb3ddddddddddddbbbbb3ddddddddddddd3bbbbbbb3dddddddd
        ddddbbbbb3dddddddddddddbbbbbbbb3ddddddddddddbbbbb3dddddddddddddbbbbbbbb3ddddddddddddbbbbb3dddddddddddddbbbbbbbb3ddddddddddddbbbbb3dddddddddddddbbbbbbbb3dddddddd
        ddd3bbbbbbdddddddddddddbbbbbbbbbddddddddddd3bbbbbbdddddddddddddbbbbbbbbbddddddddddd3bbbbbbdddddddddddddbbbbbbbbbddddddddddd3bbbbbbdddddddddddddbbbbbbbbbdddddddd
        ddd3bbbbbbdddddddddddd3bbbbbbbbbddddddddddd3bbbbbbdddddddddddd3bbbbbbbbbddddddddddd3bbbbbbdddddddddddd3bbbbbbbbbddddddddddd3bbbbbbdddddddddddd3bbbbbbbbbdddddddd
        443bbbbbbb3dddddddddddbbbbbbbb4444444444443bbbbbbb3dddddddddddbbbbbbbb4444444444443bbbbbbb3dddddddddddbbbbbbbb4444444444443bbbbbbb3dddddddddddbbbbbbbb4444444444
        44444444bbbddddddddd33bbb44444444444444444444444bbbddddddddd33bbb44444444444444444444444bbbddddddddd33bbb44444444444444444444444bbbddddddddd33bbb444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        `)
    tiles.setCurrentTilemap(tilemap`level4`)
    scroller.scrollBackgroundWithSpeed(-50, 0)
    Jugador = sprites.create(img`
        ..............................
        .f.f.ff.......................
        .....f.f......................
        .f.f.ff...fffff...............
        ..........fffdf...............
        ..........ffd1d...............
        ..........fd3fd...............
        ..........dddddeee............
        ...........d22eeeee...........
        .........dd9d2eeeee...........
        .........dd9ddeeeee...........
        .........dd999eeeee...........
        ..........ddd9eeeeee..........
        ..........9dddeeeeee..........
        ..........99dddd111...........
        ..........9999dd1991..........
        ..........eeee711111..........
        ..........55551111111.........
        ...........55511111111........
        ...........8555..d.d..........
        ...........88555..............
        .........e888555..............
        .........e88..552.............
        .........ee8..222.............
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        `, SpriteKind.Player)
    animation.runImageAnimation(
    Jugador,
    assets.animation`myAnim`,
    200,
    true
    )
    Jugador.setPosition(12, 56)
    Jugador.ay = 400
})
function RandomizeImage (Image2: Image) {
    Picture = Image2
    for (let index2 = 0; index2 <= 14; index2++) {
        Pick = randint(0, 14)
        Picture.replace(index2, Pick)
    }
    scene.setBackgroundImage(Picture)
    timer.after(500, function () {
        RandomizeImage(scene.backgroundImage())
    })
}
multigame.onUpdateInterval("game", randint(1150, 1500), function () {
    enemyRandom = randint(1, 3)
    enemyRandom = randint(1, 3)
    if (enemyRandom == 1) {
        obstaculo = sprites.createProjectileFromSide(img`
            .............ccfff..............
            ...........ccddbcf..............
            ..........ccddbbf...............
            ..........fccbbcf...............
            .....fffffccccccff.........ccc..
            ...ffbbbbbbbcbbbbcfff....ccbbc..
            ..fbbbbbbbbcbcbbbbcccff.cdbbc...
            ffbbbbbbffbbcbcbbbcccccfcdbbf...
            fbcbbb11ff1bcbbbbbcccccffbbf....
            fbbb11111111bbbbbcccccccbbcf....
            .fb11133cc11bbbbcccccccccccf....
            ..fccc31c111bbbcccccbdbffbbcf...
            ...fc13c111cbbbfcddddcc..fbbf...
            ....fccc111fbdbbccdcc.....fbbf..
            ........ccccfcdbbcc........fff..
            .............fffff..............
            `, randint(-70, -125.5), 0)
    }
    if (enemyRandom == 2) {
        obstaculo = sprites.createProjectileFromSide(img`
            ........................
            ........................
            ........................
            ........................
            .........fffff..........
            ........f11111ff........
            .......fb111111bf.......
            .......f1111111dbf......
            ......fd111111dddf......
            ......fd11111ddddf......
            ......fd11dddddddf......
            ......f111dddddddf......
            ......f11fcddddddf......
            .....fb1111bdddbf.......
            .....f1b1bdfcfff........
            .....fbfbffffffff.......
            ......fffffffffff.ff....
            ...........ffffffff.....
            ........f1b1bffffff.....
            ........fbfbffffff......
            ........................
            ........................
            ........................
            ........................
            `, randint(-70, -125.5), 0)
    }
    if (enemyRandom == 3) {
        obstaculo = sprites.createProjectileFromSide(img`
            . . . . c c c c c c . . . . . . 
            . . . c 6 7 7 7 7 6 c . . . . . 
            . . c 7 7 7 7 7 7 7 7 c . . . . 
            . c 6 7 7 7 7 7 7 7 7 6 c . . . 
            . c 7 c 6 6 6 6 c 7 7 7 c . . . 
            . f 7 6 f 6 6 f 6 7 7 7 f . . . 
            . f 7 7 7 7 7 7 7 7 7 7 f . . . 
            . . f 7 7 7 7 6 c 7 7 6 f c . . 
            . . . f c c c c 7 7 6 f 7 7 c . 
            . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
            . c 7 7 2 7 7 c f c 6 7 7 6 c c 
            c 1 1 1 1 7 6 f c c 6 6 6 c . . 
            f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
            f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
            . f 6 1 1 1 1 1 1 6 6 6 f . . . 
            . . c c c c c c c c c f . . . . 
            `, randint(-70, -125.5), 0)
    }
    if (enemyRandom == 4) {
        obstaculo = sprites.createProjectileFromSide(assets.image`myImage1`, randint(-70, -125.5), 50)
    }
    obstaculo.setPosition(152, 92)
    obstaculo.setFlag(SpriteFlag.AutoDestroy, true)
})
sprites.onDestroyed(SpriteKind.Projectile, function (sprite2) {
    info.changeScoreBy(1)
})
multigame.onStart("standBy", function () {
    invencibilidad = 0
    scene.setBackgroundImage(img`
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddd33dddddddddddddddddddddddddddddddddddddd33dddddddddddddddddddddddddddddddddddddd33dddddddddddddddddddddddddddddddddddddd33dddddddddddddddd
        ddddddddddddddddddddddd3ddddddddddddddddddddddddddddddddddddddd3ddddddddddddddddddddddddddddddddddddddd3ddddddddddddddddddddddddddddddddddddddd3dddddddddddddddd
        ddddddddddddddddddddd3333dddddddddddddddddddddddddddddddddddd3333dddddddddddddddddddddddddddddddddddd3333dddddddddddddddddddddddddddddddddddd3333ddddddddddddddd
        dddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddddddddddddddd
        ddddddddddddddddddd3333333ddddddddddddddddddddddddddddddddd3333333ddddddddddddddddddddddddddddddddd3333333ddddddddddddddddddddddddddddddddd3333333dddddddddddddd
        ddddddddddddddddddd33333d3ddddddddddddddddddddddddddddddddd33333d3ddddddddddddddddddddddddddddddddd33333d3ddddddddddddddddddddddddddddddddd33333d3dddddddddddddd
        ddddddddddddbddddddd3333ddddddddddddddddddddddddddddbddddddd3333ddddddddddddddddddddddddddddbddddddd3333ddddddddddddddddddddddddddddbddddddd3333dddddddddddddddd
        ddddddddddddbdddddd3333333ddddddddddddddddddddddddddbdddddd3333333ddddddddddddddddddddddddddbdddddd3333333ddddddddddddddddddddddddddbdddddd3333333dddddddddddddd
        ddddddddddddbddddd33333333ddddddddddddddddddddddddddbddddd33333333ddddddddddddddddddddddddddbddddd33333333ddddddddddddddddddddddddddbddddd33333333dddddddddddddd
        ddddddddddddbdddd33333333333ddddddddddddddddddddddddbdddd33333333333ddddddddddddddddddddddddbdddd33333333333ddddddddddddddddddddddddbdddd33333333333dddddddddddd
        dd33ddddddddbdd3d3333333333333ddddbddddddd33ddddddddbdd3d3333333333333ddddbddddddd33ddddddddbdd3d3333333333333ddddbddddddd33ddddddddbdd3d3333333333333ddddbddddd
        d33333ddddddbdd333333333333333ddddbdddddd33333ddddddbdd333333333333333ddddbdddddd33333ddddddbdd333333333333333ddddbdddddd33333ddddddbdd333333333333333ddddbddddd
        33333333ddddbddd33333333333333ddddbddddd33333333ddddbddd33333333333333ddddbddddd33333333ddddbddd33333333333333ddddbddddd33333333ddddbddd33333333333333ddddbddddd
        333333333ddddbdddd333333333333ddddbddddd333333333ddddbdddd333333333333ddddbddddd333333333ddddbdddd333333333333ddddbddddd333333333ddddbdddd333333333333ddddbddddd
        d33333333dddddbdddd3333333444444dbbdddd3d33333333dddddbdddd3333333444444dbbdddd3d33333333dddddbdddd3333333444444dbbdddd3d33333333dddddbdddd3333333444444dbbdddd3
        d333333333dddddbb3333333444444444bdddd3dd333333333dddddbb3333333444444444bdddd3dd333333333dddddbb3333333444444444bdddd3dd333333333dddddbb3333333444444444bdddd3d
        33333333ddddddddbb33333333443443bbdddddd33333333ddddddddbb33333333443443bbdddddd33333333ddddddddbb33333333443443bbdddddd33333333ddddddddbb33333333443443bbdddddd
        333333333dddddd333b333333343334bb3ddddd3333333333dddddd333b333333343334bb3ddddd3333333333dddddd333b333333343334bb3ddddd3333333333dddddd333b333333343334bb3ddddd3
        3333b33dddddd33333333333333333bbdddddd333333b33dddddd33333333333333333bbdddddd333333b33dddddd33333333333333333bbdddddd333333b33dddddd33333333333333333bbdddddd33
        3333b3333ddddd333333333333333bbddddddd333333b3333ddddd333333333333333bbddddddd333333b3333ddddd333333333333333bbddddddd333333b3333ddddd333333333333333bbddddddd33
        3333b33b33dddddd333344444333333ddddddd333333b33b33dddddd333344444333333ddddddd333333b33b33dddddd333344444333333ddddddd333333b33b33dddddd333344444333333ddddddd33
        3333b33b33ddddd34444444444333333333ddd333333b33b33ddddd34444444444333333333ddd333333b33b33ddddd34444444444333333333ddd333333b33b33ddddd34444444444333333333ddd33
        3333b3b333dddd444444444443344433333ddd333333b3b333dddd444444444443344433333ddd333333b3b333dddd444444444443344433333ddd333333b3b333dddd444444444443344433333ddd33
        3333bbb3443d3334444444444443444333ddddd33333bbb3443d3334444444444443444333ddddd33333bbb3443d3334444444444443444333ddddd33333bbb3443d3334444444444443444333ddddd3
        3333bb3443334444444444444444344433dddd333333bb3443334444444444444444344433dddd333333bb3443334444444444444444344433dddd333333bb3443334444444444444444344433dddd33
        333bb33333444444444444444444433333333333333bb33333444444444444444444433333333333333bb33333444444444444444444433333333333333bb33333444444444444444444433333333333
        33bb333344444444444444443bb333333333b33333bb333344444444444444443bb333333333b33333bb333344444444444444443bb333333333b33333bb333344444444444444443bb333333333b333
        33b3333433334443443443443bb333443333b33333b3333433334443443443443bb333443333b33333b3333433334443443443443bb333443333b33333b3333433334443443443443bb333443333b333
        33b3b33333344434433444333bb333b44333b33333b3b33333344434433444333bb333b44333b33333b3b33333344434433444333bb333b44333b33333b3b33333344434433444333bb333b44333b333
        3bb3b33333343334333334333bb333b33333b3333bb3b33333343334333334333bb333b33333b3333bb3b33333343334333334333bb333b33333b3333bb3b33333343334333334333bb333b33333b333
        3bbbb33333333433344333333bb333b333333b333bbbb33333333433344333333bb333b333333b333bbbb33333333433344333333bb333b333333b333bbbb33333333433344333333bb333b333333b33
        3bbb333333334433443333333bb333b333333b333bbb333333334433443333333bb333b333333b333bbb333333334433443333333bb333b333333b333bbb333333334433443333333bb333b333333b33
        3b333333333343333333b3333bb33b3333333bbb3b333333333343333333b3333bb33b3333333bbb3b333333333343333333b3333bb33b3333333bbb3b333333333343333333b3333bb33b3333333bbb
        bb333333333333333333b3333bbb3b333333333bbb333333333333333333b3333bbb3b333333333bbb333333333333333333b3333bbb3b333333333bbb333333333333333333b3333bbb3b333333333b
        3b333333333333333333b3333bbbb333333333333b333333333333333333b3333bbbb333333333333b333333333333333333b3333bbbb333333333333b333333333333333333b3333bbbb33333333333
        3b333333333333333333b3333bbbb333444333333b333333333333333333b3333bbbb333444333333b333333333333333333b3333bbbb333444333333b333333333333333333b3333bbbb33344433333
        3b444334443333333333b3333bbb3334443333333b444334443333333333b3333bbb3334443333333b444334443333333333b3333bbb3334443333333b444334443333333333b3333bbb333444333333
        44444433444333333333b3333bbb33444334444444444433444333333333b3333bbb33444334444444444433444333333333b3333bbb33444334444444444433444333333333b3333bbb334443344444
        44443333b44433333333b3333bbb33333444444444443333b44433333333b3333bbb33333444444444443333b44433333333b3333bbb33333444444444443333b44433333333b3333bbb333334444444
        44444443b33333333b33b3333bbb33334444444444444443b33333333b33b3333bbb33334444444444444443b33333333b33b3333bbb33334444444444444443b33333333b33b3333bbb333344444444
        44444444443333333b33b3333bbbb3444434444444444444443333333b33b3333bbbb3444434444444444444443333333b33b3333bbbb3444434444444444444443333333b33b3333bbbb34444344444
        44444344443333333b33b3333bbb4444b433443444444344443333333b33b3333bbb4444b433443444444344443333333b33b3333bbb4444b433443444444344443333333b33b3333bbb4444b4334434
        3444333bb3bb33333b33b3333bbbb444b33443333444333bb3bb33333b33b3333bbbb444b33443333444333bb3bb33333b33b3333bbbb444b33443333444333bb3bb33333b33b3333bbbb444b3344333
        33b4333bb3b333333bb3bb333bbbb333bb33333333b4333bb3b333333bb3bb333bbbb333bb33333333b4333bb3b333333bb3bb333bbbb333bb33333333b4333bb3b333333bb3bb333bbbb333bb333333
        33b3333bbbb3333333bbbb333bbbb333bb33333333b3333bbbb3333333bbbb333bbbb333bb33333333b3333bbbb3333333bbbb333bbbb333bb33333333b3333bbbb3333333bbbb333bbbb333bb333333
        33b3333bb3333333333bbb333bbbb333bb33333333b3333bb3333333333bbb333bbbb333bb33333333b3333bb3333333333bbb333bbbb333bb33333333b3333bb3333333333bbb333bbbb333bb333333
        33b3333bb33333333333bbb33bbbb333bb33333333b3333bb33333333333bbb33bbbb333bb33333333b3333bb33333333333bbb33bbbb333bb33333333b3333bb33333333333bbb33bbbb333bb333333
        333b333bb33333333333bbb33bbbb333bb333333333b333bb33333333333bbb33bbbb333bb333333333b333bb33333333333bbb33bbbb333bb333333333b333bb33333333333bbb33bbbb333bb333333
        333bb3bbb3333443444334b33bbbb333bb33b333333bb3bbb3333443444334b33bbbb333bb33b333333bb3bbb3333443444334b33bbbb333bb33b333333bb3bbb3333443444334b33bbbb333bb33b333
        333bbbbbb3334444444444443bbbbb33bb33b333333bbbbbb3334444444444443bbbbb33bb33b333333bbbbbb3334444444444443bbbbb33bb33b333333bbbbbb3334444444444443bbbbb33bb33b333
        3333bbbbb334444444444444bbbbbb3bb33bb3333333bbbbb334444444444444bbbbbb3bb33bb3333333bbbbb334444444444444bbbbbb3bb33bb3333333bbbbb334444444444444bbbbbb3bb33bb333
        33333bbbb333443444444434bbbbbb3bb33b333333333bbbb333443444444434bbbbbb3bb33b333333333bbbb333443444444434bbbbbb3bb33b333333333bbbb333443444444434bbbbbb3bb33b3333
        33333bbb3344334444443433bbbbbb3bb3b3333333333bbb3344334444443433bbbbbb3bb3b3333333333bbb3344334444443433bbbbbb3bb3b3333333333bbb3344334444443433bbbbbb3bb3b33333
        33333bbb3333344334433433bbbbbb3bbb33333333333bbb3333344334433433bbbbbb3bbb33333333333bbb3333344334433433bbbbbb3bbb33333333333bbb3333344334433433bbbbbb3bbb333333
        33333bbb333b3433333333333bbbbbbb3333333333333bbb333b3433333333333bbbbbbb3333333333333bbb333b3433333333333bbbbbbb3333333333333bbb333b3433333333333bbbbbbb33333333
        33333bbb333b3333333333333bbbbbbb3333333333333bbb333b3333333333333bbbbbbb3333333333333bbb333b3333333333333bbbbbbb3333333333333bbb333b3333333333333bbbbbbb33333333
        33333bbb333b3b33333333333bbbbbbb3333333333333bbb333b3b33333333333bbbbbbb3333333333333bbb333b3b33333333333bbbbbbb3333333333333bbb333b3b33333333333bbbbbbb33333333
        33333bbb333b3b33333333333bbbbbb33333333333333bbb333b3b33333333333bbbbbb33333333333333bbb333b3b33333333333bbbbbb33333333333333bbb333b3b33333333333bbbbbb333333333
        33333bbb333b3b33333333333bbbbb333333333333333bbb333b3b33333333333bbbbb333333333333333bbb333b3b33333333333bbbbb333333333333333bbb333b3b33333333333bbbbb3333333333
        33333bb3333bbb33333333333bbbbb333333333333333bb3333bbb33333333333bbbbb333333333333333bb3333bbb33333333333bbbbb333333333333333bb3333bbb33333333333bbbbb3333333333
        33333bb333bbb333333333333bbbbb333333333333333bb333bbb333333333333bbbbb333333333333333bb333bbb333333333333bbbbb333333333333333bb333bbb333333333333bbbbb3333333333
        3333bbb333b333333333dd333bbbbb3d333333333333bbb333b333333333dd333bbbbb3d333333333333bbb333b333333333dd333bbbbb3d333333333333bbb333b333333333dd333bbbbb3d33333333
        3333bbb333b3333333333dd3bbbbbb33dd3333d33333bbb333b3333333333dd3bbbbbb33dd3333d33333bbb333b3333333333dd3bbbbbb33dd3333d33333bbb333b3333333333dd3bbbbbb33dd3333d3
        3333bbb3bbb3333333333333bbbbbbb33d333dd33333bbb3bbb3333333333333bbbbbbb33d333dd33333bbb3bbb3333333333333bbbbbbb33d333dd33333bbb3bbb3333333333333bbbbbbb33d333dd3
        dd33bbbbbb33333333d33333bbbbbbb333333d33dd33bbbbbb33333333d33333bbbbbbb333333d33dd33bbbbbb33333333d33333bbbbbbb333333d33dd33bbbbbb33333333d33333bbbbbbb333333d33
        3dd3bbbbb33dd3333dd3333dbbbbbbbd333333333dd3bbbbb33dd3333dd3333dbbbbbbbd333333333dd3bbbbb33dd3333dd3333dbbbbbbbd333333333dd3bbbbb33dd3333dd3333dbbbbbbbd33333333
        3dddbbbbb333dd33dd33d3ddbbbbbbbd333d33333dddbbbbb333dd33dd33d3ddbbbbbbbd333d33333dddbbbbb333dd33dd33d3ddbbbbbbbd333d33333dddbbbbb333dd33dd33d3ddbbbbbbbd333d3333
        3dddbbb333333333d33dddddbbbbbbbdd3dd33d33dddbbb333333333d33dddddbbbbbbbdd3dd33d33dddbbb333333333d33dddddbbbbbbbdd3dd33d33dddbbb333333333d33dddddbbbbbbbdd3dd33d3
        ddddbbbd33333333333dddddbbbbbbbdddd33dddddddbbbd33333333333dddddbbbbbbbdddd33dddddddbbbd33333333333dddddbbbbbbbdddd33dddddddbbbd33333333333dddddbbbbbbbdddd33ddd
        ddddbbbd333d33ddd33dddddbbbbbbbdddddddddddddbbbd333d33ddd33dddddbbbbbbbdddddddddddddbbbd333d33ddd33dddddbbbbbbbdddddddddddddbbbd333d33ddd33dddddbbbbbbbddddddddd
        ddddbbbd33ddd3dddd3dddddbbbbbbbdddddddddddddbbbd33ddd3dddd3dddddbbbbbbbdddddddddddddbbbd33ddd3dddd3dddddbbbbbbbdddddddddddddbbbd33ddd3dddd3dddddbbbbbbbddddddddd
        ddddbbbdddddddddddddddddbbbbbbbdddddddddddddbbbdddddddddddddddddbbbbbbbdddddddddddddbbbdddddddddddddddddbbbbbbbdddddddddddddbbbdddddddddddddddddbbbbbbbddddddddd
        ddddbbb3ddddddddddddddddbbbbbbbdddddddddddddbbb3ddddddddddddddddbbbbbbbdddddddddddddbbb3ddddddddddddddddbbbbbbbdddddddddddddbbb3ddddddddddddddddbbbbbbbddddddddd
        ddddbbb3ddddddddddddddddbbbbbbbdddddddddddddbbb3ddddddddddddddddbbbbbbbdddddddddddddbbb3ddddddddddddddddbbbbbbbdddddddddddddbbb3ddddddddddddddddbbbbbbbddddddddd
        ddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbddddddddd
        ddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbddddddddd
        ddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbddddddddd
        ddddbbbb3dddddddddddddddbbbbbbbdddddddddddddbbbb3dddddddddddddddbbbbbbbdddddddddddddbbbb3dddddddddddddddbbbbbbbdddddddddddddbbbb3dddddddddddddddbbbbbbbddddddddd
        ddddbbbbbdddddddddddddddbbbbbbbdddddddddddddbbbbbdddddddddddddddbbbbbbbdddddddddddddbbbbbdddddddddddddddbbbbbbbdddddddddddddbbbbbdddddddddddddddbbbbbbbddddddddd
        ddddbbbbbdddddddddddddddbbbbbbbdddddddddddddbbbbbdddddddddddddddbbbbbbbdddddddddddddbbbbbdddddddddddddddbbbbbbbdddddddddddddbbbbbdddddddddddddddbbbbbbbddddddddd
        ddddbbbbb3ddddddddddddd3bbbbbbb3ddddddddddddbbbbb3ddddddddddddd3bbbbbbb3ddddddddddddbbbbb3ddddddddddddd3bbbbbbb3ddddddddddddbbbbb3ddddddddddddd3bbbbbbb3dddddddd
        ddddbbbbb3dddddddddddddbbbbbbbb3ddddddddddddbbbbb3dddddddddddddbbbbbbbb3ddddddddddddbbbbb3dddddddddddddbbbbbbbb3ddddddddddddbbbbb3dddddddddddddbbbbbbbb3dddddddd
        ddd3bbbbbbdddddddddddddbbbbbbbbbddddddddddd3bbbbbbdddddddddddddbbbbbbbbbddddddddddd3bbbbbbdddddddddddddbbbbbbbbbddddddddddd3bbbbbbdddddddddddddbbbbbbbbbdddddddd
        ddd3bbbbbbdddddddddddd3bbbbbbbbbddddddddddd3bbbbbbdddddddddddd3bbbbbbbbbddddddddddd3bbbbbbdddddddddddd3bbbbbbbbbddddddddddd3bbbbbbdddddddddddd3bbbbbbbbbdddddddd
        443bbbbbbb3dddddddddddbbbbbbbb4444444444443bbbbbbb3dddddddddddbbbbbbbb4444444444443bbbbbbb3dddddddddddbbbbbbbb4444444444443bbbbbbb3dddddddddddbbbbbbbb4444444444
        44444444bbbddddddddd33bbb44444444444444444444444bbbddddddddd33bbb44444444444444444444444bbbddddddddd33bbb44444444444444444444444bbbddddddddd33bbb444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        `)
    tiles.setCurrentTilemap(tilemap`level4`)
    Jugador = sprites.create(img`
        ..................................................
        ..................................................
        ..................................................
        .....................fffffff......................
        ....................fffffffff.....................
        ....................fffffffff.....................
        ....................fd1fdd1ff.....................
        ....................f3fdddf3f.....................
        ............eeeeee..ddddddddd.....................
        ...........eeeeeee..ddddddddd.....................
        ...........eeeedeee.ddddeeddd.....................
        ..........eeee1dd1e..ddddddd......................
        ..........ede3fddf3...222dd.......................
        ..........eee33dd33d9ddddddd9dd...................
        ..........eeeddedddd9ddddddd9dd...................
        ..........eeee2d2.229ddddddd9ddd..................
        ...........eeeddddd1119999999ddd..................
        ...........eeeddddd1111999999ddd..................
        ...........eeeeddd11119199999ddd..................
        ............eeeddd11111919999ddd..................
        .............ee11222111911999dd...................
        .............dd.22d211191111111...................
        .............dd.2dd2299111221111..................
        ............ddd.2ddd211122d221111.................
        ..........dddd..222221112ddd21111.................
        .........dddd.......99112ddd2111111...............
        ....................99992222211111111.............
        ...................eeee77ee11111111111............
        ...................222277221111111111111..........
        ...................55555.5511111999991111.........
        ...................55555.55111191111999911........
        ...................55555.551199911111111..........
        ...................55555.51111111111111...........
        ...................55555.511111111................
        ...................55555.55555....................
        ...................55555.55555....................
        ...................55555.55555.d..................
        ...................55555.55555....................
        ..................2227ee.eee272...................
        ..................eeeeee.eeeeee...................
        ..................eeeeee.eeeeee...................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        `, SpriteKind.Player)
    Jugador.setPosition(12, 56)
    Jugador.ay = 400
    textSprite = textsprite.create(" press letter A")
    textSprite.setText("press letter A")
    textSprite.setPosition(81, 23)
})
multigame.forever("menu", function () {
    scene.setBackgroundImage(img`
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbdddbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbcccfccccceeccbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbffccccccccceecceebdbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbfcccccccccccccceeeeeeeecccdddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbfccccccccccccccccccceeeeeecceebbddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbcfccccccccccccccccccccccceeccceeefcdddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcfcccccccccccccccccccccccceeeccceeeeccddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbffccccccccccccccccccccccccceeeecceeeeeeebddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbffccccccccccccccccccccccccccceeeecccceeeeeeebddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbfffccccccccccccccccccccccccceeeeeeeeccccceeeeeeefbddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbcfccccccccccccccccccccccccccceebeeeeeccccfeeeeeeeeebdddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcfcccccccccccccccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeebdddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcccccccccccccccccccccccccccccccceeeeebeebeebbeeeeeeeeeeeeebddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddbcccccccccccccccccccccccccccccccccceeeeeeeeeebeeeeeebbeebeeeeebddddddddddddddddddddddddddddddddddddddddd
        bbbbbbbddddbbddbbbbdddddddddddddddddddddddddddddddddddbffcccccccccccccccccccccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeebddddddddddddddddddddddddddddddddddddddd
        bbbbbbbbbbbbbbbbbbbbbdddbddbdddddddddddddddddddddddddbfcccccccccccccccccccccccccccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeebdddddddddddddddddddddddddddddddddddddd
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddbbbcfcccccccccccccccccccccccccccccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeebddddddddddddddddddddddddddddddddddddd
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcfcccccccccccccccccccccccccccccccccccccccceeeccceeeeeeeeeeeeeeeeeeeeeeeeeeeebddddddddddddddddddddbdddddddddddddd
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbcccccccccccccccccccccccccccccccccccccccccceeecceeeceeeeeeeeeeeeeeeeeeeeeeeeeeebbdbbdddddbbbbbbbbdbdddddddddddddd
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbfffccccccccccfcccccccccccccccccccccccccccccccceecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbdbbbbbbbbbbbbbbbbbbbbbbbdddbdd
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcfcccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbdbbbbbbbbbbbbbbbbddddddddddd
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeeeeccceeeeeeeeeeeeeeeeeeeeeeeeeeccbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbcbcbbccbbbccccccffccccccccccccccccccccccccfcccccccccccccccccccccccceeeeeeeeeeecceeeeeeeceeeeeeeeeeeeeeeeeeeeeeebbbbbbbccccccccccbcccbbbbc
        bbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccceeccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbccbcccb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccecceeccceeeeceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbcccc
        cbccccccccbcbbbbcccccbbbbbbbcccfffcccccccccccccccccccccccccccccccccccffcccccccccccccccccceeeceeeeeeccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccccccbbbbbccc
        cccccbbbbbbbbbbcbcccccccffcfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeeeceeeeeeceeeeeeeeeeeeeeeeeeeeeeeeecccceeeeeeeeeeeeccbbbccccccccccccc
        cbccccbbbbbbcbbcccccccccccccccccccccccccccffccfcfcccccccccccfffccccccccccccccccccccccccccceeeceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccebeeeeeeeeeeeeeccccccccccccccc
        cccccbcccccccffcfffcccccccccccccccccccccccccccfcccccccccccccccccccccccccccccccccccccccecccceeceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeccccccccccccccceeccccceeeeeeeeeeeeeeeeeeeceeeeeeeeeccccceeeeeeccceeeeeeeeeeeeeecccccbcccc
        ccccccccccccccccccccccccccccccccccccccccccfcccfcccfffffcccccccccccccceeeeeecccceecccfcceecfcccceeeeeeeeeeeeeeeeccceeeeeccccccceeeeeeeecceeeeeeeeeeeeeeeecccccccc
        cccccccccccccccccccccccccccfcccfcccccccccccccfffcccccccccccccccccccccceebeebeecccccccfceeeecccceecccceeeeceeeeeeceeeeeeeeccccceeeeeeeeeceeeeeeeeeeeeeeeeeeeeeecc
        ccccccccccccccccccccccccccccfffccccccfffcccccccccccccccccfccccccccccccbbbebbebeeccccccceeeeeccceefcccceecceeeecceeeeeeccceeecceecceeeeeceeeeeeeeeeeeeeeeeeeeeeee
        cccccccccccccccccccccccccccccccccfcccfcccccffcccccccccccccccccccccccccceebbeebbeeeeeeeeeeeeeeceeecccccccccceeeeeeeeeccccceeecceeccfcceeeeeecceeeeeeeeeeeeeeeeeee
        cccccccccccccccccccccccccccccccccccccccfffffffcccfccccccccccffcccccccceeebbeebbeeebeeeeeeeeeeeeeeeeccccccccccecceeeeeccccceeecceeeeeeeeeeeeeeeeeeceeeeeeeeeeeeee
        ffccfffccccccccccfccccccfcccccfccffccffffccccfcccccffcccfcfcccffcccccceeeccceebeeebeeeeeeeeeeeeeebeeecceeecccccccceeeecccceeeeeeeeeebeeceeeeeeeecceeeeeeeeceeeee
        ccccccccccfffcccccccccccccfccccffffccccccccccccccccccccccfcccffffccccceecccceeeeeeebefeeeeeeeeeeeeeeeeeeecccccccceeeececeeeeeeeeefeeeeecceeeeeeeeceeeeeeeeeeeeee
        ccccccccffcccccccccccccccfccccfffccccccccccccfccccccfcccfcccfccccccccceecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecffccccceeeeeeeeeeeeeeebeeeeeeeeeeeeeeeeeeeeebeeeeeeeee
        ccccccccfcccccccccccccccccfffffcccccfccfffffcccccccccccfcccccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        ccccffccccccccccccccfffcccccccccfccccfffffccccccccfccfffccccffcccccccccccccceebeeeeeeeeeebeeeeeeeeeeeeeeeecceeeccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        ccccccccccffccccccccfffccffffccccccfffcffccccfcccfcffccffcfffcccccccccccfffcceeeeceeeeeeeeebbeeeeeeeeeeeeeceeeeeceeeeeeebeeeeeeeeeeeeeeeeeeeeeeeceeeeeeeeeeeeeee
        cffcccfcffccccccccccccccffcffcfffffffccfffcffccccccccccfffcccfcccccccccccccccceeeeeccceeeeeeeeeeeeccceeeeceeeeeeeeeeeeeebeeeeeeeeeeeeeeeeeeeeeccccccccceeeeeeeee
        cccccfffffcccccffccccfcfffffffffffffcccffcffccccccffffffcccccccccccccceecccccceeeeeecceeeeeeeeeeeccfccceeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccceeeeeeee
        ccccccfffcccccfcccccccccccfcffccccccccccccfccccccfcffcccfffcccccccccccceeccccccceeeecceeeeeeeeeeeecfcccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccceeeeecc
        fccccccccffccfccfcffffffccccffcccfccccccffcfcccffcfcfccfffcccccccccccccceecccccccceeeeeceeeeeeeeeeeccccccceeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeceeeceecccceeeece
        cccccffccfccfffffffccfccccccccccccffcfccfcfccffffcffcccccfccccccccccccccccceccccccceeeeeeeeeeeeeeeeeeeecccceeeeeeeeeeeeeeeeeeeeeeeeeeeccceeeeeeeeeeeeeccceeeeeee
        ffccfffffffffffffffccfccccccccfcccccfcfffffcccffffcccfccffccccccccfccccccccceeccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccceeeeeeeeeeeccfceeeeee
        fffffffffffffffffffffffcccffccffffcccfcccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeeeeeeeeeeeeebccceeeeeeeeeeeeeeeeeeeeeeeeecccceeeeeeeeecccceeeeee
        ccfffffffffffffffffffffccfffffffffffffccccccccccccccfccccccccccccccccccccccccccccccccccccccccccceccecceeeeccccccccceeeeecceeeeeeeceeeeeeeecccceeeeeeeecccccecccc
        ffffffffffffffffffffcffffffffcffffcffcccccccfcccffffffccccccccccccccccccccccccccccffcfffcccccfcccfcccccccefccccccccccccccccecceeeccceeeceeeccccceeeeeccccccccccc
        ffffffffffffffffffffffffffffffffffffcfffffffcccffffcccccfccffffccccfffccfffccffcccccccccccccccccccccccccceeccccfcccccccccccccceeeeffcccceecccccccccccccceccecccc
        fffffffffffffcfcfffffffffffffcffffffffcffccfcfffffcccccfffccccfcfffffcccffccfccccffcccccfccccccccccccfffcccceeccccccccffcfcccccceeccccccccfffcffcccccccceeeecccc
        fffffffffffffffcffffffffcfccffffffcffccffccccfcfcffffccccfccfccfffcffcccfccfcccccfccfccfffcccccccccccfffffceefcccccccffffccccfccceeccfffcccccccccccccccceeeeeecf
        ffffcffffccfffffffffffcfcccffffffffffffccccffffcccffceecfccfffffcccfcccccceccccccccccccccfffcffccccccffffceeeccccccccffccecccffccceeecffccccccccccccccceeeeeeccc
        ccffcccffffffffffffffccffcffccffffffcfccccfffcffccccceecccccccfccccffffcfccccfccccccccccccfffffcccfcccffffccccffffffcfccccccffffccceeccfcccffcfccccccceeeeeeccfc
        fcfccccffffffffffffffffcfffcfffffffccfcccfffccccccccceeeeeccccfccfffffffffcffffccecffceeeeccfcceecccfffcfffffffffffffffffccfffffffcccfcffcfffffcccceeefeeeeeeecf
        fcceeecfffffffffffffffffffffffffffccccccfccccecccccceeeeeeeeeffcffffffffffcfffffeeeecceeeeeeeceeeccccffcccfffffffffcffffcfcfffcfffffffffffffffffffceecceeeeeeeee
        ccceeeecccccccccfcfcffffccccffffcfcccfffffcceeeccccceeeeeeeeeeccfffffffcfcfffccfeeeeeceeeeeeeeeecffccffcffcffffffffcccffffccfcccfffffffccfffffffccfeefffceeeeeee
        fffeeeeeeeccccccccccfffcffcffcfffcfffceeefccffcccccceeeeeeeeeeecfffffccfffffffcceeeeeeecceeeeeeeecfffffffffffffffffffffffccfffcccccfffffffffffccccfcecfffcccceee
        cffeeeeeeeeefcfffffccfcccfcffcfcffccceeeeeeeeffffffffcccfeeeeeeccffccccecccccffcccceeeeccccceeeefecffffccfffffffcccffccffccfffffccccccffffffffcfcfffccfffccfccee
        eeeeeeeeeeeeecffffffccccccccccceccceeeeeeeeeeeeefccffccccfceeeeccceeeeeeeecccccccfceeefccffffccffeccffffffffffffccfffccfcccccffffcccfccffffcccfffffffccffccffccc
        eeeeeefeeeeeecfccccceeeeccccccceeeeeeecceceeeeeeccfffffcccccccccccceeccceecccccccfccecffffffffffcfcfcfccffcccccccccccccfcfccccffffffffffffcccefffffffffffffffccc
        eeeecffffffffffcccccfcfffccccfccceeeeefffffffffffffffffffffffffffffccfffeefcccfffffccccfffffccfffffcccecfcccccccccccffcffccffffcfffffffffffcfcffffffffffffffffcc
        eeeeffcfccffffffcfffffffffffcccffeeeeefffffffcffffccfffffffffffffccffffceefcffffffffffffffffcccffffcceeeccccccccccffffffffffffccfccffffffffffcffffffffffffffffcf
        eeeeccfeecffffffccffffffffffffccfeeeeecffffffffcfccffffffcffffffccccfccceeccccffcccffffffcffcccfccfccccccccccccccccfccfccfccfffcceefffffffffffffffffffffffffffcf
        eeeecffeeffffcffffffffffffffffccfffcecfffffffcccffffffffffffffffffccfccccccccccfccccffffffffffffffffffffffcccccccccfccceeeeccffffcecffffffffffffccccccccfffffffc
        eeeeffeeeffffffffffffffffffffccfffffffffffffffffffffffffffffffffffffcccffcccfccfccccfcfffffffffffffffffffffffccccfffcccfcffcffffffccccffffffffffccceeeeeefffffcc
        ceefffcecfffffffffffffffffffffffffffffffffffffffffffffffccfccfffffffffffffffffccfcfffffffffffffffffffffffffffffffffffffffffffffffcffccfffffffffffffcceeeeecfcfcc
        fffffffccccffffffffffffffffffffffffffffffffffffffffffffccccccccccccffffffffffffffffcffffffffffffffffffcfffcffffffffffffffffffffffcfffcccfffffffffffffffceececfcf
        ffffffffffccffffffffcccccfffffffffffffffffffffccccccccfcccccccccffffffffffffffffffffffffffffffffffffcfcfcccfffffffffffffffffffffffffffffffffffffffccfffccfeffccf
        fffffffffffffcccccccccccfffffffffffffffffffccccccccccccccccccccccfffffffffffffffffffcffffffffffffffffccccccfffffffffffffffffffffffffffffffffffffffcecffceeefcfff
        ffffffffffffcccccccccccccccccfffffffffccffcccccccccccccccccccccccccfffffffffffffffffcfffffffffffffffcffcccfffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeff
        ccccccccccccccccecccccccbccccfffccccffcccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffccfffffffffffffffffffffcffffffffffffffffffffffceeeeeeeeeeecf
        cccccccccccccccceeccccccccccccccccccffccbbccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffccecfeeeeeeeff
        ccccccccccccccfceeeccccccccccccccccccfcccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffccffffffffffffffcffffffffffffffffffffffcccfeeeeefff
        cccccccccccccfcfceccccccccccccccccccccccccccccccccecccccccccccccccccfffffffffffffffffffffffffcfffffffffcffffccccccccccccfffffffffffffffffccfcfffffffffffceefffff
        cccccccccccfccffccfcccccccccccccccccccccccccceeeccecccccccccccccccccccccccccccccccccccccccccccccccccffccfffccccccccccccccccfccccccfffffccccccffffffffffffcffcffc
        cccccccccccffcfffffcccccccccccccccccccbbbcccceeeeeeeccccccccccccccccccccccccccccccccccccccccccccccccccccccccfcccccccccccccccccccccccccfcfffcffffffffffffffffffcf
        cccccccccccccfcccccccccccccccccccccccccbbcccceeeeeeeccceccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffff
        ccccccccccccfffcccccccccccccccccccccccccccccceeeeeeeccceeeecccccccccccccccccccccccccccccccccccccccecccccccccccccccccccccccccccccccccccccfffffccfffffffffffffffff
        ccccccccccccccccccccccccccccccccccccccccccccceeeeeecccfeeeeeccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffccccccccccccccccccccffffffffffcff
        cccccccccccccccccccccccccccccccccccccccccccceeeeeeeccffceeeeeebbbbbbbbcccccccccccccccccccccccceccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccffeeccccfeeeeeebbbbbbbbbbbbbbbbbbbbbbbbccccccbbbbbecccccccebbbccccccbcccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccbcccfffceecffceeeeeeccebbbbbbbbbbbbbbbbbbbbbcccccccebeecbeeeeebbbbbbbcccbbbbbbcccccccccccccccccccbbbccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccffffffeefffcffeeeeccbbbbbccccbbbbeebbeeebcccccccccccccceeebbeebbbbbbbebbbbebbbccccccccccccccbbbbbbbbbbbbbbbbccbbbbc
        cccccccccccccccccccccccccccccccccccccccbbbbccfffffceecfffffceeeccbbcbbbbcccceeeeeeeeeccccbcceeecccccceeeeeeeeecebbebbbbbbbeccbccccccccccbbbbbbbbbbbbbbbbbebbcccc
        cccccccccccccccfcccccccccccccccccccccccccccccfffffcffffffffffffccccccccccccccceeecffeeccebeeebeeeccccceebeeccccceeeeebbbbbbbbbbbbbbbbcccceeeebbeebbebbbbbccccccc
        cccccccccccccccfcccccccccccccccccccccccccccccffffffffffffffffcfffcccccccccccccffffffeecceeeebbbbeeeccceeeeeccccbeeeeeeebbbbcbbbbbbbbbbbbeebeeeeeeeeebebccbbbcccc
        cccccccccccccccfccccccccccccccccccccccccccccffffffffffffffffffffcccccbbcccccccffffffcfffeeeeebbbeeeecceeeeccccceeeeeeeebbbeecceeeeebbbecbbbbbbeeeeeeeeebbbebeeee
        cccccffccccecccccccccccccccccccccccccccccccffffffffffffffffffffccccccccccccfccffffffcffffceeeeeceeeeeeeeeccccceeeeeeeeeeeeeebbeeeeeebeeeeeeeeeeeeeeeebbbbbccceee
        bccccffccceecccccccccccccccccccccccccccccfffffffffffffffffffffffcfccccccfcffccffffffffcffcfceccccceeeecccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebebbcccceee
        bcccfcfccceeccfccccccccccccccccccccccccccfffffffffffffffffffffffcfffcccfffffffffffffffffcffcccccccceeccccccceeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccccce
        cccccfffccccfffcccccccccccccccccccccfccccfffffffffffffffffffffffffffcccffffffffffffffffffffffccfffceecccccccceeecccceeecccceeeeeeeeeeeeeeeeeeeeeeeeeecccccccccee
        cccccfffffffffccccccccffccccccccccffffffffffffffffffffffffffffffffcfffcfffffffffffffffffffffffffffccecfccfcccccccffcccccffcceeccceeecccffceeeeeeeeeeccccccccccee
        `)
    myMenu.onButtonPressed(controller.A, function (selection, selectedIndex) {
        if (selectedIndex == 0) {
            fase = "story"
            multigame.finishGame("menu")
        }
        if (selectedIndex == 1) {
            fase = "credits"
            multigame.finishGame("menu")
        }
    })
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    if (invencibilidad == 0) {
        invencibilidad = 1
        info.changeLifeBy(-1)
    }
})
multigame.A.onEvent("game", ControllerButtonEvent.Pressed, function () {
    if (Jugador.isHittingTile(CollisionDirection.Bottom)) {
        Jugador.vy = -200
    }
})
info.onLifeZero(function () {
    game.gameOver(false)
})
function Flash_Outline () {
    textSprite2.setOutline(1, 8)
    timer.after(100, function () {
        textSprite2.setOutline(1, 2)
        timer.after(100, function () {
            Flash_Outline()
        })
    })
}
info.onScore(50, function () {
    fase = "ending"
    multigame.finishGame("game")
})
function RoleCredits () {
    let SpecialThanks: number[] = []
    effects.starField.startScreenEffect()
    textSprite2 = textsprite.create("CREDITOS")
    textSprite2.x += -20
    textSprite2.y = 120
    textSprite2.vy = -30
    Flash_Outline()
    pause(500)
    textSprite2 = textsprite.create("")
    textSprite2.x += -50
    textSprite2.y = 120
    textSprite2.vy = -30
    Flash_Outline()
    pause(2000)
    while (index22 <= CreditsCharacters.length - 1) {
        textSprite = textsprite.create(CreditsCharacters[index22])
        textSprite.setOutline(1, 10)
        textSprite.vy = -30
        textSprite.y = 120
        textSprite.x += -40
        textSprite.setFlag(SpriteFlag.AutoDestroy, true)
        pause(300)
        CharacterText = textsprite.create("(" + CreditsCharactersNames[index22] + ")")
        CharacterText.setOutline(1, 10)
        CharacterText.vy = -30
        CharacterText.y = 120
        CharacterText.x += -40
        pause(1000)
        index22 += 1
    }
    pause(1000)
    textSprite2.x += -40
    textSprite2.y = 120
    textSprite2.vy = -30
    textSprite2.setFlag(SpriteFlag.AutoDestroy, true)
    Flash_Outline()
    pause(2000)
    while (index3 <= SpecialThanks.length - 1) {
        effects.starField.startScreenEffect()
        textSprite.setOutline(1, 10)
        textSprite.vy = -30
        textSprite.y = 120
        textSprite.x += -40
        textSprite.setFlag(SpriteFlag.AutoDestroy, true)
        pause(300)
        CharacterText.setOutline(1, 10)
        CharacterText.vy = -30
        CharacterText.y = 120
        CharacterText.x += -40
        CharacterText.setFlag(SpriteFlag.AutoDestroy, true)
        pause(1000)
        index3 += 1
    }
    textSprite = textsprite.create("Gracias por todo")
    textSprite.setOutline(1, 10)
    textSprite.vy = -30
    textSprite.y = 120
    textSprite.x += -40
    textSprite.setFlag(SpriteFlag.AutoDestroy, true)
    pause(5000)
    RoleCredits()
}
multigame.A.onEvent("standBy", ControllerButtonEvent.Pressed, function () {
    fase = "game"
    multigame.finishGame("standBy")
})
multigame.onStart("menu", function () {
    textSprite3 = textsprite.create("THE ENCANTÁ GAME")
    textSprite3.setPosition(81, 14)
    myMenu = miniMenu.createMenu(
    miniMenu.createMenuItem("JUGAR"),
    miniMenu.createMenuItem("CREDITOS")
    )
})
multigame.onStart("credits", function () {
    Reasons = 0
    music.stopAllSounds()
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
        `)
    RandomizeImage(scene.backgroundImage())
    music.play(music.createSong(hex`00780004080200`), music.PlaybackMode.LoopingInBackground)
    CreditsCharacters = [
    "Arturo",
    "Santi",
    "Miguel",
    "Rim",
    "Hugo",
    "Ismael",
    "Sofia",
    "keila",
    "Nerea",
    "Antonio",
    "Patricia"
    ]
    CreditsCharactersNames = [
    "programador",
    "programador",
    "programador",
    "ilustradora",
    "ilustrador",
    "ilustrador",
    "escritora",
    "editora",
    "editora",
    "editor",
    "directora",
    ""
    ]
    RoleCredits()
    console.log("thanks guys ")
})
let Reasons = 0
let textSprite3: TextSprite = null
let index3 = 0
let CreditsCharactersNames: string[] = []
let CharacterText: TextSprite = null
let CreditsCharacters: string[] = []
let index22 = 0
let textSprite2: TextSprite = null
let myMenu: miniMenu.MenuSprite = null
let textSprite: TextSprite = null
let obstaculo: Sprite = null
let enemyRandom = 0
let Pick = 0
let Picture: Image = null
let rey: Sprite = null
let encanta: Sprite = null
let encanta_game_character: Image = null
let princesa2Img: Image = null
let reyImg: Image = null
let encanta2: Sprite = null
let Jugador: Sprite = null
let invencibilidad = 0
let fase = ""
let encanta_game_character2 = null
let logo_cole_sprite = null
let logo_cole = null
let cabezo = null
let mySprite2 = sprites.create(img`
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    .................d.d..........
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    `, SpriteKind.Player)
mySprite2 = sprites.create(img`
    ..............................
    .f.f.ff.......................
    .....f.f......................
    .f.f.ff...fffff...............
    ..........fffdf...............
    ..........ffd1d...............
    ..........fd3fd...............
    ..........dddddeee............
    ...........d22eeeee...........
    .........dd9d2eeeee...........
    .........dd9ddeeeee...........
    .........dd999eeeee...........
    ..........ddd9eeeeee..........
    ..........9dddeeeeee..........
    ..........99dddd111...........
    ..........9999dd1991..........
    ..........eeee711111..........
    ..........55551111111.........
    ...........55511111111........
    ...........8555..d.d..........
    ...........88555..............
    .........e888555..............
    .........e88..552.............
    .........ee8..222.............
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    `, SpriteKind.Player)
let mySprite = sprites.create(img`
    ..............................
    .f.f.ff.......................
    .....f.f......................
    .f.f.ff...fffff...............
    ..........fffdf...............
    ..........ffd1d...............
    ..........fd3fd...............
    ..........dddddeee............
    ...........d22eeeee...........
    .........dd9d2eeeee...........
    .........dd9ddeeeee...........
    .........dd999eeeee...........
    ..........ddd9eeeeee..........
    ..........9dddeeeeee..........
    ..........99dddd111...........
    ..........9999dd1991..........
    ..........eeee711111..........
    ..........99991111111.........
    ...........99911111111........
    ...........8999..d.d..........
    ...........88999..............
    .........e888.999.............
    .........e88...992............
    .........ee8...222............
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    `, SpriteKind.Player)
fase = "menu"
multigame.startGame("menu")
