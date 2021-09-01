import React, { useEffect, useCallback } from 'react'
import {connect} from 'react-redux'
import {LinkContainer} from 'react-router-bootstrap'
import {Button, Badge, Table} from 'react-bootstrap'
import '../../../css/table.css'
import {fetchMonthly} from '../../../redux/actions'

const mapStateToProps = (state) => {
  return {
    year: state.monthlyUserList.year,
    monthlies: state.monthlyUserList.monthlies
  }
}

const mapDispatchToProps = (dispatch) => {
  return { m: () => dispatch(fetchMonthly()) }
};

const MonthlyUserList = (props) => {
  const dispatch = props.m;
  const callback = useCallback(() => {
    dispatch();
  }, [dispatch]);

  useEffect(() => {
    callback();
  }, [callback]);
  const monthlies = props.monthlies;
  return (
    <div id="monthly-uesr-list">
      <div className="page-body">
        <h2>{props.year}年の月報</h2>
        <LinkContainer to="#">
          <Button variant="link">&lt;&lt; {props.year - 1}年</Button>
        </LinkContainer>
        <LinkContainer to="#" className="float-right">
          <Button variant="link">{props.year + 1}年 &gt;&gt;</Button>
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
              monthlies.map((month) =>
                <tr key={month.id}>
                  <td>{month.id}月</td>
                  <td><Badge variant={month.state.class}>{month.state.name}</Badge></td>
                  <td>
                    {
                      month.actions.map((action) =>
                        <LinkContainer to="#" key={action}>
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
  mapStateToProps,
  mapDispatchToProps,
)(MonthlyUserList)