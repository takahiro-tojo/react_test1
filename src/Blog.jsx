import React from 'react';
import Article from "./Article";


class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPublished: false,
      count:0
    }
  }

  //ボタンクリックカウント
  componentDidMount() {
    document.getElementById('counter').addEventListener('click', this.countUp)
  }

  componentDidUpdate() {
    if (this.state.count >= 10) {
      this.setState({count:0})
    }
  }

  componentWillUnmount() {
    document.getElementById('counter').removeEventListener('click', this.countUp)

  }

  //公開状態
  togglePublised = () => {
    this.setState(  {
      isPublished: !this.state.isPublished
    })
  };

  countUp = () => {
    this.setState(  {
      count: this.state.count + 1
    })
  }
  render() {
    const authName = "daijin";
    return (
      <>
        <Article 
          title={"React"} 
          isPublished={this.state.isPublished} 
          toggle={() => this.togglePublised()}
          count={this.state.count}
          />
          
      </>
    )
  }
}

export default Blog