// Component returning JSON-string as a tree

import React, { Component, useState, createRef } from "react";

/*
 *  default jsonRules for rendering basic types
 */
let jsonRules = [
  /* null */
  (name, value) =>
    value === null ? <JsonString name={name} value={"null"} /> : null,

  /* function */
  (name, value) =>
    typeof value === "function" ? <JsonFunc name={name} value={value} /> : null,

  /* iso date-time */
  (name, value) =>
    typeof value === "string" && !isNaN(Date.parse(value)) ? (
      <JsonDate name={name} value={value} />
    ) : null, //

  /* url */
  (name, value) =>
    typeof value === "string" &&
    (value.indexOf("http://") === 0 ||
      value.indexOf("https://") === 0 ||
      value.indexOf("www.") === 0) ? (
      <JsonLink name={name} value={value} />
    ) : null,

  /* string */
  (name, value) =>
    typeof value === "string" ? <JsonString name={name} value={value} /> : null,

  /* integer */
  (name, value) =>
    typeof value === "number" ? (
      <JsonInteger name={name} value={value} />
    ) : null,

  /* boolean */
  (name, value) =>
    typeof value === "boolean" ? (
      <JsonBoolean name={name} value={value} />
    ) : null,

  /* iterator */
  (name, value, depth) =>
    typeof value === "object" &&
    !Array.isArray(value) &&
    typeof value[Symbol.iterator] === "function" ? (
      <JsonArray
        value={Array.from(value)}
        name={name + "[iterable]"}
        depth={depth}
      />
    ) : null,

  /* array */
  (name, value, depth) =>
    typeof value === "object" && Array.isArray(value) ? (
      <JsonArray
        depth={depth}
        value={value}
        name={name + " [ " + value.length + " ] "}
      />
    ) : null,

  /* object */
  (name, value) =>
    typeof value === "object" ? (
      <JsonObject
        value={value}
        name={name + " { " + Object.keys(value).length + " } "}
      />
    ) : null,
];

/*
 *   json tree
 */
class Json extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    // merge jsonRules with custom data
    jsonRules = Array.prototype.concat(this.props.jsonRules || [], jsonRules);

    // see if the parameter is json string or js obj
    if (typeof this.props.data === "string") {
      try {
        let obj = JSON.parse(this.props.data);
        this._dataObject = obj;
      } catch (err) {
        throw "Error: cannot convert json string to object. " + err;
        this._dataObject = {};
      }
    } else if (typeof this.props.data === "object") {
      this._dataObject = this.props.data;
    } else {
      throw (
        "Error: Data is not in the expected format. provided data = " +
        JSON.stringify(this.props.data)
      );
    }
  }

  render() {
    return (
      <div className="Json">
        <KeyValue
          name={this.props.title || ""}
          value={this._dataObject}
          {...this.props}
        />
      </div>
    );
  }
}

Json.propTypes = {
  title: React.PropTypes?.string || "results",

  jsonRules: React.PropTypes?.arrayOf(React.PropTypes.func),

  data: React.PropTypes?.oneOfType([
    React.PropTypes?.object,
    React.PropTypes?.string,
  ]).isRequired,
};

Json.displayName = "JsonTree";

/*
 *   key-value pairs
 */
const KeyValue = (props) => {
  let ret;

  for (let i = 0; i < jsonRules.length; i++) {
    let processed = jsonRules[i](props.name, props.value, props.depth);
    if (processed) {
      ret = processed;
      break;
    }
  }

  return ret;
};

KeyValue.displayName = "KeyValue";

/*
 *  HideData panel component
 */
const HideData = (props) => {
  const [open, setOpen] = useState(true);

  const toggle = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  return (
    <div className="Json-Item">
      <div className="Json-Key">
        <a
          href="#"
          onClick={toggle}
          className={"HideData-Arrow" + (open ? " Open" : "")}
        >
          ▼
        </a>
        <a href="#" onClick={toggle}>
          {open
            ? props.title + ":"
            : props.title.includes("{")
            ? "{...}"
            : "[...]"}
        </a>
      </div>
      <div
        className={
          "HideData-Content Json-Value child-element" + (open ? "" : " Hidden")
        }
      >
        {props.children}
      </div>
    </div>
  );
};

class JsonString extends Component {
  state = { show: true, hide: false, text: null };

  //ref
  _input = createRef();

  //toggle between props.value and inputTag
  click = () => {
    this.setState({ show: false });
  };

  //form submission
  //only Json.Strings is enlisted using these algorithm
  submitHandler = (e) => {
    e.preventDefault();
    localStorage.setItem("text", JSON.stringify(this._input.current.value));
    this.setState(prevState => ({
      hide: !prevState.hide,
      text: JSON.parse(localStorage.getItem("text"))
    }))
  };

  inputTag = (
    <form onSubmit={this.submitHandler}>
      <input ref={this._input} type="text" />
    </form>
  );

  showText() {
    return this.state.show ? (
      <span style={{ cursor: "pointer" }} className="Json-String">
        {'"' + this.props.value + '"'},
      </span>
    ) : (
      this.inputTag
    );
  }

  render() {
    return (
      <div className="Json-Item">
        <div className="Json-Key">{this.props.name} : </div>
        <div onClick={this.click} className="Json-Value">
          {this.state.hide ? (
            <span style={{ color: "green" }}>"{this.state.text}"</span>
          ) : (
            this.showText()
          )}
        </div>
      </div>
    );
  }
}
JsonString.displayName = "JsonString";

class JsonLink extends JsonString {
  showText() {
    return (
      <span className="Json-String">
        "
        <a href={this.props.value} target="_blank">
          {this.props.value}
        </a>
        "
      </span>
    );
  }
}
JsonLink.displayName = "JsonLink";

class JsonInteger extends JsonString {
  showText() {
    return <span className="Json-Number">{this.props.value}</span>;
  }
}
JsonInteger.displayName = "JsonInteger";

class JsonBoolean extends JsonString {
  showText() {
    return (
      <span className="Json-Number">{JSON.stringify(this.props.value)}</span>
    );
  }
}
JsonString.displayName = "JsonBoolean";

class JsonDate extends JsonString {
  formatDate(dates) {
    const today = new Date(dates);
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();

    if (day < 10) return (day = "0" + day);
    if (month < 10) return (month = "0" + month);

    return day + "." + month + "." + year;
  }

  showText() {
    return (
      <span className="Json-Number">{this.formatDate(this.props.value)}</span>
    );
  }
}
JsonDate.displayName = "JsonDate";

class JsonArray extends JsonString {
  state = { depth: this.props.depth, color: "#000" };

  handleVisibility = () =>
    this.setState({
      depth: this.state.depth + (this.props.value.length - 1),
      color: "#00f",
    });
  render() {
    return (
      <HideData {...this.props} title={this.props.name}>
        {/* if array, value is rendered as an array */}
        <span className="array">{"["}</span>
        {this.props.value.slice(0, this.state.depth).map((item, index) => {
          return (
            <KeyValue name={index} value={item} key={item + "-" + index} />
          );
        })}
        {this.state.depth < this.props.value.length && (
          <span
            className="more-btn"
            onClick={this.handleVisibility}
            style={{ color: this.state.color }}
            title="Click to expand"
          >
            ...
          </span>
        )}
        <span className="array">{"]"}</span>
      </HideData>
    );
  }
}
JsonArray.displayName = "JsonArray";

class JsonObject extends JsonString {
  render() {
    return (
      <HideData {...this.props} title={this.props.name}>
        {/* if array, value is rendered as an object */}
        <span className="array">{"{"}</span>
        {Object.keys(this.props.value).map((item, index) => (
          <KeyValue
            name={item}
            value={this.props.value[item]}
            key={item + "_" + index}
          />
        ))}
        <span className="array">{"}"}</span>
      </HideData>
    );
  }
}
JsonObject.displayName = "JsonObject";

class JsonFunc extends JsonString {
  nameHandler() {
    let regExpress = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm;
    let regName = /([^\s,]+)/g;

    let endPoint = this.props.value.toString().replace(regExpress, "");
    let result = endPoint
      .slice(endPoint.indexOf("(") + 1, endPoint.indexOf(")"))
      .match(regName);
    if (result === null) result = [];
    return result;
  }

  render() {
    let code = this.props.value.toString().split("\n");

    return (
      <HideData
        {...this.props}
        title={this.props.value.name + "(" + this.nameHandler() + ")"}
      >
        <div className="Json-Item Json-Func">
          {code.map((each, index) => {
            return (
              <div className="Json-Func-Line" key={"each_" + index}>
                {each}
              </div>
            );
          })}
        </div>
      </HideData>
    );
  }
}
JsonFunc.displayName = "JsonFunc";

export default Json;
