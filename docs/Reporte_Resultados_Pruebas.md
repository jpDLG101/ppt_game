# Reporte de Resultados de Pruebas de Sistema

## 1. Resumen de resultados

| Concepto | Resultado |
|---|---|
| Casos de sistema ejecutados | 13 |
| Casos de sistema aprobados | 13 |
| Casos de sistema fallidos | 0 |
| Total de la suite, con las 13 pruebas unitarias existentes | 26 de 26 aprobadas |

## 2. Test Log

| ID | NAME | INPUT | EXPECTED OUTPUT | ACTUAL OUTPUT | P/F | COMMENTS | TYPE | SEVERITY | PRIORITY |
|---|---|---|---|---|---|---|---|---|---|
| STC-001 | Estado inicial de la app antes de jugar | Sin jugada | Ícono de interrogación, marcador 0 a 0 con Empates: 0, sin texto de resultado, y los tres botones (Piedra, Papel, Tijeras) visibles. | Ícono de interrogación, marcador 0-0-0, sin texto de resultado y tres botones visibles. | P |  |  |  |  |
| STC-002 | Piedra contra Piedra, hay empate | P: Piedra / C: Piedra | Texto "Empate", ícono de la computadora con la jugada Piedra y marcador en Jugador 0, Computadora 0, Empates 1. | "Empate", ícono de Piedra, marcador 0-0-1. | P |  |  |  |  |
| STC-003 | Piedra contra Papel, gana la computadora | P: Piedra / C: Papel | Texto "Ganó la compu", ícono de la computadora con la jugada Papel y marcador en Jugador 0, Computadora 1, Empates 0. | "Ganó la compu", ícono de Papel, marcador 0-1-0. | P |  |  |  |  |
| STC-004 | Piedra contra Tijeras, gana el jugador | P: Piedra / C: Tijeras | Texto "¡Ganaste!", ícono de la computadora con la jugada Tijeras y marcador en Jugador 1, Computadora 0, Empates 0. | "¡Ganaste!", ícono de Tijeras, marcador 1-0-0. | P |  |  |  |  |
| STC-005 | Papel contra Piedra, gana el jugador | P: Papel / C: Piedra | Texto "¡Ganaste!", ícono de la computadora con la jugada Piedra y marcador en Jugador 1, Computadora 0, Empates 0. | "¡Ganaste!", ícono de Piedra, marcador 1-0-0. | P |  |  |  |  |
| STC-006 | Papel contra Papel, hay empate | P: Papel / C: Papel | Texto "Empate", ícono de la computadora con la jugada Papel y marcador en Jugador 0, Computadora 0, Empates 1. | "Empate", ícono de Papel, marcador 0-0-1. | P |  |  |  |  |
| STC-007 | Papel contra Tijeras, gana la computadora | P: Papel / C: Tijeras | Texto "Ganó la compu", ícono de la computadora con la jugada Tijeras y marcador en Jugador 0, Computadora 1, Empates 0. | "Ganó la compu", ícono de Tijeras, marcador 0-1-0. | P |  |  |  |  |
| STC-008 | Tijeras contra Piedra, gana la computadora | P: Tijeras / C: Piedra | Texto "Ganó la compu", ícono de la computadora con la jugada Piedra y marcador en Jugador 0, Computadora 1, Empates 0. | "Ganó la compu", ícono de Piedra, marcador 0-1-0. | P |  |  |  |  |
| STC-009 | Tijeras contra Papel, gana el jugador | P: Tijeras / C: Papel | Texto "¡Ganaste!", ícono de la computadora con la jugada Papel y marcador en Jugador 1, Computadora 0, Empates 0. | "¡Ganaste!", ícono de Papel, marcador 1-0-0. | P |  |  |  |  |
| STC-010 | Tijeras contra Tijeras, hay empate | P: Tijeras / C: Tijeras | Texto "Empate", ícono de la computadora con la jugada Tijeras y marcador en Jugador 0, Computadora 0, Empates 1. | "Empate", ícono de Tijeras, marcador 0-0-1. | P |  |  |  |  |
| STC-011 | Acumulación mixta del marcador en cuatro rondas | P: Piedra, Piedra, Papel, Tijeras / C: Tijeras, Papel, Papel, Papel | Marcador final: Jugador 2, Computadora 1, Empates 1, con el texto "¡Ganaste!" y el ícono de Papel. | Marcador tras cada ronda 1-0-0, 1-1-0, 1-1-1, 2-1-1. Final: "¡Ganaste!" con ícono de Papel. | P |  |  |  |  |
| STC-012 | Racha de tres victorias seguidas del jugador | P: Papel x3 / C: Piedra x3 | Marcador final: Jugador 3, Computadora 0, Empates 0, con el texto "¡Ganaste!" y el ícono de Piedra. | Marcador final 3-0-0, "¡Ganaste!" con ícono de Piedra. | P |  |  |  |  |
| STC-013 | El ícono y el texto se reemplazan en cada ronda | P: Piedra, Piedra, Papel, Tijeras / C: Tijeras, Papel, Papel, Piedra | Después de cada ronda se ve solo el ícono y el texto de esa ronda. Al final: ícono de Piedra y "Ganó la compu". | Ícono y texto reemplazados en cada ronda, un solo texto visible. Final: ícono de Piedra y "Ganó la compu". | P |  |  |  |  |

## 3. Defectos encontrados

No se encontraron defectos en los casos de prueba, por eso las columnas de comments, severity y priority están vacías.
