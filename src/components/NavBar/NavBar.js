import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Styles from './NavBar.module.scss';
import ProfileIcon from '../ProfileIcon/ProfileIcon';
import Notification from '../Notification/Notification';
import Sidebar from '../Sidebar/Sidebar';
import { BurgerButton } from '../UI/Buttons/Buttons';
class Navbar extends Component {
	state = { openSidebar: true, openProfile: true, openNotification: true };

	toggleSidebar = () => {
		this.setState((prevState) => {
			return { openSidebar: !prevState.openSidebar };
		});
	};

	toggleProfile = () => {
		this.setState((prevState) => {
			return { openProfile: !prevState.openProfile };
		});
	};

	toggleNotification = () => {
		this.setState((prevState) => {
			return { openNotification: !prevState.openNotification };
		});
	};

	render() {
		return (
			<React.Fragment>
				<div className={`${Styles.containerNavbar} container-fluid`}>
					<div className={`${Styles.rowNavbar} row align-items-center justify-content-center`}>
						<div className={`${Styles.burger} col-1`}>
							<BurgerButton openSidebar={this.toggleSidebar} />
						</div>
						<div className={`${Styles.leftSide} col`}>
							<Link to="/" className={Styles.link}>
								Logo
							</Link>
							<Link to="/resume" className={Styles.link}>
								Resume
							</Link>
							<Link to="/jobs" className={Styles.link}>
								Jobs
							</Link>
						</div>
						{/* <i className="fas fa-bell fa-lg" /> */}
						<div className={`${Styles.spacer} col-1 col-sm-3 col-md-5 col-lg-6 col-xl-7`} />
						<div className={`${Styles.rightSide} col`}>
							<Notification
								showNotification={this.state.openNotification} //true
								openNotification={this.toggleNotification} //false
							/>
							<ProfileIcon showProfile={this.state.openProfile} openProfile={this.toggleProfile} />
							<Link to="/login" className={Styles.link}>
								Login
							</Link>
						</div>
					</div>

					<div className={`${Styles.containerSideBar} container`}>
						<div className={`${Styles.colSidebar} row justify-content-start align-items-start`}>
							<Sidebar showSidebar={this.state.openSidebar} openSidebar={this.toggleSidebar} />
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Navbar;
