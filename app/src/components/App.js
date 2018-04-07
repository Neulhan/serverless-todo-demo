import React from 'react'
import styled from 'styled-components'
import oc from 'open-color'
import axios from 'axios'
import MaterialUiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { List, ListItem } from 'material-ui/List'
import { TextField, RaisedButton } from 'material-ui'
import Top from './Top'

const App = styled.div``

const Input = styled.div`
  align-items: center;
  display: flex;
  padding: 0 1rem 1rem;
`
const StyledTextField = styled(TextField)`
  flex: 1;
`
const StyledRaisedButton = styled(RaisedButton)`
  height: 2.25rem;
  margin: 1rem 0 0 2rem;
`
const StyledListItem = styled(ListItem)`
  padding: 4rem;
`

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
    }
  }
  componentWillMount() {
    axios.get('https://dd8ij2r45a.execute-api.ap-northeast-2.amazonaws.com/dev/todo/')
      .then((result) => {
        console.log(result)
      })
  }
  render() {
    return (
      <MaterialUiThemeProvider>
        <App>
          <Top />
          <Input>
            <StyledTextField floatingLabelText="새 할 일을 입력하세요" />
            <StyledRaisedButton label="추가" primary={true} />
          </Input>
          <List>
            <StyledListItem primaryText="hello!"/>
            <StyledListItem primaryText="hello!"/>
            <StyledListItem primaryText="hello!"/>
          </List>
        </App>
      </MaterialUiThemeProvider>
    )
  }
}