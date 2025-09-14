
import React, { useEffect } from 'react';

const tools = [
    {
        name: 'Power Apps',
        icon: (
            <svg className="w-24 h-24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 4L42 16V32L24 44L6 32V16L24 4Z" fill="#742774"/>
                <path d="M21 18L32 24L21 30V18Z" fill="white"/>
            </svg>
        ),
    },
    {
        name: 'Power Automate',
        icon: (
             <svg className="w-24 h-24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 20H30C32.21 20 34 21.79 34 24C34 26.21 32.21 28 30 28H12V20Z" fill="#0066FF" />
                <path d="M22 12L38 24L22 36V12Z" fill="#0066FF" />
            </svg>
        ),
    },
    {
        name: 'Power BI',
        icon: (
            <svg className="w-24 h-24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 38V22C10 21.4477 10.4477 21 11 21H17C17.5523 21 18 21.4477 18 22V38H10Z" fill="#F2C811"/>
                <path d="M20 38V12C20 11.4477 20.4477 11 21 11H27C27.5523 11 28 11.4477 28 12V38H20Z" fill="#F2C811"/>
                <path d="M30 38V28C30 27.4477 30.4477 27 31 27H37C37.5523 27 38 27.4477 38 28V38H30Z" fill="#F2C811"/>
            </svg>
        ),
    },
    {
        name: 'Teams',
        icon: (
            <svg className="w-24 h-24" viewBox="0 0 48 48" fill="#6264A7" xmlns="http://www.w3.org/2000/svg">
                <path d="M29 16C29 18.2091 27.2091 20 25 20C22.7909 20 21 18.2091 21 16C21 13.7909 22.7909 12 25 12C27.2091 12 29 13.7909 29 16Z"/>
                <path d="M25 22C21.134 22 18 25.134 18 29V36H32V29C32 25.134 28.866 22 25 22Z"/>
                <path opacity="0.6" d="M21.5 17C21.5 19.4853 19.4853 21.5 17 21.5C14.5147 21.5 12.5 19.4853 12.5 17C12.5 14.5147 14.5147 12.5 17 12.5C19.4853 12.5 21.5 14.5147 21.5 17Z"/>
                <path opacity="0.6" d="M17 23.5C13.134 23.5 10 26.634 10 30.5V36H20V30.5C20 26.634 16.866 23.5 17 23.5Z"/>
            </svg>
        ),
    },
];


const App: React.FC = () => {

    useEffect(() => {
        const slides = document.querySelectorAll('.slide-content');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, { threshold: 0.2, rootMargin: '0px 0px -50px 0px' });

        slides.forEach(slide => {
            observer.observe(slide);
        });

        return () => {
            slides.forEach(slide => {
                observer.unobserve(slide);
            });
        };
    }, []);

    return (
        <div className="presentation-container">

            {/* Slide 1: Portada */}
            <section id="slide1" className="slide bg-primary-dark text-white">
                <div className="slide-content text-center">
                    <h1 className="text-6xl md:text-8xl font-black leading-tight mb-6">
                        Limpieza y Mantenimiento con Control Digital
                    </h1>
                    <p className="text-3xl md:text-4xl text-gray-300">Sección: Administración + Tecnología</p>
                </div>
            </section>


            {/* Slide 2: Problemas comunes */}
            <section id="slide2" className="slide bg-white">
                <div className="slide-content">
                    <h2 className="text-5xl md:text-6xl font-bold text-dark mb-16 text-center">Áreas de oportunidad:</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="bg-light p-8 rounded-xl shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105 duration-300 border border-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-20 h-20 text-primary-dark mb-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" /></svg>
                            <p className="text-dark text-2xl font-semibold">No hay claridad de quién es responsable de cada torre o suite.</p>
                        </div>
                        <div className="bg-light p-8 rounded-xl shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105 duration-300 border border-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-20 h-20 text-primary-dark mb-6"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 00-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
                            <p className="text-dark text-2xl font-semibold">Los controles son manuales, lo que genera olvidos y variaciones de calidad.</p>
                        </div>
                        <div className="bg-light p-8 rounded-xl shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105 duration-300 border border-gray-200">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-20 h-20 text-primary-dark mb-6"><path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 21.75a8.967 8.967 0 01-5.454-1.31m5.454 0L13.988 15.51a23.848 23.848 0 00-5.454-1.31M13.988 15.51a23.848 23.848 0 01-5.454-1.31A8.967 8.967 0 016 21.75a8.967 8.967 0 01-5.454-1.31M6 21.75L3.143 17.082m2.857 0L6 15.51a23.848 23.848 0 015.454-1.31m5.454 0L14.988 17.082" /></svg>
                           <p className="text-dark text-2xl font-semibold">Cuando algo se rompe o se retrasa, la gerencia se entera tarde, cuando ya hay una queja en redes.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Slide 3: Lo que nosotros hacemos */}
            <section id="slide3" className="slide bg-primary-gray">
                 <div className="slide-content">
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-12 text-center">Nuestra propuesta es:</h2>
                    <div className="max-w-5xl mx-auto space-y-8">
                        <div className="bg-light p-6 rounded-xl shadow-lg flex items-center space-x-6 border border-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-16 h-16 text-primary-dark flex-shrink-0"><path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V6a2.25 2.25 0 012.25-2.25h3.75a2.25 2.25 0 012.25 2.25v.75m-10.5 6v6a2.25 2.25 0 002.25 2.25h3.75a2.25 2.25 0 002.25-2.25v-6" /><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75h3.75m-3.75 3h3.75M9 18h3.75m-3.75-9h3.75" /></svg>
                            <p className="text-dark text-2xl font-semibold">Mapeamos los procesos de housekeeping y mantenimiento, documentando responsables y frecuencias.</p>
                        </div>
                        <div className="bg-light p-6 rounded-xl shadow-lg flex items-center space-x-6 border border-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-16 h-16 text-primary-dark flex-shrink-0"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>
                            <p className="text-dark text-2xl font-semibold">Digitalizamos el control con checklists automáticos y alertas en tiempo real.</p>
                        </div>
                        <div className="bg-light p-6 rounded-xl shadow-lg flex items-center space-x-6 border border-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-16 h-16 text-primary-dark flex-shrink-0"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" /></svg>
                            <p className="text-dark text-2xl font-semibold">Armamos un tablero que muestra al instante incidencias abiertas, resueltas y pendientes.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Slide 4: Beneficios */}
            <section id="slide4" className="slide bg-white">
                <div className="slide-content">
                    <h2 className="text-5xl md:text-6xl font-bold text-dark mb-16 text-center">📊 Beneficios:</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="bg-light p-8 rounded-xl shadow-lg flex flex-col items-center text-center border border-gray-200 h-full justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-16 h-16 text-primary-dark mb-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <h3 className="font-semibold text-2xl text-dark">Menos quejas en reseñas (–70% en 3 meses).</h3>
                        </div>
                        <div className="bg-light p-8 rounded-xl shadow-lg flex flex-col items-center text-center border border-gray-200 h-full justify-center">
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-16 h-16 text-primary-dark mb-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <h3 className="font-semibold text-2xl text-dark">Estándar de calidad uniforme en todas las torres.</h3>
                        </div>
                        <div className="bg-light p-8 rounded-xl shadow-lg flex flex-col items-center text-center border border-gray-200 h-full justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-16 h-16 text-primary-dark mb-6"><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639l4.43-7.108a1.012 1.012 0 011.59-.444l4.223 2.943a1.012 1.012 0 001.215 0l4.223-2.943a1.012 1.012 0 011.59.444l4.43 7.108a1.012 1.012 0 010 .639l-4.43 7.108a1.012 1.012 0 01-1.59.444l-4.223-2.943a1.012 1.012 0 00-1.215 0l-4.223-2.943a1.012 1.012 0 01-1.59-.444L2.036 12.322z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            <h3 className="font-semibold text-2xl text-dark">Transparencia total: la gerencia ve en un clic cómo está cada suite.</h3>
                        </div>
                    </div>
                </div>
            </section>


            {/* Slide 5: Entregables */}
            <section id="slide5" className="slide bg-primary-gray">
                <div className="slide-content">
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-12 text-center">📦 Entregables (con contexto):</h2>
                    <div className="max-w-4xl mx-auto space-y-6">
                        {[
                            "Mapa de procesos documentado → muestra claramente qué tareas corresponden a quién, evitando confusiones y omisiones.",
                            "Checklists digitales de limpieza y mantenimiento → aseguran que cada suite cumpla el mismo estándar diario y generan alertas inmediatas ante incumplimientos.",
                            "Tablero de incidencias en Power BI → permite a la gerencia dar seguimiento en tiempo real y tomar decisiones rápidas para mejorar la experiencia del huésped."
                        ].map((item, index) => (
                            <div key={index} className="bg-light p-6 rounded-lg flex items-center space-x-6 text-left shadow-md transition-all hover:shadow-lg hover:bg-gray-200 border border-gray-200">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-10 h-10 text-accent-green flex-shrink-0"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                                <h3 className="font-semibold text-2xl text-dark">{item}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Slide 6: KPIs */}
            <section id="slide6" className="slide bg-primary-dark">
                <div className="slide-content">
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-16 text-center">📈 KPIs:</h2>
                    <div className="timeline-container">
                        <div className="timeline-item timeline-left">
                            <div className="timeline-content"><h3 className="text-3xl font-bold text-dark">MTTR (Mean Time To Resolution – tiempo promedio que tarda el hotel en resolver una incidencia desde que se reporta hasta que queda resuelta).</h3></div>
                        </div>
                        <div className="timeline-item timeline-right">
                            <div className="timeline-content"><h3 className="text-3xl font-bold text-dark">% de suites con checklist completado (mide la constancia en la operación diaria).</h3></div>
                        </div>
                        <div className="timeline-item timeline-left">
                            <div className="timeline-content"><h3 className="text-3xl font-bold text-dark">Calificación de limpieza en reseñas (promedio específico de limpieza en plataformas como Booking o Google).</h3></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Slide 7: Herramientas */}
            <section id="slide7" className="slide bg-primary-gray">
                <div className="slide-content text-center">
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-16">🛠 Herramientas: Power Apps, Power Automate, Power BI, Teams.</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-5xl mx-auto">
                        {tools.map((tool, index) => (
                             <div key={index} className="bg-white p-12 rounded-2xl shadow-lg flex flex-col items-center justify-center text-center transition-transform transform hover:scale-105 duration-300 border border-gray-100">
                                <div className="h-40 w-40 bg-gray-50 rounded-full flex items-center justify-center mb-8">
                                    {tool.icon}
                                </div>
                                <span className="font-semibold text-3xl text-gray-700">{tool.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default App;
