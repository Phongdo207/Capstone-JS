var api = new Api();

function fetchCameraList() {
    api.callApi("camera", "GET", null)
        .then(function (result) {
            renderItem(result.data);
        }).catch(function (err) {
            console.log(err);
        })
}

fetchCameraList();

getEle("mySelect").addEventListener("change", async () => {
    var value = getEle("mySelect").value;
    var result = await api.callApi("camera","GET",null)
    if(result.status === 200 && result.statusText === "OK"){
        let timKiem = result.data;
        if(value != "all"){
            timKiem = result.data.filter((CameraInfo) => CameraInfo.type === value);
        }
        renderItem(timKiem);
    }
})