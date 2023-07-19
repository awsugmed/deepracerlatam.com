/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

import "/node_modules/flag-icons/css/flag-icons.min.css";

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600">
              ¡Únete a la Liga DeepRacer Latam y descubre el emocionante mundo de la inteligencia artificial aplicada a la conducción autónoma!
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
              Demuestra tus habilidades, compite contra los mejores y lleva tu pasión por la tecnología al siguiente nivel. ¿Estás listo para la carrera del futuro?{" "}
                <a
                  href="./liga-latam-2023"
                  className="text-blueGray-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ¡Inscríbete ahora!
                </a>
                . #DeepRacerLatam
              </p>
              <div className="mt-12">
                <a
                  href="./liga-latam-2023"
                  target="_blank"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-400 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Inscríbete
                </a>
                <a
                  href="https://aws.amazon.com/es/deepracer/"
                  className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                  target="_blank"
                >
                  Conocer más
                </a>
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px"
          src="/img/dr-league-latam.png"
          alt="DeepRacer Latam"
        />
      </section>


      <section className="py-20 bg-blueGray-600 overflow-hidden">
        <div className="container mx-auto pb-64">
          <div className="text-white font-bold text-center text-6xl">
            Calendario Latam 2023
          </div>
          <br></br>
          <br></br>
          <div className="flex flex-col text-2xl">
            <div className="text-white font-bold whitespace-normal text-left">
              <span class="fi fi-co"></span> Community Day Colombia
              <br></br>
              Agosto 2, 2023
              <br></br>
              Workshop Virtual
            </div>
            <i className="fa-solid fa-gears text-center"></i>
            <div className="text-white font-bold whitespace-normal text-right">
              <span class="fi fi-co"></span> Community Day Colombia
              <br></br>
              Agosto 12, 2023
              <br></br>
              Competencia Física
            </div>
            <div className="text-white font-bold whitespace-normal text-left">
              <span class="fi fi-pe"></span> Conf Perú
              <br></br>
              Septiembre 14, 2023
              <br></br>
              Workshop Virtual              
            </div>
            <i className="fa-solid fa-gears text-center"></i>
            <div className="text-white font-bold whitespace-normal text-right">
              <span class="fi fi-pe"></span> Conf Perú
              <br></br>
              Septiembre 23, 2023
              <br></br>
              Competencia Física
            </div>
          </div>



        </div>
      </section>



      <section className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-100 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>      

        <div className="container mx-auto overflow-hidden pb-20"> 
          <div className="flex flex-wrap items-center pt-32">
            <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
              <div className="justify-center flex flex-wrap relative">
                <div className="my-4 w-full lg:w-6/12 px-4">
           
                    <div className="bg-red-400 shadow-lg rounded-lg p-8">
                      <img
                        alt="DeepRacer Car"
                        className="shadow-md rounded-full max-w-full w-18 mx-auto p-2 bg-white"
                        src="/img/deepracer_car.png"
                      />
                    </div>               

                    <div className="bg-lightBlue-400 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="DeepRacer Evo"
                        className="shadow-md rounded-full max-w-full w-18 mx-auto p-2 bg-white"
                        src="/img/deepracer_car_evo.png"
                      />
                    </div>
                      
                    <div className="bg-teal-500 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-18 mx-auto p-2 bg-white"
                        src="/img/deepracer_sensor_kit.png"
                      />
                    </div>               
                </div>
                <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">

                    <div className="bg-emerald-500 shadow-lg rounded-lg text-center p-8">
                      <img
                        alt="DeepRacer Evo"
                        className="shadow-md rounded-full max-w-full w-18 mx-auto p-2 bg-white"
                        src="/img/deepracer_car_evo_naked.png"
                      />
                    </div>      

                    <div className="bg-blueGray-400 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="Pista DeepRacer A to Z speedway basic"
                        className="shadow-md rounded-full max-w-full w-18 mx-auto p-2 bg-white"
                        src="/img/deepracer-A-to-Z-speedway-basic.png"
                      />
                    </div>          

                    <div className="bg-yellow-500 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="DeepRacer Logo"
                        className="shadow-md rounded-full max-w-full w-18 mx-auto p-2 bg-white"
                        src="/img/DRL-Logo.png"
                      />
                    </div>       
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
            <iframe width="448" height="252" src="https://www.youtube.com/embed/Q_ky7CP7hZM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
          </div>
        </div>

        

        <div className="justify-center text-center flex flex-wrap mt-24">
          <div className="w-full md:w-6/12 px-12 md:px-4">
            <h2 className="font-semibold text-4xl">Comunidades en Latinoamérica</h2>
          </div>
        </div>
      </section>

      <section className="block relative z-1 bg-blueGray-600">
        <div className="container mx-auto">
          <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4  -mt-24">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    <span class="fi fi-co"></span> AWS UG - Medellín
                  </h5>
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    <a href="https://www.linkedin.com/in/londoso/" target="_blank"><i className="fa-brands fa-linkedin" ></i> Contacto: Anderson Londoño </a>
                  </h5>
                  <Link href="https://www.instagram.com/awsugmed/">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="AWS Users Group Medellín"
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/img/aws_ug_medellin.png"
                      />
                    </div>
                  </Link>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    <span class="fi fi-pe"></span> AWS UG Perú
                  </h5>
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    <a href="https://www.linkedin.com/in/carloscortezcloud/" target="_blank"><i className="fa-brands fa-linkedin" ></i> Contacto: Carlos Cortez </a>
                  </h5>              
                  <Link href="https://www.linkedin.com/company/awsusergroupperu/">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-black w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="AWS Users Group Perú"
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/img/aws-ug-peru.png"
                      />
                    </div>
                  </Link>
                </div>

                {/* <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Landing Page
                  </h5>
                  <Link href="/landing">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/img/login.jpg"
                      />
                    </div>
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
}
