const Docs= (
    {params}:
    {params:{slug:string[]}}
) => {

    if(params.slug?.length == 2){
        return <div>Docs for feature {params.slug[0]} and concept {params.slug[1]} </div>
    }
    if(params.slug?.length == 1){
        return <div>Docs for feature {params.slug[0]} </div>
    }
    return <div>Docs</div>
}

export default Docs
