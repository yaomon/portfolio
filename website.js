"use strict";

// Add format function for string
if (!String.prototype.format) {
    String.prototype.format = function () {
        var args = arguments;
        return this.replace(/{(\d+)}/g, function (match, number) {
            return typeof args[number] !== "undefined" ? args[number] : match;
        });
    };
}

(function () {
    let THUMBNAIL_EL =
        '<div class="thumb">' + '<div class="thumb-img"></div>' + "</div>;";
    let THUMBTEXT_EL = '<div class="thumb-text inset-text"></div>';
    let BASE_URL = "https://raw.githubusercontent.com/yaomon/portfolio/main/";
    function addCharInfo() {
        $("#beatdown").data("info", {
            name: "Beatdown",
            year: "2017",
            desc: "<i><b>Shofu Tha Beatdown!</b></i><br><br>Fanart of content creator Shofu Tha Beatdown! This was more experimentation with fighting-game like sprite-work. I tried to work in a lot of secondary motion in the pant legs and hair. The tightness of the tank-top required a bit more creativity to get some motion in the material.",
            shadOffset: 0,
        });
        $("#becca").data("info", {
            name: "Rebecca",
            year: "2022",
            desc: "<i><b>Choom!</b></i><br><br>Rebecca from the Cyberpunk: Edgerunners anime! Focused more on the perspective rather than the animation for this one. I do adore the trope of small characters with big personalities~ It felt good to be making content on recently released media rather than things that have already dwindled in popularity...",
            shadOffset: 0,
        });
        $("#bigRobot").data("info", {
            name: "Big Robot",
            year: "2020",
            desc: "<i><b>It's a big robot!</b></i><br><br>This was definitely a learning piece more than anything else. I really tried to make the robot have some level of physicality when it came to how the parts were connected. However, I didn't want it to lose character to overly-strict guidelines on shape and perspective.",
            shadOffset: 0,
        });
        $("#bossWorm").data("info", {
            name: "Leviathan",
            year: "2015",
            desc: "<i><b>A space worm? Or something else?</b></i><br><br> A boss for a video game adaptation of <i>The Voyage of St. Brendan!</i>From my first year of college, I wanted to weave in game development into every class. This was one of the first pieces I felt that really showed a large stride in my progress as an artist. I still show it off almost a decade later!",
            shadOffset: 0,
        });
        $("#bozo").data("info", {
            name: "Busuzima",
            year: "2016",
            desc: "<i><b>Is it a lizard? Or a person?</b></i><br><br>Character from the Bloody Roar video game franchise done of a Pixel Daily challenge! Was focusing on the scale textures on this one.",
            shadOffset: 60,
        });
        $("#charAI").data("info", {
            name: "54-AI (Sam)",
            year: "2018",
            desc: "<i><b>A lethargic assassin? Does that make sense?</b></i><br><br>Class select sprite of an class in an unreleased ability-based SHMUP that I worked on through college. I wanted to accentuate his powerful cyberpunk-esque relics (hat and swords) as well as his laziness.",
            shadOffset: 10,
        });
        $("#charLE").data("info", {
            name: "JU-LE (Julie)",
            year: "2016",
            desc: "<i><b>Nothing cooler than hoverboards and lasers!</b></i><br><br>Another class select sprite from the unreleased SHMUP! She has hoverboard that shoots rainbow lasers and overall hits a lot of spots I wanted for a character in the game.",
            shadOffset: 20,
        });
        $("#charXR").data("info", {
            name: "80-XR (Boxr)",
            year: "2016",
            desc: "<i><b>SMASH! SMASH! SMASH!</b></i><br><br>Class select sprite from the unreleased SHMUP. A malfunctioning decommissioned boxing training android that regained sentience, his head is a bit rocked for the years of taking a pounding! ",
            shadOffset: 0,
        });
        $("#crawler").data("info", {
            name: "Crawler",
            year: "2018",
            desc: "<i><b>It comes at night...</b></i><br><br>This one had a lot of iterations. I went into this with the intention of absorbing as much criticism as possible and iterating as much as I can before burning out. Fellow artist Ryumaru helped the most, especially in my weak points of anatomy and lighting.",
            shadOffset: 120,
        });
        $("#deer").data("info", {
            name: "Deer",
            year: "2015",
            desc: "<i><b>Oh deer!</b></i><br><br>This was a commission piece I did. At this time, I was just starting to experiment with high frame counts. It's just a small blink for this though :) ",
            shadOffset: 0,
        });
        $("#detective").data("info", {
            name: "The Detective",
            year: "2019",
            desc: "<i><b>Hmm... Something's off here...</b></i><br><br>This is a dialogue portrait for an unreleased top-down semi-absurdist mystery game. The rendering was heavily inspired by a piece I saw by Artyom Brullov.",
            shadOffset: 0,
        });
        $("#dodro").data("info", {
            name: "Dodrogoro",
            year: "2019",
            desc: "<i><b>RAWWRRRR!!!</b></i><br><br>This was back when I was obsessed with <i>Monster Hunter: World</i>. This is my own made up monster. I was heavily experimenting with high contrast and cast shadows. I think it turned out pretty great :) !",
            shadOffset: 0,
        });
        $("#dross").data("info", {
            name: "Dross",
            year: "2021",
            desc: "<i><b>Information requested...</b></i><br><br>Fanart of Dross from Will Wight's <i>Cradle</i> series! Really focusing on the tentacle animations for this one!",
            shadOffset: 0,
        });
        $("#fighter").data("info", {
            name: "Fighter",
            year: "2019",
            desc: "<i><b>Information requested...</b></i><br><br>More fighting-game adjacent sprites! I don't remember the exact context, but I believe this was for a challenge for fake fighting game sprites. I was really hooked on odd idle poses at the time hence the pose.",
            shadOffset: 0,
        });
        $("#franken").data("info", {
            name: "Frankenstein",
            year: "2021",
            desc: "<i><b>Umm, it's actually Frankenstein's Monster...</b></i><br><br>Just a quick piece for a style test. The main goal was speed for this one so this was done in around 2-3 hours.",
            shadOffset: 0,
        });
        $("#gordo").data("info", {
            name: "Gordo",
            year: "2015",
            desc: "<i><b>It's Gordo</b></i><br><br>I believe this was done for a trend at the time to do a piece in another artist's style. If I did a good enough job, you would have hopefully pinned Dani Oliver's (ahuron) style. I don't think I quite nailed it, and the anatomy of the fly area is a bit lacking too...",
            shadOffset: 0,
        });
        $("#magneto").data("info", {
            name: "Magneto",
            year: "2022",
            desc: "<i><b>Mankind has always feared what it doesn't understand.</b></i><br><br>Fanart of a custom variant for Marvel Snap! I uninstalled the game though because it was way too addictive...",
            shadOffset: 0,
        });
        $("#mecha").data("info", {
            name: "Mecha",
            year: "2018",
            desc: "<i><b>IT'S A GUNDAM!</b></i><br><br>It's not really, but Gundam really are just the coolest... I think this was around the time when I watched <i>Iron Blooded Orphans</i> for the first time. Would explain all the Gundam sketches I have in my archives grouped at this time~",
            shadOffset: 0,
        });
        $("#ortho").data("info", {
            name: "Orthos",
            year: "2020",
            desc: "<i><b>The dragon advances...</b></i><br><br>Another one from <i>Cradle</i>! Not the most sophisticated books, but they are fun! Also, they have bada** turtle dragons!",
            shadOffset: 40,
        });
        $("#pomp").data("info", {
            name: "Pomp",
            year: "2016",
            desc: "<i><b>No comment.</b></i><br><br>I just thought this one turned out well! It's small, neat, and complete. This would be a piece I would look to for inspiration when I first started.",
            shadOffset: 0,
        });
        $("#ralsei").data("info", {
            name: "Ralsei",
            year: "2019",
            desc: "<i><b>Hugs are actually so underrated.</b></i><br><br>I love Undertale and jumped on the Deltarune bandwagon very quickly when it released! Might have to go redo this with the new content releasing...",
            shadOffset: 0,
        });
        $("#robot").data("info", {
            name: "Robot",
            year: "2018",
            desc: "<i><b>It's just a robot.</b></i><br><br>Another one where I tried to focus on the physicality of the inter-connected parts. I think this one turned out quite well! I still use it as a profile picture sometimes!",
            shadOffset: 0,
        });
        $("#scraggleTail").data("info", {
            name: "Scraggle Tail",
            year: "2021",
            desc: "<i><b>I like birds.</b></i><br><br>Art test for a commission. I wanted to come up with a unique design and ended up with a bird that has crystals/rocks for a tail. Doesn't make much sense because it would be counter-productive to flying, but oh well.",
            shadOffset: 0,
        });
        $("#reaper").data("info", {
            name: "Reaper",
            year: "2017",
            desc: "<i><b>We don’t beat the reaper by living longer, but by living well, and living fully...</b></i><br><br>Old commission piece. I was experimenting with some new animation methods at this point.",
            shadOffset: 0,
        });
        $("#treeRobot").data("info", {
            name: "Tree Robot",
            year: "2016",
            desc: "<i><b>An old commission.</b></i><br><br>A piece done for Sidecar Judy and Emily Carmichael who worked on writing <i>Jurassic World: Dominion</i> and <i>Pacific Rim: Uprising</i>. I'm in the big leagues now! <br> <a src='https://youtu.be/GIEk-Ph0P7g'>Watch it here!</a>",
            shadOffset: 0,
        });
        $("#tychus").data("info", {
            name: "Tychus, the King",
            year: "2017",
            desc: "<i><b>Each speck of sand, a piece of my body...</b></i><br><br>The first time I placed top 3 in a PixelJoint weekly challenge (I was 2nd)! This was extra surprising to me since I seldom work with very limited palettes and canvas restrictions. The animation was rushed to meet the deadline. I probably should have just left it off.",
            shadOffset: 0,
        });
        $("#yerin").data("info", {
            name: "Yerin",
            year: "2020",
            desc: "<i><b>Cheers and celebrations to you...</b></i><br><br>Here to round out the <i>Cradle</i> pieces! Odd that I haven't done the main character yet, but Yerin is just way cooler so... sorry Lindon! She has a living blood sash and cuts things with wind and sound.",
            shadOffset: 0,
        });
        $("#zapdos").data("info", {
            name: "Zapdos",
            year: "2020",
            desc: "<i><b>Zapdos! ZAP!</b></i><br><br>This was done back when the new Galarian Zapdos was announced. The animation was a bit lazy, but I was so excited that I wanted to pump out the piece ASAP!",
            shadOffset: 0,
        });
    }

    function addSceneInfo() {
        $("#bigB").data("info", {
            name: "B",
            year: "2017",
            desc: "<i><b>B</b></i><br><br>commissioned avatar for a friend of a friend. I wanted to make a good impression since I was representing my friend so I tried my absolute best for that time in rendering and adding subtle and interesting lighting. Composition wise, I couldn't do much though.",
            shadOffset: 0,
        });
        $("#elysium").data("info", {
            name: "Elysium",
            year: "2017",
            desc: "<i><b>Elysium the Neon City!</b></i><br><br>This is a title screen for an unreleased SHMUP. It was my first ever 'viral' piece where I would see it pop up in random music compilations and whatnot. I don't like it that much, but a lot of other people seem to.",
            shadOffset: 0,
        });
        $("#harvest").data("info", {
            name: "Tree of<br>Dark Harvest",
            year: "2017",
            desc: "<i><b>Secret Santa gift!</b></i><br><br>For the 2017 Pixelation (now Pixonomicon) Secret Santa! I wanted to do a mockup because I like doing mockups! Testing the atmospheric perspective a bit on this one here.",
            shadOffset: 0,
        });
        $("#hollow").data("info", {
            name: "Hollow Knight",
            year: "2021",
            desc: "<i><b>I protect the weak in the heart of the crossroads...</b></i><br><br>Mockups and a demake of one of my favorite games! This one was a lot of fun since I let myself go wild with the color count for a bit and I added some non-pure pixel opacity and jumble blurring.",
            shadOffset: 0,
        });
        $("#megaman").data("info", {
            name: "Megaman Battle Network",
            year: "2022",
            desc: "<i><b>Jack In!</b></i><br><br>My interpretation of what a modern <i>Megaman Battle Network</i> game would look like. I went for a modern, minimalist look on the UI so I can focus on amping up the detail and colors on the stage, character, and background. I wish they made another <i>Megaman</i> game...",
            shadOffset: 0,
        });
        $("#metroid").data("info", {
            name: "Metroid",
            year: "2018",
            desc: "<i><b>You fulfilled your mission!</b></i><br><br>I really wanted a new 2D pixel-art Metroid game after Zero Mission. <i>AM2R</i> is amazing, and <i>Metroid: Dread</i> eventually got released. Close enough I suppose :)",
            shadOffset: 0,
        });
        $("#space").data("info", {
            name: "Spaaaaaaaace",
            year: "2016",
            desc: "<i><b>The stars don't look bigger, but they do look brighter.</b></i><br><br>Here I was trying to imply as much as possible with negative space and shadows. I think it turned out quite well, though it isn't one of my more popular pieces.",
            shadOffset: 0,
        });
        $("#title").data("info", {
            name: "Demilord",
            year: "2022",
            desc: "<i><b>War is the least of your worries...</b></i><br><br>The title screen for the game I'm currently working on, Demilord! It depicts the main character, Eclo, pondering into the distance before making his long trek home to prevent an impending war. Some unfortunate gif compression on this one. It really wasn't meant to be compressed into a gif.",
            shadOffset: 0,
        });
        $("#zenitsu").data("info", {
            name: "Zenitsu",
            year: "2022",
            desc: "<i><b>Thunder Breathing First Form: Thunderclap And Flash.</b></i><br><br>Fan art of Demon Slayer! After watching the second season, I felt inspired pour my passions into animating just like the animators of the show, and this was the result! I don't think it turned out that badly!",
            shadOffset: 0,
        });
        $("#omenScene").data("info", {
            name: "In the Wake of Omen",
            year: "2018",
            desc: "<i><b>I must do this... For the sake of the future...</b></i><br><br>My first foray into 2.5d! Made in Unity for a class final, I spent a lot of time toying with all to cool 3D things. I might have gone a bit overboard with the post-processing.",
            shadOffset: 0,
        });
    }

    function addEffectInfo() {
        $("#bigProj").data("info", {
            name: "Projectile",
            year: "2017",
            desc: "<i><b>POW!</b></i><br><br>I was really trying to go for a classic SHMUP projectile look. I like how wobbly it turned out.",
            shadOffset: 0,
        });
        $("#glitch").data("info", {
            name: "The Glitch",
            year: "2017",
            desc: "<i><b>BZZZZZzzzzzz------ @$#)(_@0-</b></i><br><br>I really like doing glitch effects in pixel art. They are easy to do and look nice!",
            shadOffset: 0,
        });
        $("#knight").data("info", {
            name: "Tiny Knight",
            year: "2015",
            desc: "<i><b>Swish! Swish!</b></i><br><br>I feel that this was the first animation I was really proud of. It was small and relatively easy to make good. This sparked my passion for animating pixels today :)!",
            shadOffset: 80,
        });
        $("#laser").data("info", {
            name: "LASER",
            year: "2017",
            desc: "<i><b>It do be firin'</b></i><br><br>Laser for an unreleased SHMUP. Modeled heavily after the Iron Man laser from <i>Marvel Vs. Capcom</i>. I had some doubts about the abrupt silhouette change between the lightning and laser, but it turned out pretty good!",
            shadOffset: 0,
        });
        $("#omenSlamFire").data("info", {
            name: "Omen",
            year: "2018",
            desc: "<i><b>The flames that purge the past...</b></i><br><br>The main character for a fake game, In the Wake of Omen! There were a few more effects for this slash but I picked this one since I liked how the lighting of the fire turned out on the character. The fire itself definitely could be improved though, but I had to rush this out to meet a class deadline.",
            shadOffset: 80,
        });
        $("#punchBag").data("info", {
            name: "Punch the Bag",
            year: "2018",
            desc: "<i><b>ka-POW!</b></i><br><br>I was experimenting with stick people animations that are evidently heavily inspired by the super cool stick fight animations from back in the day. If you've seen them, you know~",
            shadOffset: 0,
        });
        $("#sword").data("info", {
            name: "Sword in the Stone",
            year: "2015",
            desc: "<i><b>One day, a King will come, and the Sword will rise... again.</b></i><br><br>This started off as an edit of another artists' piece asking for critique. It quickly got out of hand with me experimenting with tons of new animation techniques I wanted to try out. The original simply had the sword moving in and out of a rock at a constant pace back and forth. You can see what I turned it into...",
            shadOffset: 0,
        });
        $("#ufo").data("info", {
            name: "UFO",
            year: "2018",
            desc: "<i><b>Explosions will continue until morale improves.</b></i><br><br>More animation experimentation, this time with debris flying at the 'camera' and varied speed particles surrounding the laser. I like doing simple pieces with detailed animation. It is a great contrast from static detailed pieces.",
            shadOffset: 0,
        });
        $("#warning").data("info", {
            name: "Warning!",
            year: "2017",
            desc: "<i><b>Alert! Boss incoming!</b></i><br><br>More glitch effects! This time it's for an unreleased game.",
            shadOffset: 0,
        });
    }

    function addObjectInfo() {
        $("#bigShip").data("info", {
            name: "Big Ship!",
            year: "2015",
            desc: "<i><b>It's a big ship!</b></i><br><br>A commision piece for a game where you play as the SHMUP boss, so this is actually the player. Pretty cool!",
            shadOffset: 0,
        });
        $("#goldPlane").data("info", {
            name: "Gold Plane",
            year: "2016",
            desc: "<i><b>Shiinggg!</b></i><br><br>A game asset for an unreleased wave shooter. When this speeds by, if you can destroy it in time, you get rewarded with a rare weapon! Wow!",
            shadOffset: 0,
        });
        $("#hedgeKraken").data("info", {
            name: "Hedge Sculpture",
            year: "2019",
            desc: "<i><b>A beautiful sculpture by a master hedgecutter!</b></i><br><br>For an unreleased top-down game. I was experimenting with large hue contrasts in the shadows, so there is a clear distinction here with the desaturated blue/purple of the shadow and the green.",
            shadOffset: 70,
        });
        $("#icons").data("info", {
            name: "Icons",
            year: "2018",
            desc: "<i><b>Just some icons!</b></i><br>I think this was icons for an unreleased fan reboot of a dead game.<br>",
            shadOffset: 0,
        });
        $("#platton").data("info", {
            name: "PrA Platton",
            year: "2019",
            desc: "<i><b>Platton 3 Launching... Engaged!</b></i><br>Boss for an unreleased SHMUP. I was relying heavily on perspective and geometry to give this depth while requiring minimal large frame redraws for animation. I wanted to give it life by having the two shields sort of move like arms, not quite machine like but more animated and organic.<br>",
            shadOffset: 0,
        });
        $("#swords").data("info", {
            name: "Swords",
            year: "2018",
            desc: "<i><b>An old commission.</b></i><br>Commission of some sword designs.<br>",
            shadOffset: 0,
        });
        $("#wave").data("info", {
            name: "Wave",
            year: "2016",
            desc: "<i><b>Splish Splash!</b></i><br>Part of an old commission for some social media assets.<br>",
            shadOffset: 0,
        });
    }

    function addSoftwareInfo() {
        $("div[id='Udder Mayhem']").data("info", {
            name: "Udder Mayhem",
            software: "Game Maker Studio",
            desc: "<i><b>High-steaks gameplay!</b></i><br><br>Join in some udderly chaotic fun with a friend! Compete to abduct as many cows as possible while avoiding the endless barrage of obstacles. Collect power-ups to beef up your UFO and make those farmers cow-er in fear! This game was created with a friend for the Opera GX Game Jam. <br><br> <a href='https://gamejolt.com/games/uddermayhem/637743' target='_blank'><b>Play Here!</b></a>",
        });
        $("#Curveball").data("info", {
            name: "Curveball",
            software: "Game Maker Studio",
            desc: "<i><b>Pong... but curvier!</b></i><br><br>Outwardly this appears to be a simple take on the much adored Pong, but the interesting twists make this a fresh new take on a time-tested experience. The ball can be curved, sliced, angled and aimed for an extreme amount of skill expression. Additionally, paddle sizes and special abilities can also be selected! One of the cool parts about this game is that it was made in 2 days with every single image being drawn in-engine (0 sprites)!",
        });
        $("#Elysium").data("info", {
            name: "Elysium",
            software: "Game Maker Studio",
            desc: "<i><b>A rogue-like SHMUP with abilities and spunk!</b></i><br><br>Elysium follows the story of a murder in the Neon City. Play as multiple characters, each with reasons to pursue the killer. However, something more sinister is happening beyond this seemingly trivial murder. <br> Choose from an enormous selection of abilities and powerups as you traverse through land, sky, and sea on the hunt for the truth. ",
        });
        $("div[id='Shot Dead']").data("info", {
            name: "Shot Dead",
            software: "Construct 2",
            desc: "<i><b>Kill the undead or join them...</b></i><br><br>Shot Dead is an action wave-shooter. You take control a turret, the final bastion of humanity. You must protect the land from the surge of incoming zombies. Collect and utilize a huge variety of weapons, ranging from fist cannons to chicken launchers to parasite guns. Precise aiming and weapon knowledge are a must to ensure victory",
        });
    }

    function addImgThumbInfo(path, val, listEl) {
        let newEl = $(THUMBNAIL_EL);

        newEl
            .find(".thumb-img")
            .css("background-image", "url('" + BASE_URL + path + "')");
        newEl.attr("id", val.split(".")[0]);
        newEl.click(function () {
            let parCarousel = $(this).parents(".carousel");
            parCarousel.find(".thumb").removeClass("selected");
            $(this).addClass("selected");
            parCarousel
                .find(".desc-name .name")
                .html($(this).data("info").name);
            parCarousel
                .find(".desc-name .year")
                .html($(this).data("info").year);
            parCarousel.find(".desc-desc").html($(this).data("info").desc);
            parCarousel
                .find(".main-shadow1")
                .css("bottom", $(this).data("info").shadOffset + 50 + "px");
            parCarousel
                .find(".main-shadow2")
                .css("bottom", $(this).data("info").shadOffset + 50 + "px");
            parCarousel
                .find(".main-shadow1")
                .css("left", $(this).data("info").shadOffset + "px");
            parCarousel
                .find(".main-shadow2")
                .css("left", $(this).data("info").shadOffset + "px");
            parCarousel
                .find(".img-disp")
                .css(
                    "background-image",
                    $(this).find(".thumb-img").css("background-image")
                );
        });
        listEl.append(newEl);
    }

    function addVidThumbInfo(path, val, listEl) {
        let newEl = $(THUMBTEXT_EL);
        let baseVal = decodeURI(val).split(".")[0];
        newEl.text(baseVal);
        newEl.attr("id", baseVal);
        newEl.click(function () {
            let parCarousel = $(this).parents(".carousel");
            parCarousel.find(".thumb-text").removeClass("selected");
            $(this).addClass("selected");
            parCarousel
                .find(".desc-name .name")
                .html($(this).data("info").name);
            parCarousel
                .find(".desc-name .software")
                .html($(this).data("info").software);
            parCarousel.find(".desc-desc").html($(this).data("info").desc);
            parCarousel.find(".soft-vid").attr("src", BASE_URL + path);
            parCarousel.find(".soft-vid")[0].load();
        });
        listEl.append(newEl);
    }

    function setupImagesCat(path, listEl, processFunc) {
        return $.ajax({
            url: path,
            beforeSend: function (xhr) {
                xhr.setRequestHeader(
                    "Authorization",
                    "Bearer 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"
                );
            },
            success: function (data) {
                data.forEach((element) => {
                    processFunc(element.path, element.name, listEl);
                });
            },
        });
    }

    function processAboutBG() {
        $(".about-text").css(
            "background-position-y",
            $(window).height() - $(".about-text").offset().top * 1.3 + 100
        );
    }

    function setupAboutSelection() {
        $(".about-cat").click(function () {
            $(".about-cat").removeClass("selected");
            $(".about-desc-desc").removeClass("selected");
            $(".about-desc-desc").css({ opacity: 0 });
            $(this).addClass("selected");
            $(".tag-list div").css({ opacity: 0, "margin-left": "50px" });
            switch ($(this).attr("id")) {
                case "person-cat":
                    $("#person-desc").addClass("selected");
                    $("#person-desc").animate({ opacity: 1 }, 200);
                    break;
                case "engineer-cat":
                    $("#engineer-desc").addClass("selected");
                    $("#engineer-desc").animate({ opacity: 1 }, 200);
                    break;
                case "artist-cat":
                    $("#artist-desc").addClass("selected");
                    $("#artist-desc").animate({ opacity: 1 }, 200);
                    break;
                case "gamedev-cat":
                    $("#gamedev-desc").addClass("selected");
                    $("#gamedev-desc").animate({ opacity: 1 }, 200);
                    break;
            }
            $(".about-desc-desc.selected")
                .find(".tag-list div")
                .each(function (index) {
                    $(this)
                        .delay(10 + 80 * index)
                        .animate({ opacity: 1, "margin-left": "0px" }, 400);
                });
        });
    }

    function setupSelection() {
        $(".category-title-container").click(function () {
            $(".category").removeClass("selected");
            $(this).parent(".category").addClass("selected");
        });
    }

    function setupScrolling() {
        $(".art-tab").click(function () {
            $(".art-screen")[0].scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "nearest",
            });
        });
        $(".prog-tab").click(function () {
            $(".prog-screen")[0].scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "nearest",
            });
        });
        $(".bio-tab").click(function () {
            $(".bio-screen")[0].scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "nearest",
            });
        });
        $(".contact-tab").click(function () {
            $(".contact-screen")[0].scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "nearest",
            });
        });
    }

    function fadeOnScroll() {
        // Fade content toward top starting from 20% down
        let startPos = 0.4;
        // Cache window object
        let $w = $(window);
        // Go through each element and check its relative position within the viewport
        $(".fade-scroll").each(function () {
            // Get current relative position in viewport, based on 5/8th the way down the element
            let pos =
                $(this).offset().top +
                ($(this).height() * 5) / 8 -
                $w.scrollTop();
            // Get viewport height
            let vh = $w.height();
            if (pos < vh * startPos) {
                // If element has past the starting threshold, we fade it
                $(this).css("opacity", pos / (vh * startPos));
            } else {
                // Fade content toward top starting from 80% down
                let startPos = 0.8;
                // Get current relative position in viewport, based on 1/4th the way down the element
                let pos =
                    $(this).offset().top +
                    ($(this).height() * 1) / 4 -
                    $w.scrollTop();
                // Get viewport height
                if (pos > vh * startPos) {
                    // If element has past the bottom threshold, we fade it
                    $(this).css(
                        "opacity",
                        1 - (pos - vh * startPos) / (vh - vh * startPos)
                    );
                } else {
                    $(this).css("opacity", 1);
                }
            }
        });
    }

    // Fade in main tabs
    function fadeIn() {
        $(".title").animate({ opacity: 1, "margin-bottom": "1%" }, 800);
        $(".main-screen .tab-container").each(function (index) {
            $(this)
                .delay(100 + 250 * index)
                .animate({ opacity: 1 }, 800, fadeOnScroll);
        });
    }

    function processSideMenu() {
        // Reveal side menu when scrolled down far enough
        let scrollPos = $(".main-body").scrollTop();
        if (screen.width > 1200 && scrollPos >= 400) {
            $(".side-menu").css("pointer-events", "all");
            if (scrollPos > 1200) {
                $(".side-menu").css("opacity", 1);
            } else {
                $(".side-menu").css("opacity", (scrollPos - 400) / 800);
            }
        } else {
            $(".side-menu").css({ opacity: 0, "pointer-events": "none" });
        }
        let vh = $(window).height();
        // Select correct tab
        $(".side-menu .tab-container").removeClass("selected");
        if (
            $(".art-screen").offset().top < vh / 2 &&
            $(".art-screen").offset().top > -vh / 2
        ) {
            $(".side-menu .art-tab").addClass("selected");
        }
        if (
            $(".prog-screen").offset().top < vh / 2 &&
            $(".prog-screen").offset().top > -vh / 2
        ) {
            $(".side-menu .prog-tab").addClass("selected");
        }
        if (
            $(".bio-screen").offset().top < vh / 2 &&
            $(".bio-screen").offset().top > -vh / 2
        ) {
            $(".side-menu .bio-tab").addClass("selected");
        }
        if (
            $(".contact-screen").offset().top < vh / 2 &&
            $(".contact-screen").offset().top > -vh / 2
        ) {
            $(".side-menu .contact-tab").addClass("selected");
        }
    }

    $(document).ready(function () {
        var charReq = setupImagesCat(
            "https://api.github.com/repos/yaomon/portfolio/contents/media/PixelArt/Characters",
            $("#char-cat").find(".category-list"),
            addImgThumbInfo
        );
        var sceneReq = setupImagesCat(
            "https://api.github.com/repos/yaomon/portfolio/contents/media/PixelArt/Scenes",
            $("#scene-cat").find(".category-list"),
            addImgThumbInfo
        );
        var effReq = setupImagesCat(
            "https://api.github.com/repos/yaomon/portfolio/contents/media/PixelArt/Effects",
            $("#eff-cat").find(".category-list"),
            addImgThumbInfo
        );
        var objReq = setupImagesCat(
            "https://api.github.com/repos/yaomon/portfolio/contents/media/PixelArt/Objects",
            $("#obj-cat").find(".category-list"),
            addImgThumbInfo
        );

        $.when(charReq, sceneReq, effReq, objReq).done(function (
            a1,
            a2,
            a3,
            a4
        ) {
            // the code here will be executed when all four ajax requests resolve.
            // a1, a2, a3 and a4 are lists of length 3 containing the response text,
            // status, and jqXHR object for each of the four ajax calls respectively.
            addCharInfo();
            addSceneInfo();
            addEffectInfo();
            addObjectInfo();
            $(".thumb").first().click();
        });

        var softReq = setupImagesCat(
            "https://api.github.com/repos/yaomon/portfolio/contents/media/Vids",
            $(".prog-screen").find(".thumbs-list"),
            addVidThumbInfo
        );

        $.when(softReq).done(function (a1) {
            addSoftwareInfo();
            $(".thumb-text").first().click();
        });
        setupSelection();
        setupAboutSelection();
        $("#person-cat").click();
        setupScrolling();
        $(".main-body").scroll(function () {
            fadeOnScroll();
            processSideMenu();
            processAboutBG();
        });

        fadeIn();
        fadeOnScroll();
        processSideMenu();
    });
})();
