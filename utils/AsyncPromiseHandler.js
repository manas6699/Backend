const AsyncPromiseHandler = (AsyncPromise)=>{
    (req , res , next) => {
        Promise.resolve(
            AsyncPromise(req , res , next)
        ).
        catch((err) => {
            console.log(err);
        })
    }
}

export {AsyncPromiseHandler}