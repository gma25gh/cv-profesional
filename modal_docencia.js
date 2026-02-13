// Modal Experiencia Docente
const modalHTML = `
<div id="modalDocencia" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.9); z-index: 10000; overflow-y: auto;">
    <div style="max-width: 1000px; margin: 2rem auto; background: white; border-radius: 10px; position: relative;">
        <button onclick="cerrarModalDocencia()" style="position: absolute; top: 1rem; right: 1rem; background: var(--primary); color: white; border: none; padding: 0.5rem 1rem; border-radius: 5px; cursor: pointer; font-size: 1.2rem; z-index: 10001;">
            ✕ Cerrar
        </button>

        <div style="padding: 3rem;">
            <h2 style="color: var(--primary); text-align: center; margin-bottom: 0.5rem;">📚 Experiencia Docente Universitaria</h2>
            <h3 style="text-align: center; color: var(--gray); margin-bottom: 2rem; font-size: 1.2rem;">Adscripción Profesional - FAU UNNE (2016-2017)</h3>

            <!-- Datos Generales -->
            <div style="background: var(--light-gray); padding: 1.5rem; border-radius: 10px; margin-bottom: 2rem;">
                <h4 style="color: var(--primary); margin-bottom: 1rem; font-size: 1.1rem;">📋 Datos Generales de la Adscripción</h4>
                <p style="margin: 0.5rem 0;"><strong>Asignatura:</strong> ARQUITECTURA V – Taller Vertical "A"</p>
                <p style="margin: 0.5rem 0;"><strong>Postulante:</strong> ARQ. ALEGRE, MAURO</p>
                <p style="margin: 0.5rem 0;"><strong>Director de Adscripción:</strong> Arq. HUGO R. LEGUIZAMÓN</p>
                <p style="margin: 0.5rem 0;"><strong>Carácter del Adscripto:</strong> Egresado Profesional</p>
                <p style="margin: 0.5rem 0; margin-top: 1rem;"><strong>Propósito de la Adscripción:</strong></p>
                <ul style="margin-left: 1.5rem; margin-top: 0.5rem;">
                    <li>Iniciación en la docencia</li>
                    <li>Colaboración con la cátedra</li>
                </ul>
            </div>

            <!-- Temática -->
            <div style="margin-bottom: 2rem;">
                <h4 style="color: var(--primary); margin-bottom: 1rem; font-size: 1.1rem;">🎯 Temática Desarrollada</h4>
                <h3 style="text-align: center; background: var(--primary); color: white; padding: 1rem; border-radius: 5px; font-size: 1.3rem;">
                    "DISEÑO ESTRUCTURAL DE LOS EDIFICIOS"
                </h3>
                <p style="margin-top: 1rem; color: var(--gray); line-height: 1.6;">
                    La temática abordó el "Diseño Estructural de los Edificios". La adscripción se previó desarrollar en la Cátedra <strong>"ARQUITECTURA V"</strong> del Taller Vertical <strong>"A"</strong> de la Facultad de Arquitectura y Urbanismo de la UNNE, bajo la dirección del Profesor a cargo de la misma, Arq. Hugo R. Leguizamón, durante el Ciclo Lectivo 2017.
                </p>
            </div>

            <!-- Fundamentos y Motivaciones -->
            <div style="background: #f8f9fa; padding: 1.5rem; border-left: 4px solid var(--primary); margin-bottom: 2rem;">
                <h4 style="color: var(--primary); margin-bottom: 1rem; font-size: 1.1rem;">💡 Fundamentos y Motivaciones Personales</h4>
                <p style="margin-bottom: 1rem; line-height: 1.6; color: var(--gray);">
                    Luego de haber transitado con éxito el desarrollo del Ciclo Lectivo 2016, bajo la modalidad de aplicativo de Estructuras en las Obras de Arquitectura, por medio de la Adscripción donde tuve la oportunidad de brindar apoyo continuo y soporte técnico sobre el Diseño de las Estructuras en las Edificaciones.
                </p>
                <p style="margin-bottom: 1rem; line-height: 1.6; color: var(--gray);">
                    <strong>Este nuevo año</strong>, la apuesta fue aún más fuerte, donde pretendí vincular la <strong>Tecnología de la Construcción de los Edificios</strong> con el <strong>Diseño de las Estructuras</strong> de los mismos. Desde las primeras ideas, bosquejos preliminares y situaciones constructivas, pasando por la confección de la documentación completa para su correcta ejecución, hasta llegar a la explicación y fundamentación de las diferentes propuestas.
                </p>
                <blockquote style="font-style: italic; color: var(--gray); margin: 1.5rem 0; padding-left: 1rem; border-left: 3px solid var(--primary);">
                    "Considero y sostengo que <strong>la Estructura es la parte fundamental de un edificio</strong>. Sin ella, no sería capaz de concebir un Espacio Arquitectónico. Y aun cuando ésta pareciera no existir, podría encontrarse implícita en la forma misma que se aprecia."
                </blockquote>
                <blockquote style="font-style: italic; color: var(--gray); margin: 1.5rem 0; padding-left: 1rem; border-left: 3px solid var(--primary);">
                    "Por ello su concepción adquiere fundamental importancia, desde la simple idea de estructurar un espacio, sostener y soportar cargas de todo tipo y adecuar entre sí, <strong>Proyecto Edilicio - Diseño Estructural</strong>."
                </blockquote>
            </div>

            <!-- Plan de Trabajos -->
            <div style="margin-bottom: 2rem;">
                <h4 style="color: var(--primary); margin-bottom: 1rem; font-size: 1.1rem;">📚 Plan de Trabajos</h4>
                <p style="margin-bottom: 1rem; line-height: 1.6; color: var(--gray);">
                    Para lograr el cometido, el Plan de Trabajos abarcó una serie de instancias con sus respectivos niveles de profundidad. El trabajo en equipo y la integración sistémica de las distintas disciplinas que conforman la profesión son necesarios para el buen desarrollo de la propuesta.
                </p>
                <p style="margin-bottom: 1rem; line-height: 1.6; color: var(--gray);">
                    El Alumno contó con <strong>información exclusiva y de primera mano</strong>, sobre el Conocimiento de las Estructuras empleadas para la Materialización de Grandes Emprendimientos.
                </p>
                <ul style="margin-left: 1.5rem; line-height: 1.8; color: var(--gray);">
                    <li>Se acompañó todo el desarrollo con un repaso por los Conceptos vistos durante todo el Cursado de Materias a fines</li>
                    <li>Se destacaron las <strong>Normas I.R.A.M. y C.I.R.S.O.C.</strong> para la correcta Representación de Planos de Estructuras</li>
                    <li>Ahondé en los Artículos del <strong>Reglamento General de Construcciones</strong></li>
                    <li>Di a conocer lo que es una <strong>Memoria de Cálculo</strong> y su importancia</li>
                    <li>Exposiciones sobre trabajos llevados a cabo. Estudio de Casos. Errores en la Construcción de Estructuras</li>
                </ul>
                <p style="margin-top: 1rem; line-height: 1.6; color: var(--gray);">
                    Se dispuso de un <strong>espacio virtual, a través de una página Web</strong> para exponer y mantener fluida comunicación con los Alumnos y Profesionales a cargo.
                </p>
                <p style="margin-top: 0.5rem;"><strong>🌐 Sitio Web:</strong> <a href="https://diblin.wixsite.com/disest" target="_blank" style="color: var(--primary); text-decoration: none;">diblin.wixsite.com/disest</a></p>
            </div>

            <!-- Objetivos -->
            <div style="background: var(--light-gray); padding: 1.5rem; border-radius: 10px; margin-bottom: 2rem;">
                <h4 style="color: var(--primary); margin-bottom: 1rem; font-size: 1.1rem;">🎯 Objetivos de la Adscripción</h4>
                <p style="margin-bottom: 1rem; line-height: 1.6; color: var(--gray);">
                    La propuesta tuvo por objetivo principal <strong>instruir a los Alumnos en el aspecto tecnológico</strong>, en cuanto a las Estructuras se refiere. Llevando a cabo una adecuada utilización de medios gráficos para representar con la mayor fidelidad la Propuesta Arquitectónica en su Fase Técnica – Constructiva.
                </p>
                <ul style="margin-left: 1.5rem; line-height: 1.8; color: var(--gray);">
                    <li><strong>Comprensión del Comportamiento de las Estructuras</strong> y su relación con los demás elementos que hacen a una Obra</li>
                    <li>Promoviendo el desarrollo de las <strong>habilidades adquiridas de los alumnos</strong>, durante su instrucción, bajo una modalidad orientativa y de consulta permanente</li>
                </ul>
            </div>

            <!-- Contenidos -->
            <div style="margin-bottom: 2rem;">
                <h4 style="color: var(--primary); margin-bottom: 1rem; font-size: 1.1rem;">📖 Contenidos Abordados</h4>
                <p style="margin-bottom: 0.5rem; line-height: 1.6; color: var(--gray);"><strong>La Estructura:</strong></p>
                <ul style="margin-left: 1.5rem; line-height: 1.8; color: var(--gray);">
                    <li>Conceptualización General</li>
                    <li>Representación - Normas, Códigos y Reglamentos</li>
                    <li>Tecnología Constructiva</li>
                    <li>Racionalidad Material</li>
                    <li>Criterios adoptados durante la Práctica Profesional</li>
                    <li>Estudio de Casos</li>
                </ul>
            </div>

            <!-- Métodos y Técnicas -->
            <div style="background: var(--light-gray); padding: 1.5rem; border-radius: 10px; margin-bottom: 2rem;">
                <h4 style="color: var(--primary); margin-bottom: 1rem; font-size: 1.1rem;">🔧 Métodos y Técnicas Utilizadas</h4>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
                    <div style="padding: 1rem; background: white; border-radius: 5px; text-align: center;">📹 Exposiciones Audiovisuales e Interactivas</div>
                    <div style="padding: 1rem; background: white; border-radius: 5px; text-align: center;">📄 Material Impreso y en Formato Digital</div>
                    <div style="padding: 1rem; background: white; border-radius: 5px; text-align: center;">🏗️ Construcción de Maquetas a Escala</div>
                    <div style="padding: 1rem; background: white; border-radius: 5px; text-align: center;">💬 Coloquios y Ejercicios Prácticos</div>
                </div>
            </div>

            <!-- Actividades Desarrolladas -->
            <div style="margin-bottom: 2rem;">
                <h4 style="color: var(--primary); margin-bottom: 1rem; font-size: 1.1rem;">✅ Actividades Desarrolladas</h4>
                <p style="margin-bottom: 1rem; line-height: 1.6; color: var(--gray);">
                    Las actividades fueron iniciadas y coordinadas bajo la Dirección del Arquitecto Titular de Cátedra, Arq. Hugo R. Leguizamón:
                </p>
                <ol style="margin-left: 1.5rem; line-height: 1.8; color: var(--gray);">
                    <li>Desarrollo de Material Técnico Informativo, referido a Estructuras aplicables a Obras de Arquitectura</li>
                    <li>Asistencia Técnica Continua, a favor de la formación del Alumnado</li>
                    <li>Creación y Mantenimiento de Sitio Web con contenidos actualizados</li>
                    <li>Propuesta de Ejercicios Prácticos</li>
                    <li>Exposición de Trabajos realizados en el Ejercicio de la Actividad Profesional</li>
                    <li>Exposición de las Producciones de los Alumnos y Charla Debate</li>
                    <li>Evaluación Estadística del Nivel alcanzado en el desarrollo de la instrucción al Alumnado</li>
                </ol>
            </div>

            <!-- Reflexiones Personales -->
            <div style="background: #f8f9fa; padding: 1.5rem; border-left: 4px solid var(--primary); margin-bottom: 2rem;">
                <h4 style="color: var(--primary); margin-bottom: 1rem; font-size: 1.1rem;">💭 Reflexiones Personales</h4>
                <blockquote style="font-style: italic; color: var(--gray); margin: 1rem 0; padding-left: 1rem;">
                    "Entender una Cuestión Técnica puede llegar a ser una Cuestión Matemática... Pero <strong>Comprender una Cuestión Técnica requiere de dos profundidades necesarias: La Intuición y el Razonamiento</strong>"
                </blockquote>
                <p style="margin-top: 1.5rem; line-height: 1.6; color: var(--gray);">
                    Bajo simples Ejercicios de Entrenamiento, llevé a los Alumnos a resolver e interpretar las distintas posibilidades de Estructuración por la que se puede valerse para solucionar la Idea Arquitectónica y sostén fundamental de un Edificio.
                </p>
            </div>

            <!-- Resultados -->
            <div style="background: #e8f5e9; padding: 1.5rem; border-radius: 10px; margin-bottom: 2rem;">
                <h4 style="color: var(--primary); margin-bottom: 1rem; font-size: 1.1rem;">📊 Resultados Alcanzados</h4>
                <ul style="margin-left: 1.5rem; line-height: 1.8; color: var(--gray);">
                    <li><strong>✅ Nivel de Comprensión Estructural:</strong> Los alumnos lograron consolidar un nivel de comprensión estructural muy satisfactorio, aporte de vital importancia para el buen desempeño del futuro Profesional.</li>
                    <li><strong>✅ Fortalecimiento Profesional:</strong> El interés generado durante el transcurso del desarrollo del aplicativo estructural funcionó como un eslabón más de fortalecimiento profesional de cada alumno.</li>
                    <li><strong>✅ Trabajo Interdisciplinario:</strong> Se consolidó la importancia del trabajo interdisciplinario, involucrando la interacción necesaria entre el Diseño Estructural y Planteo Arquitectónico.</li>
                    <li><strong>✅ Soluciones Innovadoras:</strong> El alumnado incursionó con éxito en propuestas con diferentes Sistemas Estructurales e Innovadoras Soluciones Tecnológicas, enriqueciendo sus proyectos y afrontando con ímpetu un trabajo serio y comprometido.</li>
                </ul>
            </div>

            <!-- Firma -->
            <div style="text-align: center; padding: 1rem; background: var(--light-gray); border-radius: 5px; margin-bottom: 1rem;">
                <p style="margin: 0.5rem 0; color: var(--gray);"><strong>ARQ. MAURO ALEGRE</strong></p>
                <p style="margin: 0.5rem 0; color: var(--gray); font-size: 0.9rem;">De conformidad con el presente Informe Final</p>
                <p style="margin: 0.5rem 0; color: var(--gray); font-size: 0.9rem;">Prof. Titular Arq. HUGO R. LEGUIZAMÓN</p>
            </div>

            <div style="text-align: center; margin-top: 2rem; padding-top: 2rem; border-top: 2px solid var(--light-gray);">
                <button onclick="cerrarModalDocencia()" style="background: var(--primary); color: white; border: none; padding: 1rem 2rem; border-radius: 5px; cursor: pointer; font-size: 1rem;">
                    ✕ Cerrar Detalles
                </button>
            </div>
        </div>
    </div>
</div>
`;

//Insertar modal al cargar la página
document.addEventListener('DOMContentLoaded', function () {
    document.body.insertAdjacentHTML('beforeend', modalHTML);
});

function abrirModalDocencia() {
    document.getElementById('modalDocencia').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function cerrarModalDocencia() {
    document.getElementById('modalDocencia').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Cerrar modal al hacer clic fuera
if (document.getElementById('modalDocencia')) {
    document.getElementById('modalDocencia').addEventListener('click', function (e) {
        if (e.target === this) {
            cerrarModalDocencia();
        }
    });
}

// Cerrar con ESC
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && document.getElementById('modalDocencia')) {
        cerrarModalDocencia();
    }
});


//Insertar modal al cargar la página
document.addEventListener('DOMContentLoaded', function () {
    document.body.insertAdjacentHTML('beforeend', modalHTML);
});

function abrirModalDocencia() {
    document.getElementById('modalDocencia').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function cerrarModalDocencia() {
    document.getElementById('modalDocencia').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Cerrar modal al hacer clic fuera
if (document.getElementById('modalDocencia')) {
    document.getElementById('modalDocencia').addEventListener('click', function (e) {
        if (e.target === this) {
            cerrarModalDocencia();
        }
    });
}

// Cerrar con ESC
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && document.getElementById('modalDocencia')) {
        cerrarModalDocencia();
    }
});
