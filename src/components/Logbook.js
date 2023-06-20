import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import MDHexagramText from "./MDHexagramText";
import StateContext from "./StateContext";

const Back = ({ onClick }) => {
  const { theme } = useContext(StateContext);
  return (
    <div className={`log-back-button ${theme}`} onClick={onClick}>
      <svg viewBox="0 0 512 512">
        <path
          d="M477.9,221.9H116.5L263.1,75.3c13.3-13.3,13.3-34.9,0-48.3c-13.3-13.3-34.9-13.3-48.3,0L10,231.9C3.6,238.2,0,247,0,256
 s3.6,17.8,10,24.1l204.8,204.8c13.3,13.3,34.9,13.3,48.3,0c13.3-13.3,13.3-34.9,0-48.2L116.5,290.1h361.4
 c18.9,0,34.1-15.3,34.1-34.1C512,237.1,496.7,221.9,477.9,221.9z"
        />
      </svg>
    </div>
  );
};

const HexagramList = () => {
  const [showHexagram, setShowHexagram] = useState(0);
  const [serverResponse, setServerResponse] = useState("");
  const [ipAddress, setIPAddress] = useState("");

  const itemClickHandler = (hexagramNumber) => (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowHexagram(hexagramNumber);
  };

  useEffect(() => {
    let isMounted = true;

    axios
      .get("https://api.ipify.org/?format=json")
      .then((response) => {
        const data = response.data;
        if (isMounted) {
          setIPAddress(data.ip);
          console.log(data.ip);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (ipAddress) {
      let isMounted = true;

      axios
        .get(`https://rotskerr.s-host.net/api/ips/${ipAddress}`)
        .then((response) => {
          if (isMounted) {
            setServerResponse(response.data);
            console.log(response.data);
          }
        })
        .catch((error) => {
          console.log(error);
        });

      return () => {
        isMounted = false;
      };
    }
  }, [ipAddress]);

  return (
    <div className="hexagram-list">
      {showHexagram === 0 && (
        <ul>
          {new Array(64).fill().map((_, i) => (
            <li key={`hex-link-${i}`}>
              <div
                className="hexagram-list-button"
                onClick={itemClickHandler(i + 1)}
              >{`Hexagrama ${i + 1}`}</div>
            </li>
          ))}
          <p>Кількість унікальних користувачів: {serverResponse}</p>
        </ul>
      )}
      {showHexagram > 0 && (
        <>
          <Back onClick={() => setShowHexagram(0)} />
          <div className="hexagram-text">
            <MDHexagramText hexagramNumber={showHexagram} />
          </div>
        </>
      )}
    </div>
  );
};

const Logbook = ({ onClose }) => {
  const { theme } = useContext(StateContext);
  const [tab, setTab] = useState("hexagrams-tab");

  return (
    <>
      <div className="logbook">
        <div className={`logbook-window ${theme}`}>
          <div className="logbook-contents">
            {tab === "hexagrams-tab" && <HexagramList />}
          </div>
          <button
            type="button"
            className={`logbook-close-button ${theme}`}
            onClick={onClose}
          >
            &times;
          </button>
          <div className={`logbook-topbar ${theme} ${tab}`}>
            <ul>
              <li>
                <div
                  className={`${tab === "hexagrams-tab" ? "selected" : ""}`}
                  onClick={() => setTab("hexagrams-tab")}
                >
                  Hexagramas
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Logbook;
