/*function dataGet() {
    fetch('./data.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        for(var i=0; i<data.length; i++) {
            document.getElementById("data").innerHTML +=
            data[0].bronze.defence + " " + data[1].VirtusArmor.ring_id + " " + data[0].bronze.damage + "<br />";
        }
        document.getElementById("data").innerHTML +=
        data[0].bronze.defence + " " + data[1].VirtusArmor.ring_id + " " + data[0].bronze.damage + "<br />";
    })
    .catch(function (err) {
        console.log(err);
    });}*/


    function getStats() {
        var y = document.getElementById("armor");
        fetch('./data.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            document.getElementById("defence").innerHTML =
            data[0][y.value].def + "<br />";

            document.getElementById("health").innerHTML =
            data[0][y.value].health + "<br />";

            document.getElementById("prayer").innerHTML =
            data[0][y.value].prayer + "<br />";

            document.getElementById("range").innerHTML =
            data[0][y.value].range + "<br />";

            document.getElementById("strength").innerHTML =
            data[0][y.value].strength + "<br />";

            document.getElementById("magic").innerHTML =
            data[0][y.value].magic + "<br />";
            // virtusMask.png
            document.getElementById('equip').src = "./images/" + y.value + ".png"; //"./images/virtusMask.png"
        })
        .catch(function (err) {
            console.log(err);
        });}



    /*function getHealth() {
        var x = document.getElementById("table");
        var y = document.getElementById("armor");
        fetch('./data.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            document.getElementById("health").innerHTML =
            data[x.value][y.value].health + "<br />";
        })
        .catch(function (err) {
            console.log(err);
        });}
    function getPrayer() {
        var x = document.getElementById("table");
        var y = document.getElementById("armor");
        fetch('./data.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            document.getElementById("prayer").innerHTML =
            data[x.value][y.value].prayer + "<br />";
        })
        .catch(function (err) {
            console.log(err);
        });}
    function getRange() {
        var x = document.getElementById("table");
        var y = document.getElementById("armor");
        fetch('./data.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            document.getElementById("range").innerHTML =
            data[x.value][y.value].range + "<br />";
        })
        .catch(function (err) {
            console.log(err);
        });}
    function getStrength() {
        var x = document.getElementById("table");
        var y = document.getElementById("armor");
        fetch('./data.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            document.getElementById("strength").innerHTML =
            data[x.value][y.value].strength + "<br />";
        })
        .catch(function (err) {
            console.log(err);
        });}
    function getMagic() {
        var x = document.getElementById("table");
        var y = document.getElementById("armor");
        fetch('./data.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            document.getElementById("magic").innerHTML =
            data[x.value][y.value].magic + "<br />";
        })
        .catch(function (err) {
            console.log(err);
        });}*/



    function test() {
        document.getElementById("fullDefence").innerHTML =
            ";lkjasdf;lkjasdflkj" + "<br />";
            document.getElementById('head').src = "./images/virtusMask.png";
    }


    function statTotals() {
        var h = document.getElementById("head");
        var b = document.getElementById("back");
        var n = document.getElementById("neck");
        var t = document.getElementById("torso");
        var l = document.getElementById("legs");
        var ha = document.getElementById("hands");
        var f = document.getElementById("feet");
        var r = document.getElementById("ring");
        fetch('./setdata.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (setdata) {
            var hdef = setdata[2][h.value].def
            var bdef = setdata[3][b.value].def
            var ndef = setdata[7][n.value].def
            var tdef = setdata[9][t.value].def
            var ldef = setdata[6][l.value].def
            var hadef = setdata[5][ha.value].def
            var fdef = setdata[4][f.value].def
            var rdef = setdata[8][r.value].def
            var totalDef = (hdef + bdef + ndef + tdef + ldef + hadef + fdef + rdef).toFixed(1)

            var hhealth = setdata[2][h.value].health
            var bhealth = setdata[3][b.value].health
            var nhealth = setdata[7][n.value].health
            var thealth = setdata[9][t.value].health
            var lhealth = setdata[6][l.value].health
            var hahealth = setdata[5][ha.value].health
            var fhealth = setdata[4][f.value].health
            var rhealth = setdata[8][r.value].health
            var totalHealth = hhealth + bhealth + nhealth + thealth + lhealth + hahealth + fhealth + rhealth

            var hprayer = setdata[2][h.value].prayer
            var bprayer = setdata[3][b.value].prayer
            var nprayer = setdata[7][n.value].prayer
            var tprayer = setdata[9][t.value].prayer
            var lprayer = setdata[6][l.value].prayer
            var haprayer = setdata[5][ha.value].prayer
            var fprayer = setdata[4][f.value].prayer
            var rprayer = setdata[8][r.value].prayer
            var totalPrayer = hprayer + bprayer + nprayer + tprayer + lprayer + haprayer + fprayer + rprayer

            var hrange = setdata[2][h.value].range
            var brange = setdata[3][b.value].range
            var nrange = setdata[7][n.value].range
            var trange = setdata[9][t.value].range
            var lrange = setdata[6][l.value].range
            var harange = setdata[5][ha.value].range
            var frange = setdata[4][f.value].range
            var rrange = setdata[8][r.value].range
            var totalRange = (hrange + brange + nrange + trange + lrange + harange + frange + rrange).toFixed(1)

            var hstrength = setdata[2][h.value].strength
            var bstrength = setdata[3][b.value].strength
            var nstrength = setdata[7][n.value].strength
            var tstrength = setdata[9][t.value].strength
            var lstrength = setdata[6][l.value].strength
            var hastrength = setdata[5][ha.value].strength
            var fstrength = setdata[4][f.value].strength
            var rstrength = setdata[8][r.value].strength
            var totalstrength = (hstrength + bstrength + nstrength + tstrength + lstrength + hastrength + fstrength + rstrength).toFixed(1)

            var hmagic = setdata[2][h.value].magic
            var bmagic = setdata[3][b.value].magic
            var nmagic = setdata[7][n.value].magic
            var tmagic = setdata[9][t.value].magic
            var lmagic = setdata[6][l.value].magic
            var hamagic = setdata[5][ha.value].magic
            var fmagic = setdata[4][f.value].magic
            var rmagic = setdata[8][r.value].magic
            var totalMagic = (hmagic + bmagic + nmagic + tmagic + lmagic + hamagic + fmagic + rmagic).toFixed(1)
            
            document.getElementById("fullDefence").innerHTML =
            totalDef + "<br />";
            document.getElementById("fullHealth").innerHTML =
            totalHealth + "<br />";
            document.getElementById("fullPrayer").innerHTML =
            totalPrayer + "<br />";
            document.getElementById("fullRange").innerHTML =
            totalRange + "<br />";
            document.getElementById("fullStrength").innerHTML =
            totalstrength + "<br />";
            document.getElementById("fullMagic").innerHTML =
            totalMagic + "<br />";

            document.getElementById('headimg').src = "./images/" + h.value + ".png";
            document.getElementById('backimg').src = "./images/" + b.value + ".png";
            document.getElementById('neckimg').src = "./images/" + n.value + ".png";
            document.getElementById('torsoimg').src = "./images/" + t.value + ".png";
            document.getElementById('legsimg').src = "./images/" + l.value + ".png";
            document.getElementById('handsimg').src = "./images/" + ha.value + ".png";
            document.getElementById('feetimg').src = "./images/" + f.value + ".png";
            document.getElementById('ringimg').src = "./images/" + r.value + ".png";

        })
        .catch(function (err) {
            console.log(err);
        });}