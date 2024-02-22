import ImageHero from "./HeroImage/ImageHero";
import WritingHero from "./HeroImage/writingHero";

const HeroImage=(props)=>{
    return(
        <div className="relative">
            <ImageHero imageUrl={props.imageUrl}/>
        <WritingHero title={props.title} paragraph={props.paragraph}/>
        
    </div>
    )
}
export default HeroImage;