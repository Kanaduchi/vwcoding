var e = Math.floor((new Date).getTime() / 1e3),
    t = [],
    s = 0,
    n = "<div class='form-group'><label class='font-weight-bold'>",
    a = "</label><textarea class='form-control h-100' readonly='readonly' onclick='this.select()' onfocus='this.select()'>1102",
    l =
        "0000000000000000003B0FC769BFFF15ECD445B8196D2203D6D56BD8F22748B37D68F863DAC57E23C90A5FEEF0C06394C8D48A2EAA4F0FB658557400E66441DDC7D5AC3610AA4D45056C0C6E17C7E4B60C40E52FFA891938AF186ED20AE83A99EB10F3088479E6CBD2770C1563B5AE235B440BEF16EBE696576E108F2F9F897D963DEFBAD3ABDF2FFE",
    o = "</textarea></div>";

function r(e, t, s, n) {
    e === t ? $("#" + s).removeClass("alert-danger").addClass("alert-success").html(n + " status: <b>OK</b>") : e > 0 && e < t ? $("#" + s).removeClass("alert-success").addClass("alert-danger").html(n + " should be " + t + " length size! <b>" + e +
        "/" + t + "</b>").show() : $("#" + s).removeClass("alert-success").addClass("alert-danger").html(n + " input could not be empty!").show()
}

function i() {
    for (let s = 0; s < t.length; s++) t[s].visible && $("#codes").append(n + t[s].name + a + t[s].code + "03" + t[s].vcrn.toUpperCase() + h(t[s].vin).toUpperCase() + "00" + e.toString(16).toUpperCase() + l + o)
}

function c(e, t) {
    for (let s = 0; s < e.length; s++)
        if (e[s].code === t) return !0;
    return !1
}

function h(e) {
    let t = [];
    let n = e.length;
    let s = 0;
    for (; s < n; s++) {
        const a = Number(e.charCodeAt(s)).toString(16);
        t.push(a)
    }
    return t.join("")
}

$("#vin").keyup(function () {
    $("#codes").html("");
    for (var e = 0; e < t.length; e++) t[e].vin = this.value;
    r(this.value.length, 17, "avin", "VIN"), i()
}), $("#vcrn").keyup(function () {
    $("#codes").html("");
    for (var e = 0; e < t.length; e++) t[e].vcrn = this.value;
    r(this.value.length, 10, "avcrn", "VCRN"), i()
}), $(".checkbox input").change(function () {
    if ($("#codes").html(""), this.checked) {
        if (c(t, this.value))
            for (var e = 0; e < t.length; e++) t[e].code === this.value && (t[e].visible = !0);
        else t.push({
            code: this.value,
            vcrn: $("#vcrn").val(),
            vin: $("#vin").val(),
            visible: !0,
            name: this.name
        });
        s++
    } else {
        for (e = 0; e < t.length; e++) t[e].code === this.value && (t[e].visible = !1);
        s--
    }
    s > 0 ? $(".jumbotron").hide() : $(".jumbotron").show(), i()
});
