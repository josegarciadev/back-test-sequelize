import app from './app';

async function main(){

    await app.listen(app.get('PORT'),function(){
        console.log("server on Port: "+ app.get('PORT'))
    });
}

main();