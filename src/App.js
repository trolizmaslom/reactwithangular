import React, {PureComponent} from 'react';
import logo from './logo.svg';
import './App.css';

export class App extends PureComponent{
  state = {
    title:'Angular Custom Element',
    name:'default-name',
    caption: 1,
    avatar:'https://uinames.com/api/photos/female/15.jpg',
    image:'https://images.pexels.com/photos/169193/pexels-photo-169193.jpeg?w=940&h=650&auto=compress&cs=tinysrgb',
  }
  render(){

    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React + Angular Component Integration Demo</h1>
            <facebook-card
                ref={elem => this.faceCard = elem}
                title={this.state.title}
                caption={this.state.caption}
                avatar={this.state.avatar}
                image={this.state.image}></facebook-card>
          </header>
        </div>
    );
  }
  likeNotify = ()=> {
    console.log('like klicked');
    const result = this.state.caption + 1;
    this.setState({caption: result});
  };
  shareNotify = ()=> { console.log('share klicked')  };
  commentNotify = ()=> { console.log('comment klicked')  };
  componentDidMount() {
    this.faceCard.addEventListener("likeNotify", this.likeNotify);
    this.faceCard.addEventListener("shareNotify", this.shareNotify);
    this.faceCard.addEventListener("commentNotify", this.commentNotify);
  }

  componentWillUnmount() {
    this.faceCard.removeEventListener("likeNotify", this.likeNotify);
    this.faceCard.removeEventListener("shareNotify", this.shareNotify);
    this.faceCard.removeEventListener("commentNotify", this.commentNotify);
  }

}

export default App;
