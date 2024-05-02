function ajugar() {
  window.location.href = '/gymkhana.html'
}

const niveles = [
  {
    //
    acertijo:
      'En el mundo de los sueños, donde los ojos cerrados exploran tierras lejanas y mundos fantásticos, hay un lugar favorito. Flota en el cielo como una nube esponjosa, lista para abrazarte en tu descanso más profundo. ¿Dónde estoy?',
    respuesta: 'CAFUE',
  },
  {
    acertijo:
      'Entre algodones suaves y envuelto en esponjosidad, reposa un tesoro esperando tu destreza. Donde el agua danza y el jabón canta, busca entre las blancas y coloridas telas, ¿dónde esta el siguiente regalo?',
    respuesta: 'EGIPTO',
  },
  {
    acertijo: '¿Cómo se le llama coloquialmente a un traje de baño de una sola pieza?',
    respuesta: 'PONCHI',
  },
  {
    acertijo:
      'Entre el vaivén de calcetines y camisetas, un tesoro se esconde, y no es el olor de Rubén, esperando ser descubierto ¿Podrás encontrarme?',
    respuesta: 'MARQUESA',
  },
  {
    acertijo:
      'Donde las cortinas de terciopelo susurran historias antiguas y los muebles de ébano guardan secretos de nobleza, encontrarás tu tesoro oculto. En un rincón de opulencia y elegancia, donde las sombras bailan con la luz de las velas, ¿dónde se encuentra este regalo?',
    respuesta: 'BELEN',
  },
]
let nivelGlobal = 0
// Función para cargar el contenido del nivel actual
function cargarNivel(nivel) {
  nivelGlobal = nivel
  const nivelActual = nivel
  document.getElementById('title-nivel').textContent = `🎉🎊 Nivel ${nivelActual + 1} 🎉🎊`
  const contenidoNivel = niveles[nivelActual] // Los índices en el array comienzan en 0, mientras que los niveles comienzan en 1

  if (contenidoNivel) {
    document.getElementById('acertijo').textContent = contenidoNivel.acertijo
    document.getElementById('respuestaCorrecta').value = contenidoNivel.respuesta
  } else {
    console.error('¡El nivel especificado no existe!')
  }
  if (nivelGlobal == niveles.length) {
    document.getElementById('acertijo').hidden = 'Disfruta de tus regalos. Te quiero mi amor ❤'
    document.getElementById('answerInput').hidden = true
    document.getElementById('boton-answer').hidden = true
    document.getElementById('title-nivel').textContent = `🎉🎊 HAS GANADO 🎉🎊`
  }
}

// Función para validar la respuesta del jugador
function checkAnswer() {
  const respuestaCorrecta = document.getElementById('respuestaCorrecta').value
  const respuestaUsuario = document.getElementById('answerInput').value.trim().toUpperCase()

  if (respuestaUsuario === respuestaCorrecta) {
    console.log('respuesta correcta')
    document.getElementById('answerInput').value = ''
    cargarNivel(++nivelGlobal)
  } else {
    document.getElementById('errorLabel').textContent = '¡Respuesta incorrecta! Inténtalo de nuevo.'
    document.getElementById('answerInput').value = ''

    // Desaparecer el mensaje de error después de 3 segundos
    setTimeout(function () {
      document.getElementById('errorLabel').textContent = ''
    }, 3000)
  }
}

// Al cargar la página, cargamos el nivel actual
window.onload = cargarNivel(0)
