const MTLLoader = require('./libs/MTLLoader');
const OBJLoader2 = require('./libs/OBJLoader2');
const MtlObjBridge = require('./libs/MtlObjBridge');

class Loader
{
    constructor()
    {

    }

    Load(file)
    {
        // console.log(file);
        // let onLoadMtl = function ( mtlParseResult ) {
        //     objLoader2.setModelName( modelName );
        //     objLoader2.setLogging( true, true );
        //     objLoader2.addMaterials( MtlObjBridge.addMaterialsFromMtlLoader( mtlParseResult ), true );
        //     objLoader2.load( 'models/obj/female02/female02.obj', callbackOnLoad, null, null, null );
        // };
        // let mtlLoader = new MTLLoader();
        // mtlLoader.load( 'models/obj/female02/female02.mtl', onLoadMtl );
    }
}

module.exports = new Loader();