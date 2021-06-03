import React from 'react';
import './profile.style.css';

import Bio from './bio';
import Skill from './skill';
import Links from './link';



class Profile extends React.Component {

me = {
    name:'Imran Hossain ',
    title:'Web developer and front end specialist',
    skillA: 'HTML5',
    skillB:'CSS3',
    skillC:'Bootstrap'
}



render(){
    return(
        <div className='Container'>
           <Bio name={this.me.name} title={this.me.title}/>
           <Skill skillA={this.me.skillA} skillB={this.me.skillB} skillC={this.me.skillC}/>
           <Links/>
        </div>
    );
}
};

export default Profile;