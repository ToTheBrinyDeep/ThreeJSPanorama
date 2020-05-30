function onDocumentMouseDown( event ) {

    
    event.preventDefault();

    raycaster.setFromCamera( mouse, camera );   //射线捕捉
    var intersects = raycaster.intersectObjects([
        go_dininghall,
        go_kitchen,
        go_bedroom1,
        go_bathroom1,
        go_livingroom,
        go_bedroom2,
        go_bedroom3,
        go_bedroom4,
        go_bathroom,
        go_bathroom3,
        go_terrace,
        go_balcony
    ]); 
    if ( intersects.length > 0) {
        console.log(intersects);
        var i=intersects[0].object.id;
        changeScene(i);
    }

    isUserInteracting = true;
    is_click = true;
    onPointerDownPointerX = event.clientX;
    onPointerDownPointerY = event.clientY;


    onPointerDownLon = lon;
    onPointerDownLat = lat;

}

function onDocumentTouchDown(event) {
    event.preventDefault();

    isUserInteracting = true;
    onPointerDownPointerX = event.touches[ 0 ].pageX ;
    onPointerDownPointerY = event.touches[ 0 ].pageY;


    onPointerDownLon = lon;
    onPointerDownLat = lat;
}


function onDocumentMouseMove( event ) {
  //  console.log("tex", entrance);
    //屏幕位置转换到3D世界坐标系
    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
    if ( isUserInteracting === true ) {
        lon = ( onPointerDownPointerX - event.clientX ) * 0.1 + onPointerDownLon;
        lat = ( event.clientY - onPointerDownPointerY ) * 0.1 + onPointerDownLat;
    }
}

//手机控制适配
function onDocumentTouchMove( event ) {

    if ( isUserInteracting === true ) {
        lon = ( onPointerDownPointerX - event.touches[ 0 ].pageX  ) * 0.1 + onPointerDownLon;
        lat = ( event.touches[ 0 ].pageY - onPointerDownPointerY ) * 0.1 + onPointerDownLat;
    }
}

function onDocumentMouseUp( event ) {
    isUserInteracting = false;
}

function onDocumentMouseWheel( event ) {
    camera.fov += event.deltaY * 0.05;
    camera.updateProjectionMatrix();
}