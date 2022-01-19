window.addEventListener("load", () => {
  let foratOnFasClick;
  let column;
  let fila = 0;
  let linia;
  let countD;

  const filesTaulell = [
    [36, 37, 38, 39, 40, 41, 42],
    [29, 30, 31, 32, 33, 34, 35],
    [22, 23, 24, 25, 26, 27, 28],
    [15, 16, 17, 18, 19, 20, 21],
    [8, 9, 10, 11, 12, 13, 14],
    [1, 2, 3, 4, 5, 6, 7],
  ];

  const hole = document.querySelectorAll(".hole");
  const play = document.getElementById("two-player");
  const cpu = document.getElementById("one-player");

  const players = [
    {
      player: 1,
      style: "rgb(42, 59, 209)",
    },
    {
      player: 2,
      style: "rgb(180, 45, 21)",
    },
  ];

  let currentPlayer;
  const playerCPU = [
    {
      player: 1,
      style: "rgb(42, 59, 209)",
    },
    {
      player: 2,
      style: "rgb(180, 45, 21)",
    },
  ];

  function changePlayer(player, objPlayer) {
    if (player === objPlayer[0]) {
      player = objPlayer[1];
    } else if (player === objPlayer[1]) {
      player = objPlayer[0];
    }
    console.log(player);
    return player;
  }

  function comprovar4enColumna(taulell, player, objJugador, column) {
    let count = 0;
    if (player === objJugador[0]) {
      for (let i = 0; i < taulell.length; i++) {
        if (taulell[i][column] === "X") {
          count += 1;
          if (count === 4) {
            return true;
          }
        } else if (taulell[i][column] !== "X") {
          count = 0;
        }
      }
      return false;
    }
    if (player === objJugador[1]) {
      for (let i = 0; i < taulell.length; i++) {
        if (taulell[i][column] === "Y") {
          count += 1;
          if (count === 4) {
            return true;
          }
        } else if (taulell[i][column] !== "Y") {
          count = 0;
        }
      }
      return false;
    }
  }

  function chooseSheetPlayer(player, objJugador) {
    if (player === objJugador[0]) {
      return "X";
    }
    return "Y";
  }

  function getColumn(taulell, forat) {
    column = (forat - 1) % (taulell.length + 1);
    return column;
  }
  function getFila(taulell, column) {
    for (let i = 0; i < taulell.length; i++) {
      if (taulell[i][column] === "X" || taulell[i][column] === "Y") {
        fila = i + 1;
        if (fila >= taulell.length) {
          fila = taulell.length;
          Window.alert("columna llena");
        }
      } else if (
        i === 0 &&
        (taulell[i][column] !== "X" || taulell[i][column] !== "Y")
      ) {
        fila = 0;
      }
    }
    return fila;
  }
  function playNewTurnCPU(taulell, jugador, objJugador) {
    hole.forEach((hole) => {
      hole.addEventListener("click", () => {
        foratOnFasClick = parseInt(hole.getAttribute("value"));
        const columnOk = comprovarColumnaCorrecte(
          foratOnFasClick,
          taulell,
          jugador,
          objJugador
        );
        if (columnOk) {
          linia = checkLinia(taulell, jugador, objJugador, fila, column);
          if (linia) {
            if (objJugador[0]) {
              Window.alert(`${objJugador[0][0]} you win`);
            } else {
              Window.alert(`CPU wins`);
            }
          } else {
            playCPU(taulell, jugador, objJugador);
          }
        }
      });
    });
  }
  function comprovar4enLinia(taulell, player, objJugador, row) {
    let count = 0;
    if (player === objJugador[0]) {
      for (let j = 0; j < taulell[row].length; j++) {
        if (taulell[row][j] === "X") {
          count += 1;
          if (count === 4) {
            return true;
          }
        } else if (taulell[row][j] !== "X") {
          count = 0;
        }
      }
      return false;
    }
    if (player === objJugador[1]) {
      for (let j = 0; j < taulell[row].length; j++) {
        if (taulell[row][j] === "Y") {
          count += 1;
          if (count === 4) {
            return true;
          }
        } else if (taulell[row][j] !== "Y") {
          count = 0;
        }
      }
      return false;
    }
  }

  function comprovar4enDiagonal(taulell, player, objJugador, row, column) {
    const diagonal1 = comprovar4enDiagonal1(
      taulell,
      player,
      objJugador,
      row,
      column
    );
    const diagonal2 = comprovar4enDiagonal2(
      taulell,
      player,
      objJugador,
      row,
      column
    );
    if (diagonal1 || diagonal2) {
      return true;
    }
    return false;
  }

  function comprovar4enDiagonal1(taulell, player, objJugador, row, column) {
    countD = 0;
    let i = row - row;
    const j = column - row;
    if (i < 0 || j < 0) {
      return false;
    }
    if (player === objJugador[0]) {
      for (i; i < taulell.length; i++) {
        const d = i + j;
        if (taulell[i][d] === "X") {
          countD += 1;
          if (countD === 4) {
            return true;
          }
        } else if (taulell[i][d] !== "X") {
          countD = 0;
        }
      }
      return false;
    }
    if (player === objJugador[1]) {
      for (i; i < taulell.length; i++) {
        const d = i + j;
        if (taulell[i][d] === "Y") {
          countD += 1;
          if (countD === 4) {
            return true;
          }
        } else if (taulell[i][d] !== "Y") {
          countD = 0;
        }
      }
      return false;
    }
  }

  function comprovar4enDiagonal2(taulell, player, objJugador, row, column) {
    let count = 0;
    let i = row - row;
    const j = column + row;

    if (i < 0 || j < 0) {
      return false;
    }
    if (player === objJugador[0]) {
      for (i; i < taulell.length; i++) {
        const d = j - i;
        if (taulell[i][d] === "X") {
          count += 1;
          if (count === 4) {
            return true;
          }
        } else {
          count = 0;
        }
      }
      return false;
    }
    if (player === objJugador[1]) {
      for (i; i < taulell.length; i++) {
        const d = j - i;
        if (taulell[i][d] === "Y") {
          count += 1;
          if (count === 4) {
            return true;
          }
        } else {
          count = 0;
        }
      }
      return false;
    }
  }

  function comprovarColumnaCorrecte(forat, taulell, player, objJugador) {
    column = getColumn(taulell, forat);
    fila = getFila(taulell, column);

    for (let i = fila; i < taulell.length; i++) {
      if (
        i === 0 ||
        (taulell[i][column] !== "X" && taulell[i][column] !== "Y")
      ) {
        document.getElementById(taulell[fila][column]).style.backgroundColor =
          player.style;
        taulell[i][column] = chooseSheetPlayer(player, objJugador);
      } else if (
        taulell[fila][column] === "X" ||
        taulell[fila][column] === "Y"
      ) {
        document.getElementById(taulell[fila][column]).style.backgroundColor =
          player.style;
        taulell[fila][column] = chooseSheetPlayer(player, objJugador);
      }
      return true;
    }
  }
  function checkLinia(taulell, player, objJugador, row, column) {
    const connectaColumn = comprovar4enColumna(
      taulell,
      player,
      objJugador,
      column
    );
    const connectaFila = comprovar4enLinia(taulell, player, objJugador, row);
    const connectaDiagonal = comprovar4enDiagonal(
      taulell,
      player,
      objJugador,
      row,
      column
    );

    if (connectaFila || connectaColumn || connectaDiagonal) {
      return true;
    }
    return false;
  }

  function clickHole(taulell, jugador, objJugador) {
    hole.forEach((holes) => {
      holes.addEventListener("click", () => {
        foratOnFasClick = parseInt(hole.getAttribute("value"));
        const columnOk = comprovarColumnaCorrecte(
          foratOnFasClick,
          taulell,
          jugador,
          objJugador
        );
        if (columnOk) {
          linia = checkLinia(taulell, jugador, objJugador, fila, column);
          if (linia) {
            if (objJugador[0]) {
              Window.alert(`${objJugador[0]} you win`);
            } else {
              Window.alert(`${objJugador[1]} you win`);
            }
          } else {
            jugador = changePlayer(jugador, objJugador);
            // shadowSheet(taulell,jugador,objJugador)
          }
        }
      });
    });
  }

  function playNewTurn(taulell, jugador, objJugador) {
    clickHole(taulell, jugador, objJugador);
  }

  play.addEventListener("click", () => {
    currentPlayer = players[0];
    playNewTurn(filesTaulell, currentPlayer, players);
  });

  cpu.addEventListener("click", () => {
    currentPlayer = playerCPU[0];
    playNewTurnCPU(filesTaulell, currentPlayer, playerCPU);
  });

  // las funciones para acabar el juego no funcionan al 100%
  /*  end.addEventListener('click', () => {
         alert('End Game')
         endGame()
 
     })
      */
  /* function endGame() {
        filesTaulell = [[36, 37, 38, 39, 40, 41, 42], [29, 30, 31, 32, 33, 34, 35], [22, 23, 24, 25, 26, 27, 28], [15, 16, 17, 18, 19, 20, 21], [8, 9, 10, 11, 12, 13, 14], [1, 2, 3, 4, 5, 6, 7]]
        for (let i = 0; i < filesTaulell.length; i++) {
            for (let j = 0; j < filesTaulell[i].length; j++) {
                document.getElementById(filesTaulell[i][j]).style.backgroundColor = 'rgb(247, 248, 237)';
                alert('If you want play again click an option')
            }
        }

    } */

  // Aqui intento hacer que se marque la donde puede caer la ficha (tipo hover)

  /* function shadowSheet(taulell, jugador, objJugador) {
        hole.forEach(hole => {
            hole.addEventListener('mouseover', () => {
                let possibleForat = parseInt(hole.getAttribute('value'));
                onCauralaFitxa(possibleForat, taulell, jugador)
            })

        })
    } */

  /*  function onCauralaFitxa(forat, taulell, player) {
         column = getColumn(taulell, forat)
         fila = getFila(taulell, column)
         for (let i = fila; i < taulell.length; i++) {
             if (i === 0 || (taulell[i][column] !== "X" && taulell[i][column] !== "Y")) {
                 document.getElementById(taulell[i][column]).style.backgroundColor = player.style;
                 document.getElementById(taulell[i][column-1]).style.backgroundColor = 'rgb(247, 248, 237)';
                 document.getElementById(taulell[i][column+1]).style.backgroundColor = 'rgb(247, 248, 237)';
                 document.getElementById(taulell[i-1][column]).style.backgroundColor = 'rgb(247, 248, 237)';
             } else if (taulell[fila][column] === "X" || taulell[fila][column] === "Y") {
                 document.getElementById(taulell[fila][column]).style.backgroundColor = player.style;
                 document.getElementById(taulell[fila][column-1]).style.backgroundColor = 'rgb(247, 248, 237)';
                 document.getElementById(taulell[fila][column+1]).style.backgroundColor = 'rgb(247, 248, 237)';
             }
            
         }
     } */

  function playNewTurnCPU(taulell, jugador, objJugador) {
    hole.forEach((hole) => {
      hole.addEventListener("click", () => {
        foratOnFasClick = parseInt(hole.getAttribute("value"));
        const columnOk = comprovarColumnaCorrecte(
          foratOnFasClick,
          taulell,
          jugador,
          objJugador
        );
        if (columnOk) {
          linia = checkLinia(taulell, jugador, objJugador, fila, column);
          if (linia) {
            if (objJugador[0]) {
              Window.alert(`${objJugador[0][0]} you win`);
            } else {
              Window.alert(`CPU wins`);
            }
          } else {
            playCPU(taulell, jugador, objJugador);
          }
        }
      });
    });
  }

  function playCPU(taulell, jugador, objJugador) {
    if ((jugador = objJugador[0])) {
      jugador = objJugador[1];
    }
    const columnaCPUOk = columnaOKCPU(taulell);
    if (columnaCPUOk) {
      linia = checkLinia(taulell, jugador, objJugador, fila, column);
      if (linia) {
        if (objJugador[0]) {
          Window.alert(`${objJugador[0]} you win`);
        } else {
          Window.alert(`CPU wins`);
        }
      }
    }
  }

  function columnaOKCPU(taulell) {
    column = parseInt(Math.random() * (7 - 0) + 0);
    fila = getFila(taulell, column);
    for (let i = fila; i < taulell.length; i++) {
      if (
        i === 0 ||
        (taulell[i][column] !== "X" && taulell[i][column] !== "Y")
      ) {
        document.getElementById(taulell[i][column]).style.backgroundColor =
          "rgb(180, 45, 21)";
        taulell[i][column] = "Y";
      } else if (
        taulell[fila][column] === "X" ||
        taulell[fila][column] === "Y"
      ) {
        document.getElementById(taulell[fila][column]).style.backgroundColor =
          "rgb(180, 45, 21)";
        taulell[fila][column] = "Y";
      }
      return true;
    }
  }
});
