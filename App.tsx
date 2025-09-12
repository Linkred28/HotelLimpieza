
import React, { useEffect } from 'react';

const tools = [
    {
        name: 'Power Apps',
        icon: (
             <svg className="w-14 h-14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 6L10 13V27L24 34L38 27V13L24 6Z" fill="#742774"/>
                <path d="M22 20.5V27.5L29 24L22 20.5Z" fill="white"/>
            </svg>
        ),
    },
    {
        name: 'Power Automate',
        icon: (
             <svg className="w-14 h-14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 20H28C30.2091 20 32 21.7909 32 24C32 26.2091 30.2091 28 28 28H12" stroke="#0066FF" strokeWidth="2.5"/>
                <path d="M20 12L36 24L20 36" stroke="#0066FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        ),
    },
    {
        name: 'Power BI',
        icon: (
            <svg className="w-14 h-14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="13" y="20" width="6" height="14" rx="1" fill="#F2C811"/>
                <rect x="21" y="14" width="6" height="20" rx="1" fill="#F2C811"/>
                <rect x="29" y="24" width="6" height="10" rx="1" fill="#F2C811"/>
            </svg>
        ),
    },
    {
        name: 'Teams',
        icon: (
            <svg className="w-14 h-14" viewBox="0 0 48 48" fill="#6264A7" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 17C22 19.2091 20.2091 21 18 21C15.7909 21 14 19.2091 14 17C14 14.7909 15.7909 13 18 13C20.2091 13 22 14.7909 22 17Z"/>
                <path d="M14.0001 23C11.7909 23 10 24.7909 10 27V32H18V27C18 24.7909 16.2091 23 14.0001 23Z"/>
                <path d="M29 20C29 22.2091 27.2091 24 25 24C22.7909 24 21 22.2091 21 20C21 17.7909 22.7909 16 25 16C27.2091 16 29 17.7909 29 20Z"/>
                <path d="M30.4143 25.1714C29.0714 24.4286 27.5714 24 26 24H25C22.791 24 21 25.791 21 28V32H34V28C34 26.8571 32.5714 25.4286 30.4143 25.1714Z"/>
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
                 <span className="absolute bottom-8 right-8 text-gray-500 font-bold text-lg">01</span>
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
                <span className="absolute bottom-8 right-8 text-gray-400 font-bold text-lg">02</span>
            </section>

            {/* Slide 3: Lo que nosotros hacemos */}
            <section id="slide3" className="slide bg-primary-gray">
                 <div className="slide-content">
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-12 text-center">Lo que nosotros hacemos:</h2>
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
                 <span className="absolute bottom-8 right-8 text-gray-500 font-bold text-lg">03</span>
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
                <span className="absolute bottom-8 right-8 text-gray-400 font-bold text-lg">04</span>
            </section>


            {/* Slide 5: Entregables */}
            <section id="slide5" className="slide bg-primary-gray">
                <div className="slide-content">
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-12 text-center">📦 Entregables:</h2>
                    <div className="max-w-4xl mx-auto space-y-6">
                        {[
                            "Mapa de procesos documentado.",
                            "Checklists digitales de limpieza y mantenimiento.",
                            "Tablero de incidencias en Power BI."
                        ].map((item, index) => (
                            <div key={index} className="bg-light p-6 rounded-lg flex items-center space-x-6 text-left shadow-md transition-all hover:shadow-lg hover:bg-gray-200 border border-gray-200">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-10 h-10 text-accent-green flex-shrink-0"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                                <h3 className="font-semibold text-2xl text-dark">{item}</h3>
                            </div>
                        ))}
                    </div>
                </div>
                <span className="absolute bottom-8 right-8 text-gray-500 font-bold text-lg">05</span>
            </section>

            {/* Slide 6: KPIs */}
            <section id="slide6" className="slide bg-primary-dark">
                <div className="slide-content">
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-16 text-center">📈 KPIs:</h2>
                    <div className="timeline-container">
                        <div className="timeline-item timeline-left">
                            <div className="timeline-content"><h3 className="text-3xl font-bold text-dark">Tiempo promedio de resolución de incidencias.</h3></div>
                        </div>
                        <div className="timeline-item timeline-right">
                            <div className="timeline-content"><h3 className="text-3xl font-bold text-dark">% de suites con checklist completado.</h3></div>
                        </div>
                        <div className="timeline-item timeline-left">
                            <div className="timeline-content"><h3 className="text-3xl font-bold text-dark">Niveles de satisfacción en limpieza en plataformas online.</h3></div>
                        </div>
                    </div>
                </div>
                <span className="absolute bottom-8 right-8 text-gray-500 font-bold text-lg">06</span>
            </section>

            {/* Slide 7: Herramientas */}
            <section id="slide7" className="slide bg-primary-gray">
                <div className="slide-content text-center">
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-16">🛠 Herramientas:</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-5xl mx-auto">
                        {tools.map((tool, index) => (
                             <div key={index} className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center justify-center text-center transition-transform transform hover:scale-105 duration-300 border border-gray-100">
                                <div className="h-28 w-28 bg-gray-50 rounded-full flex items-center justify-center mb-5">
                                    {tool.icon}
                                </div>
                                <span className="font-semibold text-2xl text-gray-700">{tool.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <span className="absolute bottom-8 right-8 text-gray-500 font-bold text-lg">07</span>
            </section>

        </div>
    );
};

export default App;
