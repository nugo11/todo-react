export default function Container({ onclick, imgSrc, enter, list, change, value, countNum }) {
return (
    <div className="box">
      <div className="boxhead">
        <div className="logo">
          <h1>TODO</h1>
        </div>
        <div className="witchmode">
          <img src={imgSrc} alt="dark mode" onClick={onclick} />
        </div>
      </div>
      <div className="boxbody">
        <input type="text" autoFocus placeholder="Create new todo..." value={value} onKeyDown={enter} id="myinput" onChange={change} />
        <div className="result">
          <div className="list">
            {list}
          </div>
          <div className="boxfot">
            <div id="itemcount">
              <span>{countNum}</span> items left
            </div>
            <div className="buts">
              <button id="showall">All</button>
              <button id="showactives">Active</button>
              <button id="showcompleted">Completed</button>
            </div>
            <button id="clear">Clear Completed</button>
          </div>
        </div>
      </div>
    </div>
  );
}
