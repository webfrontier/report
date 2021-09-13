import React from 'react';
import {connect} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Nav, Dropdown} from 'react-bootstrap';
import '../css/header.css'

const Header = (props) => {
  return (
    <header className="site-header text-white hidden-xs">
      <div className="header-menu center-block">
        <div className="header-menu-title">
          <a href="/">
            <h1 className="bg-danger text-white">
              Report
            </h1>
          </a>
        </div>
        <Nav variant="pills stacked" defaultActiveKey="/home">
          <Dropdown as={Nav.Item}>
            <Dropdown.Toggle as={Nav.Link} className="lead bg-danger text-white">
             <FontAwesomeIcon icon='align-justify' aria-hidden="true" size='lg'/>
             <span>日報</span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/daily/100">トップ</Dropdown.Item>
              <Dropdown.Item href="/daily/user/100">マイ日報</Dropdown.Item>
              <Dropdown.Item href="/daily/new/100">日報登録</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown as={Nav.Item}>
            <Dropdown.Toggle as={Nav.Link} className="lead bg-danger text-white">
             <FontAwesomeIcon icon='align-justify' aria-hidden="true" size='lg'/>
             <span>週報</span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/weekly/100">トップ</Dropdown.Item>
              <Dropdown.Item href="/weekly/user/100">マイ週報</Dropdown.Item>
              <Dropdown.Item href="/weekly/new/100">週報登録</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown as={Nav.Item}>
            <Dropdown.Toggle as={Nav.Link} className="lead bg-danger text-white">
             <FontAwesomeIcon icon='align-justify' aria-hidden="true" size='lg'/>
             <span>月報</span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/monthly/100">トップ</Dropdown.Item>
              <Dropdown.Item href="/monthly/user/100">マイ月報</Dropdown.Item>
              <Dropdown.Item href="/monthly/new/100">月報登録</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown as={Nav.Item}>
            <Dropdown.Toggle as={Nav.Link} className="lead bg-danger text-white">
             <FontAwesomeIcon icon='align-justify' aria-hidden="true" size='lg'/>
             <span>ノート</span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">トップ</Dropdown.Item>
              <Dropdown.Item href="#">新規登録</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
        <Nav variant="pills stacked" className="header-menu-bottom">
          <Dropdown as={Nav.Item} drop="up" id="dropdown-variants-up">
            <Dropdown.Toggle as={Nav.Link} className="lead bg-danger text-white">
             <FontAwesomeIcon icon='align-justify' aria-hidden="true" size='lg'/>
              <span>{props.user}</span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">管理画面へ</Dropdown.Item>
              <Dropdown.Item href="#">プロフィール</Dropdown.Item>
              {
               // TODO::data-confirmはRailsで用意されているものであるため、Modalなどで代用する。
              }
              <Dropdown.Item data-confirm="パスワードを変更しますか？一旦、ログアウトします。" href="#">パスワード変更</Dropdown.Item>
              <Dropdown.Item data-toggle="modal" data-target="new_inquiry" href="#">お問い合わせ</Dropdown.Item>
              <Dropdown.Item className="logout_link" data-method="delete" href="#">ログアウト</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </div>
    </header>
  );
};

export default connect(null)(Header);