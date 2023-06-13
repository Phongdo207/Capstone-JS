
var renderUI = function (data) {
    var content = "";
    for (var i = 0; i < data.length; i++) {
        var arr = data[i];
        content += `
            <tr>
                <td>${arr.id}</td>
                <td>${arr.name}</td>
                <td>${arr.price}</td>
                <td>${arr.type}</td>
                <td>${arr.pic}</td>
                <td>${arr.desc}</td>
                <td>
                    <button class="btn btn-danger" onclick="xoaCamera(${arr.id})">Delete</button>
                    <button class="btn btn-warning" onclick="suaInfo(${arr.id})" data-toggle="modal"
                    data-target="#exampleModal">Fix</button>
                </td>
            </tr>
        `
    }
    document.getElementById("tbodyCamera").innerHTML = content;
}

function getEle(id) {
    return document.getElementById(id);
}


var infoItem = function (id) {
    var id = getEle("id").value
    var name = getEle("nameItem").value;
    var price = getEle("priceItem").value;
    var type = getEle("listItem").value;
    var pic = getEle("picItem").value;
    var desc = getEle("descItem").value;

    var camera = new CameraInfo(id, name, price, type, pic, desc);
    return camera;
}

