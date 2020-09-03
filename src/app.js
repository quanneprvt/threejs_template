const OrbitControls = (require('./libs/OrbitControls')).OrbitControls;

class APP
{
    constructor()
    {
        this.renderer;
        this.scene;
        this.camera;
        this.controls;
        this.width = 800;
        this.height = 600;
        this.light;
        this.test = new THREE.Vector3();
        this.raycaster;
        this.mouse = {};
        this.INTERSECTED;
        // this.Init();
    }

    Init()
    {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera( 75,this.width / this.height, 0.1, 1000 );
        
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize( this.width, this.height );
        document.body.appendChild( this.renderer.domElement );

        // this.controls = new OrbitControls( this.camera, this.renderer.domElement );
        this.raycaster = new THREE.Raycaster();

        var geometry = new THREE.BoxGeometry();
        var material = new THREE.MeshPhongMaterial( { color: 0x00ff00 } );
        var cube = new THREE.Mesh( geometry, material );
        this.light = new THREE.DirectionalLight( 0xffffff, 1 );
        this.light.position.z = 5
        // directionalLight.position.x = -2;
        // directionalLight.position.y = 5;
        // this.light.target = cube;

        this.scene.add(this.light);
        // this.camera.add(directionalLight);
        // this.scene.add( cube);

        this.camera.position.z = 10;

        this.Update();
        document.addEventListener( 'mousemove', this.onDocumentMouseMove.bind(this), false );
    }

    onDocumentMouseMove(event)
    {
        event.preventDefault();
        // var mouse = {};

        this.mouse.x = ( event.clientX / this.width ) * 2 - 1;
        this.mouse.y = - ( event.clientY / this.height ) * 2 + 1;
        // console.log(mouse);
    }

    Update()
    {
        requestAnimationFrame( this.Update.bind(this) );
        // this.controls.update();
        this.raycaster.setFromCamera( this.mouse, this.camera );

        var intersects = this.raycaster.intersectObjects( this.scene.children,true );
        // console.log(intersects);
        if ( intersects.length > 0 ) {

            if ( this.INTERSECTED != intersects[ 0 ].object ) {

                this.INTERSECTED = intersects[ 0 ].object;

            }

        } else {

            this.INTERSECTED = null;

        }
        if (this.INTERSECTED)
            console.log(this.INTERSECTED);
        this.light.position.copy( this.camera.getWorldPosition(this.test) );
        this.renderer.render( this.scene, this.camera );
    }
}

module.exports = new APP();