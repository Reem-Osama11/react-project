import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import TrackVisibility from "react-on-screen"
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from "../pro_image/img/still-life-books-versus-technology_23-2150062920.jpg";



export const Banner = () => {
    const [Loopnum, setLoopnum] = useState(0)
    const [isdelete, setisdelete] = useState(false)
    const [delta, setdelta] = useState(300 - Math.random() * 100)
    const [text, settext] = useState('')
    const toRotate = ["Frontend Developer", "Backend Developer", "Fullstack"];
    const period = 3000



    useEffect(() => {
        let timer = setInterval(() => {
            time();
        }, delta)
        return () => { clearInterval(timer) };
    })

    const time = () => {
    let i = Loopnum % toRotate.length;
    let fullText = toRotate[i]

    let updateText = isdelete ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    settext(updateText)


    if (isdelete) {
        setdelta(prevdelta => prevdelta / 2)
    }
    if(!setisdelete && updateText === fullText){
        setisdelete(true);
        setdelta(period);
    }
    else if (isdelete && updateText === '') {
        setisdelete(false);
        setLoopnum(Loopnum + 1);

        setdelta(500);
    }
    }
    
    return(
    <section className="banner" id="home">
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12} md={6} xl={7}>
                            <TrackVisibility>{({ isVisible }) =><div className={isVisible ? "animate__animated animate__fadeIn" : ""}><span className="tagline">Welcome to my Portfolio ,I’m Reem Osama Hamedy</span><h1>{`Hi! I'm  ,Reem Osama`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1> <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle  /></button></div>}</TrackVisibility>
                        </Col>
                        <Col xs={12} md={6} xl={5}> <TrackVisibility>{({ isVisible }) => <div className={isVisible ? "animate__animated animate__zoomIn" : ""}><img className="imagee" src={headerImg} alt="Header Img" width="500px"/></div>}</TrackVisibility></Col>
                    </Row>
                </Container>
            </section>
        )
    } 
    export default  Banner;