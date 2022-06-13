import email from './email.png';
import linked from './linkedin.png'


export default function Bio() {
    return (
        <main className='bio-section'>
            <article>
                <h1>Peter Omoyele</h1>
                <p>Frontend Developer</p>
                <small><a href="https://theolafimihanblog.wordpress.com/" target='_blank'>Olafimihan.blog</a></small>
                
            </article>
            <section>
                <div className="email">
                    <img className='email-image' src={email} alt="" />
                    <p>Email</p>
                </div>

                <div className="linkedin">
                    <img src={linked} alt="" />
                    <p>Linkedin</p>
                </div>
            </section>
        </main>

    )
};