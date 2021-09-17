import React from 'react'
import {connect} from 'react-redux'
import {LinkContainer} from 'react-router-bootstrap'
import {Button, Badge, Table} from 'react-bootstrap'
import '../../../css/table.css'

const mapStateToProps = (state) => {
  return ({
    user: state.dailyUserList.userName,
    week: state.dailyUserList.week,
    daylies: state.dailyUserList.daylies
  })
}

const DailyUserList = (mapStateToProps) => {
  return (
    <div id="daily-uesr-list">
      <h1>{mapStateToProps.user}</h1>
      <div className="page-body">
        <h2>{mapStateToProps.week}週の日報</h2>
        <LinkContainer to="#">
          <Button variant="link">&lt;&lt; {mapStateToProps.week - 1}週</Button>
        </LinkContainer>
        <LinkContainer to="#" className="float-right">
          <Button variant="link">{mapStateToProps.week + 1}週 &gt;&gt;</Button>
        </LinkContainer>
        <Table striped hover>
          <thead>
            <tr>
              <th>対象日</th>
              <th>ステータス</th>
              <th>リンク</th>
            </tr>
          </thead>
          <tbody>
            {
              mapStateToProps.daylies.map((day) =>
                <tr>
                  <td>{day.id}日</td>
                  <td><Badge variant={day.state.class}>{day.state.name}</Badge></td>
                  <td>
                    {
                      day.actions.map((action) =>
                        <LinkContainer to="#">
                          <Button variant="success">{action}</Button>
                        </LinkContainer>
                      )
                    }
                  </td>
                </tr>
              )
            }
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default connect(
  mapStateToProps
)(DailyUserList)