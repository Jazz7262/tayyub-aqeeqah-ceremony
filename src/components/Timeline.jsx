import React from "react";
import "../styles/Timeline.css";

function Timeline() {
    return (
        <section id="timeline">
            <div className="single-timeline">
                <h1 className="inshaallaah">Inshaallaah ...</h1>

                <div
                    className="wrapper"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <div className="content">
                        <h1>Aqeeqah Ceremony</h1>
                        <p>
                            On Saturday, 06<sup>th</sup> May, 2023,
                            <br />
                            15<sup>th</sup> Shawwal-ul-Mukarramam, 1444 Hijri,
                            <br />
                            Time: 02:00 PM.
                        </p>
                        <h2>Venue:</h2>
                        <p>
                            Royal Function Hall,
                            <br /> Near Bank of India,
                            <br /> Adoni.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        // <section id="timeline">
        //     <div className="multi-timeline">
        //         <h1 className="inshaallaah">Inshaallaah ...</h1>
        //         <div className="wrapper">
        //             {/* shukrana included */}
        //             {/* <>
        //                 <div className="row">
        //                     <div className="col-lg-6 left" data-aos="fade-down">
        //                         <h1>Shukrana</h1>
        //                         <p>
        //                             On Wednesday, 22<sup>nd</sup> February,
        //                             2023.
        //                             <br />1<sup>st</sup> Shaban-ul-Muazzam, 1444
        //                             Hijri,
        //                             <br />
        //                             Time: 09:00 PM.
        //                         </p>
        //                     </div>
        //                     <div
        //                         className="col-lg-6 right"
        //                         data-aos="fade-down"
        //                     ></div>
        //                 </div>
        //                 <div className="row">
        //                     <div
        //                         className="col-lg-6 left next"
        //                         data-aos="fade-down"
        //                         data-aos-offset="200"
        //                     ></div>
        //                     <div
        //                         className="col-lg-6 right next"
        //                         data-aos="fade-down"
        //                         data-aos-offset="200"
        //                     >
        //                         <h1>Nikaah</h1>
        //                         <p>
        //                             On Thursday, 23<sup>rd</sup> February, 2023,
        //                             <br />2<sup>nd</sup> Shaban-ul-Muazzam, 1444
        //                             Hijri,
        //                             <br />
        //                             Time: 12:45 PM.
        //                         </p>

        //                         <h2>Venue:</h2>
        //                         <p>
        //                             Taj Palace,
        //                             <br /> Devaratty Road,
        //                             <br /> Devanagere, Karnataka.
        //                         </p>
        //                     </div>
        //                 </div>
        //                 <div className="row">
        //                     <div
        //                         className="col-lg-6 left next"
        //                         data-aos="fade-down"
        //                         data-aos-offset="200"
        //                         data-aos-delay="100"
        //                     >
        //                         <h1>Valima</h1>

        //                         <p>
        //                             On Sunday, 26<sup>th</sup> February, 2023,
        //                             <br />5<sup>th</sup> Shaban-ul-Muazzam, 1444
        //                             Hijri,
        //                             <br />
        //                             Time: 07:00 PM.
        //                         </p>

        //                         <h2>Venue:</h2>
        //                         <p>
        //                             Mehboobia Palace,
        //                             <br /> SKD Colony, Adoni,
        //                             <br /> Kurnool Dist., AP.
        //                         </p>
        //                     </div>
        //                     <div
        //                         className="col-lg-6 right next"
        //                         data-aos="fade-down"
        //                         data-aos-offset="200"
        //                         data-aos-delay="100"
        //                     ></div>
        //                 </div>
        //             </> */}

        //             {/* shukrana excluded */}
        //             <>
        //                 <div className="row">
        //                     <div
        //                         className="col-lg-6 left next"
        //                         data-aos="fade-down"
        //                         data-aos-offset="200"
        //                     >
        //                         <h1>Nikaah</h1>
        //                         <p>
        //                             On Tuesday, 09<sup>th</sup> May, 2023,
        //                             <br />
        //                             18<sup>th</sup> Shawwal-ul-Mukarramam, 1444
        //                             Hijri,
        //                             <br />
        //                             Time: 12:30 PM.
        //                         </p>

        //                         <h2>Venue:</h2>
        //                         <p>
        //                             Muslim Function Hall,
        //                             <br /> Opposite Ranga Mandir,
        //                             <br /> Bellari, Karnataka - 583 101.
        //                         </p>
        //                     </div>
        //                     <div
        //                         className="col-lg-6 right next"
        //                         data-aos="fade-down"
        //                         data-aos-offset="200"
        //                     ></div>
        //                 </div>
        //                 <div className="row">
        //                     <div
        //                         className="col-lg-6 left next"
        //                         data-aos="fade-down"
        //                         data-aos-offset="200"
        //                         data-aos-delay="100"
        //                     ></div>
        //                     <div
        //                         className="col-lg-6 right next"
        //                         data-aos="fade-down"
        //                         data-aos-offset="200"
        //                         data-aos-delay="100"
        //                     >
        //                         <h1>Valima</h1>
        //                         <p>
        //                             On Wednesday, 10<sup>th</sup> May, 2023,
        //                             <br />
        //                             19<sup>th</sup> Shawwal-ul-Mukarramam, 1444
        //                             Hijri,
        //                             <br />
        //                             Time: 02:00 PM.
        //                         </p>
        //                         <h2>Venue:</h2>
        //                         <p>
        //                             Danish Function Hall,
        //                             <br /> Bypass Road, Adoni,
        //                             <br /> Kurnool Dist., AP - 518 301.
        //                         </p>
        //                     </div>
        //                 </div>
        //             </>
        //         </div>
        //     </div>
        // </section>
    );
}

export default Timeline;
