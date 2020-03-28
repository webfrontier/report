import React from 'react'
import {connect} from 'react-redux'
import {LinkContainer} from 'react-router-bootstrap'
import {Button, Badge, Table} from 'react-bootstrap'
import '../../../css/table.css'

const mapStateToProps = (state) => {
  return ({
    user: state.monthlyUserList.userName,
    year: state.monthlyUserList.year,
    monthlies: state.monthlyUserList.monthlies
  })
}

const MonthlyUserList = (mapStateToProps) => {
  return (
    <div id="monthly-uesr-list">
      <h1>{mapStateToProps.user}</h1>
      <div className="page-body">
        <h2>{mapStateToProps.year}年の月報</h2>
        <LinkContainer to="#">
          <Button variant="link">&lt;&lt; {mapStateToProps.year - 1}年</Button>
        </LinkContainer>
        <LinkContainer to="#" className="float-right">
          <Button variant="link">{mapStateToProps.year + 1}年 &gt;&gt;</Button>
        </LinkContainer>
        <Table striped hover>
          <thead>
            <tr>
              <th>対象月</th>
              <th>ステータス</th>
              <th>リンク</th>
            </tr>
          </thead>
          <tbody>
            {
              mapStateToProps.monthlies.map((month) =>
                <tr>
                  <td>{month.id}月</td>
                  <td><Badge variant={month.state.class}>{month.state.name}</Badge></td>
                  <td>
                    {
                      month.actions.map((action) =>
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
)(MonthlyUserList)