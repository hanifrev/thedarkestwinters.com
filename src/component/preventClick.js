onclick = (e) => {
  e.preventDefault()
  // eslint-disable-next-line no-console
  console.log('onclick...')
}

export default onclick

// https://stackoverflow.com/questions/44838477/in-react-how-can-i-cause-anchors-to-do-nothing-on-click
// USE THIS FUNCTION IF YOU WANT YOUR ANCHORS ON HREF DOING NOTHING, INSTEAD OF #, # WILL LEAD TO AN ERROR
