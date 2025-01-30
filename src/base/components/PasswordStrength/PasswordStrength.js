import React, { useState, useEffect } from "react";
import { BiErrorCircle, BiCheckCircle } from "react-icons/bi";
import "./PasswordStrength.scss";

let levels = 0;
let validLevel = 0;
function PasswordStrength(props) {
  const settings = {
    min_length: null,
    has_number: null,
    has_symbol: null,
    has_uppercase: null,
  };
  const [view, setView] = useState([]);
  const colors = [];
  const [messages, setMessages] = useState([]);

  const alias = {
    min_length: "حداقل طول مجاز",
    has_number: "شامل بودن عدد",
    has_symbol: "شامل بودن حروف خاص",
    has_uppercase: "شامل بودن حروف بزرگ",
  };

  useEffect(() => {
    checkPassword(props.password);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.password]);

  const checkPassword = password => {
    var tmp = {
      min_length: false,
      has_number: false,
      has_symbol: false,
      has_uppercase: false,
    };

    if (password)
      tmp = {
        min_length: password.toString().length >= settings.min_length,
        has_number: hasNumber(password),
        has_symbol: hasSymbol(password),
        has_uppercase:
          password.toString().length &&
          password.toString() !== password.toString().toLowerCase(),
      };

    syncView(tmp);
  };

  const syncView = validation => {
    validLevel = 0;
    levels = 0;
    var tmp = [];
    var messages = [];
    Object.keys(settings).forEach(key => {
      if (!!JSON.parse(settings[key])) {
        levels++;
        if (validation[key]) {
          validLevel++;
          messages.push(
            <div className="message">
              <BiCheckCircle
                size="20"
                color="#fff"
                style={{ fill: "#08b300" }}
              />
              <div className="text"> {alias[key] ? alias[key] : key} </div>
            </div>,
          );
        } else {
          messages.push(
            <div className="message">
              <BiErrorCircle
                size="20"
                color="#fff"
                style={{ fill: "#ff0000" }}
              />
              <div className="text"> {alias[key] ? alias[key] : key} </div>
            </div>,
          );
        }
      }
    });

    Object.keys(settings).forEach(key => {
      if (!!JSON.parse(settings[key] && validation[key])) {
        tmp.push(
          <div
            className="level"
            style={{ backgroundColor: colors[validLevel - 1] }}
          ></div>,
        );
      }
    });

    Object.keys(settings).forEach(key => {
      if (!!JSON.parse(settings[key] && !validation[key])) {
        tmp.push(<div className="level"></div>);
      }
    });

    props.validation(levels && levels === validLevel);
    setView(tmp);
    setMessages(messages);
  };

  const hasNumber = password => {
    var pattern = new RegExp(/\d/);
    return pattern.test(password);
  };

  const hasSymbol = password => {
    // eslint-disable-next-line no-useless-escape
    var pattern = new RegExp(/[!@#$%&^*()_+=|<>?{}\\\[\]~-]/g);
    return pattern.test(password);
  };

  if (props.visiblity)
    return (
      <div className="password_strength">
        <div className="levels">
          {view.map(level => {
            return level;
          })}
        </div>

        <div className="messages">
          {messages.map(message => {
            return message;
          })}
        </div>
      </div>
    );
  else return null;
}

export default PasswordStrength;
