const WritingHero=(props)=>{
    return(
        <div className="container mx-auto">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-2 ">
        <h1 className="text-3xl mb-4 max-lg:text-[1rem]">{props.title}</h1>
        <p className="text-2xl max-lg:text-[0.75rem]">{props.paragraph}</p>
        </div>
        </div>
    
    )
}
export default WritingHero