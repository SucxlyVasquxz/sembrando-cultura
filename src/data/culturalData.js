// Base de datos de contenidos educativos y pedagógicos sobre Identidad Cultural y Sentido de Pertenencia

export const culturalData = {
  projectTitle: "Sembrando Identidad",
  tagline: "Sembrando raíces vivas, cultivando sentido de pertenencia en la escuela",
  mission: "Concientizar, orientar e inspirar a estudiantes y docentes para rescatar, valorar y celebrar el patrimonio cultural propio y comunitario, combatiendo la discriminación y el desarraigo en las aulas.",

  heroImages: {
    main: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
    mainAlt: "Estudiantes diversos unidos en la escuela con orgullo por su identidad",
    mainCaption: "Comunidad escolar diversa unida por el respeto, la pertenencia y el orgullo de sus raíces.",
    sproutImage: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?auto=format&fit=crop&w=500&q=80",
    sproutCaption: "Sembrando raíces vivas en las aulas"
  },

  stats: [
    {
      number: "40%",
      label: "Lenguas originarias en riesgo",
      detail: "Se estima que más del 40% de las lenguas indígenas del mundo están en peligro de desaparición por falta de transmisión intergeneracional y desvalorización escolar."
    },
    {
      number: "3x",
      label: "Mejor autoestima y rendimiento",
      detail: "Estudiantes con un fuerte sentido de pertenencia y valoración de sus orígenes muestran 3 veces mayor resiliencia emocional y mejor desempeño escolar."
    },
    {
      number: "65%",
      label: "Presión de homogeneización",
      detail: "6 de cada 10 jóvenes admiten haber ocultado tradiciones, palabras de su región o gustos culturales para evitar burlas o encajar en tendencias digitales globales."
    },
    {
      number: "88%",
      label: "Poder de mediación docente",
      detail: "El 88% de los alumnos afirma que un profesor que valida positivamente su origen cultural marca un punto de inflexión contra el acoso y la vergüenza identitaria."
    }
  ],

  causes: [
    {
      id: "verguenza",
      icon: "speech",
      title: "Vergüenza cultural y lingüística",
      shortDesc: "El temor a la burla por hablar con acento, usar palabras locales o una lengua materna originaria.",
      fullDesc: "Muchos alumnos sufren burlas por sus apellidos, acento, tono de voz o por hablar un idioma originario o dialecto regional. Esto provoca que dejen de hablarlo en público y sientan vergüenza de su núcleo familiar.",
      impacto: "Pérdida acelerada de lenguas maternas, ruptura del diálogo con abuelos y silencio en clase.",
      alertaEscolar: "Alumnos que callan cuando se les pregunta por sus familias o cambian su forma de hablar abruptamente por presión grupal.",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=900&q=80",
      imageTag: "Identidad Lingüística",
      imageCaption: "El diálogo y el respeto mutuo en el aula vencen la timidez y la vergüenza por el acento o la lengua materna."
    },
    {
      id: "globalizacion",
      icon: "globe",
      title: "Homogeneización digital y redes sociales",
      shortDesc: "La adopción pasiva de modas foráneas que desplaza las expresiones culturales propias.",
      fullDesc: "Los algoritmos y la cultura pop masiva promueven un único estándar de éxito, estética, consumo y lenguaje. Lo local, lo comunitario o lo tradicional suele asociarse erróneamente con 'lo atrasado' o 'poco sofisticado'.",
      impacto: "Desapego de las costumbres locales, pérdida del interés por la historia comunitaria y consumo desmedido de arquetipos ajenos.",
      alertaEscolar: "Desprecio hacia festividades tradicionales escolares y reemplazo total por tendencias fugaces de internet.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
      imageTag: "Entorno Digital",
      imageCaption: "La presión de los algoritmos globales frente a la sabiduría viva de nuestras comunidades."
    },
    {
      id: "brecha",
      icon: "people",
      title: "Ruptura intergeneracional",
      shortDesc: "La desconexión afectiva y comunicativa entre jóvenes y los sabios de la comunidad (abuelos y ancianos).",
      fullDesc: "Las historias orales, los saberes culinarios, medicinales y los valores éticos tradicionales de las familias solían transmitirse en el día a día. Hoy las pantallas y los horarios fragmentados aíslan a los jóvenes de sus raíces vivas.",
      impacto: "Muerte de la memoria histórica comunitaria; cuando un anciano fallece sin transmitir sus relatos, desaparece una biblioteca viva.",
      alertaEscolar: "Alumnos que desconocen de dónde provienen sus abuelos o qué oficios y saberes tenían sus antepasados.",
      image: "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=900&q=80",
      imageTag: "Memoria Intergeneracional",
      imageCaption: "Los abuelos y ancianos son bibliotecas vivas que custodian la memoria de nuestros pueblos."
    },
    {
      id: "curriculo",
      icon: "book",
      title: "Currículos escolares descontextualizados",
      shortDesc: "Enseñanza que reduce la cultura a 'un baile folclórico al año' sin profundizar en saberes reales.",
      fullDesc: "La escuela con frecuencia 'folcloriza' la cultura como un disfraz o evento festivo aislado, en lugar de integrarla en las ciencias (saberes agrícolas, botánica local), la lengua (literatura comunitaria) y la ética ciudadana.",
      impacto: "La identidad se percibe como algo del museo o del pasado, no como una herramienta viva para resolver problemas del presente.",
      alertaEscolar: "Falta de textos locales, ausencia de saberes indígenas o afrodescendientes en materias de ciencias e historia.",
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=900&q=80",
      imageTag: "Educación Contextualizada",
      imageCaption: "Transformar el aula en un espacio donde los saberes de la comunidad dialoguen con la ciencia."
    }
  ],

  consequences: [
    {
      title: "Crisis de Autoestima y Desarraigo",
      desc: "Cuando una persona no sabe quién es o se avergüenza de su sangre, construye su personalidad sobre cimientos frágiles, haciéndose vulnerable a la exclusión y la apatía."
    },
    {
      title: "Bullying y Discriminación Escolar",
      desc: "La falta de educación intercultural convierte la diferencia en motivo de discriminación, perpetuando estereotipos clasistas, racistas o regionalistas en pasillos y aulas."
    },
    {
      title: "Extinción de Saberes Ancestrales",
      desc: "Se pierden conocimientos milenarios sobre el cuidado del agua, el cultivo sostenible, la medicina herbolaria y formas solidarias de convivir (como el tequio o la minga)."
    },
    {
      title: "Fragmentación del Tejido Comunitario",
      desc: "Al no haber sentido de pertenencia común, las comunidades pierden cohesión para defender su territorio, sus recursos y su patrimonio frente a la degradación social."
    }
  ],

  importancePillars: [
    {
      title: "Autoestima, Seguridad y Salud Emocional",
      summary: "Saber quién eres y de dónde vienes te da un anclaje psicológico inquebrantable.",
      desc: "Los estudiantes que conocen y honran la historia de sus familias desarrollan mayor resiliencia frente a la frustración y la presión social. La seguridad identitaria previene la ansiedad de tener que fingir para ser aceptado.",
      image: "https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=700&q=80",
      imageTag: "Salud Emocional",
      imageCaption: "La autoconfianza florece cuando un estudiante camina orgulloso de sus raíces familiares."
    },
    {
      title: "Vacuna contra el Bullying y la Discriminación",
      summary: "Quien valora su propia cultura aprende de forma natural a respetar la de los demás.",
      desc: "El acoso escolar por acento, color de piel o costumbres nace de la ignorancia y el miedo a la diferencia. Una escuela con identidad colectiva crea un ambiente protector donde la diversidad es motivo de orgullo y celebración grupal.",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=700&q=80",
      imageTag: "Convivencia Escolar",
      imageCaption: "Una comunidad escolar donde nadie tiene que ocultar su origen para sentirse seguro y acogido."
    },
    {
      title: "Pensamiento Crítico y Creatividad Viva",
      summary: "La identidad propia es la fuente de inspiración más original e irrepetible para el arte y la ciencia.",
      desc: "Las grandes innovaciones no nacen de la imitación ciega, sino de combinar saberes ancestrales con herramientas de vanguardia. La pertenencia cultural permite mirar el mundo con ojos propios y no ser simples consumidores pasivos.",
      image: "https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?auto=format&fit=crop&w=700&q=80",
      imageTag: "Creatividad Ancestral",
      imageCaption: "Textiles tradicionales, colores y diseños: la memoria viva reinventada por las nuevas generaciones."
    },
    {
      title: "Cohesión Social y Cuidado del Territorio",
      summary: "Solo se ama y se defiende aquello que se siente como propio.",
      desc: "Cuando una comunidad escolar desarrolla sentido de pertenencia con su barrio, su río, sus fiestas y su gente, surgen ciudadanos activos que cuidan los espacios públicos, defienden su medio ambiente y tejen redes de apoyo solidario.",
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=700&q=80",
      imageTag: "Defensa Comunitaria",
      imageCaption: "El cuidado del medio ambiente y el territorio nace del amor a la tierra donde están nuestras raíces."
    }
  ],

  myths: [
    {
      myth: "Tener identidad cultural significa quedarse estancado en el pasado o rechazar la tecnología.",
      reality: "La identidad cultural es viva y dinámica. Te da una raíz fuerte para crear, innovar y usar la tecnología con propósito propio, sin perder tu esencia."
    },
    {
      myth: "En las ciudades ya no hay identidad cultural; eso es solo para pueblos rurales o indígenas.",
      reality: "Cada barrio, ciudad, migración y familia construye cultura viva: desde la gastronomía y la música hasta la solidaridad vecinal y la memoria urbana."
    },
    {
      myth: "Para ser modernos y globales hay que dejar atrás las tradiciones de nuestros abuelos.",
      reality: "Los pensadores más influyentes y los artistas más universales son aquellos que profundizan con orgullo en su propia identidad local para hablarle al mundo."
    },
    {
      myth: "Hablar una lengua originaria o tener acento dificulta aprender bien el español o el inglés.",
      reality: "El multilingüismo y la riqueza fonética potencian la neuroplasticidad cerebral, la creatividad y la capacidad de aprender múltiples idiomas con mayor facilidad."
    }
  ],

  studentsGuide: {
    heroText: "¿Por qué tu historia personal y comunitaria es tu superpoder más grande?",
    intro: "Vivimos bombardeados por modas que te dicen cómo vestirte, qué escuchar y cómo hablar. Pero lo que te hace verdaderamente único, irrepetible y fuerte es la raíz que te sostiene: la historia de tu familia, el sabor de tu comida, las palabras de tu tierra y la memoria de tu gente.",
    bannerImage: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1100&q=80",
    bannerTag: "Jóvenes & Raíces",
    bannerCaption: "Estudiantes participando activamente: su historia familiar es la base de su liderazgo.",
    pillars: [
      {
        title: "1. No tengas pena de tus raíces",
        description: "Tu acento, tu apellido, tu color de piel y tus costumbres no son motivo de timidez; son el testimonio vivo de la resistencia y creatividad de generaciones enteras.",
        action: "La próxima vez que escuches una burla hacia una tradición o acento, no te sumes. Conviértete en defensor del orgullo cultural."
      },
      {
        title: "2. Conviértete en detective de tu familia",
        description: "Pregúntale a tus abuelos, tíos o vecinos mayores: ¿De dónde llegaron? ¿Qué canciones cantaban? ¿Qué remedios curaban sus dolores? ¿Qué dificultades vencieron?",
        action: "Graba una entrevista de 5 minutos con tu teléfono a un adulto mayor de tu familia o barrio y atesora su voz."
      },
      {
        title: "3. La cultura se reinventa contigo",
        description: "No tienes que elegir entre tus raíces y la modernidad. Puedes rapear en lengua originaria, diseñar moda inspirada en tejidos locales o programar apps que enseñen leyendas de tu región.",
        action: "Crea contenido digital (TikTok, podcast, dibujo) que muestre con orgullo una comida, leyenda o frase típica de tu lugar."
      },
      {
        title: "4. Construye pertenencia con tus compañeros",
        description: "El sentido de pertenencia no significa que todos seamos iguales, sino que todos nos cuidemos sabiendo que somos diversos y valiosos.",
        action: "Comparte en el almuerzo escolar un platillo típico de tu hogar y pregunta a tus amigos sobre las recetas secretas de sus familias."
      }
    ],
    reflectionQuestions: [
      "¿Qué palabra, platillo o costumbre de mi familia me hace sentir en casa?",
      "¿Alguna vez sentí vergüenza de algo propio por miedo al qué dirán? ¿Por qué?",
      "¿Qué historia de mis abuelos o padres merecería ser contada en una película?",
      "¿Cómo puedo usar mis talentos (música, dibujo, deportes, ciencia) para enaltecer a mi comunidad?"
    ]
  },

  teachersGuide: {
    heroText: "El aula como semillero de dignidad, memoria y descolonización del pensamiento",
    intro: "Los docentes no solo enseñan contenidos; validan existencias. Un profesor que abraza la identidad de sus estudiantes transforma un espacio de posible discriminación en un santuario de orgullo, pertenencia y pensamiento crítico transformador.",
    bannerImage: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1100&q=80",
    bannerTag: "Pedagogía Intercultural",
    bannerCaption: "El maestro como mediador que escucha, valida y hace florecer las historias de vida de sus alumnos.",
    keyPrinciples: [
      {
        title: "Transversalidad real (más allá del 'día típico')",
        description: "No limites la cultura al festival del 12 de octubre o la semana de la patria. Incorpora conocimientos tradicionales en biología (herbolaria local), matemáticas (sistemas de numeración maya, quipus), física (arquitectura tradicional bioclimática) y lenguaje.",
        tip: "Inicia las lecciones preguntando: '¿Cómo resolvían esto en la comunidad de sus abuelos?'"
      },
      {
        title: "Cero tolerancia a la burla identitaria y lingüística",
        description: "El 'bullying cultural' hiere el núcleo de la personalidad del estudiante. Cuando un alumno sea objeto de burla por su pronunciación, vestimenta o procedencia, intervén de inmediato convirtiendo el momento en una lección de valorización lingüística.",
        tip: "Enseña que no existen 'errores de acento', sino fascinantes encuentros entre idiomas y regiones."
      },
      {
        title: "Pedagogía de la Memoria Oral",
        description: "Valida a los padres y abuelos como 'maestros eméritos'. Invítalos al salón a enseñar un oficio tradicional, narrar un mito local o explicar cómo era el entorno natural hace 50 años.",
        tip: "Crea el 'Libro Comunitario del Aula' donde cada estudiante redacte una crónica dictada por un sabio de su familia."
      },
      {
        title: "Evaluación dialógica y contextualizada",
        description: "Permite a los alumnos expresar sus aprendizajes mediante formatos que dialoguen con su entorno: murales comunitarios, composiciones musicales, teatro popular o ensayos reflexivos.",
        tip: "Fomenta la investigación etnográfica escolar en lugar de la simple copia de monografías genéricas de internet."
      }
    ]
  },

  classroomDynamics: [
    {
      id: "arbol",
      title: "El Árbol de Nuestras Raíces Vivas",
      audience: "Alumnos de Primaria y Secundaria",
      duration: "2 sesiones de 45 min",
      category: "Autoconocimiento e Identidad",
      objective: "Mapear colectivamente los orígenes geográficos, lingüísticos y culturales del salón para visibilizar la riqueza de la diversidad.",
      materials: "Papel craft grande, plumones, fotos o recortes, hojas de colores en forma de hojas de árbol.",
      image: "https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=900&q=80",
      imageTag: "Creación Colectiva",
      imageCaption: "Cada hoja en el árbol representa la historia, un platillo o una tradición de la familia de un alumno.",
      steps: [
        "En la pared se dibuja el tronco de un gran árbol comunitario.",
        "Cada alumno recibe dos 'hojas' de papel: en una escribe una tradición, comida o costumbre de su familia; en la otra, de dónde provienen sus antepasados y una palabra que usen en casa.",
        "Uno a uno pasan a pegar su hoja en el árbol y explican por qué ese recuerdo es valioso para ellos.",
        "Al final, el docente reflexiona: 'Nuestro grupo es este gran árbol; sus raíces son las historias de sus familias y su copa da sombra a todos cuando nos respetamos'."
      ],
      reflexion: "¿Cómo se vería el árbol si todos tuviéramos exactamente la misma hoja? La belleza del bosque radica en la variedad de sus árboles."
    },
    {
      id: "capsula",
      title: "Cápsula del Tiempo: Voces de los Sabios",
      audience: "Secundaria y Bachillerato",
      duration: "1 semana (trabajo de campo y exposición)",
      category: "Historia Oral y Memoria",
      objective: "Reconectar a los estudiantes con sus adultos mayores mediante una entrevista reflexiva sobre saberes en riesgo de pérdida.",
      materials: "Grabadora de voz o teléfono móvil, libreta de campo, cuestionario guía.",
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=900&q=80",
      imageTag: "Historia Oral",
      imageCaption: "Atesorar los testimonios de los ancianos permite descubrir que venimos de un río inmenso de memorias.",
      steps: [
        "El docente facilita una guía de 4 preguntas clave (infancia, tradiciones que se hacían antes y ya no, consejos de vida, leyendas locales).",
        "Los estudiantes entrevistan a un abuelo, abuela o persona mayor del vecindario con respeto y atención activa.",
        "En clase, transcriben una anécdota significativa y la comparten en un círculo de la palabra.",
        "Se crea un podcast escolar o una revista digital con las historias orales recopiladas."
      ],
      reflexion: "Cuando escuchamos a quienes vivieron antes que nosotros, descubrimos que no venimos de la nada, sino de un río inmenso de memorias."
    },
    {
      id: "saberes",
      title: "Feria Escolar de Saberes, Semillas y Sabores",
      audience: "Toda la Comunidad Escolar (Alumnos, Docentes y Familias)",
      duration: "1 jornada escolar",
      category: "Integración Comunitaria",
      objective: "Involucrar activamente a las familias para compartir recetas ancestrales, medicina tradicional y juegos tradicionales.",
      materials: "Mesas temáticas, utensilios, ingredientes típicos, carteles explicativos.",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80",
      imageTag: "Gastronomía & Saberes",
      imageCaption: "La gastronomía tradicional reúne a familias y estudiantes alrededor de ingredientes y recetas de la tierra.",
      steps: [
        "Se organizan stands por temáticas: Gastronomía tradicional, Juegos de antaño (trompo, canicas, rayuela), Plantas medicinales del barrio/comunidad.",
        "Las familias acompañan a los estudiantes en sus presentaciones.",
        "Los asistentes prueban, experimentan y aprenden la historia detrás de cada elemento.",
        "Cierre con un pacto comunitario de preservación cultural escolar."
      ],
      reflexion: "La escuela deja de ser una isla y se convierte en el corazón palpitante del patrimonio del pueblo o barrio."
    },
    {
      id: "mitos-debate",
      title: "Taller: Deconstruyendo el Estereotipo y el Acento",
      audience: "Secundaria y Docentes",
      duration: "60 min",
      category: "Pensamiento Crítico y No Discriminación",
      objective: "Identificar y desarmar micromachismos, racismo y clasismo cultural presentes en bromas, series y memes cotidianos.",
      materials: "Tarjetas con frases cotidianas estigmatizantes ('habla como indio', 'eso es de pueblo', 'hay que mejorar la raza').",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
      imageTag: "Debate Crítico",
      imageCaption: "Diálogo abierto entre estudiantes analizando el daño que causan los chistes y estereotipos discriminatorios.",
      steps: [
        "Se colocan frases habituales en una pizarra.",
        "En equipos, analizan: ¿Qué daño causa esta frase a quien la escucha? ¿Qué mentira histórica oculta?",
        "Los equipos reescriben la frase desde la dignidad y la pedagogía del reconocimiento.",
        "Construcción de un decálogo de convivencia lingüística y cultural para el salón de clases."
      ],
      reflexion: "Las palabras construyen puentes o levantan muros. Usar la palabra para dignificar el origen es el primer paso de la justicia social."
    }
  ],

  quizQuestions: [
    {
      id: 1,
      question: "¿Qué haces cuando alguien se burla del acento, apellido o vestimenta tradicional de un compañero?",
      options: [
        {
          text: "Me río o me quedo callado para que no se burlen también de mí.",
          score: 1,
          feedback: "Es comprensible sentir miedo a la exclusión, pero el silencio permite que el acoso continúe. Tu voz puede marcar la diferencia."
        },
        {
          text: "Me incomoda pero no digo nada; cambio de tema.",
          score: 2,
          feedback: "Reconocer la incomodidad es el primer paso. El siguiente es poner un límite asertivo diciendo: 'Eso no da risa, es parte de su historia'."
        },
        {
          text: "Defiendo a mi compañero y explico con calma que todas las raíces merecen profundo respeto y orgullo.",
          score: 3,
          feedback: "¡Excelente! Eres un verdadero guardián de la dignidad y la convivencia intercultural en tu escuela."
        }
      ]
    },
    {
      id: 2,
      question: "¿Cuánto conoces sobre el lugar de origen, música o costumbres de tus abuelos o antepasados?",
      options: [
        {
          text: "Casi nada, nunca he preguntado y siento que no tiene que ver con mi vida de hoy.",
          score: 1,
          feedback: "¡Tienes una mina de oro por descubrir! Pregúntale a un familiar esta tarde; te sorprenderá lo mucho que te identificarás."
        },
        {
          text: "Sé algunas historias y comidas típicas, pero me gustaría profundizar más.",
          score: 2,
          feedback: "¡Vas por buen camino! Sigue indagando; sus anécdotas son el mapa que te enseña de dónde viene tu fortaleza."
        },
        {
          text: "Conozco bien sus historias, disfruto sus costumbres y las comparto con alegría entre mis amigos.",
          score: 3,
          feedback: "¡Fantástico! Mantener vivas esas memorias te da una identidad sólida que nadie puede arrebatarte."
        }
      ]
    },
    {
      id: 3,
      question: "Frente a las tendencias y modas globales de internet (música, ropa, formas de hablar):",
      options: [
        {
          text: "Siento que lo tradicional es 'anticuado' y prefiero imitar solo lo que está de moda en redes.",
          score: 1,
          feedback: "Las modas pasan rápido; las raíces quedan para siempre. No tienes que rechazar lo moderno para valorar lo propio."
        },
        {
          text: "Disfruto las tendencias modernas, pero a veces me acuerdo de mis tradiciones familiares.",
          score: 2,
          feedback: "¡Buen equilibrio! El reto es no dejar que el algoritmo borre las expresiones únicas de tu propia región."
        },
        {
          text: "Combino lo moderno con mi propia identidad: uso la tecnología y el arte para proyectar con orgullo mi cultura.",
          score: 3,
          feedback: "¡Increíble! Así nacen las vanguardias culturales: innovando desde la raíz propia hacia el mundo."
        }
      ]
    },
    {
      id: 4,
      question: "En la escuela, ¿cómo consideras que debería vivirse la diversidad cultural?",
      options: [
        {
          text: "Todos deberíamos intentar comportarnos y hablar igual para no tener conflictos.",
          score: 1,
          feedback: "La igualdad en derechos no exige uniformidad. La homogenización empobrece; la diversidad nos enriquece a todos."
        },
        {
          text: "Es bueno que exista un día especial al año para hacer bailes y probar comida típica.",
          score: 2,
          feedback: "Las celebraciones son buenas, pero la identidad debe vivirse todos los días en el respeto cotidiano del aula."
        },
        {
          text: "Debe ser parte del día a día: en cada materia, en el trato respetuoso y en el aprendizaje mutuo entre compañeros.",
          score: 3,
          feedback: "¡Visión pedagógica perfecta! La interculturalidad es un estilo de convivencia constante."
        }
      ]
    },
    {
      id: 5,
      question: "¿Qué significa para ti el 'sentido de pertenencia'?",
      options: [
        {
          text: "Pertenecer a un grupo popular de amigos aunque tenga que fingir ser alguien que no soy.",
          score: 1,
          feedback: "El verdadero sentido de pertenencia nunca te pide que te traiciones a ti mismo. Pertenecer duele si exige perderte."
        },
        {
          text: "Sentirme parte de mi escuela o comunidad cuando nos va bien en deportes o eventos.",
          score: 2,
          feedback: "Es un inicio, pero la pertenencia profunda trasciende los triunfos: es sentirse acogido, valorado y con propósito colectivo."
        },
        {
          text: "Saber que soy aceptado tal como soy, orgulloso de mi historia y comprometido con el bienestar de mi comunidad.",
          score: 3,
          feedback: "¡Definición insuperable! La pertenencia auténtica florece en la libertad, el afecto y la solidaridad mutua."
        }
      ]
    }
  ],

  decalogo: [
    {
      num: "01",
      title: "La dignidad no tiene fronteras ni acentos",
      text: "En nuestra escuela, todo idioma, acento, apellido y vestimenta merece admiración y respeto incondicional."
    },
    {
      num: "02",
      title: "Nuestra historia no empezó con nosotros",
      text: "Honramos la memoria, los oficios y los saberes de nuestros padres, abuelos y comunidades originarias."
    },
    {
      num: "03",
      title: "La diversidad es nuestra mayor riqueza",
      text: "No queremos un aula uniforme; celebramos el mosaico de saberes, colores y cosmovisiones que nos enriquecen."
    },
    {
      num: "04",
      title: "Cero tolerancia a la burla cultural",
      text: "Rechazamos los apodos denigrantes, el clasismo, el racismo y los prejuicios disfrazados de 'chiste'."
    },
    {
      num: "05",
      title: "La cultura es viva, no de museo",
      text: "Reinventamos nuestras tradiciones a través de la ciencia, la poesía, el arte digital, la música y el pensamiento libre."
    },
    {
      num: "06",
      title: "Escuchamos la voz de los abuelos",
      text: "Abrimos las puertas del aula para que la sabiduría comunitaria dialogue de igual a igual con los libros de texto."
    },
    {
      num: "07",
      title: "Nadie debe avergonzarse de su origen",
      text: "Cuidamos el corazón de cada compañero para que jamás sienta la necesidad de ocultar de dónde viene."
    },
    {
      num: "08",
      title: "Protegemos la palabra y la lengua materna",
      text: "Promovemos el aprendizaje y la revitalización de las lenguas originarias y los modismos de nuestra tierra."
    },
    {
      num: "09",
      title: "Comunidad antes que individualismo",
      text: "Fomentamos la ayuda mutua, la solidaridad y el trabajo colectivo como pilares de nuestro crecimiento escolar."
    },
    {
      num: "10",
      title: "Sembramos raíces para dar alas al futuro",
      text: "Solo quien conoce con firmeza el suelo donde está parado puede volar alto sin perder su rumbo en el mundo."
    }
  ],

  initialPledges: [
    {
      id: "p1",
      author: "Mtra. Carmen Salazar",
      role: "Docente de Ciencias Sociales",
      school: "Escuela Secundaria Técnica #42",
      badge: "Docente",
      message: "Me comprometo a dedicar cada viernes 15 minutos a 'La Historia de mi Barrio' para que mis alumnos descubran la riqueza que tienen a la vuelta de su casa.",
      date: "Noviembre 2026",
      likes: 24
    },
    {
      id: "p2",
      author: "Mateo G.",
      role: "Estudiante de 2° año",
      school: "Colegio Bicentenario",
      badge: "Estudiante",
      message: "Prometo no volver a avergonzarme del sombrero de paja que usa mi abuelo cuando me va a buscar a la escuela. Al contrario, le voy a pedir que me enseñe cómo lo teje.",
      date: "Noviembre 2026",
      likes: 38
    },
    {
      id: "p3",
      author: "Prof. Alberto Quiñónez",
      role: "Director de Escuela Primaria",
      school: "Primaria Rural Emiliano Zapata",
      badge: "Directivo",
      message: "Instalaremos en el patio central un mural interactivo permanente donde cada niño dibuje un elemento del patrimonio inmaterial de su familia.",
      date: "Noviembre 2026",
      likes: 19
    },
    {
      id: "p4",
      author: "Valeria Ximena R.",
      role: "Estudiante de Bachillerato",
      school: "Preparatoria Regional",
      badge: "Estudiante",
      message: "Comencé un club escolar de poesía bilingüe en español y náhuatl. Si perdemos las palabras de nuestros pueblos, perdemos una forma de amar al mundo.",
      date: "Noviembre 2026",
      likes: 45
    }
  ]
};
