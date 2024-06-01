export const shatter_frag = `
#ifdef GL_ES
    precision highp float;
#endif

varying vec2 vUV;
uniform sampler2D textureSampler;
uniform vec2 screenSize;

float rnd(vec2 s)
{
    return 1.-2.*fract(sin(s.x*253.13+s.y*341.41)*589.19);
}

void main(void)
{
    vec2 fragCoord = vUV.xy;
    vec2 iResolution = screenSize.xy;

	vec2 p=(fragCoord.xy*2.-iResolution.xy)/iResolution.x;

    vec2 v=vec2(1E3);
    vec2 v2=vec2(1E4);
    vec2 center=vec2(0,0);
    for(int c=0;c<12;c++)
    {
        float angle=floor(rnd(vec2(float(c),10))*8.)*3.1415*.4-.5;
        float dist=pow(rnd(vec2(float(c),78.21)),2.)*5.0;
        vec2 vc=vec2(center.x+cos(angle)*dist+rnd(vec2(float(c),5))*7E-1,
                    center.y+sin(angle)*dist+rnd(vec2(float(c),1000))*7E-4);
        if(length(vc-p)<length(v-p))
        {
	        v2=v;
	        v=vc;
        }
        else if(length(vc-p)<length(v2-p))
        {
            v2=vc;
        }
    }

    vec4 tex=texture2D(textureSampler,(fragCoord.xy)/iResolution.xy+rnd(v)*.02);
    gl_FragColor=tex;
}
`;
