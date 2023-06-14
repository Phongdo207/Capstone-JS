var api = new Api();

function fetchCameraList() {
    var promise = api.callApi("camera", "GET", null)
    promise.then(function (result) {
        renderUI(result.data);
    }).catch(function (err) {
        console.log(err);
    })
}

fetchCameraList();

getEle("btnAddItem").addEventListener("click", function () {
    getEle("updateItem").style.display = "none";
    getEle("addItem").style.display = "block";

})

getEle("addItem").onclick = function () {
    var camera = infoItem();
    api.callApi("camera", "POST", camera)
        .then(function () {
            fetchCameraList();
            document.getElementsByClassName("close")[0].click();
        })
        .catch(function (err) {
            console.log(err);
        })
}

function xoaCamera(id) {
    api.callApi(`camera/${id}`, "DELETE", null)
        .then(function () {
            fetchCameraList();
        }).catch(function (err) {
            console.log(err);
        })
}

function suaInfo(id) {
    getEle("exampleModalLabel").innerHTML = ("Sửa thông tin")
    getEle("addItem").style.display = "none";
    getEle("updateItem").style.display = "block";

    api.callApi(`camera/${id}`, "GET", null)
        .then(function (result) {
            var cameraInfo = result.data;
            getEle("id").value = cameraInfo.id;
            getEle("nameItem").value = cameraInfo.name;
            getEle("priceItem").value = cameraInfo.price;
            getEle("listItem").value = cameraInfo.type;
            getEle("picItem").value = cameraInfo.pic;
            getEle("descItem").value = cameraInfo.desc;
        })
        .catch(function (err) {
            console.log(err);
        })
}

getEle("updateItem").onclick = function (id) {
    var info = infoItem(id);

    api.callApi(`camera/${info.id}`, "PUT", info)
        .then(function () {
            //fetch data
            fetchCameraList();
            //close modal
            document.getElementsByClassName("close")[0].click();
        })
        .catch(function (err) {
            console.log(err);
        });
}