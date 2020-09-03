const OrbitControls = (require('./libs/OrbitControls')).OrbitControls;

class APP
{
    constructor()
    {
        this.renderer;
        this.scene;
        this.camera;
        this.controls;
        // this.Init();
    }

    Init()
    {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
        
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( this.renderer.domElement );

        this.controls = new OrbitControls( this.camera, this.renderer.domElement );

        var geometry = new THREE.BoxGeometry();
        var material = new THREE.MeshPhongMaterial( { color: 0x00ff00 } );
        var cube = new THREE.Mesh( geometry, material );
        var directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
        directionalLight.position.z = 5
        directionalLight.position.x = -2;
        directionalLight.position.y = 5;
        directionalLight.target = cube;

        this.scene.add(directionalLight);
        this.scene.add( cube);

        this.camera.position.z = 5;

        this.Update();
    }

    Update()
    {
        requestAnimationFrame( this.Update.bind(this) );
        this.controls.update();
        this.renderer.render( this.scene, this.camera );
    }
}

module.exports = new APP();