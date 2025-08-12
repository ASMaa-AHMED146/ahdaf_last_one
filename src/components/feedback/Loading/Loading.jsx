import LottieHandler from "../LottieHandler/LottieHandler"

export default function Loading({loading,error,children}) {
    if(loading==='pending')
    {
        return <LottieHandler type='loading' message='wait for loading'/>
    }
    if(loading==='failed')
    {
        return <LottieHandler type='error' message={error}/>
    }
    return <div>
        {children}
    </div>
}
