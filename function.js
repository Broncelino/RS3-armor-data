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
        var x = document.getElementById("table");
        var y = document.getElementById("armor");
        fetch('./data.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            document.getElementById("defence").innerHTML =
            data[x.value][y.value].def + "<br />";

            document.getElementById("health").innerHTML =
            data[x.value][y.value].health + "<br />";

            document.getElementById("prayer").innerHTML =
            data[x.value][y.value].prayer + "<br />";

            document.getElementById("range").innerHTML =
            data[x.value][y.value].range + "<br />";

            document.getElementById("strength").innerHTML =
            data[x.value][y.value].strength + "<br />";

            document.getElementById("magic").innerHTML =
            data[x.value][y.value].magic + "<br />";
            // virtusMask.png
            document.getElementById('equip').src = data[x.value][y.value].imagePath; //"./images/virtusMask.png"
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
        