# Casos de Prueba de Sistema

Las pruebas de sistema se ejecutan con Jest y React Native Testing Library. Prueban la app completa: dibujan la pantalla RPSScreen y presionan los botones como lo haría una persona, y solo se controla la jugada de la computadora para que el resultado sea siempre el mismo. En la corrida final con npm test pasaron los 13 casos.

Son 13 casos: el estado inicial, las 9 combinaciones de jugadas entre el jugador y la computadora, y 3 casos de varias rondas seguidas.

```text
Test Case
ID: STC-001
NAME: Estado inicial de la app antes de jugar
SCENARIO:
  GIVEN la app recién abierta, sin ninguna ronda jugada
  AND la computadora sin jugada asignada
  WHEN el jugador observa la pantalla sin presionar ningún botón
  THEN se ve el ícono de interrogación en el lugar de la jugada de la computadora
  AND el marcador muestra Jugador 0, Computadora 0 y Empates 0
  AND no se muestra ningún texto de resultado
PRECONDITIONS: Pantalla RPSScreen recién renderizada, sin interacción previa.
STEPS:
  1. Abrir la app.
  2. Observar la pantalla sin presionar nada.
INPUT:
  Player: ninguna (sin jugada)
  Computer: ninguna (sin jugada)
EXPECTED OUTPUT:
  Ícono de interrogación, marcador 0 a 0 con Empates: 0, sin texto de resultado, y los tres botones (Piedra, Papel, Tijeras) visibles.
POST-CONDITIONS:
  Ninguno. El estado inicial no cambia por sí solo.
```

```text
Test Case
ID: STC-002
NAME: Piedra contra Piedra, hay empate
SCENARIO:
  GIVEN el jugador elige Piedra
  AND la computadora elige Piedra
  WHEN el jugador presiona el botón Piedra
  THEN se muestra el texto "Empate"
  AND se muestra el ícono de la computadora con la jugada Piedra
  AND el marcador queda en Jugador 0, Computadora 0, Empates 1
PRECONDITIONS: Pantalla recién abierta, marcador en 0, 0 y 0, sin texto de resultado.
STEPS:
  1. Presionar el botón Piedra.
  2. Leer el ícono de la computadora, el texto de resultado y el marcador.
INPUT:
  Player: Piedra
  Computer: Piedra
EXPECTED OUTPUT:
  Texto "Empate", ícono de la computadora con la jugada Piedra y marcador en Jugador 0, Computadora 0, Empates 1.
POST-CONDITIONS:
  ties aumenta en 1 y los otros dos contadores siguen en 0.
```

```text
Test Case
ID: STC-003
NAME: Piedra contra Papel, gana la computadora
SCENARIO:
  GIVEN el jugador elige Piedra
  AND la computadora elige Papel
  WHEN el jugador presiona el botón Piedra
  THEN se muestra el texto "Ganó la compu"
  AND se muestra el ícono de la computadora con la jugada Papel
  AND el marcador queda en Jugador 0, Computadora 1, Empates 0
PRECONDITIONS: Pantalla recién abierta, marcador en 0, 0 y 0, sin texto de resultado.
STEPS:
  1. Presionar el botón Piedra.
  2. Leer el ícono de la computadora, el texto de resultado y el marcador.
INPUT:
  Player: Piedra
  Computer: Papel
EXPECTED OUTPUT:
  Texto "Ganó la compu", ícono de la computadora con la jugada Papel y marcador en Jugador 0, Computadora 1, Empates 0.
POST-CONDITIONS:
  computerWins aumenta en 1 y los otros dos contadores siguen en 0.
```

```text
Test Case
ID: STC-004
NAME: Piedra contra Tijeras, gana el jugador
SCENARIO:
  GIVEN el jugador elige Piedra
  AND la computadora elige Tijeras
  WHEN el jugador presiona el botón Piedra
  THEN se muestra el texto "¡Ganaste!"
  AND se muestra el ícono de la computadora con la jugada Tijeras
  AND el marcador queda en Jugador 1, Computadora 0, Empates 0
PRECONDITIONS: Pantalla recién abierta, marcador en 0, 0 y 0, sin texto de resultado.
STEPS:
  1. Presionar el botón Piedra.
  2. Leer el ícono de la computadora, el texto de resultado y el marcador.
INPUT:
  Player: Piedra
  Computer: Tijeras
EXPECTED OUTPUT:
  Texto "¡Ganaste!", ícono de la computadora con la jugada Tijeras y marcador en Jugador 1, Computadora 0, Empates 0.
POST-CONDITIONS:
  playerWins aumenta en 1 y los otros dos contadores siguen en 0.
```

```text
Test Case
ID: STC-005
NAME: Papel contra Piedra, gana el jugador
SCENARIO:
  GIVEN el jugador elige Papel
  AND la computadora elige Piedra
  WHEN el jugador presiona el botón Papel
  THEN se muestra el texto "¡Ganaste!"
  AND se muestra el ícono de la computadora con la jugada Piedra
  AND el marcador queda en Jugador 1, Computadora 0, Empates 0
PRECONDITIONS: Pantalla recién abierta, marcador en 0, 0 y 0, sin texto de resultado.
STEPS:
  1. Presionar el botón Papel.
  2. Leer el ícono de la computadora, el texto de resultado y el marcador.
INPUT:
  Player: Papel
  Computer: Piedra
EXPECTED OUTPUT:
  Texto "¡Ganaste!", ícono de la computadora con la jugada Piedra y marcador en Jugador 1, Computadora 0, Empates 0.
POST-CONDITIONS:
  playerWins aumenta en 1 y los otros dos contadores siguen en 0.
```

```text
Test Case
ID: STC-006
NAME: Papel contra Papel, hay empate
SCENARIO:
  GIVEN el jugador elige Papel
  AND la computadora elige Papel
  WHEN el jugador presiona el botón Papel
  THEN se muestra el texto "Empate"
  AND se muestra el ícono de la computadora con la jugada Papel
  AND el marcador queda en Jugador 0, Computadora 0, Empates 1
PRECONDITIONS: Pantalla recién abierta, marcador en 0, 0 y 0, sin texto de resultado.
STEPS:
  1. Presionar el botón Papel.
  2. Leer el ícono de la computadora, el texto de resultado y el marcador.
INPUT:
  Player: Papel
  Computer: Papel
EXPECTED OUTPUT:
  Texto "Empate", ícono de la computadora con la jugada Papel y marcador en Jugador 0, Computadora 0, Empates 1.
POST-CONDITIONS:
  ties aumenta en 1 y los otros dos contadores siguen en 0.
```

```text
Test Case
ID: STC-007
NAME: Papel contra Tijeras, gana la computadora
SCENARIO:
  GIVEN el jugador elige Papel
  AND la computadora elige Tijeras
  WHEN el jugador presiona el botón Papel
  THEN se muestra el texto "Ganó la compu"
  AND se muestra el ícono de la computadora con la jugada Tijeras
  AND el marcador queda en Jugador 0, Computadora 1, Empates 0
PRECONDITIONS: Pantalla recién abierta, marcador en 0, 0 y 0, sin texto de resultado.
STEPS:
  1. Presionar el botón Papel.
  2. Leer el ícono de la computadora, el texto de resultado y el marcador.
INPUT:
  Player: Papel
  Computer: Tijeras
EXPECTED OUTPUT:
  Texto "Ganó la compu", ícono de la computadora con la jugada Tijeras y marcador en Jugador 0, Computadora 1, Empates 0.
POST-CONDITIONS:
  computerWins aumenta en 1 y los otros dos contadores siguen en 0.
```

```text
Test Case
ID: STC-008
NAME: Tijeras contra Piedra, gana la computadora
SCENARIO:
  GIVEN el jugador elige Tijeras
  AND la computadora elige Piedra
  WHEN el jugador presiona el botón Tijeras
  THEN se muestra el texto "Ganó la compu"
  AND se muestra el ícono de la computadora con la jugada Piedra
  AND el marcador queda en Jugador 0, Computadora 1, Empates 0
PRECONDITIONS: Pantalla recién abierta, marcador en 0, 0 y 0, sin texto de resultado.
STEPS:
  1. Presionar el botón Tijeras.
  2. Leer el ícono de la computadora, el texto de resultado y el marcador.
INPUT:
  Player: Tijeras
  Computer: Piedra
EXPECTED OUTPUT:
  Texto "Ganó la compu", ícono de la computadora con la jugada Piedra y marcador en Jugador 0, Computadora 1, Empates 0.
POST-CONDITIONS:
  computerWins aumenta en 1 y los otros dos contadores siguen en 0.
```

```text
Test Case
ID: STC-009
NAME: Tijeras contra Papel, gana el jugador
SCENARIO:
  GIVEN el jugador elige Tijeras
  AND la computadora elige Papel
  WHEN el jugador presiona el botón Tijeras
  THEN se muestra el texto "¡Ganaste!"
  AND se muestra el ícono de la computadora con la jugada Papel
  AND el marcador queda en Jugador 1, Computadora 0, Empates 0
PRECONDITIONS: Pantalla recién abierta, marcador en 0, 0 y 0, sin texto de resultado.
STEPS:
  1. Presionar el botón Tijeras.
  2. Leer el ícono de la computadora, el texto de resultado y el marcador.
INPUT:
  Player: Tijeras
  Computer: Papel
EXPECTED OUTPUT:
  Texto "¡Ganaste!", ícono de la computadora con la jugada Papel y marcador en Jugador 1, Computadora 0, Empates 0.
POST-CONDITIONS:
  playerWins aumenta en 1 y los otros dos contadores siguen en 0.
```

```text
Test Case
ID: STC-010
NAME: Tijeras contra Tijeras, hay empate
SCENARIO:
  GIVEN el jugador elige Tijeras
  AND la computadora elige Tijeras
  WHEN el jugador presiona el botón Tijeras
  THEN se muestra el texto "Empate"
  AND se muestra el ícono de la computadora con la jugada Tijeras
  AND el marcador queda en Jugador 0, Computadora 0, Empates 1
PRECONDITIONS: Pantalla recién abierta, marcador en 0, 0 y 0, sin texto de resultado.
STEPS:
  1. Presionar el botón Tijeras.
  2. Leer el ícono de la computadora, el texto de resultado y el marcador.
INPUT:
  Player: Tijeras
  Computer: Tijeras
EXPECTED OUTPUT:
  Texto "Empate", ícono de la computadora con la jugada Tijeras y marcador en Jugador 0, Computadora 0, Empates 1.
POST-CONDITIONS:
  ties aumenta en 1 y los otros dos contadores siguen en 0.
```

```text
Test Case
ID: STC-011
NAME: Acumulación mixta del marcador en cuatro rondas
SCENARIO:
  GIVEN la app recién abierta con el marcador en 0, 0 y 0
  AND la computadora juega Tijeras, Papel, Papel y Papel en ese orden
  WHEN el jugador presiona Piedra, Piedra, Papel y Tijeras en ese orden
  THEN tras cada ronda el marcador acumula el resultado: 1-0-0, 1-1-0, 1-1-1 y 2-1-1
  AND al final se muestra "¡Ganaste!" y el ícono de la computadora con la jugada Papel
  AND los tres contadores cambian de forma independiente, sin afectarse entre sí
PRECONDITIONS: Pantalla recién abierta, marcador en 0, 0 y 0.
STEPS:
  1. Presionar Piedra (gana el jugador). El marcador debe quedar en 1-0-0.
  2. Presionar Piedra (gana la computadora). El marcador debe quedar en 1-1-0.
  3. Presionar Papel (empate). El marcador debe quedar en 1-1-1.
  4. Presionar Tijeras (gana el jugador). El marcador debe quedar en 2-1-1.
INPUT:
  Player: Piedra, Piedra, Papel, Tijeras (una por ronda)
  Computer: Tijeras, Papel, Papel, Papel (una por ronda)
EXPECTED OUTPUT:
  Marcador final: Jugador 2, Computadora 1, Empates 1, con el texto "¡Ganaste!" y el ícono de Papel.
POST-CONDITIONS:
  playerWins = 2, computerWins = 1, ties = 1.
```

```text
Test Case
ID: STC-012
NAME: Racha de tres victorias seguidas del jugador
SCENARIO:
  GIVEN la app recién abierta con el marcador en 0, 0 y 0
  AND la computadora juega Piedra en las tres rondas
  WHEN el jugador presiona Papel tres veces seguidas
  THEN el contador del jugador sube en cada ronda hasta llegar a 3
  AND se muestra "¡Ganaste!" y el ícono de la computadora con la jugada Piedra
  AND los contadores de la computadora y de empates siguen en 0
PRECONDITIONS: Pantalla recién abierta, marcador en 0, 0 y 0.
STEPS:
  1. Presionar Papel.
  2. Presionar Papel otra vez.
  3. Presionar Papel una tercera vez.
INPUT:
  Player: Papel, Papel, Papel (una por ronda)
  Computer: Piedra, Piedra, Piedra (una por ronda)
EXPECTED OUTPUT:
  Marcador final: Jugador 3, Computadora 0, Empates 0, con el texto "¡Ganaste!" y el ícono de Piedra.
POST-CONDITIONS:
  playerWins = 3, computerWins = 0, ties = 0.
```

```text
Test Case
ID: STC-013
NAME: El ícono y el texto se reemplazan en cada ronda
SCENARIO:
  GIVEN la app recién abierta con el marcador en 0, 0 y 0
  AND la computadora juega Tijeras, Papel, Papel y Piedra en ese orden
  WHEN el jugador presiona Piedra, Piedra, Papel y Tijeras en ese orden
  THEN después de cada ronda el ícono y el texto corresponden solo a la ronda más reciente: Tijeras con "¡Ganaste!", Papel con "Ganó la compu", Papel con "Empate" y Piedra con "Ganó la compu"
  AND en pantalla hay un solo texto de resultado a la vez
  AND no queda ningún ícono ni texto de rondas anteriores
PRECONDITIONS: Pantalla recién abierta, marcador en 0, 0 y 0.
STEPS:
  1. Presionar Piedra y verificar ícono de Tijeras y "¡Ganaste!".
  2. Presionar Piedra y verificar ícono de Papel y "Ganó la compu".
  3. Presionar Papel y verificar ícono de Papel y "Empate".
  4. Presionar Tijeras y verificar ícono de Piedra y "Ganó la compu".
INPUT:
  Player: Piedra, Piedra, Papel, Tijeras (una por ronda)
  Computer: Tijeras, Papel, Papel, Piedra (una por ronda)
EXPECTED OUTPUT:
  Después de cada ronda se ve solo el ícono y el texto de esa ronda. Al final: ícono de Piedra y "Ganó la compu".
POST-CONDITIONS:
  Marcador final: Jugador 1, Computadora 2, Empates 1.
```
