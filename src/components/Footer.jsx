function Footer() {
    return ( 
        <footer>
            <div className="contact" id="contact">
            <h4>#Let's connect together</h4>
            <div class="contact-box">
                <a href="#"><i className="fa fa-facebook" title="facebook"></i></a>
                <a href="#"><i className="fa fa-twitter" title="twitter"></i></a>
                <a href="#"><i className="fa fa-instagram" title="instagram"></i></a>
                <a href="#"><i className="fa fa-google" title="google"></i></a>
                <a href="#"><i className="fa fa-linkedin" title="linkedin"></i></a>
            </div>
        </div>
            <h3>Powered by netlify</h3>
            <p>Like the project follow my github for me</p>
            <a href="https://github.com/sherpa00" id="github"><i className="fa fa-github"></i></a>
            <p>api used from <a href="https://rickandmortyapi.com/">www.rickandmortyapi.com</a></p>
        </footer>
     );
}

export default Footer;