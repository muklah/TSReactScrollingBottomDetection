import * as React from 'react';
import * as ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    // state of button
    this.state = {
      isDisable: true
    }
  }

  componentDidMount() {
      // get section of terms by class id
    let content = document.getElementsByClassName('content')[0]

    // get height of that section
    let contentHeight = content.clientHeight;

    // listener to change the state of button when scrolling to bottom of section
    content.addEventListener('scroll', (e) => {
      if (e.target.scrollTop > contentHeight) {
        this.setState({ isDisable: false })
      }
    })
  }

  render() {
    let { isDisable } = this.state;
    return (
      <div className="box">
        <div className="content">
          <h4>Section One</h4>
          <br></br>
          <p>  Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Sed voluptate error animi laboriosam veniam
               assumenda dolorem, neque ea harum, quae, suscipit
                quibusdam architecto minus corrupti a culpa quos
                       eius alias!</p>
          <br></br>
          <br></br>
          <h4>Section One</h4>
          <br></br>
          <p>  Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Sed voluptate error animi laboriosam veniam
               assumenda dolorem, neque ea harum, quae, suscipit
                quibusdam architecto minus corrupti a culpa quos
                       eius alias!</p>
          <br></br>
          <h4>Section One</h4>
          <br></br>
          <p>  Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Sed voluptate error animi laboriosam veniam
               assumenda dolorem, neque ea harum, quae, suscipit
                quibusdam architecto minus corrupti a culpa quos
                       eius alias!</p>
          <br></br>
          <br></br>
          <h4>Section One</h4>
          <br></br>
          <p>  Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Sed voluptate error animi laboriosam veniam
               assumenda dolorem, neque ea harum, quae, suscipit
                quibusdam architecto minus corrupti a culpa quos
                       eius alias!</p>
          <br></br>
          <h4>Section One</h4>
          <br></br>
          <p>  Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Sed voluptate error animi laboriosam veniam
               assumenda dolorem, neque ea harum, quae, suscipit
                quibusdam architecto minus corrupti a culpa quos
                       eius alias!</p>
          <br></br>
          <br></br>
          <h4>Section One</h4>
          <br></br>
          <p>  Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Sed voluptate error animi laboriosam veniam
               assumenda dolorem, neque ea harum, quae, suscipit
                quibusdam architecto minus corrupti a culpa quos
                       eius alias!</p>
          <br></br>
          <h4>Section One</h4>
          <br></br>
          <p>  Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Sed voluptate error animi laboriosam veniam
               assumenda dolorem, neque ea harum, quae, suscipit
                quibusdam architecto minus corrupti a culpa quos
                       eius alias!</p>
          <br></br>
          <br></br>
          <h4>Section One</h4>
          <br></br>
          <p>  Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Sed voluptate error animi laboriosam veniam
               assumenda dolorem, neque ea harum, quae, suscipit
                quibusdam architecto minus corrupti a culpa quos
                       eius alias!</p>
          <br></br>
        </div>
        <div className="footer">
          <button className={isDisable ? "btn disabled" : "btn"} disabled={isDisable} onClick={() => {
            alert("ok run ")
          }}>contenu</button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App></App>, document.getElementById("root"))
