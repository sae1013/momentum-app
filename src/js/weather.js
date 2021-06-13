const onGeoListener = (pos) => {
    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;
    // console.log(lat,lng);
}

const onGeoError = (err)=> {
    if(err){
        alert(err.message);
    }else{

    }
}

// navigator.geolocation.getCurrentPosition(onGeoListener,onGeoError);