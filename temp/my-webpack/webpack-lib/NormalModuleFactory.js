const path = require('path')
const NormalModule = require('./NormalModule.js')
class NormalModuleFactory {
    // create(data){
    //     return new NormalModule(data);
    // }
    create(data, callback){
        data = {
            dependencies:[{
                module:null,
                optional:false,
                request:'./src/index.js',
                userRequest:'./src/index.js',
                weak:false
            }],
            contextInfo:{issuer: '', compiler: undefined},
            context:'/Users/lizuncong/Documents/手写源码系列/mini-webpack',
        }
        const resolveResult = {
            request:'/Users/lizc/Documents/MYProjects/mini-webpack/loaders/loader1.js!/Users/lizc/Documents/MYProjects/mini-webpack/src/index.js',
            rawRequest:'./src/index.js',
            parser: {},
            matchResource:undefined,
            loaders:[{
                loader:'/Users/lizc/Documents/MYProjects/mini-webpack/loaders/loader1.js',
                options:undefined
            }],
            generator:{},
            dependencies: [{
                optional:false,
                request:'./src/index.js',
                userRequest:'./src/index.js'
            }],
            context:'/Users/lizc/Documents/MYProjects/mini-webpack',
            resolveOptions:{},
            resource:'/Users/lizc/Documents/MYProjects/mini-webpack/src/index.js',
            resourceResolveData: {},
            type:'javascript/auto',
            settings:{},
            userRequest:'/Users/lizc/Documents/MYProjects/mini-webpack/src/index.js'
        }
        const createdModule = new NormalModule(resolveResult)
        callback(null, module)
    }
}

module.exports = new NormalModuleFactory()