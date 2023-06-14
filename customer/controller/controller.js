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
                            <button class="btn btn-info" id="addCart">Mua hàng</button>
                        </div>
                    </div>
                </div>
        `
    }
    document.getElementById("showMayAnh").innerHTML = content;
}

var renderCart = function (data) {
    var content = "";
    for (var i = 0; i < data.length; i++) {
        var arr = data[i];
        content += `
        <hr>
            <div class="media">
                <div class="media-left">
                    <a href="#">
                        <img class="media-object" src="./../../img/${arr.pic}" alt="...">
                    </a>
            </div>
                <div class="media-body">
                    <h5 class="media-heading">${arr.name}</h5>
                    <p>Giá : ${arr.price} VNĐ</p>
                    <div class="d-flex" id="styleAmount">
                    <span>Chọn số lượng</span>
                    <button id="minus" onclick="handlePlus()"> <i class="fa-solid fa-minus"></i></button>
                    <input type="text" name="amount" id="amount" value="1">
                    <button id="plus" onclick="handleMinus()"> <i class="fa-solid fa-plus"></i></button>
            </div>
             </div>
            </div><!-- ./media -->
            <a class="btn btn-success btn-lg js-open" data-target="#enquiry-form" href="#enquiry-form">Thanh toán</a>
        `
    }
    getEle("tbodyCart").innerHTML = content;
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