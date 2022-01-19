const pasapalabraArray = [[
    { letter: "a", answer: "abducir", status: 0, question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien" },
    { letter: "b", answer: "bingo", status: 0, question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso" },
    { letter: "c", answer: "churumbel", status: 0, question: "CON LA C. Niño, crío, bebé" },
    { letter: "d", answer: "diarrea", status: 0, question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida" },
    { letter: "e", answer: "ectoplasma", status: 0, question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación" },
    { letter: "f", answer: "facil", status: 0, question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad" },
    { letter: "g", answer: "galaxia", status: 0, question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas" },
    { letter: "h", answer: "harakiri", status: 0, question: "CON LA H. Suicidio ritual japonés por desentrañamiento" },
    { letter: "i", answer: "iglesia", status: 0, question: "CON LA I. Templo cristiano" },
    { letter: "j", answer: "jabali", status: 0, question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba" },
    { letter: "k", answer: "kamikaze", status: 0, question: "CON LA K. Persona que se juega la vida realizando una acción temeraria" },
    { letter: "l", answer: "licantropo", status: 0, question: "CON LA L. Hombre lobo" },
    { letter: "m", answer: "misantropo", status: 0, question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas" },
    { letter: "n", answer: "necedad", status: 0, question: "CON LA N. Demostración de poca inteligencia" },
    { letter: "ñ", answer: "señal", status: 0, question: "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo." },
    { letter: "o", answer: "orco", status: 0, question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien" },
    { letter: "p", answer: "protoss", status: 0, question: "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft" },
    { letter: "q", answer: "queso", status: 0, question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche" },
    { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor" },
    { letter: "s", answer: "stackoverflow", status: 0, question: "CON LA S. Comunidad salvadora de todo desarrollador informático" },
    { letter: "t", answer: "terminator", status: 0, question: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984" },
    { letter: "u", answer: "unamuno", status: 0, question: "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914" },
    { letter: "v", answer: "vikingos", status: 0, question: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa" },
    { letter: "w", answer: "sandwich", status: 0, question: "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso" },
    { letter: "x", answer: "botox", status: 0, question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética" },
    { letter: "y", answer: "peyote", status: 0, question: "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos" },
    { letter: "z", answer: "zen", status: 0, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional" }
],
[
    { letter: "a", answer: "abecedario", status: 0, question: "CON LA A. Conjunto de las letras de un idioma puestas en orden" },
    { letter: "b", answer: "babero", status: 0, question: "CON LA B. Tela que se pone a los bebés en el pecho para que no se manchen al comer" },
    { letter: "c", answer: "cabeza", status: 0, question: "CON LA C. Parte superior del cuerpo" },
    { letter: "d", answer: "dormir", status: 0, question: "CON LA D. Accion. Forma de descanso que hacemos por las noches o en la siesta con los ojos cerrados" },
    { letter: "e", answer: "elefante", status: 0, question: "CON LA E. Animal mamifero enorme que vive en Asia o Africa. Con grandes orejas y trompa " },
    { letter: "f", answer: "fiebre", status: 0, question: "CON LA F. Augmento de la temperatura del cuerpo cuando estamos enfermos" },
    { letter: "g", answer: "globo", status: 0, question: "CON LA G. Especie de pelota de goma que se hincha con aire. Les gusta mucho a los niños" },
    { letter: "h", answer: "humo", status: 0, question: "CON LA H. Lo que sale cuando se hace fuego." },
    { letter: "i", answer: "inflar", status: 0, question: "CON LA I. Llenar algo de aire" },
    { letter: "j", answer: "jardin", status: 0, question: "CON LA J. Zona que rodea algunas casas o edificios y que está lleno de césped, flores, árboles…" },
    { letter: "k", answer: "kilo", status: 0, question: "CON LA K. Medida de peso que es igual que 1000 gramos" },
    { letter: "l", answer: "luna", status: 0, question: "CON LA L. Satélite de la Tierra, de color blanco, que se ve por la noche" },
    { letter: "m", answer: "mantel", status: 0, question: "CON LA M. Tela que se pone en las mesas a la hora de comer" },
    { letter: "n", answer: "nido", status: 0, question: "CON LA N. Tipo de casa que construyen los pájaros para poner sus huevos" },
    { letter: "ñ", answer: "ñu", status: 0, question: "CON LA Ñ. Mamífero africano de color marrón parecido a un toro con los cuernos curvos" },
    { letter: "o", answer: "ojo", status: 0, question: "CON LA O. Órgano del sentido de la vista. Lo que usamos para ver" },
    { letter: "p", answer: "peces", status: 0, question: "CON LA P. Animales que viven en el agua, cubiertos de escamas, con aletas para nadar" },
    { letter: "q", answer: "quieto", status: 0, question: "CON LA Q. Que no se mueve" },
    { letter: "r", answer: "rapido", status: 0, question: "CON LA R. Veloz" },
    { letter: "s", answer: "sacapuntas", status: 0, question: "CON LA S. Lo que usas para que tus lápices tengan la punta afilada" },
    { letter: "t", answer: "tenedor", status: 0, question: "CON LA T. Objeto que se usa para pinchar los alimentos y comérselos" },
    { letter: "u", answer: "uña", status: 0, question: "CON LA U. Parte dura que está en la punta de los dedos, que cortamos cuando crece y que las personas se pintan a veces" },
    { letter: "v", answer: "verano", status: 0, question: "CON LA V. Estación del año en la que hace mucho calor" },
    { letter: "w", answer: "windsurf", status: 0, question: "CON LA W. Deporte que se practica en el mar, de pie sobre una tabla alargada que lleva una vela triangular" },
    { letter: "x", answer: "taxi", status: 0, question: "CONTIENE LA X. Coche con conductor que lleva a las personas donde quieren ir. En Barcelona son negros y amarillos" },
    { letter: "y", answer: "yate", status: 0, question: "CON LA Y. Barco de lujo" },
    { letter: "z", answer: "zoo", status: 0, question: "CON LA Z. Parque en el que hay todo tipo de animales de todo el mundo que se pueden visitar por el público" }
],
[
    { letter: "a", answer: "alicia", status: 0, question: "CON LA A. Niña que fue al pais de las maravillas" },
    { letter: "b", answer: "bambi", status: 0, question: "CON LA B. Cervatillo de pelicula que se queda sin su madre" },
    { letter: "c", answer: "caperucita", status: 0, question: "CON LA C. Personaje de cuento que le lleva una cesta a su abuela" },
    { letter: "d", answer: "donald", status: 0, question: "CON LA D. Pato amigo de Mickey" },
    { letter: "e", answer: "elefante", status: 0, question: "CON LA E. Animal que era Dumbo" },
    { letter: "f", answer: "felices", status: 0, question: "CON LA F. Los animales de cuento comen perdices y viven..." },
    { letter: "g", answer: "genio", status: 0, question: "CON LA G.  Lo que sale al frotar una lampara magica" },
    { letter: "h", answer: "heidi", status: 0, question: "CON LA H. Vivia en los Alpes con su abuelito" },
    { letter: "i", answer: "increibles", status: 0, question: "CON LA I. Familia de superheroes" },
    { letter: "j", answer: "jones", status: 0, question: "CON LA J. Apellido de Indiana" },
    { letter: "k", answer: "king-kong", status: 0, question: "CON LA K. Gorila gigante que vive en Nueva York" },
    { letter: "l", answer: "lobo", status: 0, question: "CON LA L. Animal del bosque que en los cuentos es el malo" },
    { letter: "m", answer: "madagascar", status: 0, question: "CON LA M. Isla africana donde llegan animales que se escapan del zoo" },
    { letter: "n", answer: "nemo", status: 0, question: "CON LA N. Dory y Marlin lo buscan" },
    { letter: "ñ", answer: "araña", status: 0, question: "CON LA Ñ. Animal que le da superpoderes a un heroe" },
    { letter: "o", answer: "ogro", status: 0, question: "CON LA O. Lo que era Shreck." },
    { letter: "p", answer: "peter pan", status: 0, question: "CON LA P. Niño que nunca creia y que vivia en Nunca Jamas" },
    { letter: "q", answer: "mcqueen", status: 0, question: "CONTIENE LA Q. Apellido de Rayo, coche de carreras" },
    { letter: "r", answer: "ratatouille", status: 0, question: "CON LA R. Pelicula de una rata cocinera" },
    { letter: "s", answer: "setas", status: 0, question: "CON LA S. Las casas de los pitufos" },
    { letter: "t", answer: "teletubbies", status: 0, question: "CON LA T. Cuatro personajes que son de color: morado, amarillo, verde y rojo" },
    { letter: "u", answer: "ursula", status: 0, question: "CON LA U. Malvada de la Sirenita, tiene cuerpo de pulpo" },
    { letter: "v", answer: "vikingo", status: 0, question: "CON LA V. Vickie, ademas de inteligente y astuto era..." },
    { letter: "w", answer: "whinnie", status: 0, question: "CON LA W. Osito del bosque de los Cien Arces al que le encanta la miel" },
    { letter: "x", answer: "x-men", status: 0, question: "CON LA X. Grupo de superhéroes del que forman parte Lobezno, Tormenta,..." },
    { letter: "y", answer: "yasmine", status: 0, question: "CON LA Y. La princesa que Aladdin quiere conquistar" },
    { letter: "z", answer: "zipi-zape", status: 0, question: "CON LA Z. Hermanos gemelos de los tebeos" }
]]

let ranking = [
    { name: 'Maria', "correct answers": 27, points: 100 },
    { name: 'Pepe', "correct answers": 22, points: 95 },
    { name: 'Antonia', "correct answers": 20, points: 93 },
    { name: 'Ramona', "correct answers": 17, points: 90 }]

let pasapalabraQuestions = pasapalabraArray[parseInt(Math.random() * (2-0))]

function pasapalabra() {
    console.log("Welcome to PASAPALABRA. For each letter we have a question. If you don't know the answer you can say PASAPALABRA, or click OK to continue. If you want stop the game say: END, or click CANCEL.")
    console.log('In this PASAPALABRA GAME tthe player who does not miss any letter will have 100 points. For each correct answer is 1 point. If you make a mistake, 0.25 points are subtracted. If you reach the end you can enter the ranking ')
    console.log('The actual ranking is:')
    console.table(ranking)
    playGame(pasapalabraQuestions)
}

function playGame(questions) {
    let isGameEnd 

    do {
        isGameEnd = true
        for (let i = 0; i < questions.length; i++) {
            if (questions[i].status === 0) {
                let answerUser = prompt(questions[i].question)
                if (answerUser === null) {
                    console.log(`You answer correctly ${countAnswerUser(questions)} questions`)
                    console.log('Good bye!')
                    return 
                }
                answerUser = answerUser.toLowerCase()
                if (answerUser === questions[i].answer) {
                    alert("Correct")
                    questions[i].status = 1
                } else if (answerUser === 'pasapalabra' || answerUser === "") {
                    alert("PASAPALABRA")
                    isGameEnd = false
                    continue
                } else if (answerUser === 'end') {
                    console.log(`You answer correctly ${countAnswerUser(questions)} questions`)
                    console.log('Good bye!')
                    return 
                } else {
                    alert(`Answer not correct. The correct answer is ${questions[i].answer}`)
                    questions[i].status = -1

                }
            }
        }
    } while (!isGameEnd)
    playerRanking(questions)
    return 
}

let countAnswerUser = function (questions) {
    let count = 0
    for (let i = 0; i < questions.length; i++) {

        if (questions[i].status === 1) {
            count += 1
        } else if (questions[i].status === -1) {
            count -= 0.25
        }
    }
    return count
}

let playerRanking = function (questions) {
    let name = prompt("Please insert your name")
    if (name === null || name === "" || name === " ") {
        name = "player " + parseInt(Math.random() * 100)
    }
    name = upperCaseFirstLetter(name)

    let answer = countAnswerUser(questions)
    let points = answer + 73
    ranking.push({ name: name, "correct answers": answer, points: points })
    ranking.sort((a, b) => b.points - a.points)
    console.table(ranking)
    console.log(`See you soon ${name}`)
}

function upperCaseFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

