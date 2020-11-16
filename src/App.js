import React, { useState } from "react";
import { Button, Container, Row, Col } from "reactstrap";
import "./App.css";

const setRandomMap = () => {
  const random = Math.floor(Math.random() * (8 - 1) + 1);
  switch (random) {
    case 1:
      return "Tanglewood Street House";
    case 2:
      return "Edgefield Street House";
    case 3:
      return "Ridgeview Road House";
    case 4:
      return "Grafton Farmhouse";
    case 5:
      return "Bleadsdale Farmhouse";
    case 6:
      return "High school";
    case 7:
      return "Asylum";
  }
};
const randomPlayerList = (players) => {
  const numberPlayer = Math.floor(Math.random() * (5 - 1) + 1);

  let playersList = {};

  for (let i = 0; i <= numberPlayer; i++) {
    const player = Math.floor(Math.random() * (5 - 1) + 1);

    switch (player) {
      case 1:
        playersList = {
          ...playersList,
          player1: { name: players.player1, items: randomItems(numberPlayer) },
        };

        break;
      case 2:
        playersList = {
          ...playersList,
          player2: { name: players.player2, items: randomItems(numberPlayer) },
        };
        break;
      case 3:
        playersList = {
          ...playersList,
          player3: { name: players.player3, items: randomItems(numberPlayer) },
        };
        break;
      case 4:
        playersList = {
          ...playersList,
          player4: { name: players.player4, items: randomItems(numberPlayer) },
        };
        break;
    }
  }
  console.log(playersList);
  return playersList;
};

const randomOneItem = () => {
  let itemsRandom = {};
  const random = Math.floor(Math.random() * (19 - 1) + 1);
  switch (random) {
    case 1:
      itemsRandom = "Spirit Box";
      break;
    case 2:
      itemsRandom = "Ghost Writing Book";
      break;
    case 3:
      itemsRandom = "Photo Camera";
      break;
    case 4:
      itemsRandom = "EMF Reader";
      break;
    case 5:
      itemsRandom = "Video Camera";
      break;
    case 6:
      itemsRandom = "UV Flashlight";
      break;
    case 7:
      itemsRandom = "Flashlight";
      break;
    case 8:
      itemsRandom = "Candle";
      break;
    case 9:
      itemsRandom = "Crucifix";
      break;
    case 10:
      itemsRandom = "Glow Stick";
      break;
    case 11:
      itemsRandom = "Infrared Light Sensor";
      break;
    case 12:
      itemsRandom = "Tripod";
      break;
    case 13:
      itemsRandom = "Motion Sensor";
      break;
    case 14:
      itemsRandom = "Parabolic Microphone";
      break;
    case 15:
      itemsRandom = "Salt Shaker";
      break;
    case 16:
      itemsRandom = "Thermometer";
      break;
    case 17:
      itemsRandom = "Smudge Sticks";
      break;
    case 18:
      itemsRandom = "Sound Sensor";
      break;
    case 19:
      itemsRandom = "Strong Flashlight";
      break;
  }
  return itemsRandom;
};

const randomItems = (numberPlayer) => {
  let itemsRandom = {};
  if (numberPlayer > 1) {
    for (let i = 0; i <= 2; i++) {
      const random = Math.floor(Math.random() * (19 - 1) + 1);
      switch (random) {
        case 1:
          itemsRandom = { ...itemsRandom, [i]: "Spirit Box" };
          break;
        case 2:
          itemsRandom = { ...itemsRandom, [i]: "Ghost Writing Book" };
          break;
        case 3:
          itemsRandom = { ...itemsRandom, [i]: "Photo Camera" };
          break;
        case 4:
          itemsRandom = { ...itemsRandom, [i]: "EMF Reader" };
          break;
        case 5:
          itemsRandom = { ...itemsRandom, [i]: "Video Camera" };
          break;
        case 6:
          itemsRandom = { ...itemsRandom, [i]: "UV Flashlight" };
          break;
        case 7:
          itemsRandom = { ...itemsRandom, [i]: "Flashlight" };
          break;
        case 8:
          itemsRandom = { ...itemsRandom, [i]: "Candle" };
          break;
        case 9:
          itemsRandom = { ...itemsRandom, [i]: "Crucifix" };
          break;
        case 10:
          itemsRandom = { ...itemsRandom, [i]: "Glow Stick" };
          break;
        case 11:
          itemsRandom = { ...itemsRandom, [i]: "Infrared Light Sensor" };
          break;
        case 12:
          itemsRandom = { ...itemsRandom, [i]: "Tripod" };
          break;
        case 13:
          itemsRandom = { ...itemsRandom, [i]: "Motion Sensor" };
          break;
        case 14:
          itemsRandom = { ...itemsRandom, [i]: "Parabolic Microphone" };
          break;
        case 15:
          itemsRandom = { ...itemsRandom, [i]: "Salt Shaker" };
          break;
        case 16:
          itemsRandom = { ...itemsRandom, [i]: "Thermometer" };
          break;
        case 17:
          itemsRandom = { ...itemsRandom, [i]: "Smudge Sticks" };
          break;
        case 18:
          itemsRandom = { ...itemsRandom, [i]: "Sound Sensor" };
          break;
        case 19:
          itemsRandom = { ...itemsRandom, [i]: "Strong Flashlight" };
          break;
      }
    }
  } else {
    for (let i = 0; i <= 4; i++) {
      const random = Math.floor(Math.random() * (19 - 1) + 1);
      switch (random) {
        case 1:
          itemsRandom = { ...itemsRandom, [i]: "Spirit Box" };
          break;
        case 2:
          itemsRandom = { ...itemsRandom, [i]: "Ghost Writing Book" };
          break;
        case 3:
          itemsRandom = { ...itemsRandom, [i]: "Photo Camera" };
          break;
        case 4:
          itemsRandom = { ...itemsRandom, [i]: "EMF Reader" };
          break;
        case 5:
          itemsRandom = { ...itemsRandom, [i]: "Video Camera" };
          break;
        case 6:
          itemsRandom = { ...itemsRandom, [i]: "UV Flashlight" };
          break;
        case 7:
          itemsRandom = { ...itemsRandom, [i]: "Flashlight" };
          break;
        case 8:
          itemsRandom = { ...itemsRandom, [i]: "Candle" };
          break;
        case 9:
          itemsRandom = { ...itemsRandom, [i]: "Crucifix" };
          break;
        case 10:
          itemsRandom = { ...itemsRandom, [i]: "Glow Stick" };
          break;
        case 11:
          itemsRandom = { ...itemsRandom, [i]: "Infrared Light Sensor" };
          break;
        case 12:
          itemsRandom = { ...itemsRandom, [i]: "Tripod" };
          break;
        case 13:
          itemsRandom = { ...itemsRandom, [i]: "Motion Sensor" };
          break;
        case 14:
          itemsRandom = { ...itemsRandom, [i]: "Parabolic Microphone" };
          break;
        case 15:
          itemsRandom = { ...itemsRandom, [i]: "Salt Shaker" };
          break;
        case 16:
          itemsRandom = { ...itemsRandom, [i]: "Thermometer" };
          break;
        case 17:
          itemsRandom = { ...itemsRandom, [i]: "Smudge Sticks" };
          break;
        case 18:
          itemsRandom = { ...itemsRandom, [i]: "Sound Sensor" };
          break;
        case 19:
          itemsRandom = { ...itemsRandom, [i]: "Strong Flashlight" };
          break;
      }
    }
  }

  return itemsRandom;
};

function App() {
  const [map, setMap] = useState("");
  const [players, setPlayers] = useState({});
  const [playersSelect, setPlayersSelect] = useState({});
  const [modStream, setModStream] = useState("black");

  const onChange = (name, value) => {
    setPlayers({ ...players, [name]: value });
  };

  const styleContainer = {
    height: "100vh",
    width: "100vw",
    backgroundColor: modStream,
  };

  return (
    <Container fluid={true} style={styleContainer} className="App">
      <Row className="align-items-start justify-content-center ">
        <Col xs="12" className="align-self-center">
          <label className="margeR">
            Player 1 :
            <input
              className="input"
              type="text"
              value={players.player1}
              onChange={(event) => {
                event.preventDefault();
                onChange("player1", event.target.value);
              }}
            />
          </label>
          <label className="margeR">
            Player 2 :
            <input
              className="input"
              type="text"
              value={players.player2}
              onChange={(event) => {
                event.preventDefault();
                onChange("player2", event.target.value);
              }}
            />
          </label>
          <label className="margeR">
            Player 3 :
            <input
              className="input"
              type="text"
              value={players.player3}
              onChange={(event) => {
                event.preventDefault();
                onChange("player3", event.target.value);
              }}
            />
          </label>
          <label className="margeR">
            Player 4 :
            <input
              className="input"
              type="text"
              value={players.player4}
              onChange={(event) => {
                event.preventDefault();
                onChange("player4", event.target.value);
              }}
            />
          </label>
          <Row className="align-items-center justify-content-center">
            <Col xs="12">
              <Button color="info" onClick={() => setMap(setRandomMap())}>
                Set Map
              </Button>
              <Button
                color="info"
                onClick={() => {
                  setPlayersSelect({});
                  setPlayersSelect(randomPlayerList(players));
                }}
              >
                Randomazer !
              </Button>
              <Button
                color="info"
                onClick={() => {
                  if (modStream === "black") {
                    return setModStream("rgb(0, 250, 0");
                  } else {
                    return setModStream("black");
                  }
                }}
              >
                stream
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col
          xs="12"
          className="align-self-center"
          style={{ marginTop: "10px" }}
        >
          <h2>{map}</h2>
        </Col>
        <Col>
          {playersSelect.player1 && (
            <Row style={{ marginBottom: "1em" }}>
              <Col xs="2">
                <b>{playersSelect.player1.name}</b>
              </Col>
              <Col xs="10">
                <Row>
                  <Col xs="3">
                    <b>- {playersSelect.player1.items[0]}</b>
                  </Col>
                  <Col>
                    <img
                      src="refresh.svg"
                      style={{ width: "15px", height: "15px" }}
                      onClick={() => {
                        const items = {
                          ...playersSelect,
                          player1: {
                            name: playersSelect.player1.name,
                            items: {
                              ...playersSelect.player1.items,
                              0: randomOneItem(),
                            },
                          },
                        };
                        setPlayersSelect(items);
                      }}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col xs="3">
                    <b>- {playersSelect.player1.items[1]}</b>
                  </Col>
                  <Col>
                    <img
                      src="refresh.svg"
                      style={{ width: "15px", height: "15px" }}
                      onClick={() => {
                        const items = {
                          ...playersSelect,
                          player1: {
                            name: playersSelect.player1.name,
                            items: {
                              ...playersSelect.player1.items,
                              1: randomOneItem(),
                            },
                          },
                        };
                        setPlayersSelect(items);
                      }}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col xs="3">
                    <b>- {playersSelect.player1.items[2]}</b>
                  </Col>
                  <Col>
                    <img
                      src="refresh.svg"
                      style={{ width: "15px", height: "15px" }}
                      onClick={() => {
                        const items = {
                          ...playersSelect,
                          player1: {
                            name: playersSelect.player1.name,
                            items: {
                              ...playersSelect.player1.items,
                              2: randomOneItem(),
                            },
                          },
                        };
                        setPlayersSelect(items);
                      }}
                    />
                  </Col>
                </Row>
                {Object.getOwnPropertyNames(playersSelect).length <= 1 && (
                  <div>
                    <Row>
                      <Col xs="3">
                        <b>- {playersSelect.player1.items[3]}</b>
                      </Col>
                      <Col>
                        <img
                          src="refresh.svg"
                          style={{ width: "15px", height: "15px" }}
                          onClick={() => {
                            const items = {
                              ...playersSelect,
                              player1: {
                                name: playersSelect.player1.name,
                                items: {
                                  ...playersSelect.player1.items,
                                  3: randomOneItem(),
                                },
                              },
                            };
                            setPlayersSelect(items);
                          }}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col xs="3">
                        <b>- {playersSelect.player1.items[4]}</b>
                      </Col>
                      <Col>
                        <img
                          src="refresh.svg"
                          style={{ width: "15px", height: "15px" }}
                          onClick={() => {
                            const items = {
                              ...playersSelect,
                              player1: {
                                name: playersSelect.player1.name,
                                items: {
                                  ...playersSelect.player1.items,
                                  4: randomOneItem(),
                                },
                              },
                            };
                            setPlayersSelect(items);
                          }}
                        />
                      </Col>
                    </Row>
                  </div>
                )}
              </Col>
            </Row>
          )}
          {playersSelect.player2 && (
            <Row style={{ marginBottom: "1em" }}>
              <Col xs="2">
                <b>{playersSelect.player2.name}</b>
              </Col>
              <Col xs="10">
                <Row>
                  <Col xs="3">
                    <b>- {playersSelect.player2.items[0]}</b>
                  </Col>
                  <Col>
                    <img
                      src="refresh.svg"
                      style={{ width: "15px", height: "15px" }}
                      onClick={() => {
                        const items = {
                          ...playersSelect,
                          player2: {
                            name: playersSelect.player2.name,
                            items: {
                              ...playersSelect.player2.items,
                              0: randomOneItem(),
                            },
                          },
                        };
                        setPlayersSelect(items);
                      }}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col xs="3">
                    <b>- {playersSelect.player2.items[1]}</b>
                  </Col>
                  <Col>
                    <img
                      src="refresh.svg"
                      style={{ width: "15px", height: "15px" }}
                      onClick={() => {
                        const items = {
                          ...playersSelect,
                          player2: {
                            name: playersSelect.player2.name,
                            items: {
                              ...playersSelect.player2.items,
                              1: randomOneItem(),
                            },
                          },
                        };
                        setPlayersSelect(items);
                      }}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col xs="3">
                    <b>- {playersSelect.player2.items[2]}</b>
                  </Col>
                  <Col>
                    <img
                      src="refresh.svg"
                      style={{ width: "15px", height: "15px" }}
                      onClick={() => {
                        const items = {
                          ...playersSelect,
                          player2: {
                            name: playersSelect.player2.name,
                            items: {
                              ...playersSelect.player2.items,
                              2: randomOneItem(),
                            },
                          },
                        };
                        setPlayersSelect(items);
                      }}
                    />
                  </Col>
                </Row>
              </Col>
              {Object.getOwnPropertyNames(playersSelect).length <= 1 && (
                <div>
                  <Row>
                    <Col xs="3">
                      <b>- {playersSelect.player2.items[3]}</b>
                    </Col>
                    <Col>
                      <img
                        src="refresh.svg"
                        style={{ width: "15px", height: "15px" }}
                        onClick={() => {
                          const items = {
                            ...playersSelect,
                            player2: {
                              name: playersSelect.player2.name,
                              items: {
                                ...playersSelect.player2.items,
                                3: randomOneItem(),
                              },
                            },
                          };
                          setPlayersSelect(items);
                        }}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="3">
                      <b>- {playersSelect.player2.items[4]}</b>
                    </Col>
                    <Col>
                      <img
                        src="refresh.svg"
                        style={{ width: "15px", height: "15px" }}
                        onClick={() => {
                          const items = {
                            ...playersSelect,
                            player2: {
                              name: playersSelect.player2.name,
                              items: {
                                ...playersSelect.player2.items,
                                4: randomOneItem(),
                              },
                            },
                          };
                          setPlayersSelect(items);
                        }}
                      />
                    </Col>
                  </Row>
                </div>
              )}
            </Row>
          )}
          {playersSelect.player3 && (
            <Row style={{ marginBottom: "1em" }}>
              <Col xs="2">
                <b>{playersSelect.player3.name}</b>
              </Col>
              <Col xs="10">
                <Row>
                  <Col xs="3">
                    <b>- {playersSelect.player3.items[0]}</b>
                  </Col>
                  <Col>
                    <img
                      src="refresh.svg"
                      style={{ width: "15px", height: "15px" }}
                      onClick={() => {
                        const items = {
                          ...playersSelect,
                          player3: {
                            name: playersSelect.player3.name,
                            items: {
                              ...playersSelect.player3.items,
                              0: randomOneItem(),
                            },
                          },
                        };
                        setPlayersSelect(items);
                      }}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col xs="3">
                    <b>- {playersSelect.player3.items[1]}</b>
                  </Col>
                  <Col>
                    <img
                      src="refresh.svg"
                      style={{ width: "15px", height: "15px" }}
                      onClick={() => {
                        const items = {
                          ...playersSelect,
                          player3: {
                            name: playersSelect.player3.name,
                            items: {
                              ...playersSelect.player3.items,
                              1: randomOneItem(),
                            },
                          },
                        };
                        setPlayersSelect(items);
                      }}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col xs="3">
                    <b>- {playersSelect.player3.items[2]}</b>
                  </Col>
                  <Col>
                    <img
                      src="refresh.svg"
                      style={{ width: "15px", height: "15px" }}
                      onClick={() => {
                        const items = {
                          ...playersSelect,
                          player3: {
                            name: playersSelect.player3.name,
                            items: {
                              ...playersSelect.player3.items,
                              2: randomOneItem(),
                            },
                          },
                        };
                        setPlayersSelect(items);
                      }}
                    />
                  </Col>
                </Row>
                {Object.getOwnPropertyNames(playersSelect).length <= 1 && (
                  <div>
                    <Row>
                      <Col xs="3">
                        <b>- {playersSelect.player3.items[3]}</b>
                      </Col>
                      <Col>
                        <img
                          src="refresh.svg"
                          style={{ width: "15px", height: "15px" }}
                          onClick={() => {
                            const items = {
                              ...playersSelect,
                              player3: {
                                name: playersSelect.player3.name,
                                items: {
                                  ...playersSelect.player3.items,
                                  3: randomOneItem(),
                                },
                              },
                            };
                            setPlayersSelect(items);
                          }}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col xs="3">
                        <b>- {playersSelect.player3.items[4]}</b>
                      </Col>
                      <Col>
                        <img
                          src="refresh.svg"
                          style={{ width: "15px", height: "15px" }}
                          onClick={() => {
                            const items = {
                              ...playersSelect,
                              player3: {
                                name: playersSelect.player3.name,
                                items: {
                                  ...playersSelect.player3.items,
                                  4: randomOneItem(),
                                },
                              },
                            };
                            setPlayersSelect(items);
                          }}
                        />
                      </Col>
                    </Row>
                  </div>
                )}
              </Col>
            </Row>
          )}
          {playersSelect.player4 && (
            <Row
              style={{ marginBottom: "1em" }}
              style={{ marginBottom: "20px" }}
            >
              <Col xs="2">
                <b>{playersSelect.player4.name}</b>
              </Col>
              <Col xs="10">
                <Row>
                  <Col xs="3">
                    <b>- {playersSelect.player4.items[0]}</b>
                  </Col>
                  <Col>
                    <img
                      src="refresh.svg"
                      style={{ width: "15px", height: "15px" }}
                      onClick={() => {
                        const items = {
                          ...playersSelect,
                          player4: {
                            name: playersSelect.player4.name,
                            items: {
                              ...playersSelect.player4.items,
                              0: randomOneItem(),
                            },
                          },
                        };
                        setPlayersSelect(items);
                      }}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col xs="3">
                    <b>- {playersSelect.player4.items[1]}</b>
                  </Col>
                  <Col>
                    <img
                      src="refresh.svg"
                      style={{ width: "15px", height: "15px" }}
                      onClick={() => {
                        const items = {
                          ...playersSelect,
                          player4: {
                            name: playersSelect.player4.name,
                            items: {
                              ...playersSelect.player4.items,
                              1: randomOneItem(),
                            },
                          },
                        };
                        setPlayersSelect(items);
                      }}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col xs="3">
                    <b>- {playersSelect.player4.items[2]}</b>
                  </Col>
                  <Col>
                    <img
                      src="refresh.svg"
                      style={{ width: "15px", height: "15px" }}
                      onClick={() => {
                        const items = {
                          ...playersSelect,
                          player4: {
                            name: playersSelect.player4.name,
                            items: {
                              ...playersSelect.player4.items,
                              2: randomOneItem(),
                            },
                          },
                        };
                        setPlayersSelect(items);
                      }}
                    />
                  </Col>
                </Row>
                {Object.getOwnPropertyNames(playersSelect).length <= 1 && (
                  <div>
                    <Row>
                      <Col xs="3">
                        <b>- {playersSelect.player4.items[3]}</b>
                      </Col>
                      <Col>
                        <img
                          src="refresh.svg"
                          style={{ width: "15px", height: "15px" }}
                          onClick={() => {
                            const items = {
                              ...playersSelect,
                              player4: {
                                name: playersSelect.player4.name,
                                items: {
                                  ...playersSelect.player4.items,
                                  3: randomOneItem(),
                                },
                              },
                            };
                            setPlayersSelect(items);
                          }}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col xs="3">
                        <b>- {playersSelect.player4.items[4]}</b>
                      </Col>
                      <Col>
                        <img
                          src="refresh.svg"
                          style={{ width: "15px", height: "15px" }}
                          onClick={() => {
                            const items = {
                              ...playersSelect,
                              player4: {
                                name: playersSelect.player4.name,
                                items: {
                                  ...playersSelect.player4.items,
                                  4: randomOneItem(),
                                },
                              },
                            };
                            setPlayersSelect(items);
                          }}
                        />
                      </Col>
                    </Row>
                  </div>
                )}
              </Col>
            </Row>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
