/**
 * MyWater
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyWater extends CGFobject
{
	constructor(scene,idtexture,idwavemap,parts,heightscale,texscale,minS = 0, maxS = 1, minT = 0, maxT = 1)
	{
        super(scene);
        this.idtexture = idtexture;
        this.idwavemap = idwavemap;
        this.parts = parts;
        this.heightscale = heightscale;
        this.texscale = texscale;
        
		this.minS = minS;
        this.maxS = maxS;
        this.minT = minT;
        this.maxT = maxT;

		this.initBuffers();
	};

	initBuffers()
	{

    }
    
    changeLength(length_s, length_t) {/*

        this.length_s = length_s;
		this.length_t = length_t;
    
        for(var i = 0; i <= this.stacks; i++)
        {
            for(var j = 0; j <= this.slices; j++)
            {
               this.texCoords.push(j * length_s / this.slices, i * length_t / this.stacks);
            }    
        }

        this.updateTexCoordsGLBuffers();*/
    }
};