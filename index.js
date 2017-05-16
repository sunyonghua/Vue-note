let colors = ["red", "orange", "green", "blue"];
let app = new Vue({
    el: '#noteBox',
    data: {
        notes: [
            {id: 0, title: '便签1', content: '', top: 10, left: 50, theme: 'red'},
            {id: 1, title: '便签2', content: '', top: 10, left: 350, theme: 'orange'},
            {id: 2, title: '便签3', content: '', top: 300, left: 50, theme: 'green'},
            {id: 3, title: '便签4', content: '', top: 300, left: 350, theme: 'blue'}
        ],
        moveInfo: {state: false, index: null, position: {}}
    },

    methods: {
        // 新加一条便签
        addNote: function (e) {
            console.log(this.notes.length);
            let ide = this.notes.length + 1;
            console.log(ide);
            let id = this.notes.length;
            let title = "便签" + ide;
            let content = "";
            let top = e.clientY - 48 - 20;
            let left = e.clientX - 120;
            let theme = colors[Math.floor(Math.random() * colors.length)];
            this.notes.push({id, title, content, top, left, theme});
            this.save();
        },

        // 当鼠标按下便签移动时s
        mousedown: function (i, e) {
            this.moveInfo.index = i;
            this.moveInfo.state = true;
            this.moveInfo.position = {x: e.offsetX, y: e.offsetY};
        },

        mousemove: function (e) {
            let index = this.moveInfo.index;
            if (this.moveInfo.state) {
                let top = e.clientY;
                let left = e.clientX;
                this.notes[index].top = top - 44 - this.moveInfo.position.y;
                this.notes[index].left = left - this.moveInfo.position.x;
            }
        },
        // 当鼠标按下便签移动时e

        // 当鼠标抬起时
        mouseup: function () {
            this.moveInfo.state = false;
            this.save();
        },
        save: function () {
            localStorage.notes = JSON.stringify(this.notes);
        },

        // 删除一条便签
        deleteNote: function (i, e) {
            this.notes.splice(i, 1);
        }
    },

    // 生命周期函数
    mounted: function () {
        document.onkeyup = (function (e) {
            if (this.moveInfo.index != null && e.keyCode === 8) {
                this.notes.splice(this.moveInfo.index, 1);
                this.moveInfo.index =
                    this.notes.length ?
                        this.notes.length - 1 : null;
                this.save();
            }
        }).bind(this);
        if (localStorage.notes) {
            this.notes = JSON.parse(localStorage.notes);
        }
    }

});


/*
 *
 * data放置数据  methods 放置函数
 * 指令是出现在视图中的 v-xx
 *
 *
 *
 * */

