var main = function () {
  // scene
  var scene = new THREE.Scene();
  
  // camera
  var width  = 600;
  var height = 400;
  var fov    = 60;
  var aspect = width / height;
  var near   = 1;
  var far    = 1000;
  var camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
  camera.position.set( 0, 0, 50 );
  
  // display
  var renderer = new THREE.WebGLRenderer();
  renderer.setSize( width, height );
  document.body.appendChild( renderer.domElement );
  
  // light
  var directionalLight = new THREE.DirectionalLight( 0xffffff );
  directionalLight.position.set( 0, 0.7, 0.7 );
  scene.add( directionalLight );
  
  // object
  var geometry = new THREE.CubeGeometry( 30, 30, 30 );
  var material = new THREE.MeshPhongMaterial( { color: 0xff0000 } );
  var mesh = new THREE.Mesh( geometry, material );
  scene.add( mesh );
  
  // loop
  ( function renderLoop () {
    requestAnimationFrame( renderLoop );
    
    // rotation
    mesh.rotation.set(
      0,
      mesh.rotation.y + .01,
      mesh.rotation.z + .01
    );
    
    // output
    renderer.render( scene, camera );
  } )();
};

window.addEventListener( 'DOMContentLoaded', main, false );