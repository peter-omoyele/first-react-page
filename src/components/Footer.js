import Twitter from './Twitter Icon.png'
import Facebook from './Facebook Icon.png'
import Instagram from './Instagram Icon.png'
import Github from './GitHub Icon.png'

export default function Footer() {
    return (
        <div className="icon-container">
            <a href=""><img src={Twitter} alt="" /></a>
            <a href=""><img src={Facebook} alt="" /></a>
            <a href=""><img src={Instagram} alt="" /></a>
            <a href=""><img src={Github} alt="" /></a>    
        </div>

    )
}