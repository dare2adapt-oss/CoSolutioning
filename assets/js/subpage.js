const current = document.body.dataset.page;
const titles = { principios: 'Principios', roles: 'Roles', artefactos: 'Artefactos', eventos: 'Eventos', framework: 'Framework', recursos: 'Recursos', autores: 'Autores' };
const p = '../';
const localPages = { inicio: 'index.html', framework: 'framework.html', recursos: 'recursos.html', autores: 'autores.html', principios: 'principios.html', roles: 'roles.html', artefactos: 'artefactos.html', eventos: 'eventos.html' };
const englishLocalPages = { ...localPages, recursos: 'resources.html', principios: 'principles.html', artefactos: 'artifacts.html', eventos: 'events.html' };
const frameworkContent = `
  <article class="article-content">
    <h1>El Framework</h1>
    <p>Estamos entrando en un momento en el que nuestra capacidad para crear soluciones cambia radicalmente. Las formas de trabajo siempre han evolucionado como respuesta a las herramientas y capacidades disponibles en cada momento de la historia. La Inteligencia Artificial representa uno de esos puntos de inflexión: una capacidad que aprende, razona, crea, ejecuta y coordina trabajo a una velocidad que crece exponencialmente.</p>
    <p>Sin embargo, hay algo esencial que permanece, generamos valor cuando resolvemos problemas reales que tienen las personas y lo hacemos de forma significativa. Construir una solución sigue teniendo sentido cuando produce valor para las personas y, como consecuencia, genera valor para el negocio. <strong>Por eso conservamos principios provenientes del método científico:</strong> Observar la realidad, comprender el problema, formular hipótesis, experimentar, medir evidencia, aprender y evolucionar. La tecnología acelera nuestra capacidad de hacer; la evidencia continúa guiando qué construir y cómo debe evolucionar.</p>
    <p>Aplicar los fundamentos del método científico nos permite atender a una realidad: la naturaleza como funciona el mundo y cómo actuamos las personas.</p>
    <p>La IA evoluciona a un ritmo exponencial, mientras las organizaciones suelen transformarse de manera gradual. Esta diferencia de velocidades plantea uno de los grandes desafíos actuales: diseñar organizaciones capaces de evolucionar al ritmo de este nuevo contexto. Esto implica repensar equipos, roles, estructuras y formas de trabajo para integrar las capacidades de la IA y convertirlas en una capacidad organizacional.</p>
    <p>Esto nos lleva a pensar en la IA como parte del diseño organizacional. Un pequeño equipo humano puede liderar hoy un ecosistema coordinado de IAs capaces de participar en discovery, delivery y evolución de soluciones. El conocimiento y la capacidad disponibles para un equipo dejan de estar limitados exclusivamente por el número de personas que lo conforman. La combinación adecuada de inteligencia humana + inteligencia artificial + conocimiento transversal de la organización puede multiplicar radicalmente lo que un equipo puede lograr.</p>
    <p>La IA deja de ocupar el lugar de un asistente y se integra como un miembro activo del equipo, aportando conocimiento, habilidades y capacidades que, combinadas con las humanas, expanden los límites de lo que podemos imaginar, construir y lograr juntos.</p>
    <p>A estos equipos conformados por inteligencias humanas e inteligencias artificiales los llamamos “equipos solucionadores” en este framework.</p>
    <p>En este framework reconocemos que el liderazgo, el criterio y la responsabilidad son del humano. Las decisiones éticas, morales y estratégicas están bajo responsabilidad humana. Por ello, cada sistema de IA cuenta con un responsable humano que aporta contexto y criterio, define sus objetivos y asume la responsabilidad por su desempeño y los resultados que genera.</p>
    <p>Estamos entrando en una era en la que nuestra capacidad de hacer puede crecer exponencialmente, pero crear valor seguirá dependiendo de nuestra capacidad de elegir bien qué hacer. La IA expande los límites de lo posible; el propósito, el criterio humano y la evidencia nos ayudan a decidir qué vale la pena hacer posible. Juntos vamos a resolver problemas reales y crear valor para las personas.</p>
  </article>`;
const principlesContent = `
  <article class="article-content">
    <h1>Principios</h1>
    <ul class="principles-list">
      <li>Lideramos con propósito, entendiendo los fundamentales de lo que hacemos.</li>
      <li>Conectamos el negocio, su estrategia y el usuario final. Generamos valor para las dos partes.</li>
      <li>El conocimiento debe estar disponible donde se crea el valor, evitando que la especialización se convierta en una dependencia.</li>
      <li>La IA es un miembro más del equipo, amplificando la capacidad colectiva de generar valor.</li>
      <li>Diseñamos equipos por las capacidades que necesitan para resolver problemas, independientemente de si esas capacidades provienen de una persona, una IA o del diseño organizacional con equipos transversales.</li>
      <li>El conocimiento e información debe ser accesible y comprensible tanto para las personas como para las IAs que forman parte del equipo.</li>
      <li>Los eventos crean ritmo y hábitos, además dan una estructura clara para crear valor.</li>
      <li>Evolucionamos continuamente la colaboración Humano + IA para aumentar su capacidad colectiva de generar valor.</li>
      <li>El humano está en el centro: el colaborador y el consumidor.</li>
      <li>Estimular el pensamiento crítico es indispensable.</li>
        <li>La simplicidad genera claridad, la claridad facilita la acción y la acción sostenida crea valor. Lo simple se entiende, se ejecuta y se convierte más rápido en valor.</li>
      <li>Simplificar las cosas no significa trivializar. Simplificar es el arte de identificar las partes de un sistema complejo y resolverlas de forma que todo el sistema siga teniendo sentido.</li>
      <li>Los equipos solucionadores hacen Discovery y Delivery al tiempo, respondiendo a las preguntas:
        <ul>
          <li><strong>Discovery:</strong> ¿Estamos resolviendo el problema correcto?</li>
          <li><strong>Delivery:</strong> ¿Estamos construyendo y evolucionando la solución de forma correcta?</li>
        </ul>
      </li>
    </ul>
    <p>Este framework es un sistema de principios, conceptos, elementos y prácticas que orienta cómo las organizaciones y equipos toman decisiones y actúan en la nueva interacción de trabajo Humano + IA. Es importante recalcar que este framework define un marco dentro del cual se pueden tomar decisiones y adaptar su forma de trabajar según el contexto de cada organización.</p>
  </article>`;
const rolesContent = `
  <article class="article-content">
    <h1>Roles</h1>
    <p>Lo fundamental es garantizar que cada equipo cuente con el conocimiento y las capacidades necesarias para crear y evolucionar soluciones de punta a punta. Estas capacidades surgen de la combinación entre talento humano, Inteligencia Artificial y el conocimiento especializado de los equipos transversales de la organización. Los equipos son multifuncionales y reúnen las habilidades necesarias para generar valor tanto para los usuarios como para el negocio, integrando discovery y delivery dentro de un mismo equipo.</p>
    <p>Esta composición favorece la autonomía, reduce dependencias y permite conectar continuamente el aprendizaje con la construcción y evolución de las soluciones.</p>
    <p>Partimos de una idea fundamental: un equipo se conforma por un grupo de personas que, desde sus diferentes roles, aportan conocimientos, experiencias, habilidades y capacidades complementarias para resolver problemas y construir soluciones. La potencia del equipo surge de esa combinación.</p>
    <p>La incorporación de la inteligencia artificial transforma profundamente esta ecuación. La IA deja de ocupar únicamente el lugar de asistente y se integra como un miembro activo del equipo, aportando conocimiento, capacidades, habilidades y ejecución. Esto amplía significativamente las capacidades disponibles para construir soluciones y productos digitales.</p>
    <figure class="content-figure"><img src="../assets/images/Combinacion_conocimiento_habilidades_ES_V3.png" alt="Combinación de conocimiento, habilidades y capacidades entre humanos e inteligencia artificial"><figcaption>Combinación de conocimiento, habilidades y capacidades Humano + IA.</figcaption></figure>
    <p>El resultado es un equipo con acceso a un universo de conocimiento y capacidades mucho mayor al que podría concentrar una sola persona. La potencia del equipo empieza a depender de qué tan bien humanos e inteligencias artificiales logran combinar sus capacidades para resolver problemas y generar valor juntos.</p>
    <p>Este nuevo contexto transforma la manera en que diseñamos los equipos y definimos los roles. La organización evoluciona hacia un modelo compuesto por equipos Humano + IA, complementados por capacidades transversales que aportan conocimiento especializado.</p>
    <figure class="content-figure"><img src="../assets/images/diseno_organizacion_humano_ia_ES_V3.jpg" alt="Diseño organizacional de equipos Humano más IA y capacidades transversales"><figcaption>Diseño organizacional de equipos Humano + IA y capacidades transversales.</figcaption></figure>
    <p>De esta forma el conocimiento está disponible donde se crea el valor.</p>
    <p>Cada equipo solucionador está conformado por un Solution Expert, un AI Engineer y un ecosistema de agentes de Inteligencia Artificial. Juntos conforman una unidad autónoma capaz de comprender el problema, diseñar la solución, construirla y evolucionarla de manera continua.</p>
    <p>Estas capacidades son potenciadas por un diseño organizacional basado en los principios de <a href="https://teamtopologies.com/" target="_blank" rel="noopener noreferrer">Team Topologies</a>. Alrededor de los equipos solucionadores existe una red de equipos transversales que desarrollan y comparten conocimiento especializado, aceleran la adopción de nuevas capacidades y ofrecen servicios. Este ecosistema está compuesto por “Equipo Habilitador”, que habilitan nuevos conocimientos, capacidades y habilidades; “Equipo de Subsistema Complicado”, que soluciona temas relacionados con conocimiento experto en dominios de alta complejidad; y “Equipos de Plataforma”, que construyen plataformas y servicios que permiten crear y desplegar el valor que construyen los equipos solucionadores.</p>
    <p>La interacción entre los equipos transversales y los equipos solucionadores ocurre de tres maneras: facilitando capacidades, colaborando directamente en la resolución de retos específicos o prestando servicios bajo un modelo X as a Service, donde un equipo ofrece capacidades especializadas que otros consumen bajo demanda. La forma de interacción se elige en función de las necesidades y el contexto de cada situación.</p>
    <p>Este modelo combina la inteligencia humana y la artificial. Las personas aportan criterio, contexto, creatividad, objetivos, el “para qué” de lo que estamos construyendo y tienen total responsabilidad (ownership) de lo que se construya; la IA aporta conocimiento, habilidades y capacidades para construir las soluciones con alta velocidad y calidad.</p>
    <p>Creemos que con este diseño organizacional se logra la combinación necesaria entre inteligencia humana + IA para que mutuamente se potencien y puedan tener todo el conocimiento, habilidades y capacidades necesarias para crear soluciones que generen un gran valor a los usuarios y los negocios.</p>
    <p>Cuando una solución requiere la colaboración de múltiples equipos solucionadores, proponemos incorporar un rol denominado Crew Manager. Su responsabilidad es orquestar la coordinación, gestionar las dependencias y mantener la alineación entre los equipos para asegurar un flujo continuo de entrega de valor. Recomendamos activar este rol cuando la construcción y evolución de una solución requiera la participación simultánea de tres o más equipos, momento en el que la complejidad de la coordinación comienza a crecer de manera significativa.</p>
    <p>En soluciones que involucran uno o dos equipos, consideramos que este rol no es necesario. En estos casos, la comunicación directa, la responsabilidad compartida y la colaboración cotidiana permiten mantener la sincronización, evitando introducir capas adicionales de coordinación.</p>
    <p>A continuación vamos a describir los roles necesarios para este framework:</p>

    <h2>Solution Expert</h2>
    <p>Es el experto de dominio de negocio, guía la estrategia y evolución de soluciones digitales desde un entendimiento profundo del negocio y usuario, potenciando la toma de decisiones con Inteligencia Artificial.</p>
    <h3>Principales responsabilidades</h3>
    <ul class="article-list">
      <li><strong>Conocimiento profundo de la industria del negocio y del usuario:</strong> entender el contexto, regulaciones, dinámicas del mercado y los problemas clave de usuarios, clientes y stakeholders. Se apoya en la IA entendida como contenedor de grandes cantidades de conocimiento; sin embargo, la gestión y validación de este conocimiento, más la experiencia propia, son los diferenciales de un buen Solution Expert.</li>
      <li><strong>Definición de objetivos y outcomes:</strong> traducir la visión del negocio en objetivos y outcomes claros y medibles. Se encarga de mantener el roadmap de la solución basado en outcomes y OKRs.</li>
      <li><strong>Uso avanzado de IA:</strong> aprovechar las capacidades (ejm: agentes, skills, MCPs) de la IA para explorar tendencias, anticipar necesidades de los clientes y acelerar la innovación.</li>
      <li><strong>Aprendizaje continuo:</strong> mantener un aprendizaje continuo sobre las capacidades de la IA para aprovecharlas en su rol.</li>
      <li><strong>Diseño de soluciones centradas en el usuario:</strong> liderar la construcción de productos que respondan a problemas significativos de usuarios, entendiendo al usuario como las personas a quienes vamos a resolver un problema y, por lo tanto, a generar valor.</li>
      <li><strong>Gestión de portafolio:</strong> priorizar iniciativas basadas en evidencia, outcomes y valor de negocio.</li>
      <li><strong>Liderazgo colaborativo:</strong> actuar como puente entre negocio, tecnología y el mercado, guiando al equipo hacia un propósito común.</li>
    </ul>

    <h2>AI Engineer</h2>
    <p>Un AI Engineer (Ingeniero de Inteligencia Artificial) es un profesional que combina la ingeniería de software con la implementación avanzada de IA para diseñar, construir y desplegar soluciones tecnológicas robustas, escalables y de alto valor de negocio.</p>
    <p>El AI Engineer se enfoca en la aplicación práctica y la arquitectura del sistema: selecciona, entrena, optimiza e integra modelos de IA (propios o de terceros) dentro de aplicaciones y productos finales a pequeña, mediana y gran escala. Además, actúa como el puente entre las necesidades de negocio y la viabilidad técnica, asegurando que el ciclo de vida del software cumpla con estándares estrictos de calidad, trazabilidad y ética.</p>
    <h3>Responsabilidades clave</h3>
    <ul class="article-list">
      <li><strong>Arquitectura y desarrollo de soluciones:</strong> diseñar la estructura tecnológica e integrar modelos de IA en soluciones tecnológicas.</li>
      <li><strong>Selección, entrenamiento y Fine-Tuning:</strong> evaluar y probar distintas herramientas o modelos de IA, optimizándolos para responder a las necesidades específicas.</li>
      <li><strong>MLOps, versión y trazabilidad:</strong> gestionar el ciclo de vida completo del modelo y de la aplicación, controlando versiones, seguridad, monitoreo y escalabilidad en producción.</li>
      <li><strong>Experimentación continua y calidad:</strong> aplicar técnicas de experimentación con IA para validar hipótesis de forma iterativa y encontrar la mejor solución funcional y técnica.</li>
      <li><strong>Calidad técnica:</strong> definir buenas prácticas de desarrollo, pruebas y monitoreo para garantizar que las soluciones sean robustas y seguras.</li>
      <li><strong>Gobernanza y ética:</strong> asegurar que el uso de la IA cumpla con los lineamientos de gobernanza, privacidad, arquitectura organizacional y uso responsable.</li>
      <li><strong>Colaboración estratégica:</strong> trabajar junto a los equipos de negocio (Solution Experts) para traducir las necesidades del usuario en requerimientos técnicamente viables.</li>
      <li><strong>Diseño y construcción de arquitecturas de arnés de IA (Harness Engineering):</strong> diseñar, implementar y mantener la infraestructura de orquestación, evaluación y control (harness) que rodea a los modelos de lenguaje (LLMs) y agentes autónomos. Garantizar que los sistemas de IA operen de forma segura y autónoma mediante la integración de guardarraíles (guardrails), bucles de auto-corrección automática (linters, pruebas unitarias), gobernanza de herramientas (tooling) y mecanismos de control en el bucle con humanos (Human-in-the-Lead).</li>
      <li><strong>Human in the Lead (el humano al mando):</strong> significa pasar de ver al ser humano como un punto de control o un simple validador pasivo de la IA, a posicionarlo como el líder estratégico y decisor activo a quien la IA sirve como amplificador de sus capacidades.</li>
    </ul>

    <h2>Crew Manager</h2>
    <p><strong>Varios equipos:</strong> guía y orquesta el trabajo de múltiples equipos solucionadores en un modelo escalado, asegurando alineación estratégica, sinergia tecnológica y foco en el valor de negocio y del usuario. Este rol conecta visión, priorización y ejecución de todos los equipos, permitiendo escalar la solución apalancada en IA de forma consistente, segura y con impacto medible en la organización y los usuarios.</p>
    <p>El Crew Manager conforma un grupo de equipos en un ecosistema integrado y alineado a la visión global de la solución y la estrategia de la organización. Asegura que la innovación con IA escale, que los equipos estén orientados a outcomes y trabajen en sinergia.</p>
    <h3>Principales responsabilidades</h3>
    <ul class="article-list">
      <li><strong>Orquestación de equipos solucionadores:</strong> coordinar y sincronizar el trabajo de varios equipos Humano + IA, gestionar las dependencias y mantener la alineación entre los equipos, asegurando un flujo continuo de entrega de valor.</li>
      <li><strong>Alineación con estrategia de negocio:</strong> garantizar que las iniciativas que construyen los equipos estén conectadas con los objetivos estratégicos de la organización.</li>
      <li><strong>Métricas:</strong> apoyar a definir, monitorear y evolucionar indicadores que permitan medir el valor generado para el negocio, outcomes, productividad y la salud de los equipos, facilitando la toma de decisiones basada en evidencia.</li>
      <li><strong>Cultura de colaboración:</strong> promover en los equipos un entorno de confianza, aprendizaje continuo y alineación a un propósito común que inspire y guíe a los equipos.</li>
    </ul>
    <p>En el siguiente gráfico detallamos la forma como interactúa el Crew Manager en tres o más equipos:</p>
    <figure class="content-figure"><img src="../assets/images/crew_manager_ES_V2.jpg" alt="El Crew Manager coordinando equipos solucionadores"><figcaption>El rol del Crew Manager, los equipos que conforman el Crew y la forma como interactúan.</figcaption></figure>
    <p>Denominamos Crew al conjunto de equipos solucionadores, ya que representan la unidad fundamental para la creación y evolución de valor dentro de la organización. Cada equipo solucionador es responsable de un Value Stream (Flujo de Valor) específico y cuenta con la autonomía y capacidad necesaria para comprender el problema, descubrir oportunidades, diseñar, construir, desplegar y evolucionar continuamente sus soluciones a partir de datos, evidencia y aprendizaje.</p>
    <p>Cuando una solución requiere la colaboración de más de tres equipos solucionadores, el Crew Manager asume la responsabilidad de orquestar la coordinación, gestionar las dependencias y mantener la alineación entre los equipos, asegurando un flujo continuo de entrega de valor. Su propósito es facilitar la colaboración en escenarios de mayor complejidad con varios humanos e IAs interactuando, permitiendo que los equipos mantengan el foco en la generación de valor para los usuarios y el negocio.</p>
    <p><strong>Nota:</strong> Es importante resaltar que cada equipo solucionador hace Discovery, Delivery y evoluciona las soluciones.</p>
  </article>`;
const artifactsContent = `
  <article class="article-content">
    <h1>Artefactos</h1>
    <p>Se diseñan para construir y mantener entendimientos compartidos. Hacen accesible, visible y comprensible la información clave, integrando conocimiento, evidencia, decisiones y aprendizajes en una fuente común de conocimiento para los equipos. Los artefactos permiten que los involucrados puedan tomar mejores decisiones.</p>
    <p>Los artefactos a utilizar son:</p>
    <ul class="article-list">
      <li>Documento con los problemas a solucionar y las hipótesis a validar.</li>
      <li><a href="https://jeffgothelf.com/blog/what-does-an-agile-product-roadmap-look-like/" target="_blank" rel="noopener noreferrer">OKR-Based Roadmaps</a>.</li>
      <li>Documentos de Specs (versionados): artefacto donde se especifica el producto.</li>
      <li><a href="recursos.html" target="_blank" rel="noopener noreferrer">Learning log (Recursos)</a>.</li>
      <li><strong>Arnés (Harness):</strong> estructura que contiene el conjunto de reglas, guardarraíles y bucles de validación automática que delimitan y dirigen la ejecución del agente de IA para asegurar resultados seguros, medibles, escalables y evolucionables.</li>
    </ul>
  </article>`;
const eventsContent = `
  <article class="article-content">
    <h1>Eventos</h1>
    <p>Los eventos establecen una cadencia de trabajo que ayuda a convertir las prácticas del framework en hábitos, lo cual define el éxito de las formas de trabajo. Crean espacios recurrentes para alinear, descubrir, construir, revisar evidencia, aprender y adaptar el trabajo, dando estructura al ciclo continuo de discovery, delivery y evolución de las soluciones.</p>

    <h2>Outcome Loop</h2>
    <p>Es el ciclo de trabajo del equipo solucionador, conformado por el Solution Expert, el AI Engineer y su ecosistema de IAs. Es el espacio de tiempo donde se genera el incremento de valor y se avanza hacia un outcome definido.</p>
    <p>Cada equipo define la duración de su Outcome Loop, que puede variar entre uno y cinco días. Una vez establecida, la mantiene con una cadencia consistente en el tiempo, ya que esta regularidad favorece un ritmo sostenible de trabajo, facilita la sincronización entre los integrantes del equipo y promueve la práctica continua de discovery, delivery, evolución y mejora continua basada en evidencia.</p>
    <p>La cadencia de los ciclos de trabajo del Outcome Loop favorece la generación de dinámicas de interacción entre los equipos solucionadores, consolidando la forma de trabajo como un hábito.</p>
    <p>Dentro de cada Outcome Loop, el equipo puede ejecutar uno o varios Execution Loops. Un Execution Loop representa un ciclo corto de ejecución enfocado en construir, validar o evolucionar una parte de la solución. Cada equipo decide cuántos Execution Loops hacer, lo cual dependerá del contexto, la complejidad del trabajo y la capacidad del equipo, manteniendo siempre el foco en generar valor de manera continua durante el Outcome Loop.</p>

    <h2>Solution planning</h2>
    <p>Es un espacio donde se entiende el problema a resolver, los OKRs a lograr, los indicadores de negocio relacionados y se eligen la(s) iniciativa(s) a construir. Se realiza y evoluciona con el equipo entero una vez por cada ciclo de Outcome Loop. En el Solution planning se cubren los siguientes puntos:</p>
    <ul class="article-list">
      <li>Conversar sobre el problema a resolver.</li>
      <li>Inspeccionar el OKR-Based Roadmaps.</li>
      <li>Inspeccionar indicadores de negocio.</li>
      <li>Priorizar y elegir iniciativas a trabajar para lograr los OKRs.</li>
    </ul>

    <h2>Execution Loop</h2>
    <p>Es el ciclo donde se ejecuta lo planeado en el “Solution planning”. Está enfocado en construir un feature (funcionalidad) o prototipo de inicio a fin usando especificaciones (Specs), con el objetivo de dejarla 100% funcional.</p>
    <p>En el Execution Loop se realizan los siguientes puntos:</p>
    <ul class="article-list">
      <li>Se construyen los artefactos que permiten comunicar de manera clara y precisa a la IA qué se quiere construir. Proponemos los Specs como el lenguaje compartido entre humanos e IAs: un mecanismo para hacer explícita la intención, reducir la ambigüedad y convertir las decisiones en instrucciones ejecutables. Esto permite construir soluciones de forma trazable, reproducible, segura y evolutiva.</li>
      <li><strong>Generación de Specs de la iniciativa:</strong> el equipo solucionador construye las especificaciones que describen con claridad qué se espera construir y proporcionan al ecosistema de IAs el contexto, las reglas y los criterios necesarios para ejecutar el desarrollo. Los Specs se gestionan como artefactos versionados, permitiendo mantener trazabilidad sobre su evolución y sobre las instrucciones utilizadas en cada versión de la solución.</li>
      <li><strong>Revisión y validación de Specs:</strong> antes de iniciar la construcción, el equipo solucionador revisa la calidad, claridad, completitud y consistencia de los Specs, asegurando que exista un entendimiento compartido de la solución.</li>
      <li><strong>Ejecución de Specs:</strong> el equipo solucionador ejecuta los Specs utilizando los formatos que permitan una mejor interpretación por parte de las IAs que componen el ecosistema, por ejemplo, archivos Markdown (.md). A partir de estas especificaciones, las IAs participan en la construcción integral del activo digital, incluyendo Frontend, Backend, Datos y demás componentes técnicos requeridos por la solución.</li>
      <li><strong>Control de calidad Humano + IA:</strong> el equipo solucionador ejecuta pruebas funcionales y técnicas utilizando las capacidades especializadas del ecosistema de IAs, complementadas por la supervisión y el criterio humano. Los hallazgos obtenidos alimentan ajustes sobre los Specs y la solución, generando ciclos rápidos de construcción, validación y mejora.</li>
      <li>La calidad se construye durante todo el ciclo, no como una validación aislada al final. El equipo solucionador, conformado por humanos e IAs, valida y refina continuamente el entendimiento del problema, los OKRs, las iniciativas, las especificaciones y la solución resultante. Cada etapa incorpora evidencia y aprendizaje que permiten detectar desviaciones temprano, reducir errores y asegurar que lo construido permanezca alineado con el problema y el valor que buscamos generar.</li>
      <li><strong>Finalización de la iniciativa:</strong> la construcción se considera finalizada cuando la solución cumple los criterios de calidad y aceptación establecidos, mantiene la trazabilidad entre Specs y desarrollo, y se encuentra en condiciones de ser desplegada, utilizada y posteriormente evolucionada a partir de evidencia.</li>
      <li>Las especificaciones (Specs) se construyen sobre el andamiaje (harness) definido para el proyecto, asegurando que los requerimientos respeten sus reglas, herramientas y restricciones desde el inicio. La IA integrada en el framework actúa como facilitadora, guiando la co-creación y validación automática de estas especificaciones.</li>
    </ul>

    <h2>Outcome Checkpoint</h2>
    <p>Se realiza este evento al finalizar cada Outcome Loop. Lo realiza el equipo solucionador junto a los interesados en la iniciativa. En el Outcome Checkpoint se cubren los siguientes puntos:</p>
    <ul class="article-list">
      <li>Se inspecciona el OKR-Based Roadmaps.</li>
      <li>Se inspeccionan los indicadores de negocio.</li>
      <li>Se inspeccionan las iniciativas construidas.</li>
      <li>Se comparten los aprendizajes del loop.</li>
    </ul>
    <p>El <a href="https://jeffgothelf.com/blog/what-does-an-agile-product-roadmap-look-like/" target="_blank" rel="noopener noreferrer">OKR-Based Roadmap</a> es un artefacto vivo que evoluciona continuamente a medida que el equipo genera nuevos aprendizajes y obtiene evidencia a partir de la interacción con los usuarios y el negocio. En este sentido, el OKR-Based Roadmap no es un plan estático en el tiempo, es dinámico. Permite visualizar el progreso acumulado hacia los OKRs, ajustar prioridades y tomar decisiones basadas en evidencia durante todo el proceso de descubrimiento y entrega de valor.</p>

    <h2>Ciclo de mejora continua</h2>
    <p>Su objetivo es incrementar la efectividad de los equipos solucionadores mejorando las dinámicas de trabajo Humano-Humano, Humano-IA e IA-IA. A partir de evidencia sobre el desempeño del equipo solucionador, se identifican y realizan mejoras en las prácticas, interacciones, capacidades humanas, capacidades de la IA y formas de colaboración que permitan incrementar la calidad, velocidad y valor generado.</p>
    <p>Hablamos y decidimos sobre:</p>
    <ul class="article-list">
      <li>Cómo mejoramos la efectividad de lo que hacen los humanos.</li>
      <li>Cómo mejoramos la efectividad de lo que hacen las IAs.</li>
      <li>Cómo mejoramos la efectividad de la colaboración Humano + IA.</li>
    </ul>
    <p>En el siguiente gráfico podemos ver cómo se ven todos los eventos en una línea de tiempo:</p>
    <figure class="content-figure"><img src="../assets/images/linea_de_tiempo_ES_V2.jpg" alt="Línea de tiempo de los eventos y el OKR-Based Roadmap"><figcaption>Línea de tiempo de los eventos y el OKR-Based Roadmap.</figcaption></figure>
  </article>`;
const resourcesContent = `
  <article class="article-content">
    <h1>Recursos</h1>
    <h2>Learning Log</h2>
    <p>La idea del Learning Log es que todos los experimentos realizados queden documentados. Consta de tres espacios donde se va marcando: “¿qué buscábamos aprender?”, la “descripción del experimento” y los “resultados y conocimiento”. Si la IA se alimenta de este log, podremos utilizar esta experiencia para encontrar insights, recomendar cursos de nuevos experimentos y descifrar tendencias que a simple vista podrían no ser tan evidentes. Entre más explícito sea el contenido de cada experimento, mayor será la capacidad de aprender de ellos.</p>
    <h3>Ejemplos</h3>
    <section class="learning-log-examples" aria-label="Ejemplos de Learning Log">
      <article class="learning-log-example">
        <h4>Ejemplo 1</h4>
        <p><strong>Qué buscamos:</strong> Cómo mejorar la tasa de apertura de correos electrónicos.</p>
        <p><strong>Descripción:</strong> Se realizó un A/B testing con el “Asunto” del correo: a un 60% de usuarios se les mantuvo “Bienvenidos a Dare2Adapt” y a un 40% se les modificó por “Descubre cómo Dare2Adapt te ayuda en tu trabajo con la IA”.</p>
        <p><strong>Resultado:</strong> Los usuarios que recibieron el segundo asunto abrieron más el correo electrónico en un 50%. Se entiende que se puede mejorar la tasa con mejores asuntos y se realizarán nuevos experimentos con asuntos diferentes para encontrar aquellos que den los mejores resultados. Una discusión con el equipo de marketing sugiere que también probemos hacer pruebas por hora del día y día de la semana.</p>
      </article>
      <article class="learning-log-example">
        <h4>Ejemplo 2</h4>
        <p><strong>Qué buscamos:</strong> ¿A nuestros usuarios les interesaría la nueva función de educación financiera?</p>
        <p><strong>Descripción:</strong> Se puso un botón de educación financiera en el home de la aplicación y, cuando el usuario le daba clic, aparecía un aviso que informaba que esa funcionalidad estaría disponible próximamente. El botón estuvo disponible durante una semana, del lunes 4 de marzo al domingo 10 de marzo.</p>
        <p><strong>Resultado:</strong> De los usuarios que ingresaron a la página, solo el 4% dieron clic en el botón de educación financiera. No parece que haya mucho valor en incluir ese módulo, por lo que se recomienda bajarle la prioridad.</p>
      </article>
    </section>
  </article>`;
const authorsContent = `
  <article class="authors-page">
    <header class="authors-intro">
      <h1>Autores</h1>
    </header>
    <section class="authors-grid" aria-label="Autores del framework CoSolutioning">
      <article class="author-card">
        <div class="author-photo-wrap"><img src="../assets/images/Foto_Jonnathan02.png" alt="Jonnathan Bermudez" class="author-photo" loading="lazy"></div>
        <div class="author-card__content">
          <h2>Jonnathan Bermudez</h2>
          <p class="author-card__specialty">Colaboración humano + IA</p>
          <p>Con más de 20 años de experiencia creando soluciones y conectando las necesidades del negocio con las posibilidades de la tecnología. Su trabajo integra estrategia, arquitectura tecnológica, diseño organizacional y capacidades de inteligencia artificial para transformar retos reales en soluciones útiles, medibles y capaces de evolucionar. Impulsa nuevas formas de colaboración entre personas e IA, promoviendo una integración intencional donde el propósito, el criterio humano y la responsabilidad orientan las decisiones tecnológicas. Su contribución al framework ayuda a las organizaciones a incorporar la IA en sus formas de trabajo de manera práctica, sostenible y enfocada en generar valor para las personas y el negocio.</p>
          <a class="author-card__bio-link" href="https://www.linkedin.com/in/jonnathanbermudez" target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">→</span></a>
        </div>
      </article>
      <article class="author-card">
        <div class="author-photo-wrap"><img src="../assets/images/Foto_Felipe02.png" alt="Felipe Soto" class="author-photo" loading="lazy"></div>
        <div class="author-card__content">
          <h2>Felipe Soto</h2>
          <p class="author-card__specialty">Evolución organizacional</p>
          <p>Consultor, conferencista y facilitador, dedicado a ayudar a las personas y organizaciones a desarrollar su potencial a través de la innovación y el liderazgo centrados en las personas. Con más de 10 años de experiencia en diferentes industrias, ha acompañado a equipos a conectar la empatía, la estrategia y la ejecución para generar un impacto significativo. Cree que las transformaciones sostenibles ocurren cuando las organizaciones cultivan una cultura de liderazgo orientada al servicio, donde los líderes crecen ayudando a otros a desarrollarse y alcanzar su máximo potencial. Su trabajo combina el rigor de las prácticas Lean y Agile con la creatividad del Design Thinking, siempre conectado con los desafíos y oportunidades del mundo real.</p>
          <a class="author-card__bio-link" href="https://www.linkedin.com/in/sotofelipe/" target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">→</span></a>
        </div>
      </article>
      <article class="author-card">
        <div class="author-photo-wrap"><img src="../assets/images/Foto_Cristian02.png" alt="Cristian Bermudez" class="author-photo" loading="lazy"></div>
        <div class="author-card__content">
          <h2>Cristian Bermudez</h2>
          <p class="author-card__specialty">Estrategia y diseño de soluciones</p>
          <p>Profesional con más de 19 años de experiencia liderando equipos en la construcción de soluciones de alto impacto y guiando organizaciones en procesos de transformación. Aporta conocimiento profundo en metodologías, dinámicas de trabajo y diseño organizacional orientados a la generación de valor, conectando estrategia, personas y ejecución. Su contribución al framework permite diseñar nuevas formas de colaboración entre humanos e IAs, integrando sus capacidades de manera intencional y creando dinámicas que potencian lo que pueden lograr juntos. Mantiene el foco en generar valor para las personas y el negocio, conectando el propósito con soluciones que se pueden construir, medir, validar y evolucionar.</p>
          <a class="author-card__bio-link" href="https://www.linkedin.com/in/cristian-bermudez/" target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">→</span></a>
        </div>
      </article>
    </section>
  </article>`;
const contentByPage = { framework: frameworkContent, principios: principlesContent, roles: rolesContent, artefactos: artifactsContent, eventos: eventsContent, recursos: resourcesContent, autores: authorsContent };
const pageContent = contentByPage[current] || `<article class="article-content"><h1>${titles[current]}</h1></article>`;
document.body.insertAdjacentHTML('afterbegin', `<header class="topbar"><a class="brand" href="${p}index.html"><span class="brand-mark"><i></i><i></i><i></i></span><span><strong>Augmented Thinking</strong><small>Human judgment. Artificial intelligence.</small></span></a><nav class="top-nav"><a href="${p}index.html" data-nav="inicio">Inicio</a><a href="${p}superior/framework.html" data-nav="framework">Framework</a><a href="${p}superior/recursos.html" data-nav="recursos">Recursos</a><a href="${p}superior/autores.html" data-nav="autores">Autores</a><span class="language-switcher" aria-label="Seleccionar idioma"><a href="?lang=es" lang="es" hreflang="es" aria-current="true">ES</a><span aria-hidden="true">|</span><a href="?lang=en" lang="en" hreflang="en">EN</a></span><button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu" aria-label="Abrir navegación principal"><span></span><span></span><span></span></button></nav></header><nav class="mobile-menu" id="mobile-menu" aria-label="Explorar framework"><a href="${p}index.html" data-nav="inicio"><span>⌂</span>Inicio</a><a href="${p}explorar/principios.html" data-nav="principios"><span>☆</span>Principios</a><a href="${p}explorar/roles.html" data-nav="roles"><span>♧</span>Roles</a><a href="${p}explorar/artefactos.html" data-nav="artefactos"><span>⚒</span>Artefactos</a><a href="${p}explorar/eventos.html" data-nav="eventos"><span>⊙</span>Eventos</a></nav><div class="site-layout"><aside class="sidebar"><p class="eyebrow">EXPLORAR</p><nav class="side-nav"><a href="${p}index.html" data-nav="inicio"><span>⌂</span>Inicio</a><a href="${p}explorar/principios.html" data-nav="principios"><span>☆</span>Principios</a><a href="${p}explorar/roles.html" data-nav="roles"><span>♧</span>Roles</a><a href="${p}explorar/artefactos.html" data-nav="artefactos"><span>⚒</span>Artefactos</a><a href="${p}explorar/eventos.html" data-nav="eventos"><span>⊙</span>Eventos</a></nav><section class="download-card"><span class="download-icon">↓</span><h2>Descarga el<br>Framework</h2><p>Accede a la versión completa en PDF y otros formatos.</p><a href="${p}docs/Draft_Framework_Humano_IA.pdf" target="_blank" rel="noopener noreferrer">Descargar ahora</a></section></aside><main class="content-page"><section class="page-main">${pageContent}</section><aside class="page-empty"><p class="eyebrow">EN ESTA PÁGINA</p><nav class="page-toc" aria-label="Contenido de la página"></nav></aside></main></div><button class="back-to-top" type="button" aria-label="Volver al inicio">↑</button>`);
const headerBrand = document.querySelector('.brand');
headerBrand.setAttribute('aria-label', 'CoSolutioning, inicio');
headerBrand.innerHTML = `<img class="brand-logo brand-logo--full" src="${p}assets/images/logo-cosolutioning-wordmark-black.png" alt="CoSolutioning" width="176" height="35"><img class="brand-logo brand-logo--mark" src="${p}assets/images/Logo_CoSolutioning01.png" alt="" width="50" height="50"><span class="brand-copy"><small>The Collaborative Solutioning Framework</small></span>`;
document.querySelectorAll('[data-nav]').forEach((a) => { if (a.dataset.nav === current) a.classList.add('active'); });
const siteLanguage = document.documentElement.lang === 'en' ? 'en' : 'es';
const pagePaths = siteLanguage === 'en' ? englishLocalPages : localPages;
document.querySelectorAll('[data-nav]').forEach((a) => { a.href = pagePaths[a.dataset.nav]; });
document.querySelector('.brand').href = 'index.html';
document.querySelector('.download-card p').textContent = 'Accede a la versión completa en PDF.';
const spanishReadingFlow = {
  framework: { previous: null, next: { href: 'principios.html', label: 'Principios' } },
  principios: { previous: { href: 'framework.html', label: 'El Framework' }, next: { href: 'roles.html', label: 'Roles' } },
  roles: { previous: { href: 'principios.html', label: 'Principios' }, next: { href: 'artefactos.html', label: 'Artefactos' } },
  artefactos: { previous: { href: 'roles.html', label: 'Roles' }, next: { href: 'eventos.html', label: 'Eventos' } },
  eventos: { previous: { href: 'artefactos.html', label: 'Artefactos' }, next: null }
};
const spanishFlow = spanishReadingFlow[current];
if (spanishFlow) document.querySelector('.article-content').insertAdjacentHTML('beforeend', `<nav class="article-page-navigation" aria-label="Navegación de lectura">${spanishFlow.previous ? `<a class="article-page-navigation__previous" href="${spanishFlow.previous.href}"><span aria-hidden="true">←</span> ${spanishFlow.previous.label}</a>` : '<span></span>'}${spanishFlow.next ? `<a class="article-page-navigation__next" href="${spanishFlow.next.href}">${spanishFlow.next.label} <span aria-hidden="true">→</span></a>` : '<span></span>'}</nav>`);
document.querySelectorAll('.language-switcher a').forEach((link) => {
  const targetLanguage = link.lang;
  const targetPages = targetLanguage === 'en' ? englishLocalPages : localPages;
  link.href = targetLanguage === siteLanguage ? pagePaths[current] : `../${targetLanguage}/${targetPages[current]}`;
  link.toggleAttribute('aria-current', targetLanguage === siteLanguage);
  link.classList.toggle('is-active', targetLanguage === siteLanguage);
});
const pageToc = document.querySelector('.page-toc');
const usedIds = new Set();
document.querySelectorAll('.article-content h2').forEach((heading) => {
  const baseId = heading.textContent.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  let id = baseId;
  let suffix = 2;
  while (usedIds.has(id) || document.getElementById(id)) { id = `${baseId}-${suffix++}`; }
  usedIds.add(id);
  heading.id = id;
  pageToc.insertAdjacentHTML('beforeend', `<a class="toc-level-${heading.tagName.toLowerCase()}" href="#${id}">${heading.textContent}</a>`);
});
const swapPrimaryAndSecondaryNavigation = () => {
  const topNav = document.querySelector('.top-nav');
  const sideNav = document.querySelector('.side-nav');
  if (!topNav || !sideNav) return;

  const startLabel = document.documentElement.lang === 'en' ? 'Get Started' : 'Comenzar';
  const frameworkLink = Array.from(topNav.querySelectorAll(':scope > a')).find((link) => link.dataset.nav === 'framework');
  const primaryLinks = Array.from(sideNav.querySelectorAll(':scope > a')).map((link) => {
    const primaryLink = link.cloneNode(true);
    primaryLink.querySelector('span')?.remove();
    return primaryLink;
  });
  if (frameworkLink) {
    const startLink = frameworkLink.cloneNode(true);
    startLink.textContent = startLabel;
    primaryLinks.splice(1, 0, startLink);
  }
  const secondaryIcons = {
    inicio: '<svg viewBox="0 0 24 24"><path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Z"/><path d="M9 21v-6h6v6"/></svg>',
    framework: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><path d="m9 15 6-6M10 9h5v5"/></svg>',
    recursos: '<svg viewBox="0 0 24 24"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H12v16H6.5A2.5 2.5 0 0 0 4 21Z"/><path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H12v16h5.5A2.5 2.5 0 0 1 20 21Z"/></svg>',
    autores: '<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="3.5"/><path d="M4.5 21a7.5 7.5 0 0 1 15 0"/></svg>'
  };
  const secondaryLinks = Array.from(topNav.querySelectorAll(':scope > a')).map((link) => {
    const secondaryLink = link.cloneNode(true);
    if (secondaryLink.dataset.nav === 'framework') secondaryLink.textContent = startLabel;
    secondaryLink.prepend(Object.assign(document.createElement('span'), { className: 'nav-icon', innerHTML: secondaryIcons[secondaryLink.dataset.nav] }));
    return secondaryLink;
  });
  const languageSwitcher = topNav.querySelector('.language-switcher');

  topNav.querySelectorAll(':scope > a').forEach((link) => link.remove());
  primaryLinks.forEach((link) => topNav.insertBefore(link, languageSwitcher));
  sideNav.replaceChildren(...secondaryLinks);
};

const configureMobileNavigation = () => {
  const topbar = document.querySelector('.topbar');
  const topNav = document.querySelector('.top-nav');
  const sideNav = document.querySelector('.side-nav');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (!topbar || !topNav || !sideNav || !mobileMenu || document.querySelector('.mobile-primary-nav')) return;

  const primaryNav = document.createElement('nav');
  primaryNav.className = 'mobile-primary-nav';
  primaryNav.setAttribute('aria-label', topNav.getAttribute('aria-label') || 'Navegación principal');
  topNav.querySelectorAll(':scope > a').forEach((link) => {
    const mobileLink = link.cloneNode(true);
    mobileLink.querySelector('span')?.remove();
    primaryNav.append(mobileLink);
  });
  topbar.insertBefore(primaryNav, topNav);

  mobileMenu.replaceChildren();
  sideNav.querySelectorAll(':scope > a').forEach((link) => mobileMenu.append(link.cloneNode(true)));
  mobileMenu.setAttribute('aria-label', sideNav.getAttribute('aria-label') || 'Explorar framework');
};

swapPrimaryAndSecondaryNavigation();
configureMobileNavigation();

const menuButton = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
menuButton.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});
const backToTop = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => backToTop.classList.toggle('is-visible', window.scrollY > 450), { passive: true });
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
document.title = 'CoSolutioning';
const favicon = document.querySelector('link[rel="icon"]') || document.createElement('link');
favicon.rel = 'icon';
favicon.type = 'image/png';
favicon.href = `${location.pathname.includes('/en/') || location.pathname.includes('/es/') ? '../' : ''}assets/images/Logo_CoSolutioning01.png`;
if (!favicon.parentNode) document.head.append(favicon);
