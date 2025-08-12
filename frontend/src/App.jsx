import './App.css'
import Movie from './component/movie'

function App() {
  return (
<div>
  <Movie movie={{title: "the monkey king", url: "https://www.google.com/imgres?q=img%20for%20html&imgurl=https%3A%2F%2Fwww.copahost.com%2Fblog%2Fwp-content%2Fuploads%2F2019%2F07%2Fimgsize2.png&imgrefurl=https%3A%2F%2Fwww.copahost.com%2Fblog%2Fhtml-image%2F&docid=0h4xlDSQakK8WM&tbnid=g8ntKTZImTTAnM&vet=12ahUKEwifgLmfzISPAxXJ8jgGHX-HAfwQM3oECBwQAA..i&w=937&h=568&hcb=2&ved=2ahUKEwifgLmfzISPAxXJ8jgGHX-HAfwQM3oECBwQAA",
    release: "2014"
  }}/>
</div>
  )
}

export default App
