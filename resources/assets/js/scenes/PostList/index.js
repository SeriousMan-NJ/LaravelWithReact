import React, { Component } from 'react'
import App from '../../components/App'
import { connect } from 'react-redux'
import { fetchPostList } from './actions'
import { Link } from 'react-router-dom'

// import { Grid, GridColumn as Column } from '@progress/kendo-react-grid'

function mapStateToProps(state) {
  const { postList } = state

  return {
    postList
  }
}

class PostList extends Component {
  componentDidMount() {
    const { dispatch, postList } = this.props
    dispatch(fetchPostList())
  }
  render() {
    const { postList } = this.props

    return (
      <App
        title={
          <div>
            <h1>게시글 목록!</h1>
          </div>
        }
        content={postList.length > 0 &&
          <div>
            {postList.map((p) => {
              return (
                <div key={p.id}>
                  <h3>{p.title}</h3>
                  <p>{p.content}</p>
                </div>
              )
            })}
          </div>
        }
      />
    )
  }
}

export default connect(mapStateToProps)(PostList)
