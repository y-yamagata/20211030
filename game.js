"use strict";

/**
 * Define submodules
 */
(function() {
    var defaultConfig = {
        root: {
            background: [
                [22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22],
                [21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21],
                [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
                [19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19],
                [18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18],
                [18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18],
                [18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18],
                [18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18],
                [18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18],
                [18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18],
                [18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18],
                [18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18],
                [18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18],
                [18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18],
                [18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18],
                [18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18],
                [18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18],
                [18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18],
                [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
                [ 1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
            ]
        },
        opening: {
            message: 'リンゴを買ってくれてありがとう！！'
        },
        ready: {
            waitSec: 5,
        },
        main: {
            waitSec: 5,
            timeSec: 30,
            xUnit: 16,
            groundPosition: 288,
            background: [
                [22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22],
                [21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21]
            ],
            player: {
                velocity: 3,
                jumpPower: 6,
                gravity: 1
            },
            apple: {
                frame: 15,
                point: 1,
                velocity: 3,
                schedule: {
                    5: [9, 10],
                    65: [5, 4],
                    125: [14, 15],
                    180: [11, 8],
                    210: [5, 2],
                    240: [8, 11],
                    270: [14, 17],
                    305: [17],
                    310: [17],
                    315: [17],
                    320: [16],
                    325: [15],
                    330: [14],
                    335: [13],
                    340: [12],
                    345: [11],
                    350: [10],
                    355: [9],
                    360: [8],
                    365: [7],
                    370: [6],
                    375: [5],
                    380: [4],
                    385: [3],
                    395: [2],
                    400: [2],
                    460: [8, 9, 10, 11],
                    490: [5, 4, 3, 2],
                    520: [8, 9, 10, 11],
                    550: [5, 4, 3, 2],
                    580: [14, 15, 16, 17],
                    600: [8, 9, 10, 11],
                    610: [4, 3, 2],
                    620: [5, 4, 3, 2],
                    640: [15, 16, 17],
                    650: [2, 4, 6, 8, 14, 16],
                    660: [3, 5, 7, 9, 13, 15, 17],
                    670: [2, 4, 6, 8, 14, 16],
                    770: [1, 2, 3,             8,                13,     15,           ],
                    760: [   2,             7, 8, 9,             13, 14,               ],
                    750: [   2,             7,    9,             13,     15,           ]
                }
            },
            goldApple: {
                frame: 14,
                point: 10,
                velocity: 3,
                schedule: {
                    390: [2],
                    560: [14, 15, 16, 17],
                    610: [5],
                    640: [14],
                    650: [10, 12],
                    660: [11],
                    670: [10, 12],
                    770: [         4,    6,                  12,             16, 17,   ],
                    760: [         4, 5, 6,          10, 11, 12,                 17,   ],
                    750: [         4,    6,          10,                         17, 18]
                }
            }
        }
    };

    enchant.ymgt = {};
    enchant.ymgt.Core = enchant.Class.create(enchant.Core, {
        initialize: function(width, height, config) {
            enchant.Core.call(this, width, height);
            config = config || {};
            this._config = Object.assign({}, defaultConfig, config);
        },
        config: function(path) {
            if (!path) {
                return this._config;
            }
            var paths = String.prototype.split.call(path, '.');
            if (!paths || paths.length === 0) {
                return this._config;
            }
            var conf = this._config;
            for (var i = 0; i < paths.length; ++i) {
                var prop = paths[i];
                if (!conf.hasOwnProperty(prop)) {
                    return null;
                }
                conf = conf[prop];
                if (typeof conf !== 'object') {
                    return conf;
                }
            }
            return conf;
        }
    });
    enchant.ymgt.Scene = enchant.Class.create(enchant.Scene, {
        initialize: function() {
            enchant.Scene.call(this);
            this.container = {};
        },
        store: function(name) {
            var item = this._getItem(name, 'store')
            if (!item) {
                return undefined;
            }
            return item.instance;
        },
        add: function(name, instance) {
            var item = this._getItem(name, 'store')
            if (item) {
                this.removeChild(item.instance);
            }
            this.container[name] = {
                type: 'store',
                instance: instance
            };
            this.addChild(instance);
        },
        remove: function(name) {
            var item = this._getItem(name, 'store')
            if (!item) {
                return
            }
            this.container[name] = undefined;
            this.removeChild(item.instance);
        },
        makeQueue: function(name, ctor, size) {
            var queue = [];
            for (var i = 0; i < size; ++i) {
                queue.push(new ctor());
            }
            this.container[name] = {
                type: 'queue',
                ctor: ctor,
                queue: queue
            };
        },
        enqueue: function(name, instance) {
            var item = this._getItem(name, 'queue')
            if (!item) {
                return
            }
            item.queue.push(instance);
        },
        dequeue: function(name) {
            var item = this._getItem(name, 'queue')
            if (!item) {
                return undefined;
            }
            return item.queue.pop() || new item.ctor();
        },
        _getItem: function(name, type) {
            return this.container[name] && 
                (this.container[name].type === type ? this.container[name] : undefined);
        }
    });
})();

enchant();

var components = {};
components.Player = enchant.Class.create(Sprite, {
    initialize: function() {
        var game = enchant.Game.instance,
            conf = game.config('main.player');
        Sprite.call(this, 32, 32);
        var stopPosition = game.config('main.groundPosition') - this.height;
        this.image = game.assets['chara.gif'];
        this.frame = 0;
        this.vx = 0;
        this.vy = 0;
        this.ay = 0;
        this.jumping = false;
        this.addEventListener(enchant.Event.ENTER_FRAME, function() {
            if (this.jumping) {
                this.ay += conf.gravity;
            }
            this.x += this.vx;
            if (this.x < 0) {
                this.x = 0;
            }
            if (this.x > game.currentScene.width - this.width) {
                this.x = game.currentScene.width - this.width;
            }
            if (this.vx === 0) {
                this.frame = 0;
            } else {
                this.scaleX = this.vx > 0 ? 1 : -1;
                this.frame = ((game.frame & 0x4) >> 2) + 1;
            }
            this.vy += this.ay;
            this.y += this.vy;
            if (this.y > stopPosition) {
                this.y = stopPosition;
                this.ay = 0;
                this.vy = 0;
                this.jumping = false;
            }
        });
    }
});
components.Apple = enchant.Class.create(Sprite, {
    initialize: function(type) {
        var game = enchant.Game.instance;
        Sprite.call(this, 16, 16);
        var removePosition = game.config('main.groundPosition') - this.height;
        this.image = game.assets['icon.gif'];
        this.type = type;
        this.addEventListener(enchant.Event.ENTER_FRAME, function() {
            this.y += this.velocity;
            if (this.intersect(game.currentScene.store('player'))) {
                var score = game.currentScene.store('score');
                score.value = score.value + this.point;
                game.currentScene.enqueue('apples', this);
                game.currentScene.removeChild(this);
                return;
            }
            if (this.y > removePosition) {
                game.currentScene.enqueue('apples', this);
                game.currentScene.removeChild(this);
            }
        });
    },
    type: {
        get: function() {
            return this._type;
        },
        set: function(type) {
            type = type || 'apple';
            var game = enchant.Game.instance,
                conf = game.config('main.' + type);
            if (!conf) {
                conf = game.config('main.apple');
            }
            this._type = type;
            this.frame = conf.frame;
            this.point = conf.point;
            this.velocity = conf.velocity;
        }
    }
});
components.Char = enchant.Class.create(Sprite, {
    initialize: function(ch) {
        var game = enchant.Game.instance;
        Sprite.call(this, 16, 16);
        this.image = game.assets['font.png'];
        this.ch = ch;
    },
    ch: {
        get: function() {
            return this._ch;
        },
        set: function(ch) {
            ch = ch.charAt(0) || ' ';
            if (this._ch === ch) {
                return;
            }
            this.frame = ch.charCodeAt(0) - 0x20;
            this._ch = ch;
        }
    }
});
components.Text = enchant.Class.create(Group, {
    initialize: function(text) {
        Group.call(this);
        this._text = text;
        this.chars = new Array(this._text.length);
        for (var i = 0; i < this._text.length; ++i) {
            var ch = new components.Char(this._text.charAt(i));
            ch.x = i * 16;
            ch.y = 0;
            this.chars[i] = ch;
            this.addChild(ch);
        }
    },
    text: {
        get: function() {
            return this._text;
        },
        set: function(text) {
            if (this._text === text) {
                return;
            }
            this._text = text;
            for (var i = 0; i < this.text.length; ++i) {
                var ch = this.chars[i];
                ch.ch = this.text.charAt(i);
            }
        }
    }
});
components.Digit = enchant.Class.create(components.Char, {
    initialize: function(number) {
        components.Char.call(this, '' + number);
    },
    number: {
        get: function() {
            return this.ch.charCodeAt(0) - 0x30;
        },
        set: function(number) {
            number = number % 10;
            if (this._number === number) {
                return;
            }
            this.ch = '' + number;
        }
    }
});
components.Score = enchant.Class.create(Group, {
    initialize: function(length, value) {
        Group.call(this);
        value = value || 0;
        this.length = length;
        this._value = value;
        this.digits = new Array(this.length);
        for (var i = 0; i < this.length; ++i) {
            var digit = new components.Digit(value % 10);
            digit.x = (length - i - 1) * 16;
            digit.y = 0;
            this.digits[i] = digit;
            this.addChild(digit);
            value /= 10;
        }
    },
    value: {
        get: function() {
            return this._value;
        },
        set: function(value) {
            if (this._value === value) {
                return;
            }
            this._value = value;
            for (var i = 0; i < this.length; ++i) {
                var digit = this.digits[i];
                digit.number = value % 10;
                value /= 10;
            }
        }
    }
});
var scenes = {
    Opening: enchant.Class.create(Scene, {
        initialize: function() {
            var game = enchant.Game.instance;
            Scene.call(this);
            var startImg = game.assets['start.png'];
            var start = new Sprite(startImg.width, startImg.height);
            start.image = startImg;
            start.x = (this.width - startImg.width) / 2;
            start.y = 64;
            this.addChild(start);
            var message = new Label(game.config('opening.message'));
            message.x = 32;
            message.y = 128;
            message.width = 256;
            message.textAlign = 'center';
            message.font = "14px 'Noto Sans JP', sans-serif";
            message.color = '#000000';
            this.addChild(message);
            this.addEventListener(enchant.Event.TOUCH_END, function() {
                if (game.currentScene === this) {
                    game.popScene();
                    game.mainScene.start();
                }
            });
        }
    }),
    Main: enchant.Class.create(Scene, {
        initialize: function() {
            var game = enchant.Game.instance;
            Scene.call(this);
            var timeSec = game.config('main.timeSec'),
                waitSec = game.config('main.waitSec'),
                xUnit = game.config('main.xUnit'),
                appleSchedule = game.config('main.apple.schedule'),
                goldAppleSchedule = game.config('main.goldApple.schedule'),
                playerConf = game.config('main.player');
            this.startFrame = 0;
            this.highScore = null;
            this.beforeTouchY = 0;
            var player = new components.Player();
            player.x = 144;
            player.y = game.config('main.groundPosition') - player.height;
            this.add('player', player);
            var scoreTitle = new components.Text('SCORE:');
            scoreTitle.x = 176;
            scoreTitle.y = 304;
            this.addChild(scoreTitle);
            var scoreText = new components.Score(3, 0);
            scoreText.x = 272;
            scoreText.y = 304;
            this.add('score', scoreText);
            var timeTitle = new components.Text('TIME:');
            timeTitle.x = 0;
            timeTitle.y = 304;
            this.addChild(timeTitle);
            var timeText = new components.Score(2, timeSec);
            timeText.x = 80;
            timeText.y = 304;
            this.add('time', timeText);
            var background = new Map(16, 16);
            background.image = game.assets['map.gif'];
            background.loadData(game.config('main.background'));
            this.addChild(background);
            this.makeQueue('apples', components.Apple, 64);
            this.addEventListener(enchant.Event.ENTER_FRAME, function() {
                var sceneFrame = game.frame - this.startFrame,
                    gameFrame = Math.max(sceneFrame - waitSec * 30, 0),
                    applePositions = appleSchedule[gameFrame] || [],
                    goldApplePositions = goldAppleSchedule[gameFrame] || [];
                for (var i = 0; i < applePositions.length; ++i) {
                    var apple = this.dequeue('apples');
                    apple.type = 'apple';
                    apple.y = -16;
                    apple.x = xUnit * applePositions[i];
                    this.insertBefore(apple, background);
                }
                for (var i = 0; i < goldApplePositions.length; ++i) {
                    var apple = this.dequeue('apples');
                    apple.type = 'goldApple';
                    apple.y = -16;
                    apple.x = xUnit * goldApplePositions[i];
                    this.insertBefore(apple, background);
                }
                if (waitSec * 30 > sceneFrame) {
                    this.store('countDown').value = waitSec - Math.floor(sceneFrame / 30);
                } else {
                    this.remove('countDown');
                    this.remove('introduction');
                }
                timeText.value = timeSec - Math.floor(gameFrame / 30);
                if (timeSec * 30 <= gameFrame) {
                    game.pushScene(new scenes.Result(scoreText.value, this.highScore));
                    if (this.highScore === null || scoreText.value > this.highScore) {
                        this.highScore = scoreText.value;
                    }
                }
            });
            this.addEventListener(enchant.Event.TOUCH_START, function(e) {
                this.beforeTouchY = e.localY;
                if (e.localX > player.x) {
                    player.vx = playerConf.velocity;
                } else if (e.localX < player.x) {
                    player.vx = -playerConf.velocity;
                }
            });
            this.addEventListener(enchant.Event.TOUCH_MOVE, function(e) {
                var diffY = this.beforeTouchY - e.localY;
                if (!player.jumping && diffY > 6) {
                    player.jumping = true;
                    player.ay = -playerConf.jumpPower;
                }
                this.beforeTouchY = e.localY;
                if (e.localX > player.x) {
                    player.vx = playerConf.velocity;
                } else if (e.localX < player.x) {
                    player.vx = -playerConf.velocity;
                }
            });
            this.addEventListener(enchant.Event.TOUCH_END, function() {
                player.vx = 0;
            });
        },
        start: function() {
            var game = enchant.Game.instance;
            this.startFrame = game.frame;
            var player = this.store('player');
            player.x = 144;
            player.y = game.config('main.groundPosition') - player.height;
            var scoreText = this.store('score');
            scoreText.value = 0;
            var timeText = this.store('time');
            timeText.value = game.config('main.timeSec');
            var countDownText = new components.Score(1, game.config('main.waitSec'));
            countDownText.x = 160;
            countDownText.y = 96;
            this.add('countDown', countDownText);
            var introduction = new Label('落ちてくるリンゴをGETしろ！！<br>移動：左右をタップ<br>ジャンプ：上にフリック');
            introduction.x = 32;
            introduction.y = 128;
            introduction.width = 256;
            introduction.textAlign = 'center';
            introduction.font = "14px 'Noto Sans JP', sans-serif";
            introduction.color = '#000000';
            this.add('introduction', introduction);
        }
    }),
    Result: enchant.Class.create(Scene, {
        initialize: function(score, highScore) {
            var game = enchant.Game.instance;
            Scene.call(this);
            var scoreTitle = new components.Text('SCORE');
            scoreTitle.x = 128;
            scoreTitle.y = 80;
            this.addChild(scoreTitle);
            var scoreText = new components.Score(3, score);
            scoreText.x = 144;
            scoreText.y = 96;
            this.addChild(scoreText);
            if (highScore !== null) {
                var highScoreTitle = new components.Text('HIGH SCORE');
                highScoreTitle.x = 80;
                highScoreTitle.y = 112;
                this.addChild(highScoreTitle);
                var highScoreText = new components.Score(3, highScore);
                highScoreText.x = 144;
                highScoreText.y = 128;
                this.addChild(highScoreText);
            }
            var message = new Label('画面タップでもう一度遊べます！！');
            message.x = 32;
            message.y = 160;
            message.width = 256;
            message.textAlign = 'center';
            message.font = "14px 'Noto Sans JP', sans-serif";
            message.color = '#000000';
            this.addChild(message);
            this.addEventListener(enchant.Event.TOUCH_END, function() {
                if (game.currentScene === this) {
                    game.popScene();
                    game.mainScene.start();
                }
            });
        }
    })
};

window.onload = function() {
    var game = new Game(320, 320);
    game.fps = 30;
    game.preload('map.gif', 'icon.gif', 'chara.gif', 'font.png', 'start.png');
    game.onload = function() {
        var background = new Map(16, 16);
        background.image = game.assets['map.gif'];
        background.loadData(game.config('root.background'));
        game.rootScene.addChild(background);

        game.mainScene = new scenes.Main();

        game.pushScene(game.mainScene)
        game.pushScene(new scenes.Opening());
    }
    game.start();
}
