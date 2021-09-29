/*const responseBuilder=resquire('../src/responseBuilder'),
const calculateBirthyear=require('../src/calculateBirthyear')
*/
describe('responseBuilder',()=>{
    it('beispiel',()=>{
        let actual=10;

        let expected=5;

        console.log(typeof Nan);

        expect(actual).toBeGreaterThan(expected);
    });
    it('should return code 200 with message',()=>{
        const actual=responseBuilder(200, {message: 'irgendwas'});

        const expected={
            statusCode:200,
            message:'irgendwas'
        }
        expect(JSON.parse(actual)).toEqual(expected);
    })
    it('should nreturn code 200 with message and error',()=>{

        const expected={
            statusCode:200,
            message:'message',
            error:'error'
        }
        expect(JSON.parse(actual).message).toBeTruthy();
        expect(JSON.parse(actual).error).toBeTruthy();
    })
})

describe('calculateBirthyear',()=>{
    it('should return TypeError when parameter is Object',()=>{
        const actual=calculateBirthyear({})

        expect(actual).toBe(NaN);
    })


    it('should throw TypeError when parameter is Nan',()=>{
        const actual=()=>{
            calculateBirthyear('yeet')
        }
        expect(actual).toThrow(TypeError);
    })
})

describe('mediaLibrary',()=>{
    
})