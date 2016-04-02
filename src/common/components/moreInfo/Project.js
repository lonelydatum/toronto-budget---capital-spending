import React from 'react';

export class Project extends React.Component {
	render() {
		const {project} = this.props		
		return (
			<li className="project-item">				
				<span className="name">{project["Project Name"]}</span> 
				<span className="total">{project.total.money()}</span> 
			</li>
		);
	}
}


export default Project