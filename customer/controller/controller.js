var renderItem = function (data) {
    var content = "";
    for (var i = 0; i < data.length; i++) {
        var arr = data[i];
        content += `
        <div class="col-6 col-md-4 my-3" value="${arr.type}">
                    <div class="card">
                        <div class="card-header text-align-center">
                            <img class="card-img-top" class="img-fluid"
                                src="./../../img/${arr.pic}" alt="">
                        </div>
                        <div class="card-body">
                            <a href="#">${arr.name}</a>
                            <div id="desc__iTem">${arr.desc}</div>
                            <p>Giá : ${arr.price}</p>
                        </div>

                        <div class="card-footer">
                            <button class="btn btn-info">Mua hàng</button>
                        </div>
                    </div>
                </div>
        `
    }
    document.getElementById("showMayAnh").innerHTML = content;
}

function getEle(id) {
    return document.getElementById(id);
}


var infoItem = function (id) {
    var id = getEle("id").value
    var name = getEle("nameItem").value;
    var price = getEle("priceItem").value;
    var type = getEle("listItem");
    var pic = getEle("picItem").value;
    var desc = getEle("descItem").value;

    var camera = new CameraInfo(id, name, price, type, pic, desc);
    return camera;
}