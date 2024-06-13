const comm = document.querySelector("#comm")
const java = document.querySelector("#java")
const sem1 = document.querySelector("#sem1")
const sem2 = document.querySelector("#sem2")
const sem3 = document.querySelector("#sem3")
const sem4 = document.querySelector("#sem4")
const sem5 = document.querySelector("#sem5")
const sem6 = document.querySelector("#sem6")
const sql = document.querySelector("#sql")
const discrete = document.querySelector("#dm")
const os = document.querySelector("#os")
const dbms = document.querySelector("#dbms")
const html = document.querySelector("#html")
const css = document.querySelector("#css")
const js = document.querySelector("#js")
const c = document.querySelector("#c")
const cpp = document.querySelector("#cpp")
const vb = document.querySelector("#vb")
const cf = document.querySelector("#computerfundamental")
const mgmt = document.querySelector("#mgmt")
const me = document.querySelector("#economics")
const dsa = document.querySelector("#ds")
const cg = document.querySelector("#cg")
const ai = document.querySelector("#ai")
const mm = document.querySelector("#multimedia")
const apitude = document.querySelector("#apitude")
const reasoning =document.querySelector("#reasoning")
const verbal = document.querySelector("#verbal")
const notes = document.querySelector("#notes")
const word = document.querySelector("#word")
const pp = document.querySelector("#powerpoint")
const excel = document.querySelector("#excel")

html.addEventListener("click",()=>{
    location.href="./html/html_intro.html"
})
css.addEventListener("click",()=>{
    location.href="./css/css_intro.html"
})
js.addEventListener("click",()=>{
    location.href="./js/js_intro.html"
})
c.addEventListener("click",()=>{
    location.href="./c/c_intro.html"
})
cpp.addEventListener("click",()=>{
    location.href="./cpp/cpp_intro.html"
})
java.addEventListener("click", () => {
    location.href = "./java/java_intro.html"
})
vb.addEventListener("click", () => {
    location.href = "./vb/vb_intro.html"
})
sql.addEventListener("click", () => {
    location.href = `./sql/sql_intro.html`
})


comm.addEventListener("click", () => {
    location.href = "./Communication/comm_intro.html"
})

sem1.addEventListener("click", () => {
    location.href = `./PYQ/sem1.html`
})
sem2.addEventListener("click", () => {
    location.href = `./PYQ/sem2.html`
})
sem3.addEventListener("click", () => {
    location.href = `./PYQ/sem3.html`
})
sem4.addEventListener("click", () => {
    location.href = `./PYQ/sem4.html`
})
sem5.addEventListener("click", () => {
    location.href = `./PYQ/sem5.html`
})
sem6.addEventListener("click", () => {
    location.href = `./PYQ/sem6.html`
})

discrete.addEventListener("click", () => {
    location.href = `./discrete/discrete_intro.html`
})
os.addEventListener("click", () => {
    location.href = `./OS/os_intro.html`
})
dbms.addEventListener("click", () => {
    location.href = `./dbms/dbms_intro.html`
})

cf.addEventListener("click", () => {
    location.href = `./computerfun/cf_intro.html`
})
mgmt.addEventListener("click", () => {
    location.href = `./mgmt/mgmt_intro.html`
})
me.addEventListener("click", () => {
    location.href = `./managerial economics/me_intro.html`
})
dsa.addEventListener("click", () => {
    location.href = `./dsa/dsa_intro.html`
})
cg.addEventListener("click", () => {
    location.href = `./computer graphics/cg_intro.html`
})
ai.addEventListener("click", () => {
    location.href = `./ai/ai_intro.html`
})
mm.addEventListener("click", () => {
    location.href = `./multimedia/mm_intro.html`
})

apitude.addEventListener("click", () => {
    location.href = `./apitude/apitude_intro.html`
})
reasoning.addEventListener("click", () => {
    location.href = `./reasoning/reasoning.html`
})
verbal.addEventListener("click", () => {
    location.href = `./verbal/verbal_intro.html`
})

notes.addEventListener("click", () => {
    location.href = `./notes/intro.html`
})

word.addEventListener("click", () => {
    location.href = `./word/word_intro.html`
})
pp.addEventListener("click", () => {
    location.href = `./powerpoint/ppt_intro.html`
})
excel.addEventListener("click", () => {
    location.href = `./excel/excel_intro.html`
})


























/*Typing text */
var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};


var date = new Date();
var current_year = date.getFullYear();
// console.log(current_year);
document.getElementById("currentYear").innerHTML = current_year;
