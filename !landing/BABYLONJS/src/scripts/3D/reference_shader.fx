// Created by inigo quilez - iq/2013
// License Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License.

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

    float beta = (10. * n1rand(uv));

    vec2 uv1, uv2;

    uv1.x = uv.x + scale * (sin(beta));
    uv1.y = uv.y + scale * (cos(beta));

    uv2.x = uv.x + scale * (sin(beta));
    uv2.y = uv.y + scale * (cos(beta));


    return uv2.xy;
}

vec4 key(vec3 fg){

    float maxrb = max( fg.r, fg.b );
    float k = clamp( (fg.g-maxrb)*5.0, 0.0, 1.0 );

    float dg = fg.g;
    fg.g = min( fg.g, maxrb*0.8 );
    fg += dg - fg.g;

    vec4 fin = vec4(fg.x,fg.y,fg.z,k);

    return fin;
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 uv = fragCoord/iResolution.xy;

	vec4 fg = key(texture( iChannel0, uv ).xyz);


    vec2 uv1 = distort_uvs(uv, .01);
    vec2 uv2 = distort_uvs(uv, .05);
    vec2 uv3 = distort_uvs(uv, .3);

    vec4 bg1 = key(texture(iChannel0, uv1).xyz);

    vec4 bg2 = key(texture(iChannel0, uv2).xyz);

    vec4 bg3 = key(texture(iChannel0, uv3).xyz);

    vec3 bg_composite = mix(mix(bg1.xyz, bg2.xyz, 0.2), bg3.xyz, 0.2);

    fragColor = vec4( mix(fg.xyz, bg_composite, fg[3]), 1.0 );
}








