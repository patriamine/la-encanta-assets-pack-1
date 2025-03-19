def on_game_finished(gameName):
    sprites.destroy_all_sprites_of_kind(SpriteKind.mini_menu)
    sprites.destroy_all_sprites_of_kind(SpriteKind.projectile)
    sprites.destroy_all_sprites_of_kind(SpriteKind.food)
    sprites.destroy_all_sprites_of_kind(SpriteKind.enemy)
    sprites.destroy_all_sprites_of_kind(SpriteKind.text)
    effects.confetti.end_screen_effect()
    effects.star_field.end_screen_effect()
    scroller.scroll_background_with_speed(0, 0)
    if fase != "ending":
        sprites.destroy_all_sprites_of_kind(SpriteKind.player)
    multigame.start_game(fase)
multigame.on_game_finished(on_game_finished)

def on_life_zero():
    game.game_over(False)
multigame.on_life_zero("game", on_life_zero)

def on_forever():
    global invencibilidad
    if invencibilidad == 1:
        for index in range(4):
            Jugador.set_flag(SpriteFlag.INVISIBLE, True)
            pause(200)
            Jugador.set_flag(SpriteFlag.INVISIBLE, False)
        invencibilidad = 0
    pause(400)
multigame.forever("game", on_forever)

def on_on_start():
    info.set_life(0)
    
    def on_start_cutscene():
        global encanta2
        tiles.set_current_tilemap(tilemap("""
            nivel4
        """))
        story.sprite_move_to_location(Jugador, 110, 80, 100)
        story.sprite_say_text(Jugador, "hemos llegado")
        Jugador.set_image(img("""
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
        """))
        Jugador.ay = 200
        encanta2 = sprites.create(img("""
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
            """),
            SpriteKind.player)
        encanta2.set_position(116, 57)
        encanta2.ay = 200
        pause(1500)
        game.game_over(True)
        game.set_game_over_effect(True, effects.confetti)
    story.start_cutscene(on_start_cutscene)
    
multigame.on_start("ending", on_on_start)

def on_on_start2():
    global encanta_game_character, encanta, fase
    encanta_game_character = assets.image("""
        la encantá
    """)
    encanta = sprites.create(encanta_game_character, 0)
    encanta.set_position(40, 40)
    story.print_text("Esta es la historia de la Encantá", 80, 100)
    story.print_text("Hace muchos años en la localidad de Rojales", 80, 100)
    fase = "game"
    encanta.destroy()
    multigame.finish_game("story")
multigame.on_start("story", on_on_start2)

def on_on_start3():
    global invencibilidad, Jugador
    invencibilidad = 0
    info.set_life(3)
    scene.set_background_image(img("""
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
    """))
    tiles.set_current_tilemap(tilemap("""
        level4
    """))
    scroller.scroll_background_with_speed(-50, 0)
    Jugador = sprites.create(img("""
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
        """),
        SpriteKind.player)
    Jugador.set_position(12, 56)
    Jugador.ay = 400
multigame.on_start("game", on_on_start3)

def RandomizeImage(Image2: Image):
    global Picture, Pick
    Picture = Image2
    for index2 in range(15):
        Pick = randint(0, 14)
        Picture.replace(index2, Pick)
    scene.set_background_image(Picture)
    
    def on_after():
        RandomizeImage(scene.background_image())
    timer.after(500, on_after)
    

def on_update_interval():
    global enemyRandom, obstaculo
    enemyRandom = randint(1, 3)
    enemyRandom = randint(1, 3)
    if enemyRandom == 1:
        obstaculo = sprites.create_projectile_from_side(img("""
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
            """),
            randint(-70, -125.5),
            0)
    if enemyRandom == 2:
        obstaculo = sprites.create_projectile_from_side(img("""
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
            """),
            randint(-70, -125.5),
            0)
    if enemyRandom == 3:
        obstaculo = sprites.create_projectile_from_side(img("""
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
            """),
            randint(-70, -125.5),
            0)
    if enemyRandom == 4:
        obstaculo = sprites.create_projectile_from_side(assets.image("""
            myImage1
        """), randint(-70, -125.5), 50)
    obstaculo.set_position(108, 92)
    obstaculo.set_flag(SpriteFlag.AUTO_DESTROY, True)
multigame.on_update_interval("game", randint(1150, 1500), on_update_interval)

def on_on_destroyed(sprite2):
    info.change_score_by(1)
sprites.on_destroyed(SpriteKind.projectile, on_on_destroyed)

def on_forever2():
    scene.set_background_image(img("""
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
                ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1dddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11ddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddd
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
                cccccccccccccccccccccccccccccccccfcccfcccccffcccccccccccccccccccccccccceebbee44eeeeeeeeeeeeeeceeecccccccccceeeeeeeeeccccceeecceeccfcceeeeeecceeeeeeeeeeeeeeeeeee
                cccccccccccccccccccccccccccccccccccccccfffffffcccfccccccccccffcccccccceeebbee44eeebeeeeeeeeeeeeeeeeccccccccccecceeeeeccccceeecceeeeeeeeeeeeeeeeeeceeeeeeeeeeeeee
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
    """))
    
    def on_button_pressed(selection, selectedIndex):
        global fase
        if selectedIndex == 0:
            fase = "story"
            multigame.finish_game("menu")
        if selectedIndex == 1:
            fase = "credits"
            multigame.finish_game("menu")
    myMenu.on_button_pressed(controller.A, on_button_pressed)
    
multigame.forever("menu", on_forever2)

def on_on_overlap(sprite, otherSprite):
    global invencibilidad
    if invencibilidad == 0:
        invencibilidad = 1
        info.change_life_by(-1)
sprites.on_overlap(SpriteKind.player, SpriteKind.projectile, on_on_overlap)

def on_a_pressed():
    if Jugador.is_hitting_tile(CollisionDirection.BOTTOM):
        Jugador.vy = -220
multigame.A.on_event("game", ControllerButtonEvent.PRESSED, on_a_pressed)

def on_life_zero2():
    game.game_over(False)
info.on_life_zero(on_life_zero2)

def Flash_Outline():
    textSprite2.set_outline(1, 8)
    
    def on_after2():
        textSprite2.set_outline(1, 2)
        
        def on_after3():
            Flash_Outline()
        timer.after(100, on_after3)
        
    timer.after(100, on_after2)
    

def on_on_score():
    global fase
    fase = "ending"
    multigame.finish_game("game")
info.on_score(50, on_on_score)

def RoleCredits():
    global textSprite2, textSprite, CharacterText, index22, index3
    SpecialThanks: List[number] = []
    effects.star_field.start_screen_effect()
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
    while index22 <= len(CreditsCharacters) - 1:
        textSprite = textsprite.create(CreditsCharacters[index22])
        textSprite.set_outline(1, 10)
        textSprite.vy = -30
        textSprite.y = 120
        textSprite.x += -40
        textSprite.set_flag(SpriteFlag.AUTO_DESTROY, True)
        pause(300)
        CharacterText = textsprite.create("(" + CreditsCharactersNames[index22] + ")")
        CharacterText.set_outline(1, 10)
        CharacterText.vy = -30
        CharacterText.y = 120
        CharacterText.x += -40
        pause(1000)
        index22 += 1
    pause(1000)
    textSprite2.x += -40
    textSprite2.y = 120
    textSprite2.vy = -30
    textSprite2.set_flag(SpriteFlag.AUTO_DESTROY, True)
    Flash_Outline()
    pause(2000)
    while index3 <= len(SpecialThanks) - 1:
        effects.star_field.start_screen_effect()
        textSprite.set_outline(1, 10)
        textSprite.vy = -30
        textSprite.y = 120
        textSprite.x += -40
        textSprite.set_flag(SpriteFlag.AUTO_DESTROY, True)
        pause(300)
        CharacterText.set_outline(1, 10)
        CharacterText.vy = -30
        CharacterText.y = 120
        CharacterText.x += -40
        CharacterText.set_flag(SpriteFlag.AUTO_DESTROY, True)
        pause(1000)
        index3 += 1
    textSprite = textsprite.create("Gracias por todo")
    textSprite.set_outline(1, 10)
    textSprite.vy = -30
    textSprite.y = 120
    textSprite.x += -40
    textSprite.set_flag(SpriteFlag.AUTO_DESTROY, True)
    pause(5000)
    RoleCredits()

def on_on_start4():
    global textSprite3, myMenu
    textSprite3 = textsprite.create("THE ENCANTÁ GAME")
    textSprite3.set_position(81, 14)
    myMenu = miniMenu.create_menu(miniMenu.create_menu_item("JUGAR"),
        miniMenu.create_menu_item("CREDITOS"))
multigame.on_start("menu", on_on_start4)

def on_on_start5():
    global Reasons, CreditsCharacters, CreditsCharactersNames
    Reasons = 0
    music.stop_all_sounds()
    scene.set_background_image(img("""
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
    """))
    RandomizeImage(scene.background_image())
    music.play(music.create_song(hex("""
            00780004080200
        """)),
        music.PlaybackMode.LOOPING_IN_BACKGROUND)
    CreditsCharacters = ["Arturo",
        "Santi",
        "Miguel",
        "Rim",
        "Hugo",
        "Ismael",
        "Sofia",
        "keila",
        "Nerea",
        "Antonio",
        "Patricia"]
    CreditsCharactersNames = ["programador",
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
        ""]
    RoleCredits()
    print("thanks guys ")
multigame.on_start("credits", on_on_start5)

Reasons = 0
textSprite3: TextSprite = None
index3 = 0
CreditsCharactersNames: List[str] = []
CharacterText: TextSprite = None
textSprite: TextSprite = None
CreditsCharacters: List[str] = []
index22 = 0
textSprite2: TextSprite = None
myMenu: miniMenu.MenuSprite = None
obstaculo: Sprite = None
enemyRandom = 0
Pick = 0
Picture: Image = None
encanta: Sprite = None
encanta_game_character: Image = None
encanta2: Sprite = None
Jugador: Sprite = None
invencibilidad = 0
fase = ""
cabezo = None
logo_cole = None
logo_cole_sprite = None
encanta_game_character2 = None
fase = "menu"
multigame.start_game("menu")