export const distort_frag = `
#ifdef GL_ES
precision mediump float;
#endif

uniform sampler2D textureSampler;
varying vec2 vUV;
uniform vec2 screenSize;

float nrand( vec2 n )
{
	return fract(sin(dot(n.xy, vec2(12.9898, 78.233)))* 43758.5453);
}

float n1rand( vec2 n )
{
	float nrnd0 = nrand( n );
	return nrnd0;
}

vec2 distort_uvs(vec2 uv, float scale)
{
    float beta = (1. * n1rand(uv));
    vec2 uv1, uv2;

    uv1.x = uv.x + scale * (sin(beta));
    uv1.y = uv.y + scale * (cos(beta));

    uv2.x = uv.x + scale * (sin(beta));
    uv2.y = uv.y + scale * (cos(beta));
    return uv2.xy;
}

void main(void)
{
    vec2 uv = vUV;

	vec3 fg = texture2D(textureSampler, uv ).xyz;

    vec2 uv1 = distort_uvs(uv, .03);
    vec2 uv2 = distort_uvs(uv, .2);
    vec2 uv3 = distort_uvs(uv, .4);

    vec3 bg1 = texture2D(textureSampler, uv1).xyz;
    vec3 bg2 = texture2D(textureSampler, uv2).xyz;
    vec3 bg3 = texture2D(textureSampler, uv3).xyz;

    vec3 bg_composite = mix(mix(bg1.xyz, bg2.xyz, 0.5), bg3.xyz, 0.5);
    vec3 res = vec3(0,0,0);

    if(fg[0] + fg[1] + fg[2] > .2){
        res = fg;
    } else {
        res = bg_composite;
    }
    gl_FragColor.rgb = res;
    gl_FragColor.a = 1.0;

    // vec3( mix(fg.xyz, bg_composite.xyz, .5))
}
`;
