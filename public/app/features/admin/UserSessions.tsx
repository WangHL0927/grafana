import React, { PureComponent } from 'react';
import { UserSession } from 'app/types';

interface Props {
  sessions: UserSession[];

  onSessionRevoke: (id: number) => void;
  onAllSessionsRevoke: () => void;
}

export class UserSessions extends PureComponent<Props> {
  handleSessionRevoke = (id: number) => {
    return () => {
      this.props.onSessionRevoke(id);
    };
  };

  handleAllSessionsRevoke = () => {
    this.props.onAllSessionsRevoke();
  };

  render() {
    const { sessions } = this.props;

    return (
      <>
        <h3 className="page-heading">Sessions</h3>
        <div className="gf-form-group">
          <div className="gf-form">
            <table className="filter-table form-inline">
              <thead>
                <tr>
                  <th>最后一次活跃</th>
                  <th>已登录</th>
                  <th>IP地址</th>
                  <th colSpan={2}>浏览器 &amp; 操作系统</th>
                </tr>
              </thead>
              <tbody>
                {sessions &&
                  sessions.map((session, index) => (
                    <tr key={`${session.id}-${index}`}>
                      <td>{session.isActive ? 'Now' : session.seenAt}</td>
                      <td>{session.createdAt}</td>
                      <td>{session.clientIp}</td>
                      <td>{`${session.browser} on ${session.os} ${session.osVersion}`}</td>
                      <td>
                        <button className="btn btn-danger btn-small" onClick={this.handleSessionRevoke(session.id)}>
                          <i className="fa fa-power-off" />
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <div className="gf-form-button-row">
            {sessions.length > 0 && (
              <button className="btn btn-danger" onClick={this.handleAllSessionsRevoke}>
                从所有设备注销用户
              </button>
            )}
          </div>
        </div>
      </>
    );
  }
}
