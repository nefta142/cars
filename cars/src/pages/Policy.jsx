import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Policy.css";

function Policy() {
    return (
        <div className="policy-main">
            <Header />

            <main className="policy-main-content">
                <h1>Política de Privacidad, Cookies y Condiciones</h1>

                <section>
                    <h2>Política de Privacidad</h2>
                    <p>
                        Este sitio web es un proyecto educativo. No recopilamos datos personales
                        con fines comerciales. Si envías información mediante formularios, se
                        utilizará únicamente para fines de prueba dentro del proyecto.
                    </p>
                </section>

                <section>
                    <h2>Cookies</h2>
                    <p>
                        Este sitio puede usar cookies técnicas para mejorar la experiencia de
                        usuario. No se utilizan cookies de terceros con fines publicitarios.
                    </p>
                </section>

                <section>
                    <h2>Contacto</h2>
                    <p>
                        Si tienes dudas sobre esta política, puedes contactar con el responsable
                        del sitio.
                    </p>
                </section>

                <section>
                    <h2>Condiciones de Venta</h2>
                    <p>
                        Este sitio web es un proyecto educativo y no realiza ventas reales. La
                        información mostrada sobre vehículos, precios o disponibilidad es solo
                        demostrativa.
                    </p>
                </section>

                <section>
                    <h2>Uso del sitio</h2>
                    <p>
                        El usuario se compromete a hacer un uso adecuado del contenido. El
                        propietario no se responsabiliza del uso indebido del sitio por terceros.
                    </p>
                </section>

                <section>
                    <h2>Propiedad intelectual</h2>
                    <p>
                        Los textos y el diseño del sitio pertenecen al autor del proyecto. Las
                        marcas y logotipos citados pertenecen a sus respectivos propietarios.
                    </p>
                </section>

                <p className="policy-ai">
                    Texto realizado con inteligencia artificial.
                </p>
            </main>

            <Footer />
        </div>
    );
}

export default Policy;
