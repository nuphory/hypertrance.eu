import * as THREE from "three"
import { extendMaterial } from "./deps/ExtendMaterial.js";
export const MeshFresnelMaterial = extendMaterial(new THREE.MeshStandardMaterial, {
    header: 'varying vec3 vNN; varying vec3 vEye;',
    fragmentHeader: 'uniform vec3 fresnelColor;',

    vertex: {
        // Inserts the line after #include <fog_vertex>
        '#include <fog_vertex>': `
          mat4 LM = modelMatrix;
          LM[2][3] = 0.0;
          LM[3][0] = 0.0;
          LM[3][1] = 0.0;
          LM[3][2] = 0.0;

          vec4 GN = LM * vec4(objectNormal.xyz, 1.0);
          vNN = normalize(GN.xyz);
          vEye = normalize(GN.xyz-cameraPosition);`
    },
    fragment: {

        'vec4 diffuseColor = vec4( diffuse, opacity );': `

    diffuseColor.rgb +=  ( 1.0 - -min(dot(vEye, normalize(vNN) ), 0.0) ) * fresnelColor;`},




    // Uniforms (will be applied to existing or added)

    uniforms: {
        diffuse: new THREE.Color('black'),
        fresnelColor: new THREE.Color('blue'),
        side: THREE.DoubleSide,
    }


});